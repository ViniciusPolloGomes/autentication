/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/dashboard"],{

/***/ "./hook/useCan.ts":
/*!************************!*\
  !*** ./hook/useCan.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCan\": function() { return /* binding */ useCan; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction useCan(param) {\n    var permissions1 = param.permissions, roles1 = param.roles;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthContext), user = ref.user, isAuthenticated = ref.isAuthenticated;\n    if (!isAuthenticated) {\n        return false;\n    }\n    if ((permissions1 === null || permissions1 === void 0 ? void 0 : permissions1.length) > 0) {\n        var hasAllPermissions = permissions1.every(function(permissions) {\n            return user.permissions.includes(permissions);\n        });\n        if (!hasAllPermissions) {\n            return false;\n        }\n    }\n    if ((roles1 === null || roles1 === void 0 ? void 0 : roles1.length) > 0) {\n        var hasAllroles = roles1.some(function(roles) {\n            return user.roles.includes(roles);\n        });\n        if (!hasAllroles) {\n            return false;\n        }\n    }\n    return true;\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZUNhbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNxQjtBQU9oRCxTQUFTRSxNQUFNLENBQUMsS0FBa0MsRUFBQyxDQUFDO1FBQW5DQyxZQUFXLEdBQVosS0FBa0MsQ0FBakNBLFdBQVcsRUFBRUMsTUFBSyxHQUFuQixLQUFrQyxDQUFwQkEsS0FBSztJQUN0QyxHQUFLLENBQTJCSixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MsOERBQVcsR0FBL0NJLElBQUksR0FBcUJMLEdBQXVCLENBQWhESyxJQUFJLEVBQUVDLGVBQWUsR0FBSU4sR0FBdUIsQ0FBMUNNLGVBQWU7SUFFNUIsRUFBRSxHQUFFQSxlQUFlLEVBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsS0FBSztJQUNoQixDQUFDO0lBQ0QsRUFBRSxHQUFDSCxZQUFXLGFBQVhBLFlBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsWUFBVyxDQUFFSSxNQUFNLElBQUcsQ0FBQyxFQUFDLENBQUM7UUFDeEIsR0FBSyxDQUFDQyxpQkFBaUIsR0FBR0wsWUFBVyxDQUFDTSxLQUFLLENBQUNOLFFBQVEsQ0FBUkEsV0FBVyxFQUFHLENBQUM7WUFDdkQsTUFBTSxDQUFDRSxJQUFJLENBQUNGLFdBQVcsQ0FBQ08sUUFBUSxDQUFDUCxXQUFXO1FBQ2hELENBQUM7UUFFRCxFQUFFLEdBQUVLLGlCQUFpQixFQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEtBQUs7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFRCxFQUFFLEdBQUNKLE1BQUssYUFBTEEsTUFBSyxLQUFMQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLE1BQUssQ0FBRUcsTUFBTSxJQUFHLENBQUMsRUFBQyxDQUFDO1FBQ2xCLEdBQUssQ0FBQ0ksV0FBVyxHQUFHUCxNQUFLLENBQUNRLElBQUksQ0FBQ1IsUUFBUSxDQUFSQSxLQUFLLEVBQUcsQ0FBQztZQUNwQyxNQUFNLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxDQUFDTSxRQUFRLENBQUNOLEtBQUs7UUFDcEMsQ0FBQztRQUVELEVBQUUsR0FBRU8sV0FBVyxFQUFDLENBQUM7WUFDYixNQUFNLENBQUMsS0FBSztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rL3VzZUNhbi50cz9hNmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi8uLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcblxyXG50eXBlIFVzZUNhblBhcmFtcyA9IHtcclxuICAgIHBlcm1pc3Npb25zPzogc3RyaW5nW107XHJcbiAgICByb2xlcz86IHN0cmluZ1tdO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbih7cGVybWlzc2lvbnMsIHJvbGVzfTogVXNlQ2FuUGFyYW1zKXtcclxuICAgIGNvbnN0IHt1c2VyLCBpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gICAgaWYoIWlzQXV0aGVudGljYXRlZCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYocGVybWlzc2lvbnM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGNvbnN0IGhhc0FsbFBlcm1pc3Npb25zID0gcGVybWlzc2lvbnMuZXZlcnkocGVybWlzc2lvbnMgPT57XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyLnBlcm1pc3Npb25zLmluY2x1ZGVzKHBlcm1pc3Npb25zKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZighaGFzQWxsUGVybWlzc2lvbnMpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHJvbGVzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICBjb25zdCBoYXNBbGxyb2xlcyA9IHJvbGVzLnNvbWUocm9sZXMgPT57XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyLnJvbGVzLmluY2x1ZGVzKHJvbGVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFoYXNBbGxyb2xlcyl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlQ2FuIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsInVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsZW5ndGgiLCJoYXNBbGxQZXJtaXNzaW9ucyIsImV2ZXJ5IiwiaW5jbHVkZXMiLCJoYXNBbGxyb2xlcyIsInNvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hook/useCan.ts\n");

/***/ }),

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ DashBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var _hook_useCan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook/useCan */ \"./hook/useCan.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction DashBoard() {\n    _s();\n    var user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext).user;\n    var userCanSeeMetrics = (0,_hook_useCan__WEBPACK_IMPORTED_MODULE_4__.useCan)({\n        roles: [\n            'administrator',\n            'editor'\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _services_apiClient__WEBPACK_IMPORTED_MODULE_3__.api.get('/me').then(function(response) {\n            return console.log(response);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Dashboard: \",\n                    user === null || user === void 0 ? void 0 : user.email\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            userCanSeeMetrics && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"M\\xe9tricas\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 26,\n                columnNumber: 35\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(DashBoard, \"4PVwE0FpQpC79iMkN6PtpBCYtSk=\", false, function() {\n    return [\n        _hook_useCan__WEBPACK_IMPORTED_MODULE_4__.useCan\n    ];\n});\n_c = DashBoard;\nvar _c;\n$RefreshReg$(_c, \"DashBoard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1E7QUFDUjtBQUtKOzs7QUFFeEIsUUFBUSxDQUFDSyxTQUFTLEdBQUUsQ0FBQzs7SUFDaEMsR0FBSyxDQUFFQyxJQUFJLEdBQUlOLGlEQUFVLENBQUNFLDhEQUFXLEVBQTlCSSxJQUFJO0lBRVgsR0FBSyxDQUFDQyxpQkFBaUIsR0FBR0gsb0RBQU0sQ0FBRSxDQUFDO1FBQ2hDSSxLQUFLLEVBQUUsQ0FBQztZQUFBLENBQWU7WUFBQyxDQUFRO1FBQUEsQ0FBQztJQUNwQyxDQUFDO0lBRURQLGdEQUFTLENBQUMsUUFDYixHQURpQixDQUFDO1FBQ1pFLHdEQUFPLENBQUMsQ0FBSyxNQUFFTyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBUTtZQUFJQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRO1dBQ2xERyxLQUFLLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztZQUFJSCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHOztJQUNqQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSw2RUFBQzs7d0ZBRUVDLENBQUU7O29CQUFDLENBQVc7b0JBQUNWLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRVcsS0FBSzs7Ozs7OztZQUUxQlYsaUJBQWlCLGdGQUFLVyxDQUFHOzBCQUFDLENBQVE7Ozs7Ozs7O0FBRy9DLENBQUM7R0FuQnVCYixTQUFTOztRQUdIRCxnREFBTTs7O0tBSFpDLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeD9kN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0F1dGhDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xyXG5pbXBvcnQgeyB3aXRoU1NSQXV0aCB9IGZyb20gJy4vLi4vdXRpbHMvd2l0aFNTUkF1dGgnO1xyXG5pbXBvcnQgeyBzZXR1cEFwaUNsaWVudCB9IGZyb20gJy4vLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHsgQXV0aFRva2VuRXJyb3IgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2Vycm9yL0F1dGhUb2tlbkVycm9yJztcclxuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQgeyB1c2VDYW4gfSBmcm9tIFwiLi4vaG9vay91c2VDYW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hCb2FyZCgpe1xyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuXHJcbiAgICBjb25zdCB1c2VyQ2FuU2VlTWV0cmljcyA9IHVzZUNhbiAoe1xyXG4gICAgICAgcm9sZXM6IFsnYWRtaW5pc3RyYXRvcicsJ2VkaXRvciddXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIGFwaS5nZXQoJy9tZScpLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+RGFzaGJvYXJkOiB7dXNlcj8uZW1haWx9PC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHt1c2VyQ2FuU2VlTWV0cmljcyAmJiA8ZGl2Pk3DqXRyaWNhczwvZGl2Pn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoU1NSQXV0aChhc3luYyAoY3R4KT0+IHtcclxuICAgIGNvbnN0IGFwaUNsaWVudCA9IHNldHVwQXBpQ2xpZW50KGN0eClcclxuICAgIFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQuZ2V0KCcvbWUnKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7fVxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQXV0aENvbnRleHQiLCJhcGkiLCJ1c2VDYW4iLCJEYXNoQm9hcmQiLCJ1c2VyIiwidXNlckNhblNlZU1ldHJpY3MiLCJyb2xlcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImgxIiwiZW1haWwiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdashboard&absolutePagePath=C%3A%5CUsers%5CADMIN%5CDesktop%5Crocketseat%5Cnextauth%5Cautentication%5Cpages%5Cdashboard.tsx!":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdashboard&absolutePagePath=C%3A%5CUsers%5CADMIN%5CDesktop%5Crocketseat%5Cnextauth%5Cautentication%5Cpages%5Cdashboard.tsx! ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/dashboard\",\n      function () {\n        return __webpack_require__(/*! ./pages/dashboard.tsx */ \"./pages/dashboard.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/dashboard\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZkYXNoYm9hcmQmYWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNBRE1JTiU1Q0Rlc2t0b3AlNUNyb2NrZXRzZWF0JTVDbmV4dGF1dGglNUNhdXRlbnRpY2F0aW9uJTVDcGFnZXMlNUNkYXNoYm9hcmQudHN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9EQUF1QjtBQUM5QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YTQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2Rhc2hib2FyZFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvZGFzaGJvYXJkLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvZGFzaGJvYXJkXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdashboard&absolutePagePath=C%3A%5CUsers%5CADMIN%5CDesktop%5Crocketseat%5Cnextauth%5Cautentication%5Cpages%5Cdashboard.tsx!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdashboard&absolutePagePath=C%3A%5CUsers%5CADMIN%5CDesktop%5Crocketseat%5Cnextauth%5Cautentication%5Cpages%5Cdashboard.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);