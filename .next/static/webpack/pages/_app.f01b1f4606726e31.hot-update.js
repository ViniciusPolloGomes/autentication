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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333',\n    headers: {\n        Authorization: \"Bearer \".concat(cookies['nextauth.token'])\n    }\n});\napi.interceptors.response.use(function(response) {\n    return response;\n}, function(error) {\n    if (error.response.status === 401) {\n        var ref;\n        if (((ref = error.response.data) === null || ref === void 0 ? void 0 : ref.code) === 'token.expired') {\n            cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n        } else {}\n    }\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFFdEMsR0FBRyxDQUFDRSxPQUFPLEdBQUVELHFEQUFZO0FBRWxCLEdBQUssQ0FBRUUsR0FBRyxHQUFHSCxtREFBWSxDQUFDLENBQUM7SUFDOUJLLE9BQU8sRUFBRSxDQUF1QjtJQUNoQ0MsT0FBTyxFQUFDLENBQUM7UUFDTEMsYUFBYSxFQUFHLENBQU8sU0FBNEIsT0FBMUJMLE9BQU8sQ0FBQyxDQUFnQjtJQUNyRCxDQUFDO0FBQ0wsQ0FBQztBQUVEQyxHQUFHLENBQUNLLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUNELFFBQVEsQ0FBUkEsUUFBUSxFQUFFLENBQUM7SUFDckMsTUFBTSxDQUFDQSxRQUFRO0FBQ2YsQ0FBQyxFQUFFLFFBQVEsQ0FBUEUsS0FBaUIsRUFBSSxDQUFDO0lBQ3RCLEVBQUUsRUFBQ0EsS0FBSyxDQUFDRixRQUFRLENBQUNHLE1BQU0sS0FBSyxHQUFHLEVBQUMsQ0FBQztZQUMzQkQsR0FBbUI7UUFBdEIsRUFBRSxJQUFDQSxHQUFtQixHQUFuQkEsS0FBSyxDQUFDRixRQUFRLENBQUNJLElBQUksY0FBbkJGLEdBQW1CLEtBQW5CQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxHQUFtQixDQUFFRyxJQUFJLE1BQUssQ0FBZSxnQkFBQyxDQUFDO1lBQy9DWixPQUFPLEdBQUdELHFEQUFZO1FBRXpCLENBQUMsTUFBSyxDQUFDLENBRU47SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9hcGkudHM/NGJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XHJcblxyXG5sZXQgY29va2llcz0gcGFyc2VDb29raWVzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgIGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJyxcclxuICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWyduZXh0YXV0aC50b2tlbiddfWAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2U9PntcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sIChlcnJvcjogQXhpb3NFcnJvcikgPT57XHJcbiAgICAgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpe1xyXG4gICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhPy5jb2RlID09PSAndG9rZW4uZXhwaXJlZCcpeyAgLy9yZW5vdmFyIHRva2VuXHJcbiAgICAgICAgICAgICAgIGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKTsgXHJcblxyXG4gICAgICAgICAgICB9IGVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVzbG9nYXIgdXN1w6FyaW9cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsImNvb2tpZXMiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwic3RhdHVzIiwiZGF0YSIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ })

});