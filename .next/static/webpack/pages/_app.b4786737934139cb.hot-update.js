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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/apiClient */ \"./services/apiClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nvar authChannel;\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.token');\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.refreshToken');\n    authChannel.postMessage('signOut');\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n}\nfunction AuthProvider(param1) {\n    var children = param1.children;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), user = ref1[0], setUser = ref1[1];\n    var isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        authChannel = new BroadcastChannel('auth');\n        authChannel.onmessage = function(message) {\n            switch(message.data){\n                case 'signOut':\n                    signOut();\n                    break;\n                case 'signIn':\n                    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(), token = ref['nextauth.token'];\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.get('/me').then(function(response) {\n                var _data = response.data, email = _data.email, permissions = _data.permissions, roles = _data.roles;\n                setUser({\n                    email: email,\n                    permissions: permissions,\n                    roles: roles\n                });\n            }).catch(function() {\n                signOut();\n            });\n        }\n    }, []);\n    function signIn(_) {\n        return _signIn.apply(this, arguments);\n    }\n    function _signIn() {\n        _signIn = _asyncToGenerator(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, response, _data, token, refreshToken, permissions, roles;\n            return C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.post('sessions', {\n                            email: email,\n                            password: password\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _data = response.data, token = _data.token, refreshToken = _data.refreshToken, permissions = _data.permissions, roles = _data.roles;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.token', token, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        setUser({\n                            email: email,\n                            permissions: permissions,\n                            roles: roles\n                        });\n                        _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n                        authChannel;\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return _signIn.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn: signIn,\n            signOut: signOut,\n            isAuthenticated: isAuthenticated,\n            user: user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"H4+Lumme8GnvVeCdHZ7fKMSXbEs=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtLQUFaQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD82ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7c2V0Q29va2llLHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZX0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9hcGlDbGllbnQnO1xyXG5cclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwZXJtaXNzaW9uczogc3RyaW5nW107XHJcbiAgICByb2xlczpzdHJpbmdbXTtcclxufTtcclxuXHJcbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgO1xyXG5cclxufVxyXG5cclxudHlwZSBBdXRoQ29udGV4dERhdGEgPXtcclxuICAgIHNpZ25JbjogKGNyZWRlbnRpYWxzIDogU2lnbkluQ3JlZGVudGlhbHMpID0+IFByb21pc2UgPHZvaWQ+IDtcclxuICAgIHNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgICB1c2VyOlVzZXI7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIEF1dGhQcm92aWRlclByb3BzPXtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7IFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSlcclxuXHJcbmxldCBhdXRoQ2hhbm5lbCA6IEJyb2FkY2FzdENoYW5uZWw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpe1xyXG4gICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsJ25leHRhdXRoLnRva2VuJylcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKVxyXG5cclxuICAgIGF1dGhDaGFubmVsLnBvc3RNZXNzYWdlKCdzaWduT3V0Jyk7XHJcblxyXG4gICAgUm91dGVyLnB1c2goJy8nKVxyXG59XHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlciAoe2NoaWxkcmVufSA6IEF1dGhQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0W3VzZXIsIHNldFVzZXJdPSB1c2VTdGF0ZTxVc2VyPigpICAgIFxyXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGF1dGhDaGFubmVsPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnYXV0aCcpXHJcbiAgICAgICAgYXV0aENoYW5uZWwub25tZXNzYWdlPSAobWVzc2FnZSkgPT57XHJcbiAgICAgICAgICAgIHN3aXRjaChtZXNzYWdlLmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbk91dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbkluJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsnbmV4dGF1dGgudG9rZW4nOnRva2VufSA9IHBhcnNlQ29va2llcygpXHJcblxyXG4gICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgYXBpLmdldCgnL21lJylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2VtYWlsLHBlcm1pc3Npb25zLHJvbGVzfSA9IHJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcih7ZW1haWwscGVybWlzc2lvbnMscm9sZXN9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHtlbWFpbCxwYXNzd29yZH0gOiBTaWduSW5DcmVkZW50aWFscyl7XHJcbiAgICAgICAgdHJ5eyAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnc2Vzc2lvbnMnICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3R7dG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4se1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zLFxyXG4gICAgICAgICAgICAgICAgcm9sZXMsXHJcbiAgICAgICAgICAgIH0pICAgXHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG5cclxuICAgICAgICAgICAgYXV0aENoYW5uZWxcclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2lnbkluLHNpZ25PdXQsaXNBdXRoZW50aWNhdGVkLHVzZXJ9fT4gXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJkZXN0cm95Q29va2llIiwiYXBpIiwiQXV0aENvbnRleHQiLCJhdXRoQ2hhbm5lbCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwb3N0TWVzc2FnZSIsInB1c2giLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXRhIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbWFpbCIsInBlcm1pc3Npb25zIiwicm9sZXMiLCJjYXRjaCIsInNpZ25JbiIsInBhc3N3b3JkIiwicmVmcmVzaFRva2VuIiwicG9zdCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ })

});