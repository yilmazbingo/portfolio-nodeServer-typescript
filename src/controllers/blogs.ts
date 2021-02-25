import { Request, Response } from "express";
import slugify from "slugify";
import Debug, { Debugger } from "debug";
import uniqueSlug from "unique-slug";
import { checkJwt, checkRole } from "../middlewares";
import { Blog, BlogDoc } from "../db/models/Blog";
import { getAccessToken, getAuth0User } from "../helpers";
import { get, controller, use, post, patch } from "./decorators";

const logger = Debug("dev");

interface Authors {
  [key: string]: Author;
}
interface Author {
  user_id: string;
}
const _saveBlog = async (blog: BlogDoc): Promise<BlogDoc> => {
  try {
    const createdBlog = await blog.save();
    return createdBlog;
  } catch (e) {
    // e.code===11000 comes from slug

    if (e.code === 11000 && e.keyPattern && e.keyPattern.slug) {
      blog.slug += `-${uniqueSlug()}`;
      // recursion. if there is error, i create a new slug and call it again
      return _saveBlog(blog);
    }

    throw e;
  }
};

@controller("/api/v1/blogs")
class BlogController {
  @get("/")
  async getBlogs(req: Request, res: Response) {
    const blogs = await Blog.find({ status: "published" }).sort({
      createdAt: -1,
    });
    const { access_token } = await getAccessToken();
    logger("accessToken", access_token);
    const blogsWithUsers = [];
    const authors: Authors = {};
    // using promise in map gave me issue
    for (let blog of blogs) {
      const author: Author =
        authors[blog.userId] || (await getAuth0User(access_token)(blog.userId));
      authors[author.user_id] = author;
      blogsWithUsers.push({ blog, author });
    }

    return res.json(blogsWithUsers);
  }
  @get("/me")
  @use(checkRole("admin"))
  @use(checkJwt)
  async getBlogsByUser(req: Request, res: Response) {
    const userId = req.user.sub;
    const blogs = await Blog.find({
      userId,
      status: { $in: ["draft", "published"] },
    });
    return res.json(blogs);
  }
  @get("/:id")
  async getBlogById(req: Request, res: Response) {
    if (
      [
        "react",
        "javascript",
        "nodejs",
        "blockchain",
        "angular",
        "python",
      ].includes(req.params.id)
    ) {
      const blogs = await Blog.find({
        field: req.params.id,
        status: "published",
      });
      if (blogs) {
        return res.json(blogs);
      } else {
        return res.json({ error: "no blog found" });
      }
    }
    const blog = await Blog.findById(req.params.id);
    if (blog && blog.status === "published") return res.json(blog);
  }
  @get("/s/:slug")
  async getBlogBySlug(req: Request, res: Response) {
    const blog = await Blog.findOne({ slug: req.params.slug });
    const { access_token } = await getAccessToken();
    let author;
    if (blog) {
      author = await getAuth0User(access_token)(blog.userId);
    }
    return res.json({ blog, author });
  }

  @post("/")
  @use(checkRole("admin"))
  @use(checkJwt)
  async createBlog(req: Request, res: Response) {
    let blogData = req.body;
    logger("blogData", blogData);
    blogData.userId = req.user.sub;
    const { access_token } = await getAccessToken();

    const author = await getAuth0User(access_token)(req.user.sub);
    blogData.author = author.nickname;

    const blog = new Blog(blogData);

    try {
      const createdBlog = await blog.save();
      return res.json(createdBlog);
    } catch (e) {
      return res.status(422).send(e.message);
    }
  }

  @patch("/:id")
  @use(checkRole("admin"))
  @use(checkJwt)
  async updateBlog(req: Request, res: Response) {
    const {
      body,
      params: { id },
    } = req;
    let blog: BlogDoc;
    try {
      blog = (await Blog.findById(id)) as BlogDoc;
    } catch (err) {
      return res.status(422).send(err.message);
    }

    if (body.status && body.status === "published" && !blog.slug) {
      blog.slug = slugify(blog.title, {
        replacement: "-",
        lower: true,
      });
    }
    //this not updating  or making a req to db. it just updating the values.
    blog.set(body);
    blog.updatedAt = new Date();

    try {
      const updatedBlog = await _saveBlog(blog);
      return res.json(updatedBlog);
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }
}
