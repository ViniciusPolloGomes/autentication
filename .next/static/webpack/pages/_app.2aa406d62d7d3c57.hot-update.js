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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/apiClient */ \"./services/apiClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nvar authChannel;\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.token');\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.refreshToken');\n    authChannel.postMessage('signOut');\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n}\nfunction AuthProvider(param1) {\n    var children = param1.children;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), user = ref1[0], setUser = ref1[1];\n    var isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        authChannel;\n        authChannel.onmessage = function(message) {\n            console.log(message);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(), token = ref['nextauth.token'];\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.get('/me').then(function(response) {\n                var _data = response.data, email = _data.email, permissions = _data.permissions, roles = _data.roles;\n                setUser({\n                    email: email,\n                    permissions: permissions,\n                    roles: roles\n                });\n            }).catch(function() {\n                signOut();\n            });\n        }\n    }, []);\n    function signIn(_) {\n        return _signIn.apply(this, arguments);\n    }\n    function _signIn() {\n        _signIn = _asyncToGenerator(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, response, _data, token, refreshToken, permissions, roles;\n            return C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.post('sessions', {\n                            email: email,\n                            password: password\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _data = response.data, token = _data.token, refreshToken = _data.refreshToken, permissions = _data.permissions, roles = _data.roles;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.token', token, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        setUser({\n                            email: email,\n                            permissions: permissions,\n                            roles: roles\n                        });\n                        _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _signIn.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn: signIn,\n            signOut: signOut,\n            isAuthenticated: isAuthenticated,\n            user: user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"H4+Lumme8GnvVeCdHZ7fKMSXbEs=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixLQUFhLENBQXRCSSxLQUFLO3dCQUU3QzFCLGtEQUFTLENBQUNPLFNBQVMsRUFBRyxDQUFnQixpQkFBRVksS0FBSyxFQUFDLENBQUM7NEJBQzNDYSxNQUFNLEVBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRTs0QkFDbEJDLElBQUksRUFBRSxDQUFHO3dCQUNiLENBQUM7d0JBQ0RqQyxrREFBUyxDQUFDTyxTQUFTLEVBQUcsQ0FBdUIsd0JBQUV1QixZQUFZLEVBQUUsQ0FBQzs0QkFDMURFLE1BQU0sRUFBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFOzRCQUNsQkMsSUFBSSxFQUFFLENBQUc7d0JBQ2IsQ0FBQzt3QkFFRHBCLE9BQU8sQ0FBQyxDQUFDOzRCQUNMVyxLQUFLLEVBQUxBLEtBQUs7NEJBQ0xDLFdBQVcsRUFBWEEsV0FBVzs0QkFDWEMsS0FBSyxFQUFMQSxLQUFLO3dCQUNULENBQUM7d0JBRUR2QixtRkFBb0MsR0FBSyxDQUFPLFNBQVEsT0FBTmdCLEtBQUs7d0JBRXZEcEIsdURBQVcsQ0FBQyxDQUFZOzs7Ozs7d0JBRXhCa0IsT0FBTyxDQUFDQyxHQUFHOzs7Ozs7Ozs7OztRQUVuQixDQUFDO2VBOUJjVSxPQUFNOztJQWdDckIsTUFBTSw2RUFDRHhCLFdBQVcsQ0FBQ2dDLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNUO1lBQUFBLE1BQU0sRUFBTkEsTUFBTTtZQUFDdEIsT0FBTyxFQUFQQSxPQUFPO1lBQUNRLGVBQWUsRUFBZkEsZUFBZTtZQUFDRixJQUFJLEVBQUpBLElBQUk7UUFBQSxDQUFDO2tCQUM3REQsUUFBUTs7Ozs7O0FBR3JCLENBQUM7R0FoRWdCRCxZQUFZO0tBQVpBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQXV0aENvbnRleHQudHN4PzZkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzZXRDb29raWUscGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2FwaUNsaWVudCc7XHJcblxyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcclxuICAgIHJvbGVzOnN0cmluZ1tdO1xyXG59O1xyXG5cclxudHlwZSBTaWduSW5DcmVkZW50aWFscyAgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZyA7XHJcblxyXG59XHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9e1xyXG4gICAgc2lnbkluOiAoY3JlZGVudGlhbHMgOiBTaWduSW5DcmVkZW50aWFscykgPT4gUHJvbWlzZSA8dm9pZD4gO1xyXG4gICAgc2lnbk91dDogKCkgPT4gdm9pZDtcclxuICAgIHVzZXI6VXNlcjtcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHM9e1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTsgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKVxyXG5cclxubGV0IGF1dGhDaGFubmVsIDogQnJvYWRjYXN0Q2hhbm5lbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCl7XHJcbiAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwnbmV4dGF1dGgudG9rZW4nKVxyXG4gICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpXHJcblxyXG4gICAgYXV0aENoYW5uZWwucG9zdE1lc3NhZ2UoJ3NpZ25PdXQnKTtcclxuXHJcbiAgICBSb3V0ZXIucHVzaCgnLycpXHJcbn1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyICh7Y2hpbGRyZW59IDogQXV0aFByb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3RbdXNlciwgc2V0VXNlcl09IHVzZVN0YXRlPFVzZXI+KCkgICAgXHJcbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXV0aENoYW5uZWxcclxuICAgICAgICBhdXRoQ2hhbm5lbC5vbm1lc3NhZ2U9IChtZXNzYWdlKSA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsnbmV4dGF1dGgudG9rZW4nOnRva2VufSA9IHBhcnNlQ29va2llcygpXHJcblxyXG4gICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgYXBpLmdldCgnL21lJylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2VtYWlsLHBlcm1pc3Npb25zLHJvbGVzfSA9IHJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcih7ZW1haWwscGVybWlzc2lvbnMscm9sZXN9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHtlbWFpbCxwYXNzd29yZH0gOiBTaWduSW5DcmVkZW50aWFscyl7XHJcbiAgICAgICAgdHJ5eyAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnc2Vzc2lvbnMnICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3R7dG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4se1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zLFxyXG4gICAgICAgICAgICAgICAgcm9sZXMsXHJcbiAgICAgICAgICAgIH0pICAgXHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzaWduSW4sc2lnbk91dCxpc0F1dGhlbnRpY2F0ZWQsdXNlcn19PiBcclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsImRlc3Ryb3lDb29raWUiLCJhcGkiLCJBdXRoQ29udGV4dCIsImF1dGhDaGFubmVsIiwic2lnbk91dCIsInVuZGVmaW5lZCIsInBvc3RNZXNzYWdlIiwicHVzaCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVtYWlsIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsImNhdGNoIiwic2lnbkluIiwicGFzc3dvcmQiLCJyZWZyZXNoVG9rZW4iLCJwb3N0IiwibWF4QWdlIiwicGF0aCIsImRlZmF1bHRzIiwiaGVhZGVycyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ })

});