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

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/apiClient */ \"./services/apiClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nvar authChannel;\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.token');\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.refreshToken');\n    authChannel.postMessage('signOut');\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n}\nfunction AuthProvider(param1) {\n    var children = param1.children;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), user = ref1[0], setUser = ref1[1];\n    var isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        authChannel = new BroadcastChannel('auth');\n        authChannel.onmessage = function(message) {\n            switch(message.data){\n                case 'signOut':\n                    signOut();\n                    break;\n                case 'signIn':\n                    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(), token = ref['nextauth.token'];\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.get('/me').then(function(response) {\n                var _data = response.data, email = _data.email, permissions = _data.permissions, roles = _data.roles;\n                setUser({\n                    email: email,\n                    permissions: permissions,\n                    roles: roles\n                });\n            }).catch(function() {\n                signOut();\n            });\n        }\n    }, []);\n    function signIn(_) {\n        return _signIn.apply(this, arguments);\n    }\n    function _signIn() {\n        _signIn = _asyncToGenerator(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, response, _data, token, refreshToken, permissions, roles;\n            return C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.post('sessions', {\n                            email: email,\n                            password: password\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _data = response.data, token = _data.token, refreshToken = _data.refreshToken, permissions = _data.permissions, roles = _data.roles;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.token', token, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        setUser({\n                            email: email,\n                            permissions: permissions,\n                            roles: roles\n                        });\n                        _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _signIn.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn: signIn,\n            signOut: signOut,\n            isAuthenticated: isAuthenticated,\n            user: user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 111,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"H4+Lumme8GnvVeCdHZ7fKMSXbEs=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/NmQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3NldENvb2tpZSxwYXJzZUNvb2tpZXMsIGRlc3Ryb3lDb29raWV9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4vLi4vc2VydmljZXMvYXBpQ2xpZW50JztcclxuXHJcblxyXG50eXBlIFVzZXIgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xyXG4gICAgcm9sZXM6c3RyaW5nW107XHJcbn07XHJcblxyXG50eXBlIFNpZ25JbkNyZWRlbnRpYWxzICA9IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nIDtcclxuXHJcbn1cclxuXHJcbnR5cGUgQXV0aENvbnRleHREYXRhID17XHJcbiAgICBzaWduSW46IChjcmVkZW50aWFscyA6IFNpZ25JbkNyZWRlbnRpYWxzKSA9PiBQcm9taXNlIDx2b2lkPiA7XHJcbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkO1xyXG4gICAgdXNlcjpVc2VyO1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcz17XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXHJcblxyXG5sZXQgYXV0aENoYW5uZWwgOiBCcm9hZGNhc3RDaGFubmVsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKXtcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCduZXh0YXV0aC50b2tlbicpXHJcbiAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwnbmV4dGF1dGgucmVmcmVzaFRva2VuJylcclxuXHJcbiAgICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnc2lnbk91dCcpO1xyXG5cclxuICAgIFJvdXRlci5wdXNoKCcvJylcclxufVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIgKHtjaGlsZHJlbn0gOiBBdXRoUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdFt1c2VyLCBzZXRVc2VyXT0gdXNlU3RhdGU8VXNlcj4oKSAgICBcclxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBhdXRoQ2hhbm5lbD0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ2F1dGgnKVxyXG4gICAgICAgIGF1dGhDaGFubmVsLm9ubWVzc2FnZT0gKG1lc3NhZ2UpID0+e1xyXG4gICAgICAgICAgICBzd2l0Y2gobWVzc2FnZS5kYXRhKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NpZ25PdXQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NpZ25JbicgOlxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB7J25leHRhdXRoLnRva2VuJzp0b2tlbn0gPSBwYXJzZUNvb2tpZXMoKVxyXG5cclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGFwaS5nZXQoJy9tZScpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbCxwZXJtaXNzaW9ucyxyb2xlc30gPSByZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoe2VtYWlsLHBlcm1pc3Npb25zLHJvbGVzfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbkluICh7ZW1haWwscGFzc3dvcmR9IDogU2lnbkluQ3JlZGVudGlhbHMpe1xyXG4gICAgICAgIHRyeXsgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ3Nlc3Npb25zJyAsIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0e3Rva2VuLCByZWZyZXNoVG9rZW4sIHBlcm1pc3Npb25zLCByb2xlc30gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCAsICduZXh0YXV0aC50b2tlbicsIHRva2VuLHtcclxuICAgICAgICAgICAgICAgIG1heEFnZTo2MCo2MCoyNCozMCwgLy8xIG1vbnRoXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCAsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICAgICAgICAgIG1heEFnZTo2MCo2MCoyNCozMCwgLy8xIG1vbnRoXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9ucyxcclxuICAgICAgICAgICAgICAgIHJvbGVzLFxyXG4gICAgICAgICAgICB9KSAgIFxyXG5cclxuICAgICAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG5cclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2lnbkluLHNpZ25PdXQsaXNBdXRoZW50aWNhdGVkLHVzZXJ9fT4gXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJkZXN0cm95Q29va2llIiwiYXBpIiwiQXV0aENvbnRleHQiLCJhdXRoQ2hhbm5lbCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwb3N0TWVzc2FnZSIsInB1c2giLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXRhIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbWFpbCIsInBlcm1pc3Npb25zIiwicm9sZXMiLCJjYXRjaCIsInNpZ25JbiIsInBhc3N3b3JkIiwicmVmcmVzaFRva2VuIiwicG9zdCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ })

});