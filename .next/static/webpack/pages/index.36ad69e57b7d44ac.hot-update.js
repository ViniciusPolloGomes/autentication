"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.module.css */ \"./styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(event) {\n    var handleSubmit = function handleSubmit() {\n        event.P;\n        var data = {\n            email: email,\n            password: password\n        };\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), password = ref1[0], setPassword = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                typo: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Entrar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n};\n_s(Home, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0c7O0FBRS9CLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFnQixFQUFHLENBQUM7UUFJcENDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLEdBQUUsQ0FBQztRQUNwQkQsS0FBSyxDQUFDRSxDQUFDO1FBQ1AsR0FBSyxDQUFDQyxJQUFJLEdBQUMsQ0FBQztZQUNQQyxLQUFLLEVBQUxBLEtBQUs7WUFDTEMsUUFBUSxFQUFSQSxRQUFRO1FBQ2IsQ0FBQztJQUNMLENBQUM7O0lBVEQsR0FBSyxDQUFvQlIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBN0JPLEtBQUssR0FBYVAsR0FBWSxLQUF4QlMsUUFBUSxHQUFJVCxHQUFZO0lBQ3JDLEdBQUssQ0FBMkJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDUSxRQUFRLEdBQWlCUixJQUFZLEtBQTNCVSxXQUFXLEdBQUlWLElBQVk7SUFVNUMsTUFBTSw2RUFDRFcsQ0FBSTtRQUFDQyxRQUFRLEVBQUVSLFlBQVk7UUFBR1MsU0FBUyxFQUFFWiwwRUFBZ0I7O3dGQUNyRGMsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU87Z0JBQUNDLEtBQUssRUFBRVYsS0FBSztnQkFBRVcsUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0JBQUlWLE1BQU0sQ0FBTkEsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozt3RkFDdkVGLENBQUs7Z0JBQUNNLElBQUksRUFBQyxDQUFVO2dCQUFDSixLQUFLLEVBQUVULFFBQVE7Z0JBQUVVLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29CQUFJVCxNQUFNLENBQU5BLFdBQVcsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7d0ZBQ2hGSyxDQUFNO2dCQUFDTixJQUFJLEVBQUMsQ0FBUTswQkFBQyxDQUFNOzs7Ozs7Ozs7Ozs7QUFJeEMsQ0FBQztHQXBCdUJkLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKGV2ZW50OiBGb3JtRXZlbnQgKSB7XHJcbiAgICBjb25zdCBbZW1haWwsc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkICxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpe1xyXG4gICAgICAgIGV2ZW50LlBcclxuICAgICAgICBjb25zdCBkYXRhPXtcclxuICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ICBjbGFzc05hbWU9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBvPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50cmFyPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPiBcclxuXHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJldmVudCIsImhhbmRsZVN1Ym1pdCIsIlAiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInNldEVtYWlsIiwic2V0UGFzc3dvcmQiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cG8iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});