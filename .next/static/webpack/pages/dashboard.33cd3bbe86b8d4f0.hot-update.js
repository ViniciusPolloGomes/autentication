"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./hook/useCan.ts":
/*!************************!*\
  !*** ./hook/useCan.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCan\": function() { return /* binding */ useCan; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction useCan(param) {\n    var permissions = param.permissions, roles = param.roles;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthContext), user = ref.user, isAuthenticated = ref.isAuthenticated;\n    if (!isAuthenticated) {\n        return false;\n    }\n    var userHas;\n    return true;\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZUNhbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNxQjtBQU9oRCxTQUFTRSxNQUFNLENBQUMsS0FBa0MsRUFBQyxDQUFDO1FBQW5DQyxXQUFXLEdBQVosS0FBa0MsQ0FBakNBLFdBQVcsRUFBRUMsS0FBSyxHQUFuQixLQUFrQyxDQUFwQkEsS0FBSztJQUN0QyxHQUFLLENBQTJCSixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MsOERBQVcsR0FBL0NJLElBQUksR0FBcUJMLEdBQXVCLENBQWhESyxJQUFJLEVBQUVDLGVBQWUsR0FBSU4sR0FBdUIsQ0FBMUNNLGVBQWU7SUFFNUIsRUFBRSxHQUFFQSxlQUFlLEVBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsS0FBSztJQUNoQixDQUFDO0lBQ0QsR0FBSyxDQUFDQyxPQUFPO0lBRWIsTUFBTSxDQUFDLElBQUk7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2svdXNlQ2FuLnRzP2E2ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbnR5cGUgVXNlQ2FuUGFyYW1zID0ge1xyXG4gICAgcGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcclxuICAgIHJvbGVzPzogc3RyaW5nW107XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FuKHtwZXJtaXNzaW9ucywgcm9sZXN9OiBVc2VDYW5QYXJhbXMpe1xyXG4gICAgY29uc3Qge3VzZXIsIGlzQXV0aGVudGljYXRlZH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgICBpZighaXNBdXRoZW50aWNhdGVkKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VySGFzXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlQ2FuIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsInVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VySGFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hook/useCan.ts\n");

/***/ })

});