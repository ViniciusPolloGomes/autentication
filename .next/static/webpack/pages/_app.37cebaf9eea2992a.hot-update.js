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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nvar isRefreshing = false;\nvar failedRequestsQueue = [];\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333',\n    headers: {\n        Authorization: \"Bearer \".concat(cookies['nextauth.token'])\n    }\n});\napi.interceptors.response.use(function(response) {\n    return response;\n}, function(error) {\n    if (error.response.status === 401) {\n        var ref;\n        if (((ref = error.response.data) === null || ref === void 0 ? void 0 : ref.code) === 'token.expired') {\n            cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n            var refreshToken = cookies['nextauth.refreshToken'];\n            var originalConfig = error.config;\n            if (!isRefreshing) {\n                isRefreshing = true;\n                api.post('/refresh', {\n                    refreshToken: refreshToken\n                }).then(function(response) {\n                    var token = response.data.token;\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(undefined, 'nextauth.token', token, {\n                        maxAge: 60 * 60 * 24 * 30,\n                        path: '/'\n                    });\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(undefined, 'nextauth.refreshToken', response.data.refreshToken, {\n                        maxAge: 60 * 60 * 24 * 30,\n                        path: '/'\n                    });\n                    api.defaults.headers['Authorization'] = \"Bearer \".concat(token);\n                    failedRequestsQueue.forEach(function(request) {\n                        return request.onSuccess(token);\n                    });\n                    failedRequestsQueue = [];\n                }).catch(function(err) {\n                    failedRequestsQueue.forEach(function(request) {\n                        return request.onFailure(err);\n                    });\n                    failedRequestsQueue = [];\n                }).finally(function() {\n                    isRefreshing = false;\n                });\n            }\n            return new Promise(function(resolve, reject) {\n                failedRequestsQueue.push({\n                    onSuccess: function(token) {\n                        originalConfig.headers['Authorization'] = \"Bearer \".concat(token);\n                        resolve(api(originalConfig));\n                    },\n                    onFailure: function(err) {\n                        reject(err);\n                    }\n                });\n            });\n        } else {}\n    }\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEMsR0FEc0MsQ0FBQztvQkFDWjlCLFlBQVksR0FBRyxLQUFLO2dCQUN4QixDQUFDO1lBRUwsQ0FBQztZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMrQixPQUFPLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUNDLE1BQU0sRUFBRyxDQUFDO2dCQUNsQ2hDLG1CQUFtQixDQUFDaUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCUixTQUFTLEVBQUUsUUFBUSxDQUFQUCxLQUFZLEVBQUcsQ0FBQzt3QkFDeEJKLGNBQWMsQ0FBQ1YsT0FBTyxDQUFDLENBQWUsa0JBQUssQ0FBTyxTQUFRLE9BQU5jLEtBQUs7d0JBRXpEYSxPQUFPLENBQUM5QixHQUFHLENBQUNhLGNBQWM7b0JBQzlCLENBQUM7b0JBQ0RjLFNBQVMsRUFBRSxRQUFRLENBQVBELEdBQWUsRUFBRyxDQUFDO3dCQUMzQkssTUFBTSxDQUFDTCxHQUFHO29CQUNkLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLE1BQUksQ0FBQyxDQUVMO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpLnRzPzRiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyAsc2V0Q29va2llfSBmcm9tICdub29raWVzJztcclxuXHJcbmxldCBjb29raWVzPSBwYXJzZUNvb2tpZXMoKTtcclxubGV0IGlzUmVmcmVzaGluZyA9IGZhbHNlO1xyXG5sZXQgZmFpbGVkUmVxdWVzdHNRdWV1ZSA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbiAgICBoZWFkZXJzOntcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1snbmV4dGF1dGgudG9rZW4nXX1gIFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlPT57XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+e1xyXG4gICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSl7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhPy5jb2RlID09PSAndG9rZW4uZXhwaXJlZCcpeyAgLy9yZW5vdmFyIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llcyA9IHBhcnNlQ29va2llcygpOyBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7J25leHRhdXRoLnJlZnJlc2hUb2tlbic6IHJlZnJlc2hUb2tlbn0gPSBjb29raWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb25maWc9IGVycm9yLmNvbmZpZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighaXNSZWZyZXNoaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnBvc3QoJy9yZWZyZXNoJyx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7dG9rZW59ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCAsICduZXh0YXV0aC50b2tlbicsIHRva2VuLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMzAsIC8vMSBtb250aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvb2tpZSh1bmRlZmluZWQgLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJywgcmVzcG9uc2UuZGF0YS5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMzAsIC8vMSBtb250aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlLmZvckVhY2gocmVxdWVzdCA9PiByZXF1ZXN0Lm9uU3VjY2Vzcyh0b2tlbikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlID0gW10gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlLmZvckVhY2gocmVxdWVzdCA9PiByZXF1ZXN0Lm9uRmFpbHVyZShlcnIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbGVkUmVxdWVzdHNRdWV1ZSA9IFtdIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxlZFJlcXVlc3RzUXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6ICh0b2tlbjpzdHJpbmcpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxDb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcGkob3JpZ2luYWxDb25maWcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZTogKGVycjogQXhpb3NFcnJvcik9PnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Rlc2xvZ2FyIHVzdcOhcmlvXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICBcclxuKSJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsInNldENvb2tpZSIsImNvb2tpZXMiLCJpc1JlZnJlc2hpbmciLCJmYWlsZWRSZXF1ZXN0c1F1ZXVlIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsImRhdGEiLCJjb2RlIiwicmVmcmVzaFRva2VuIiwib3JpZ2luYWxDb25maWciLCJjb25maWciLCJwb3N0IiwidGhlbiIsInRva2VuIiwidW5kZWZpbmVkIiwibWF4QWdlIiwicGF0aCIsImRlZmF1bHRzIiwiZm9yRWFjaCIsInJlcXVlc3QiLCJvblN1Y2Nlc3MiLCJjYXRjaCIsImVyciIsIm9uRmFpbHVyZSIsImZpbmFsbHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ })

});