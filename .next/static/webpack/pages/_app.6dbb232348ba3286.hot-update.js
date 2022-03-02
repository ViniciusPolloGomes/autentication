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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/apiClient */ \"./services/apiClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nvar authChannel = new BroadcastChannel('auth');\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.token');\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.refreshToken');\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n}\nfunction AuthProvider(param1) {\n    var children = param1.children;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), user = ref1[0], setUser = ref1[1];\n    var isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(), token = ref['nextauth.token'];\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.get('/me').then(function(response) {\n                var _data = response.data, email = _data.email, permissions = _data.permissions, roles = _data.roles;\n                setUser({\n                    email: email,\n                    permissions: permissions,\n                    roles: roles\n                });\n            }).catch(function() {\n                signOut();\n            });\n        }\n    }, []);\n    function signIn(_) {\n        return _signIn.apply(this, arguments);\n    }\n    function _signIn() {\n        _signIn = _asyncToGenerator(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, response, _data, token, refreshToken, permissions, roles;\n            return C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.post('sessions', {\n                            email: email,\n                            password: password\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _data = response.data, token = _data.token, refreshToken = _data.refreshToken, permissions = _data.permissions, roles = _data.roles;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.token', token, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        setUser({\n                            email: email,\n                            permissions: permissions,\n                            roles: roles\n                        });\n                        _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _signIn.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn: signIn,\n            signOut: signOut,\n            isAuthenticated: isAuthenticated,\n            user: user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtEQUFTLENBQUNRLFNBQVMsRUFBRyxDQUF1Qix3QkFBRWtCLFlBQVksRUFBRSxDQUFDOzRCQUMxREUsTUFBTSxFQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUU7NEJBQ2xCQyxJQUFJLEVBQUUsQ0FBRzt3QkFDYixDQUFDO3dCQUVEaEIsT0FBTyxDQUFDLENBQUM7NEJBQ0xPLEtBQUssRUFBTEEsS0FBSzs0QkFDTEMsV0FBVyxFQUFYQSxXQUFXOzRCQUNYQyxLQUFLLEVBQUxBLEtBQUs7d0JBQ1QsQ0FBQzt3QkFFRG5CLG1GQUFvQyxHQUFLLENBQU8sU0FBUSxPQUFOWSxLQUFLO3dCQUV2RGhCLHVEQUFXLENBQUMsQ0FBWTs7Ozs7O3dCQUV4QmlDLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7UUFFbkIsQ0FBQztlQTlCY1QsT0FBTTs7SUFnQ3JCLE1BQU0sNkVBQ0RwQixXQUFXLENBQUM4QixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDWDtZQUFBQSxNQUFNLEVBQU5BLE1BQU07WUFBQ2pCLE9BQU8sRUFBUEEsT0FBTztZQUFDTyxlQUFlLEVBQWZBLGVBQWU7WUFBQ0YsSUFBSSxFQUFKQSxJQUFJO1FBQUEsQ0FBQztrQkFDN0RELFFBQVE7Ozs7OztBQUdyQixDQUFDO0dBekRnQkQsWUFBWTtLQUFaQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD82ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7c2V0Q29va2llLHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZX0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9hcGlDbGllbnQnO1xyXG5cclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwZXJtaXNzaW9uczogc3RyaW5nW107XHJcbiAgICByb2xlczpzdHJpbmdbXTtcclxufTtcclxuXHJcbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgO1xyXG5cclxufVxyXG5cclxudHlwZSBBdXRoQ29udGV4dERhdGEgPXtcclxuICAgIHNpZ25JbjogKGNyZWRlbnRpYWxzIDogU2lnbkluQ3JlZGVudGlhbHMpID0+IFByb21pc2UgPHZvaWQ+IDtcclxuICAgIHNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgICB1c2VyOlVzZXI7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIEF1dGhQcm92aWRlclByb3BzPXtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7IFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSlcclxuXHJcbmNvbnN0IGF1dGhDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ2F1dGgnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKXtcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCduZXh0YXV0aC50b2tlbicpXHJcbiAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwnbmV4dGF1dGgucmVmcmVzaFRva2VuJylcclxuXHJcbiAgICBcclxuXHJcbiAgICBSb3V0ZXIucHVzaCgnLycpXHJcbn1cclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyICh7Y2hpbGRyZW59IDogQXV0aFByb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3RbdXNlciwgc2V0VXNlcl09IHVzZVN0YXRlPFVzZXI+KCkgICAgXHJcbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgeyduZXh0YXV0aC50b2tlbic6dG9rZW59ID0gcGFyc2VDb29raWVzKClcclxuXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICBhcGkuZ2V0KCcvbWUnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZW1haWwscGVybWlzc2lvbnMscm9sZXN9ID0gcmVzcG9uc2UuZGF0YVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKHtlbWFpbCxwZXJtaXNzaW9ucyxyb2xlc30pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25JbiAoe2VtYWlsLHBhc3N3b3JkfSA6IFNpZ25JbkNyZWRlbnRpYWxzKXtcclxuICAgICAgICB0cnl7ICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCdzZXNzaW9ucycgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdHt0b2tlbiwgcmVmcmVzaFRva2VuLCBwZXJtaXNzaW9ucywgcm9sZXN9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNldENvb2tpZSh1bmRlZmluZWQgLCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbix7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMzAsIC8vMSBtb250aFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldENvb2tpZSh1bmRlZmluZWQgLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJywgcmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMzAsIC8vMSBtb250aFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnMsXHJcbiAgICAgICAgICAgICAgICByb2xlcyxcclxuICAgICAgICAgICAgfSkgICBcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NpZ25JbixzaWduT3V0LGlzQXV0aGVudGljYXRlZCx1c2VyfX0+IFxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsImFwaSIsIkF1dGhDb250ZXh0IiwiYXV0aENoYW5uZWwiLCJCcm9hZGNhc3RDaGFubmVsIiwic2lnbk91dCIsInVuZGVmaW5lZCIsInB1c2giLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZW1haWwiLCJwZXJtaXNzaW9ucyIsInJvbGVzIiwiY2F0Y2giLCJzaWduSW4iLCJwYXNzd29yZCIsInJlZnJlc2hUb2tlbiIsInBvc3QiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ })

});