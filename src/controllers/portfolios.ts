import { Request, Response } from "express";
import { Portfolio } from "../db/models/Portfolio";
import { checkJwt, checkRole } from "../middlewares";
import { get, controller, use, post, patch, del } from "./decorators";

declare global {
  namespace Express {
    interface Request {
      user: { sub: string }; // chekc this later
    }
  }
}
@controller("/api/v1/portfolios")
class PortfolioController {
  @get("/")
  async getPortfolios(req: Request, res: Response) {
    const portfolios = await Portfolio.find({});
    return res.json(portfolios);
  }

  @get("/:id")
  async getPortfolioById(req: Request, res: Response) {
    try {
      const portfolio = await Portfolio.findById(req.params.id);
      return res.json(portfolio);
    } catch (error) {
      return res.status(422).send(error.message);
    }
  }

  @post("/")
  @use(checkRole("admin"))
  @use(checkJwt)
  async createPortfolio(req: Request, res: Response) {
    const portfolioData = req.body;
    console.log("portfoliodata", portfolioData);
    const userId = req.user.sub;
    const portfolio = new Portfolio(portfolioData);
    portfolio.userId = userId;

    try {
      console.log("i am presaved");
      const newPortfolio = await portfolio.save();
      console.log("i am after saved");
      return res.json(newPortfolio);
    } catch (error) {
      return res.status(422).send(error.message);
    }
  }
  @patch("/:id")
  @use(checkRole("admin"))
  @use(checkJwt)
  async updatePortfolio(req: Request, res: Response) {
    const {
      body,
      params: { id },
    } = req;
    try {
      const updatedPortfolio = await Portfolio.findOneAndUpdate(
        { _id: id },
        body,
        { new: true, runValidators: true }
      );
      return res.json(updatedPortfolio);
    } catch (error) {
      return res.status(422).send(error.message);
    }
  }
  @del("/:id")
  @use(checkRole("admin"))
  @use(checkJwt)
  async deletePortfolio(req: Request, res: Response) {
    const portfolio = await Portfolio.findOneAndRemove({ _id: req.params.id });
    if (portfolio) {
      return res.json({ _id: portfolio.id });
    }
  }
}
