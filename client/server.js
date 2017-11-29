module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-console:0 */
__webpack_require__(1);

var express = __webpack_require__(2);
var React = __webpack_require__(3);
var ReactDOMServer = __webpack_require__(4);
var ReactRouter = __webpack_require__(5);
var _ = __webpack_require__(6);
var fs = __webpack_require__(7);
var compression = __webpack_require__(8);
var App = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../client/components/App\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var StaticRouter = ReactRouter.StaticRouter;
var port = 8080;
var baseTemplate = fs.readFileSync('./index.html');
var template = _.template(baseTemplate);

var server = express();

server.use(compression());
server.use('/public', express.static('./public'));

server.use(function (req, res) {
  console.log(req.url);
  var context = {};
  var body = ReactDOMServer.renderToString(React.createElement(StaticRouter, { location: req.url, context: context }, React.createElement(App)));

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body: body }));
  res.end();
});

console.log('listening on ' + port);
server.listen(port);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(StaticRouter, 'StaticRouter', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/server/index.js');

  __REACT_HOT_LOADER__.register(port, 'port', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/server/index.js');

  __REACT_HOT_LOADER__.register(baseTemplate, 'baseTemplate', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/server/index.js');

  __REACT_HOT_LOADER__.register(template, 'template', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/server/index.js');

  __REACT_HOT_LOADER__.register(server, 'server', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/server/index.js');
}();

;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map