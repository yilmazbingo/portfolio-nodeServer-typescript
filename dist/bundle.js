/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AppRouter.ts":
/*!**************************!*
  !*** ./src/AppRouter.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppRouter = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar AppRouter = /** @class */ (function () {\n    function AppRouter() {\n    }\n    AppRouter.getInstance = function () {\n        if (!AppRouter.instance) {\n            AppRouter.instance = express_1.default.Router();\n        }\n        return AppRouter.instance;\n    };\n    return AppRouter;\n}());\nexports.AppRouter = AppRouter;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/AppRouter.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.app = void 0;\n__webpack_require__(/*! express-async-errors */ \"express-async-errors\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nvar middlewares_1 = __webpack_require__(/*! ./middlewares */ \"./src/middlewares/index.ts\");\nPromise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./controllers/blogs */ \"./src/controllers/blogs.ts\")); });\nPromise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./controllers/portfolios */ \"./src/controllers/portfolios.ts\")); });\nvar AppRouter_1 = __webpack_require__(/*! ./AppRouter */ \"./src/AppRouter.ts\");\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar app = express_1.default();\nexports.app = app;\napp.use(body_parser_1.default.json());\n//app.use(Cors);\napp.use(function (req, res, next) {\n    next();\n}, cors_1.default({ maxAge: 84600 }));\napp.use(AppRouter_1.AppRouter.getInstance());\napp.use(express_1.default.static(\"public\"));\n//app.use(\"/api/v1/portfolios\", require(\"./routes/portfolios\"));\n//app.use(\"/api/v1/blogs\", require(\"./routes/blogs\"));\napp.get(\"/\", function (req, res) {\n    res.sendFile(\"index.html\");\n});\napp.get(\"/me\", function (req, res) {\n    res.send(\"yilm\");\n});\napp.use(middlewares_1.errorHandler);\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/app.ts?");

/***/ }),

/***/ "./src/controllers/blogs.ts":
/*!**********************************!*
  !*** ./src/controllers/blogs.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar slugify_1 = __importDefault(__webpack_require__(/*! slugify */ \"slugify\"));\nvar unique_slug_1 = __importDefault(__webpack_require__(/*! unique-slug */ \"unique-slug\"));\nvar middlewares_1 = __webpack_require__(/*! ../middlewares */ \"./src/middlewares/index.ts\");\nvar Blog_1 = __webpack_require__(/*! ../db/models/Blog */ \"./src/db/models/Blog.ts\");\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.ts\");\nvar decorators_1 = __webpack_require__(/*! ./decorators */ \"./src/controllers/decorators/index.ts\");\nvar _saveBlog = function (blog) { return __awaiter(void 0, void 0, void 0, function () {\n    var createdBlog, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, blog.save()];\n            case 1:\n                createdBlog = _a.sent();\n                return [2 /*return*/, createdBlog];\n            case 2:\n                e_1 = _a.sent();\n                // e.code===11000 comes from slug\n                if (e_1.code === 11000 && e_1.keyPattern && e_1.keyPattern.slug) {\n                    blog.slug += \"-\" + unique_slug_1.default();\n                    // recursion. if there is error, i create a new slug and call it again\n                    return [2 /*return*/, _saveBlog(blog)];\n                }\n                console.log(\"e in save blog\", e_1);\n                throw e_1;\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nvar BlogController = /** @class */ (function () {\n    function BlogController() {\n    }\n    BlogController.prototype.getBlogs = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var blogs, access_token, blogsWithUsers, authors, _i, blogs_1, blog, author, _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, Blog_1.Blog.find({ status: \"published\" }).sort({\n                            createdAt: -1,\n                        })];\n                    case 1:\n                        blogs = _b.sent();\n                        return [4 /*yield*/, helpers_1.getAccessToken()];\n                    case 2:\n                        access_token = (_b.sent()).access_token;\n                        blogsWithUsers = [];\n                        authors = {};\n                        _i = 0, blogs_1 = blogs;\n                        _b.label = 3;\n                    case 3:\n                        if (!(_i < blogs_1.length)) return [3 /*break*/, 7];\n                        blog = blogs_1[_i];\n                        _a = authors[blog.userId];\n                        if (_a) return [3 /*break*/, 5];\n                        return [4 /*yield*/, helpers_1.getAuth0User(access_token)(blog.userId)];\n                    case 4:\n                        _a = (_b.sent());\n                        _b.label = 5;\n                    case 5:\n                        author = _a;\n                        authors[author.user_id] = author;\n                        blogsWithUsers.push({ blog: blog, author: author });\n                        _b.label = 6;\n                    case 6:\n                        _i++;\n                        return [3 /*break*/, 3];\n                    case 7: return [2 /*return*/, res.json(blogsWithUsers)];\n                }\n            });\n        });\n    };\n    BlogController.prototype.getBlogsByUser = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var userId, blogs;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        userId = req.user.sub;\n                        return [4 /*yield*/, Blog_1.Blog.find({\n                                userId: userId,\n                                status: { $in: [\"draft\", \"published\"] },\n                            })];\n                    case 1:\n                        blogs = _a.sent();\n                        return [2 /*return*/, res.json(blogs)];\n                }\n            });\n        });\n    };\n    BlogController.prototype.getBlogById = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var blogs, blog;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (![\n                            \"react\",\n                            \"javascript\",\n                            \"nodejs\",\n                            \"blockchain\",\n                            \"angular\",\n                            \"python\",\n                        ].includes(req.params.id)) return [3 /*break*/, 2];\n                        return [4 /*yield*/, Blog_1.Blog.find({\n                                field: req.params.id,\n                                status: \"published\",\n                            })];\n                    case 1:\n                        blogs = _a.sent();\n                        if (blogs) {\n                            return [2 /*return*/, res.json(blogs)];\n                        }\n                        else {\n                            return [2 /*return*/, res.json({ error: \"no blog found\" })];\n                        }\n                        _a.label = 2;\n                    case 2: return [4 /*yield*/, Blog_1.Blog.findById(req.params.id)];\n                    case 3:\n                        blog = _a.sent();\n                        if (blog && blog.status === \"published\")\n                            return [2 /*return*/, res.json(blog)];\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    BlogController.prototype.getBlogBySlug = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var blog, access_token, author;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Blog_1.Blog.findOne({ slug: req.params.slug })];\n                    case 1:\n                        blog = _a.sent();\n                        return [4 /*yield*/, helpers_1.getAccessToken()];\n                    case 2:\n                        access_token = (_a.sent()).access_token;\n                        if (!blog) return [3 /*break*/, 4];\n                        return [4 /*yield*/, helpers_1.getAuth0User(access_token)(blog.userId)];\n                    case 3:\n                        author = _a.sent();\n                        _a.label = 4;\n                    case 4: return [2 /*return*/, res.json({ blog: blog, author: author })];\n                }\n            });\n        });\n    };\n    BlogController.prototype.createBlog = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var blogData, access_token, author, blog, createdBlog, e_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        blogData = req.body;\n                        // console.log(\"checking req.user in createBlog\", req.user);\n                        blogData.userId = req.user.sub;\n                        return [4 /*yield*/, helpers_1.getAccessToken()];\n                    case 1:\n                        access_token = (_a.sent()).access_token;\n                        return [4 /*yield*/, helpers_1.getAuth0User(access_token)(req.user.sub)];\n                    case 2:\n                        author = _a.sent();\n                        blogData.author = author.nickname;\n                        blog = new Blog_1.Blog(blogData);\n                        _a.label = 3;\n                    case 3:\n                        _a.trys.push([3, 5, , 6]);\n                        return [4 /*yield*/, blog.save()];\n                    case 4:\n                        createdBlog = _a.sent();\n                        return [2 /*return*/, res.json(createdBlog)];\n                    case 5:\n                        e_2 = _a.sent();\n                        return [2 /*return*/, res.status(422).send(e_2.message)];\n                    case 6: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    BlogController.prototype.updateBlog = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var body, id, blog, err_1, updatedBlog, err_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        console.log(\"this in patch\", this);\n                        body = req.body, id = req.params.id;\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, Blog_1.Blog.findById(id)];\n                    case 2:\n                        blog = (_a.sent());\n                        return [3 /*break*/, 4];\n                    case 3:\n                        err_1 = _a.sent();\n                        return [2 /*return*/, res.status(422).send(err_1.message)];\n                    case 4:\n                        if (body.status && body.status === \"published\" && !blog.slug) {\n                            blog.slug = slugify_1.default(blog.title, {\n                                replacement: \"-\",\n                                lower: true,\n                            });\n                        }\n                        //this not updating  or making a req to db. it just updating the values.\n                        blog.set(body);\n                        blog.updatedAt = new Date();\n                        _a.label = 5;\n                    case 5:\n                        _a.trys.push([5, 7, , 8]);\n                        return [4 /*yield*/, _saveBlog(blog)];\n                    case 6:\n                        updatedBlog = _a.sent();\n                        return [2 /*return*/, res.json(updatedBlog)];\n                    case 7:\n                        err_2 = _a.sent();\n                        console.log(\"err in server updating\", err_2.message);\n                        return [2 /*return*/, res.status(422).send(err_2.message)];\n                    case 8: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    __decorate([\n        decorators_1.get(\"/\"),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], BlogController.prototype, \"getBlogs\", null);\n    __decorate([\n        decorators_1.get(\"/me\"),\n        decorators_1.use(middlewares_1.checkRole(\"admin\")),\n        decorators_1.use(middlewares_1.checkJwt),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], BlogController.prototype, \"getBlogsByUser\", null);\n    __decorate([\n        decorators_1.get(\"/:id\"),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], BlogController.prototype, \"getBlogById\", null);\n    __decorate([\n        decorators_1.get(\"/s/:slug\"),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], BlogController.prototype, \"getBlogBySlug\", null);\n    __decorate([\n        decorators_1.post(\"/\"),\n        decorators_1.use(middlewares_1.checkRole(\"admin\")),\n        decorators_1.use(middlewares_1.checkJwt),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], BlogController.prototype, \"createBlog\", null);\n    __decorate([\n        decorators_1.patch(\"/:id\"),\n        decorators_1.use(middlewares_1.checkRole(\"admin\")),\n        decorators_1.use(middlewares_1.checkJwt),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], BlogController.prototype, \"updateBlog\", null);\n    BlogController = __decorate([\n        decorators_1.controller(\"/api/v1/blogs\")\n    ], BlogController);\n    return BlogController;\n}());\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/blogs.ts?");

/***/ }),

/***/ "./src/controllers/decorators/controller.ts":
/*!**************************************************!*
  !*** ./src/controllers/decorators/controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.controller = void 0;\nvar AppRouter_1 = __webpack_require__(/*! ./../../AppRouter */ \"./src/AppRouter.ts\");\n// it will iterate over all of the different properties of the class' prototype and it's going to see if those methods have any metada associated with them. if they do, it  is going to take that medata infromation and associate it with express router\n//  controller will take prefix \"/auth\"\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar MetadataKeys_1 = __webpack_require__(/*! ../enums/MetadataKeys */ \"./src/controllers/enums/MetadataKeys.ts\");\n// this decorator will be called last\nfunction controller(routePrefix) {\n    // target is the constructor function of the class butif we apply decorator to a method, its target would be the prototype\n    return function (target) {\n        var router = AppRouter_1.AppRouter.getInstance();\n        // for ..in goes all enumerable properties of\n        for (var key in target.prototype) {\n            var routeHandler = target.prototype[key]; //getLogin\n            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Path, target.prototype, key);\n            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Method, target.prototype, key);\n            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Middleware, target.prototype, key) ||\n                [];\n            //   const requiredBodyProps =\n            //     Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) ||\n            //     [];\n            //   const validator = bodyValidators(requiredBodyProps);\n            // not all keys in prototype has \"path\" property\n            if (path) {\n                router[method].apply(router, __spreadArrays([\"\" + routePrefix + path], middlewares, [\n                    //   validator,\n                    routeHandler]));\n            }\n        }\n    };\n}\nexports.controller = controller;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/decorators/controller.ts?");

/***/ }),

/***/ "./src/controllers/decorators/index.ts":
/*!*********************************************!*
  !*** ./src/controllers/decorators/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./controller */ \"./src/controllers/decorators/controller.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./routes */ \"./src/controllers/decorators/routes.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./use */ \"./src/controllers/decorators/use.ts\"), exports);\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/decorators/index.ts?");

/***/ }),

/***/ "./src/controllers/decorators/routes.ts":
/*!**********************************************!*
  !*** ./src/controllers/decorators/routes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.patch = exports.del = exports.put = exports.post = exports.get = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar Methods_1 = __webpack_require__(/*! ../enums/Methods */ \"./src/controllers/enums/Methods.ts\");\nvar MetadataKeys_1 = __webpack_require__(/*! ../enums/MetadataKeys */ \"./src/controllers/enums/MetadataKeys.ts\");\n// decorator factory, decorator that returs a function\nfunction routeBinder(method) {\n    return function (path) {\n        return function (target, key, desc) {\n            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Path, path, target, key);\n            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Method, method, target, key);\n        };\n    };\n}\nexports.get = routeBinder(Methods_1.Methods.Get);\nexports.post = routeBinder(Methods_1.Methods.Post);\nexports.put = routeBinder(Methods_1.Methods.Put);\nexports.del = routeBinder(Methods_1.Methods.Del);\nexports.patch = routeBinder(Methods_1.Methods.Patch);\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/decorators/routes.ts?");

/***/ }),

/***/ "./src/controllers/decorators/use.ts":
/*!*******************************************!*
  !*** ./src/controllers/decorators/use.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.use = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nvar MetadataKeys_1 = __webpack_require__(/*! ../enums/MetadataKeys */ \"./src/controllers/enums/MetadataKeys.ts\");\n// factory decorator returns a function. we use them anytime our decorator needs to take an argument\nfunction use(middleware) {\n    // target is the object prototype\n    return function (target, key, desc) {\n        // this decorator has to be called many times. so we are storing an array of middlewares\n        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.Middleware, target, key) || [];\n        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.Middleware, __spreadArrays(middlewares, [middleware]), target, key);\n    };\n}\nexports.use = use;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/decorators/use.ts?");

/***/ }),

/***/ "./src/controllers/enums/MetadataKeys.ts":
/*!***********************************************!*
  !*** ./src/controllers/enums/MetadataKeys.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MetadataKeys = void 0;\nvar MetadataKeys;\n(function (MetadataKeys) {\n    MetadataKeys[\"Method\"] = \"method\";\n    MetadataKeys[\"Path\"] = \"path\";\n    MetadataKeys[\"Middleware\"] = \"middleware\";\n})(MetadataKeys = exports.MetadataKeys || (exports.MetadataKeys = {}));\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/enums/MetadataKeys.ts?");

/***/ }),

/***/ "./src/controllers/enums/Methods.ts":
/*!******************************************!*
  !*** ./src/controllers/enums/Methods.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Methods = void 0;\nvar Methods;\n(function (Methods) {\n    Methods[\"Get\"] = \"get\";\n    Methods[\"Post\"] = \"post\";\n    Methods[\"Patch\"] = \"patch\";\n    Methods[\"Del\"] = \"delete\";\n    Methods[\"Put\"] = \"put\";\n})(Methods = exports.Methods || (exports.Methods = {}));\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/enums/Methods.ts?");

/***/ }),

/***/ "./src/controllers/portfolios.ts":
/*!***************************************!*
  !*** ./src/controllers/portfolios.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Portfolio_1 = __webpack_require__(/*! ../db/models/Portfolio */ \"./src/db/models/Portfolio.ts\");\nvar middlewares_1 = __webpack_require__(/*! ../middlewares */ \"./src/middlewares/index.ts\");\nvar decorators_1 = __webpack_require__(/*! ./decorators */ \"./src/controllers/decorators/index.ts\");\nvar PortfolioController = /** @class */ (function () {\n    function PortfolioController() {\n    }\n    PortfolioController.prototype.getPortfolios = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var portfolios;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Portfolio_1.Portfolio.find({})];\n                    case 1:\n                        portfolios = _a.sent();\n                        return [2 /*return*/, res.json(portfolios)];\n                }\n            });\n        });\n    };\n    PortfolioController.prototype.getPortfolioById = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var portfolio, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, Portfolio_1.Portfolio.findById(req.params.id)];\n                    case 1:\n                        portfolio = _a.sent();\n                        return [2 /*return*/, res.json(portfolio)];\n                    case 2:\n                        error_1 = _a.sent();\n                        return [2 /*return*/, res.status(422).send(error_1.message)];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    PortfolioController.prototype.createPortfolio = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var portfolioData, userId, portfolio, newPortfolio, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        portfolioData = req.body;\n                        console.log(\"portfoliodata\", portfolioData);\n                        userId = req.user.sub;\n                        portfolio = new Portfolio_1.Portfolio(portfolioData);\n                        portfolio.userId = userId;\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        console.log(\"i am presaved\");\n                        return [4 /*yield*/, portfolio.save()];\n                    case 2:\n                        newPortfolio = _a.sent();\n                        console.log(\"i am after saved\");\n                        return [2 /*return*/, res.json(newPortfolio)];\n                    case 3:\n                        error_2 = _a.sent();\n                        return [2 /*return*/, res.status(422).send(error_2.message)];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    PortfolioController.prototype.updatePortfolio = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var body, id, updatedPortfolio, error_3;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        body = req.body, id = req.params.id;\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, Portfolio_1.Portfolio.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true })];\n                    case 2:\n                        updatedPortfolio = _a.sent();\n                        return [2 /*return*/, res.json(updatedPortfolio)];\n                    case 3:\n                        error_3 = _a.sent();\n                        return [2 /*return*/, res.status(422).send(error_3.message)];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    PortfolioController.prototype.deletePortfolio = function (req, res) {\n        return __awaiter(this, void 0, void 0, function () {\n            var portfolio;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Portfolio_1.Portfolio.findOneAndRemove({ _id: req.params.id })];\n                    case 1:\n                        portfolio = _a.sent();\n                        if (portfolio) {\n                            return [2 /*return*/, res.json({ _id: portfolio.id })];\n                        }\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    __decorate([\n        decorators_1.get(\"/\"),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], PortfolioController.prototype, \"getPortfolios\", null);\n    __decorate([\n        decorators_1.get(\"/:id\"),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], PortfolioController.prototype, \"getPortfolioById\", null);\n    __decorate([\n        decorators_1.post(\"/\"),\n        decorators_1.use(middlewares_1.checkRole(\"admin\")),\n        decorators_1.use(middlewares_1.checkJwt),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], PortfolioController.prototype, \"createPortfolio\", null);\n    __decorate([\n        decorators_1.patch(\"/:id\"),\n        decorators_1.use(middlewares_1.checkRole(\"admin\")),\n        decorators_1.use(middlewares_1.checkJwt),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], PortfolioController.prototype, \"updatePortfolio\", null);\n    __decorate([\n        decorators_1.del(\"/:id\"),\n        decorators_1.use(middlewares_1.checkRole(\"admin\")),\n        decorators_1.use(middlewares_1.checkJwt),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], PortfolioController.prototype, \"deletePortfolio\", null);\n    PortfolioController = __decorate([\n        decorators_1.controller(\"/api/v1/portfolios\")\n    ], PortfolioController);\n    return PortfolioController;\n}());\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/controllers/portfolios.ts?");

/***/ }),

/***/ "./src/db/index.ts":
/*!*************************!*
  !*** ./src/db/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.connect = void 0;\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar error_types_1 = __webpack_require__(/*! ../error-types */ \"./src/error-types/index.ts\");\n__webpack_require__(/*! ./models/Portfolio */ \"./src/db/models/Portfolio.ts\");\n__webpack_require__(/*! ./models/Blog */ \"./src/db/models/Blog.ts\");\nvar DB_URI =  true\n    ? process.env.DB_URI\n    : 0;\nvar connect = function () {\n    return mongoose_1.default.connect(DB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        useCreateIndex: true,\n        useFindAndModify: false,\n    }, function (err) {\n        if (err) {\n            throw new error_types_1.DatabaseConnectionError();\n        }\n        else {\n            console.log(\"Connected to DB!\");\n        }\n    });\n};\nexports.connect = connect;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/db/index.ts?");

/***/ }),

/***/ "./src/db/models/Blog.ts":
/*!*******************************!*
  !*** ./src/db/models/Blog.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Blog = void 0;\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar Schema = mongoose_1.default.Schema;\nvar blogSchema = new Schema({\n    // slug is used in the blogs for readability\n    slug: { type: String, unique: true, sparse: true },\n    title: { type: String, required: true, maxlength: 96 },\n    field: { type: String, required: true },\n    content: { type: String, required: true },\n    userId: { type: String, required: true },\n    author: { type: String, required: true },\n    status: {\n        type: String,\n        default: \"draft\",\n        enum: [\"draft\", \"published\", \"deleted\"],\n    },\n    createdAt: { type: Date, default: Date.now },\n    updatedAt: { type: Date, default: Date.now },\n});\nexports.Blog = mongoose_1.default.model(\"Blog\", blogSchema);\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/db/models/Blog.ts?");

/***/ }),

/***/ "./src/db/models/Portfolio.ts":
/*!************************************!*
  !*** ./src/db/models/Portfolio.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Portfolio = void 0;\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar Schema = mongoose_1.default.Schema;\nvar portfolioSchema = new Schema({\n    title: { type: String, required: true, maxlength: 128 },\n    company: { type: String, required: true, maxlength: 64 },\n    companyWebsite: { type: String, required: true, maxlength: 128 },\n    location: { type: String, required: true },\n    jobTitle: { type: String, required: true },\n    description: { type: String, required: true },\n    startDate: { type: Date, required: true },\n    endDate: { type: Date },\n    userId: { type: String, required: true },\n    createdAt: { type: Date, default: Date.now },\n});\nexports.Portfolio = mongoose_1.default.model(\"Portfolio\", portfolioSchema);\n// portfolio.create()   «Array|Object» Documents to insert, as a spread or array\n// products.map(async (p, index) => {\n//   await p.save((err, result) => {\n//     if (index === products.length - 1) {\n//       console.log(\"DONE!\");\n//       mongoose.disconnect();\n//     }\n//   });\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/db/models/Portfolio.ts?");

/***/ }),

/***/ "./src/error-types/bad-request.ts":
/*!****************************************!*
  !*** ./src/error-types/bad-request.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BadRequestError = void 0;\nvar custom_error_1 = __webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\");\nvar BadRequestError = /** @class */ (function (_super) {\n    __extends(BadRequestError, _super);\n    function BadRequestError(message) {\n        var _this = _super.call(this, message) || this;\n        _this.message = message;\n        _this.statusCode = 400;\n        Object.setPrototypeOf(_this, BadRequestError.prototype);\n        return _this;\n    }\n    BadRequestError.prototype.serializeErrors = function () {\n        return [{ message: this.message }];\n    };\n    return BadRequestError;\n}(custom_error_1.CustomError));\nexports.BadRequestError = BadRequestError;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/bad-request.ts?");

/***/ }),

/***/ "./src/error-types/custom-error.ts":
/*!*****************************************!*
  !*** ./src/error-types/custom-error.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CustomError = void 0;\nvar CustomError = /** @class */ (function (_super) {\n    __extends(CustomError, _super);\n    function CustomError(message) {\n        var _this = \n        // The super() function only takes message as an argument because that’s what Error takes natively.\n        _super.call(this, message) || this;\n        // this is set to be able to use isntance of method\n        Object.setPrototypeOf(_this, CustomError.prototype);\n        return _this;\n    }\n    return CustomError;\n}(Error));\nexports.CustomError = CustomError;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/custom-error.ts?");

/***/ }),

/***/ "./src/error-types/database-connection.ts":
/*!************************************************!*
  !*** ./src/error-types/database-connection.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DatabaseConnectionError = void 0;\nvar custom_error_1 = __webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\");\nvar DatabaseConnectionError = /** @class */ (function (_super) {\n    __extends(DatabaseConnectionError, _super);\n    function DatabaseConnectionError() {\n        var _this = _super.call(this, \"Error connecting to databaase\") || this;\n        _this.statusCode = 500;\n        _this.reason = \"Error connecting to database\";\n        //\n        Object.setPrototypeOf(_this, DatabaseConnectionError.prototype);\n        return _this;\n    }\n    DatabaseConnectionError.prototype.serializeErrors = function () {\n        return [{ message: this.reason }];\n    };\n    return DatabaseConnectionError;\n}(custom_error_1.CustomError));\nexports.DatabaseConnectionError = DatabaseConnectionError;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/database-connection.ts?");

/***/ }),

/***/ "./src/error-types/index.ts":
/*!**********************************!*
  !*** ./src/error-types/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./bad-request */ \"./src/error-types/bad-request.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./database-connection */ \"./src/error-types/database-connection.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./request-validation */ \"./src/error-types/request-validation.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\"), exports);\n//  Object.setPrototypeOf(this, CustomError.prototype);  this is used if you are compiling in target:Es5 because Error can be correctly subclassed using only ES2015 and above\n//SubClass.prototype = new SuperClass(); we lose our reference to the original constructor\n// Ninja.prototype = Person.prototype . Any changes to the Ninja prototype will then also change the Person prototype (because they’re the same object), and that’s bound to have undesirable side effects.\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/index.ts?");

/***/ }),

/***/ "./src/error-types/request-validation.ts":
/*!***********************************************!*
  !*** ./src/error-types/request-validation.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RequestValidationError = void 0;\nvar custom_error_1 = __webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\");\nvar RequestValidationError = /** @class */ (function (_super) {\n    __extends(RequestValidationError, _super);\n    function RequestValidationError(message) {\n        var _this = _super.call(this, \"Invalid request parameters\") || this;\n        _this.message = message;\n        _this.statusCode = 400;\n        // Only because we are extending a built in class\n        Object.setPrototypeOf(_this, RequestValidationError.prototype);\n        return _this;\n    }\n    RequestValidationError.prototype.serializeErrors = function () {\n        return [{ message: this.message }];\n    };\n    return RequestValidationError;\n}(custom_error_1.CustomError));\nexports.RequestValidationError = RequestValidationError;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/request-validation.ts?");

/***/ }),

/***/ "./src/helpers/getAccessToken.ts":
/*!***************************************!*
  !*** ./src/helpers/getAccessToken.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getAccessToken = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\n// make a request to get token, in Api tab of AUTHO , machine-to-machine applications, enable the authorized\nvar getAccessToken = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var options, res;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                options = {\n                    method: \"POST\",\n                    url: process.env.AUTH0_TOKEN_URL,\n                    headers: { \"Content-type\": \"application/json\" },\n                    // this form is specified by auth0\n                    data: {\n                        grant_type: \"client_credentials\",\n                        client_id: process.env.AUTH0_CLIENT_ID,\n                        client_secret: process.env.AUTH0_CLIENT_SECRET,\n                        audience: process.env.AUTH0_AUDIENCE,\n                    },\n                };\n                return [4 /*yield*/, axios_1.default(options)];\n            case 1:\n                res = _a.sent();\n                console.log(\"res.data for interface\", res.data);\n                return [2 /*return*/, res.data];\n        }\n    });\n}); };\nexports.getAccessToken = getAccessToken;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/helpers/getAccessToken.ts?");

/***/ }),

/***/ "./src/helpers/getAuthUser.ts":
/*!************************************!*
  !*** ./src/helpers/getAuthUser.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getAuth0User = void 0;\nvar request_1 = __importDefault(__webpack_require__(/*! request */ \"request\"));\nvar getAuth0User = function (accessToken) { return function (userId) {\n    var options = {\n        method: \"GET\",\n        url: process.env.ISSUER + \"api/v2/users/\" + userId + \"?fields=name,picture,user_id,nickname\",\n        headers: { Authorization: \"Bearer \" + accessToken },\n    };\n    return new Promise(function (resolve, reject) {\n        request_1.default(options, function (error, res, body) {\n            if (error) {\n                return reject(new Error(error.message));\n            }\n            resolve(body ? JSON.parse(body) : \"\");\n        });\n    });\n}; };\nexports.getAuth0User = getAuth0User;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/helpers/getAuthUser.ts?");

/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*
  !*** ./src/helpers/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./getAccessToken */ \"./src/helpers/getAccessToken.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./getAuthUser */ \"./src/helpers/getAuthUser.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./winston-logger */ \"./src/helpers/winston-logger.ts\"), exports);\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/helpers/index.ts?");

/***/ }),

/***/ "./src/helpers/winston-logger.ts":
/*!***************************************!*
  !*** ./src/helpers/winston-logger.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.logger = void 0;\nvar winston_mongodb_1 = __importDefault(__webpack_require__(/*! winston-mongodb */ \"winston-mongodb\"));\nvar winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\nexports.logger = winston_1.default.createLogger({\n    level: \"info\",\n    format: winston_1.default.format.json(),\n    defaultMeta: { service: \"user-service\" },\n    transports: [\n        new winston_1.default.transports.File({ filename: \"error.log\", level: \"error\" }),\n        new winston_mongodb_1.default.MongoDB({ db: process.env.DB_URI }),\n    ],\n});\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/helpers/winston-logger.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar db_1 = __webpack_require__(/*! ./db */ \"./src/db/index.ts\");\nvar app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\nvar start = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var PORT;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (!process.env.DB_URI) {\n                    throw new Error(\"Database url must be passed\");\n                }\n                return [4 /*yield*/, db_1.connect()];\n            case 1:\n                _a.sent();\n                PORT = process.env.PORT;\n                app_1.app.listen(PORT, function () {\n                    console.log(\"Server ready on port:\", PORT);\n                });\n                return [2 /*return*/];\n        }\n    });\n}); };\nstart();\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/index.ts?");

/***/ }),

/***/ "./src/middlewares/asyncMiddleware.ts":
/*!********************************************!*
  !*** ./src/middlewares/asyncMiddleware.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.asyncMiddleware = void 0;\n// using 'express-async-errors' for now. this gives me error in typescript.\nvar asyncMiddleware = function (handler) {\n    return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n        var error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, handler(req, res)];\n                case 1:\n                    _a.sent();\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_1 = _a.sent();\n                    next(error_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n};\nexports.asyncMiddleware = asyncMiddleware;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/asyncMiddleware.ts?");

/***/ }),

/***/ "./src/middlewares/checkJwt.ts":
/*!*************************************!*
  !*** ./src/middlewares/checkJwt.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkJwt = void 0;\nvar express_jwt_1 = __importDefault(__webpack_require__(/*! express-jwt */ \"express-jwt\"));\nvar jwks_rsa_1 = __importDefault(__webpack_require__(/*! jwks-rsa */ \"jwks-rsa\"));\n// Authentication middleware\n// This middleware will check access token in authorization headers of a request\n// It will verify access token against Auth0 JSON web key set\nexports.checkJwt = express_jwt_1.default({\n    secret: jwks_rsa_1.default.expressJwtSecret({\n        cache: true,\n        rateLimit: true,\n        jwksRequestsPerMinute: 10,\n        // this link is always provided by auth0 providers\n        jwksUri: process.env.JWKS_URI,\n    }),\n    //   this is in the API/identifier in auth0.com\n    audience: process.env.AUTH0_AUDIENCE,\n    //   issuer should end with \"/\"\n    issuer: process.env.ISSUER,\n    algorithms: [\"RS256\"],\n});\n// next();\nconsole.log(\"Cehckjwt\", exports.checkJwt);\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/checkJwt.ts?");

/***/ }),

/***/ "./src/middlewares/checkRole.ts":
/*!**************************************!*
  !*** ./src/middlewares/checkRole.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.checkRole = void 0;\nvar checkRole = function (role) { return function (req, res, next) {\n    // let user: { [key: string]: string } = {};\n    var user = {};\n    user = req.user;\n    console.log(\"user\", user);\n    // console.log(\"process.env.AUTH0_NAMESPACE\", process.env.AUTH0_NAMESPACE);\n    // console.log(\"user.process\", user[process.env.AUTH0_NAMESPACE!]);\n    var userRoles = Object.keys(user)[0];\n    // console.log(\"userRoles\", user[userRoles]);\n    // if (user && user[process.env.AUTH0_NAMESPACE + \"/roles\"].includes(role)) {\n    if (user && user[userRoles].includes(role)) {\n        next();\n    }\n    else {\n        return res\n            .status(401)\n            .send(\"You are not authorized to access this resource!\");\n    }\n}; };\nexports.checkRole = checkRole;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/checkRole.ts?");

/***/ }),

/***/ "./src/middlewares/cors.ts":
/*!*********************************!*
  !*** ./src/middlewares/cors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Cors = void 0;\nvar Cors = function (req, res, next) {\n    res.setHeader(\"Access-Control-Allow-Origin\", \"*\");\n    res.setHeader(\"Access-Control-Allow-Methods\", \"OPTIONS, GET, POST, PUT, PATCH, DELETE\");\n    res.setHeader(\"Access-Control-Allow-Headers\", \"Content-Type, Authorization\");\n    if (req.method === \"OPTIONS\") {\n        return res.sendStatus(200);\n    }\n    next();\n};\nexports.Cors = Cors;\n//  keep this instead of cors package\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/cors.ts?");

/***/ }),

/***/ "./src/middlewares/errorHandler.ts":
/*!*****************************************!*
  !*** ./src/middlewares/errorHandler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.errorHandler = void 0;\nvar winston_logger_1 = __webpack_require__(/*! ../helpers/winston-logger */ \"./src/helpers/winston-logger.ts\");\nvar errorHandler = function (error, req, res, next) {\n    winston_logger_1.logger.error(error);\n    res.json({\n        status: \"Error\",\n        statusCode: error.statusCode,\n        message: error.message,\n    });\n};\nexports.errorHandler = errorHandler;\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/errorHandler.ts?");

/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./checkJwt */ \"./src/middlewares/checkJwt.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./checkRole */ \"./src/middlewares/checkRole.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./errorHandler */ \"./src/middlewares/errorHandler.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./asyncMiddleware */ \"./src/middlewares/asyncMiddleware.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./cors */ \"./src/middlewares/cors.ts\"), exports);\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/index.ts?");

/***/ }),

/***/ "axios":
/*!************************!*
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"axios\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"body-parser\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22express%22?");

/***/ }),

/***/ "express-async-errors":
/*!***************************************!*
  !*** external "express-async-errors" ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = require(\"express-async-errors\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22express-async-errors%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"express-jwt\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22express-jwt%22?");

/***/ }),

/***/ "jwks-rsa":
/*!***************************!*
  !*** external "jwks-rsa" ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = require(\"jwks-rsa\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22jwks-rsa%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = require(\"mongoose\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22mongoose%22?");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = require(\"reflect-metadata\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22reflect-metadata%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = require(\"regenerator-runtime/runtime\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "request":
/*!**************************!*
  !*** external "request" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"request\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22request%22?");

/***/ }),

/***/ "slugify":
/*!**************************!*
  !*** external "slugify" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"slugify\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22slugify%22?");

/***/ }),

/***/ "unique-slug":
/*!******************************!*
  !*** external "unique-slug" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"unique-slug\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22unique-slug%22?");

/***/ }),

/***/ "winston":
/*!**************************!*
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"winston\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22winston%22?");

/***/ }),

/***/ "winston-mongodb":
/*!**********************************!*
  !*** external "winston-mongodb" ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = require(\"winston-mongodb\");;\n\n//# sourceURL=webpack://server-for-portfolio/external_%22winston-mongodb%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("regenerator-runtime/runtime");
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;