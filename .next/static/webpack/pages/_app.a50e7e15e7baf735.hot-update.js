"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333',\n    headers: {\n        Authorization: \"Bearer \".concat(cookies['nextauth.token'])\n    }\n});\napi.interceptors.response.use(function(response) {\n    return response;\n}, function(error) {\n    console.log(error);\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFFdEMsR0FBSyxDQUFDRSxPQUFPLEdBQUVELHFEQUFZO0FBRXBCLEdBQUssQ0FBRUUsR0FBRyxHQUFHSCxtREFBWSxDQUFDLENBQUM7SUFDOUJLLE9BQU8sRUFBRSxDQUF1QjtJQUNoQ0MsT0FBTyxFQUFDLENBQUM7UUFDTEMsYUFBYSxFQUFHLENBQU8sU0FBNEIsT0FBMUJMLE9BQU8sQ0FBQyxDQUFnQjtJQUNyRCxDQUFDO0FBQ0wsQ0FBQztBQUVEQyxHQUFHLENBQUNLLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUNELFFBQVEsQ0FBUkEsUUFBUSxFQUFFLENBQUM7SUFDckMsTUFBTSxDQUFDQSxRQUFRO0FBQ2YsQ0FBQyxFQUFFLFFBQVEsQ0FBUEUsS0FBaUIsRUFBSSxDQUFDO0lBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2FwaS50cz80YmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJztcclxuXHJcbmNvbnN0IGNvb2tpZXM9IHBhcnNlQ29va2llcygpO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbiAgICBoZWFkZXJzOntcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1snbmV4dGF1dGgudG9rZW4nXX1gIFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlPT57XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSkiXSwibmFtZXMiOlsiYXhpb3MiLCJwYXJzZUNvb2tpZXMiLCJjb29raWVzIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ })

});