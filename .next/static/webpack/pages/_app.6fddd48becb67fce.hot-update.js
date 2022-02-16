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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333',\n    headers: {\n        Authorization: \"Bearer \".concat(cookies['nextauth.token'])\n    }\n});\napi.interceptors.response.use(function(response) {\n    return response;\n}, function(error) {\n    if (error.response.status === 401) {\n        var ref;\n        if (((ref = error.response.data) === null || ref === void 0 ? void 0 : ref.code) === 'token.expired') {\n            cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n            var refreshToken = cookies['nextauth.refreshToken'];\n            api.post('/refresh', {\n                refreshToken: refreshToken\n            }).then(function(response) {});\n        } else {}\n    }\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFFdEMsR0FBRyxDQUFDRSxPQUFPLEdBQUVELHFEQUFZO0FBRWxCLEdBQUssQ0FBRUUsR0FBRyxHQUFHSCxtREFBWSxDQUFDLENBQUM7SUFDOUJLLE9BQU8sRUFBRSxDQUF1QjtJQUNoQ0MsT0FBTyxFQUFDLENBQUM7UUFDTEMsYUFBYSxFQUFHLENBQU8sU0FBNEIsT0FBMUJMLE9BQU8sQ0FBQyxDQUFnQjtJQUNyRCxDQUFDO0FBQ0wsQ0FBQztBQUVEQyxHQUFHLENBQUNLLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUNELFFBQVEsQ0FBUkEsUUFBUSxFQUFFLENBQUM7SUFDckMsTUFBTSxDQUFDQSxRQUFRO0FBQ2YsQ0FBQyxFQUFFLFFBQVEsQ0FBUEUsS0FBaUIsRUFBSSxDQUFDO0lBQ3RCLEVBQUUsRUFBQ0EsS0FBSyxDQUFDRixRQUFRLENBQUNHLE1BQU0sS0FBSyxHQUFHLEVBQUMsQ0FBQztZQUMzQkQsR0FBbUI7UUFBdEIsRUFBRSxJQUFDQSxHQUFtQixHQUFuQkEsS0FBSyxDQUFDRixRQUFRLENBQUNJLElBQUksY0FBbkJGLEdBQW1CLEtBQW5CQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxHQUFtQixDQUFFRyxJQUFJLE1BQUssQ0FBZSxnQkFBQyxDQUFDO1lBQy9DWixPQUFPLEdBQUdELHFEQUFZO1lBQ3JCLEdBQUssQ0FBMkJjLFlBQVksR0FBSWIsT0FBTyxDQUFoRCxDQUF1QjtZQUM5QkMsR0FBRyxDQUFDYSxJQUFJLENBQUMsQ0FBVSxXQUFDLENBQUM7Z0JBQ2pCRCxZQUFZLEVBQVpBLFlBQVk7WUFDaEIsQ0FBQyxFQUFFRSxJQUFJLENBQUNSLFFBQVEsQ0FBUkEsUUFBUSxFQUFHLENBQUMsQ0FFbkI7UUFDTCxDQUFDLE1BQUssQ0FBQyxDQUVOO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpLnRzPzRiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnO1xyXG5cclxubGV0IGNvb2tpZXM9IHBhcnNlQ29va2llcygpO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbiAgICBoZWFkZXJzOntcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1snbmV4dGF1dGgudG9rZW4nXX1gIFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlPT57XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+e1xyXG4gICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKXtcclxuICAgICAgICAgICAgaWYoZXJyb3IucmVzcG9uc2UuZGF0YT8uY29kZSA9PT0gJ3Rva2VuLmV4cGlyZWQnKXsgIC8vcmVub3ZhciB0b2tlblxyXG4gICAgICAgICAgICAgICBjb29raWVzID0gcGFyc2VDb29raWVzKCk7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyduZXh0YXV0aC5yZWZyZXNoVG9rZW4nOiByZWZyZXNoVG9rZW59ID0gY29va2llc1xyXG4gICAgICAgICAgICAgICAgYXBpLnBvc3QoJy9yZWZyZXNoJyx7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kZXNsb2dhciB1c3XDoXJpb1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pIl0sIm5hbWVzIjpbImF4aW9zIiwicGFyc2VDb29raWVzIiwiY29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwiY29kZSIsInJlZnJlc2hUb2tlbiIsInBvc3QiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ })

});