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

/***/ "./src/db/index.ts":
/*!*************************!*
  !*** ./src/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => /* binding */ connect\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _error_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error-types */ \"./src/error-types/index.ts\");\n/* harmony import */ var _models_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Portfolio */ \"./src/db/models/Portfolio.ts\");\n/* harmony import */ var _models_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Blog */ \"./src/db/models/Blog.ts\");\n\n\n\n\nvar connect = function connect() {\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_URI, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true,\n    useFindAndModify: false\n  }, function (err) {\n    if (err) {\n      throw new _error_types__WEBPACK_IMPORTED_MODULE_1__.DatabaseConnectionError();\n    } else {\n      console.log(\"Connected to DB!\");\n    }\n  });\n};\n\n//# sourceURL=webpack://server-for-portfolio/./src/db/index.ts?");

/***/ }),

/***/ "./src/db/models/Blog.ts":
/*!*******************************!*
  !*** ./src/db/models/Blog.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Blog\": () => /* binding */ Blog\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nvar blogSchema = new Schema({\n  // slug is used in the blogs for readability\n  slug: {\n    type: String,\n    unique: true,\n    sparse: true\n  },\n  title: {\n    type: String,\n    required: true,\n    maxlength: 96\n  },\n  subTitle: {\n    type: String,\n    required: true\n  },\n  content: {\n    type: String,\n    required: true\n  },\n  userId: {\n    type: String,\n    required: true\n  },\n  status: {\n    type: String,\n    \"default\": \"draft\",\n    \"enum\": [\"draft\", \"published\", \"deleted\"]\n  },\n  createdAt: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updatedAt: {\n    type: Date,\n    \"default\": Date.now\n  }\n});\nvar Blog = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Blog\", blogSchema);\n\n//# sourceURL=webpack://server-for-portfolio/./src/db/models/Blog.ts?");

/***/ }),

/***/ "./src/db/models/Portfolio.ts":
/*!************************************!*
  !*** ./src/db/models/Portfolio.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Portfolio\": () => /* binding */ Portfolio\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nvar portfolioSchema = new Schema({\n  title: {\n    type: String,\n    required: true,\n    maxlength: 128\n  },\n  company: {\n    type: String,\n    required: true,\n    maxlength: 64\n  },\n  companyWebsite: {\n    type: String,\n    required: true,\n    maxlength: 128\n  },\n  location: {\n    type: String,\n    required: true\n  },\n  jobTitle: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  startDate: {\n    type: Date,\n    required: true\n  },\n  endDate: {\n    type: Date\n  },\n  userId: {\n    type: String,\n    required: true\n  },\n  createdAt: {\n    type: Date,\n    \"default\": Date.now\n  }\n});\nvar Portfolio = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Portfolio\", portfolioSchema); // portfolio.create()   «Array|Object» Documents to insert, as a spread or array\n// products.map(async (p, index) => {\n//   await p.save((err, result) => {\n//     if (index === products.length - 1) {\n//       console.log(\"DONE!\");\n//       mongoose.disconnect();\n//     }\n//   });\n\n//# sourceURL=webpack://server-for-portfolio/./src/db/models/Portfolio.ts?");

/***/ }),

/***/ "./src/error-types/bad-request.ts":
/*!****************************************!*
  !*** ./src/error-types/bad-request.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BadRequestError\": () => /* binding */ BadRequestError\n/* harmony export */ });\n/* harmony import */ var _custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar BadRequestError = /*#__PURE__*/function (_CustomError) {\n  _inherits(BadRequestError, _CustomError);\n\n  var _super = _createSuper(BadRequestError);\n\n  function BadRequestError(message) {\n    var _this;\n\n    _classCallCheck(this, BadRequestError);\n\n    _this = _super.call(this, message);\n    _this.message = message;\n    _this.statusCode = 400;\n    Object.setPrototypeOf(_assertThisInitialized(_this), BadRequestError.prototype);\n    return _this;\n  }\n\n  _createClass(BadRequestError, [{\n    key: \"serializeErrors\",\n    value: function serializeErrors() {\n      return [{\n        message: this.message\n      }];\n    }\n  }]);\n\n  return BadRequestError;\n}(_custom_error__WEBPACK_IMPORTED_MODULE_0__.CustomError);\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/bad-request.ts?");

/***/ }),

/***/ "./src/error-types/custom-error.ts":
/*!*****************************************!*
  !*** ./src/error-types/custom-error.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CustomError\": () => /* binding */ CustomError\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar CustomError = /*#__PURE__*/function (_Error) {\n  _inherits(CustomError, _Error);\n\n  var _super = _createSuper(CustomError);\n\n  function CustomError(message) {\n    var _this;\n\n    _classCallCheck(this, CustomError);\n\n    // The super() function only takes message as an argument because that’s what Error takes natively.\n    _this = _super.call(this, message); // this is set to be able to use isntance of method\n\n    _this.statusCode = void 0;\n    Object.setPrototypeOf(_assertThisInitialized(_this), CustomError.prototype);\n    return _this;\n  } //   this is not a method. it is a method signature. abstract class should have at least one method\n\n\n  return CustomError;\n}( /*#__PURE__*/_wrapNativeSuper(Error));\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/custom-error.ts?");

/***/ }),

/***/ "./src/error-types/database-connection.ts":
/*!************************************************!*
  !*** ./src/error-types/database-connection.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DatabaseConnectionError\": () => /* binding */ DatabaseConnectionError\n/* harmony export */ });\n/* harmony import */ var _custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar DatabaseConnectionError = /*#__PURE__*/function (_CustomError) {\n  _inherits(DatabaseConnectionError, _CustomError);\n\n  var _super = _createSuper(DatabaseConnectionError);\n\n  function DatabaseConnectionError() {\n    var _this;\n\n    _classCallCheck(this, DatabaseConnectionError);\n\n    _this = _super.call(this, \"Error connecting to databaase\"); //\n\n    _this.statusCode = 500;\n    _this.reason = \"Error connecting to database\";\n    Object.setPrototypeOf(_assertThisInitialized(_this), DatabaseConnectionError.prototype);\n    return _this;\n  }\n\n  _createClass(DatabaseConnectionError, [{\n    key: \"serializeErrors\",\n    value: function serializeErrors() {\n      return [{\n        message: this.reason\n      }];\n    }\n  }]);\n\n  return DatabaseConnectionError;\n}(_custom_error__WEBPACK_IMPORTED_MODULE_0__.CustomError);\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/database-connection.ts?");

/***/ }),

/***/ "./src/error-types/index.ts":
/*!**********************************!*
  !*** ./src/error-types/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BadRequestError\": () => /* reexport safe */ _bad_request__WEBPACK_IMPORTED_MODULE_0__.BadRequestError,\n/* harmony export */   \"DatabaseConnectionError\": () => /* reexport safe */ _database_connection__WEBPACK_IMPORTED_MODULE_1__.DatabaseConnectionError,\n/* harmony export */   \"RequestValidationError\": () => /* reexport safe */ _request_validation__WEBPACK_IMPORTED_MODULE_2__.RequestValidationError,\n/* harmony export */   \"CustomError\": () => /* reexport safe */ _custom_error__WEBPACK_IMPORTED_MODULE_3__.CustomError\n/* harmony export */ });\n/* harmony import */ var _bad_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bad-request */ \"./src/error-types/bad-request.ts\");\n/* harmony import */ var _database_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database-connection */ \"./src/error-types/database-connection.ts\");\n/* harmony import */ var _request_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-validation */ \"./src/error-types/request-validation.ts\");\n/* harmony import */ var _custom_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\");\n\n\n\n //  Object.setPrototypeOf(this, CustomError.prototype);  this is used if you are compiling in target:Es5 because Error can be correctly subclassed using only ES2015 and above\n//SubClass.prototype = new SuperClass(); we lose our reference to the original constructor\n// Ninja.prototype = Person.prototype . Any changes to the Ninja prototype will then also change the Person prototype (because they’re the same object), and that’s bound to have undesirable side effects.\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/index.ts?");

/***/ }),

/***/ "./src/error-types/request-validation.ts":
/*!***********************************************!*
  !*** ./src/error-types/request-validation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RequestValidationError\": () => /* binding */ RequestValidationError\n/* harmony export */ });\n/* harmony import */ var _custom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-error */ \"./src/error-types/custom-error.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar RequestValidationError = /*#__PURE__*/function (_CustomError) {\n  _inherits(RequestValidationError, _CustomError);\n\n  var _super = _createSuper(RequestValidationError);\n\n  function RequestValidationError(message) {\n    var _this;\n\n    _classCallCheck(this, RequestValidationError);\n\n    _this = _super.call(this, \"Invalid request parameters\"); // Only because we are extending a built in class\n\n    _this.message = message;\n    _this.statusCode = 400;\n    Object.setPrototypeOf(_assertThisInitialized(_this), RequestValidationError.prototype);\n    return _this;\n  }\n\n  _createClass(RequestValidationError, [{\n    key: \"serializeErrors\",\n    value: function serializeErrors() {\n      return [{\n        message: this.message\n      }];\n    }\n  }]);\n\n  return RequestValidationError;\n}(_custom_error__WEBPACK_IMPORTED_MODULE_0__.CustomError);\n\n//# sourceURL=webpack://server-for-portfolio/./src/error-types/request-validation.ts?");

/***/ }),

/***/ "./src/helpers/winston-logger.ts":
/*!***************************************!*
  !*** ./src/helpers/winston-logger.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logger\": () => /* binding */ logger\n/* harmony export */ });\n/* harmony import */ var winston_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston-mongodb */ \"winston-mongodb\");\n/* harmony import */ var winston_mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston_mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar logger = winston__WEBPACK_IMPORTED_MODULE_1___default().createLogger({\n  level: \"info\",\n  format: winston__WEBPACK_IMPORTED_MODULE_1___default().format.json(),\n  defaultMeta: {\n    service: \"user-service\"\n  },\n  transports: [new (winston__WEBPACK_IMPORTED_MODULE_1___default().transports.File)({\n    filename: \"error.log\",\n    level: \"error\"\n  }), new (winston_mongodb__WEBPACK_IMPORTED_MODULE_0___default().MongoDB)({\n    db: process.env.DB_URI\n  }) // new winston.transports.\n  ]\n});\n\n//# sourceURL=webpack://server-for-portfolio/./src/helpers/winston-logger.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-async-errors */ \"express-async-errors\");\n/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_async_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares */ \"./src/middlewares/index.ts\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db */ \"./src/db/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nvar server = express__WEBPACK_IMPORTED_MODULE_1___default()();\nconsole.log(\"pro\", process.env.PORT);\n\nfunction runServer() {\n  return _runServer.apply(this, arguments);\n}\n\nfunction _runServer() {\n  _runServer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var PORT;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_db__WEBPACK_IMPORTED_MODULE_5__.connect)();\n\n          case 2:\n            server.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\n            server.use((cors__WEBPACK_IMPORTED_MODULE_3___default())); // server.use(\"/api/v1/portfolios\", require(\"./routes/portfolios\"));\n            // server.use(\"/api/v1/blogs\", require(\"./routes/blogs\"));\n\n            __webpack_require__.e(/*! import() */ \"src_controllers_blogs_ts\").then(__webpack_require__.bind(__webpack_require__, /*! ./controllers/blogs */ \"./src/controllers/blogs.ts\"));\n            __webpack_require__.e(/*! import() */ \"src_controllers_portfolios_ts\").then(__webpack_require__.bind(__webpack_require__, /*! ./controllers/portfolios */ \"./src/controllers/portfolios.ts\"));\n            server.get(\"\", function (req, res) {\n              res.sendFile(\"index.html\", {\n                root: __dirname\n              });\n            });\n            server.use(_middlewares__WEBPACK_IMPORTED_MODULE_4__.errorHandler);\n            PORT = process.env.PORT;\n            server.listen(PORT, function () {\n              console.log(\"Server ready on port:\", PORT);\n            });\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _runServer.apply(this, arguments);\n}\n\nrunServer();\n\n//# sourceURL=webpack://server-for-portfolio/./src/index.ts?");

/***/ }),

/***/ "./src/middlewares/asyncMiddleware.ts":
/*!********************************************!*
  !*** ./src/middlewares/asyncMiddleware.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"asyncMiddleware\": () => /* binding */ asyncMiddleware\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// using 'express-async-errors' for now. this gives me error in typescript.\nvar asyncMiddleware = function asyncMiddleware(handler) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return handler(req, res);\n\n            case 3:\n              _context.next = 8;\n              break;\n\n            case 5:\n              _context.prev = 5;\n              _context.t0 = _context[\"catch\"](0);\n              next(_context.t0);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 5]]);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/asyncMiddleware.ts?");

/***/ }),

/***/ "./src/middlewares/checkJwt.ts":
/*!*************************************!*
  !*** ./src/middlewares/checkJwt.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkJwt\": () => /* binding */ checkJwt\n/* harmony export */ });\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwks-rsa */ \"jwks-rsa\");\n/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwks_rsa__WEBPACK_IMPORTED_MODULE_1__);\n\n // Authentication middleware\n// This middleware will check access token in authorization headers of a request\n// It will verify access token against Auth0 JSON web key set\n\nvar checkJwt = express_jwt__WEBPACK_IMPORTED_MODULE_0___default()({\n  secret: jwks_rsa__WEBPACK_IMPORTED_MODULE_1___default().expressJwtSecret({\n    cache: true,\n    rateLimit: true,\n    jwksRequestsPerMinute: 10,\n    // this link is always provided by auth0 providers\n    jwksUri: process.env.JWKS_URI\n  }),\n  //   this is in the API/identifier in auth0.com\n  audience: process.env.AUTH0_AUDIENCE,\n  //   issuer should end with \"/\"\n  issuer: process.env.ISSUER,\n  algorithms: [\"RS256\"]\n});\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/checkJwt.ts?");

/***/ }),

/***/ "./src/middlewares/checkRole.ts":
/*!**************************************!*
  !*** ./src/middlewares/checkRole.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkRole\": () => /* binding */ checkRole\n/* harmony export */ });\nvar checkRole = function checkRole(role) {\n  return function (req, res, next) {\n    var user;\n\n    if (req.user) {\n      user = req.user;\n    } // user[config.AUTH0_NAMESPACE + \"/roles\"] is an array of roles\n\n\n    if (user && user[process.env.AUTH0_NAMESPACE + \"/roles\"].includes(role)) {\n      next();\n    } else {\n      return res.status(401).send(\"You are not authorized to access this resource!\");\n    }\n  };\n};\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/checkRole.ts?");

/***/ }),

/***/ "./src/middlewares/errorHandler.ts":
/*!*****************************************!*
  !*** ./src/middlewares/errorHandler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorHandler\": () => /* binding */ errorHandler\n/* harmony export */ });\n/* harmony import */ var _helpers_winston_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/winston-logger */ \"./src/helpers/winston-logger.ts\");\n\nvar errorHandler = function errorHandler(error, req, res, next) {\n  _helpers_winston_logger__WEBPACK_IMPORTED_MODULE_0__.logger.error(error);\n  res.json({\n    status: \"Error\",\n    statusCode: error.statusCode,\n    message: error.message\n  });\n};\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/errorHandler.ts?");

/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkJwt\": () => /* reexport safe */ _checkJwt__WEBPACK_IMPORTED_MODULE_0__.checkJwt,\n/* harmony export */   \"checkRole\": () => /* reexport safe */ _checkRole__WEBPACK_IMPORTED_MODULE_1__.checkRole,\n/* harmony export */   \"errorHandler\": () => /* reexport safe */ _errorHandler__WEBPACK_IMPORTED_MODULE_2__.errorHandler,\n/* harmony export */   \"asyncMiddleware\": () => /* reexport safe */ _asyncMiddleware__WEBPACK_IMPORTED_MODULE_3__.asyncMiddleware\n/* harmony export */ });\n/* harmony import */ var _checkJwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkJwt */ \"./src/middlewares/checkJwt.ts\");\n/* harmony import */ var _checkRole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkRole */ \"./src/middlewares/checkRole.ts\");\n/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorHandler */ \"./src/middlewares/errorHandler.ts\");\n/* harmony import */ var _asyncMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asyncMiddleware */ \"./src/middlewares/asyncMiddleware.ts\");\n\n\n\n\n\n//# sourceURL=webpack://server-for-portfolio/./src/middlewares/index.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 		
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("regenerator-runtime/runtime");
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;