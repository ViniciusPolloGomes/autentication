/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/home.module.scss":
/*!*********************************!*\
  !*** ./styles/home.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"home_container__U_vei\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGVudGljYXRpb24vLi9zdHlsZXMvaG9tZS5tb2R1bGUuc2Nzcz8xNTVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImhvbWVfY29udGFpbmVyX19VX3ZlaVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/home.module.scss\n");

/***/ }),

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { 'nextauth.token': token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        if (token) {\n            _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get('/me').then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            });\n        }\n    }, []);\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('sessions', {\n                email,\n                password\n            });\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.token', token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: '/'\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: '/'\n            });\n            setUser({\n                email,\n                permissions,\n                roles\n            });\n            _services_api__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn,\n            isAuthenticated,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1FO0FBQzlCO0FBQ0w7QUFDYztBQXdCdkMsS0FBSyxDQUFDTyxXQUFXLGlCQUFHUCxvREFBYSxDQUFDLENBQUMsQ0FBQztBQUVuQyxTQUFTUSxZQUFZLENBQUUsQ0FBQ0MsQ0FBQUEsUUFBUSxFQUFvQixDQUFDLEVBQUMsQ0FBQztJQUMzRCxLQUFXLE1BQUxDLElBQUksTUFBRUMsT0FBTyxNQUFHVCwrQ0FBUTtJQUM5QixLQUFLLENBQUNVLGVBQWUsS0FBS0YsSUFBSTtJQUU5QlQsZ0RBQVMsS0FBSyxDQUFDO1FBQ1gsS0FBSyxDQUFDLENBQUMsRUFBZ0IsaUJBQUNZLEtBQUssR0FBQyxHQUFHUCxxREFBWTtRQUU3QyxFQUFFLEVBQUNPLEtBQUssRUFBQyxDQUFDO1lBQ05WLGtEQUFPLENBQUMsQ0FBSyxNQUFFWSxJQUFJLEVBQUNDLFFBQVEsR0FBRSxDQUFDO2dCQUMzQixLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFDQyxXQUFXLEdBQUNDLEtBQUssR0FBQyxHQUFHSCxRQUFRLENBQUNJLElBQUk7Z0JBRS9DVCxPQUFPLENBQUMsQ0FBQ007b0JBQUFBLEtBQUs7b0JBQUNDLFdBQVc7b0JBQUNDLEtBQUs7Z0JBQUEsQ0FBQztZQUNyQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7bUJBRVdFLE1BQU0sQ0FBRSxDQUFDSixDQUFBQSxLQUFLLEdBQUNLLFFBQVEsRUFBb0IsQ0FBQyxFQUFDLENBQUM7UUFDekQsR0FBRyxFQUFDO1lBQ0EsS0FBSyxDQUFDTixRQUFRLEdBQUcsS0FBSyxDQUFDYixtREFBUSxDQUFDLENBQVUsV0FBRyxDQUFDO2dCQUN0Q2MsS0FBSztnQkFDTEssUUFBUTtZQUNoQixDQUFDO1lBRUQsS0FBWSxDQUFQLENBQUNULENBQUFBLEtBQUssR0FBRVcsWUFBWSxHQUFFTixXQUFXLEdBQUVDLEtBQUssR0FBQyxHQUFHSCxRQUFRLENBQUNJLElBQUk7WUFFOURmLGtEQUFTLENBQUNvQixTQUFTLEVBQUcsQ0FBZ0IsaUJBQUVaLEtBQUssRUFBQyxDQUFDO2dCQUMzQ2EsTUFBTSxFQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUU7Z0JBQ2xCQyxJQUFJLEVBQUUsQ0FBRztZQUNiLENBQUM7WUFDRHRCLGtEQUFTLENBQUNvQixTQUFTLEVBQUcsQ0FBdUIsd0JBQUVELFlBQVksRUFBRSxDQUFDO2dCQUMxREUsTUFBTSxFQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUU7Z0JBQ2xCQyxJQUFJLEVBQUUsQ0FBRztZQUNiLENBQUM7WUFFRGhCLE9BQU8sQ0FBQyxDQUFDO2dCQUNMTSxLQUFLO2dCQUNMQyxXQUFXO2dCQUNYQyxLQUFLO1lBQ1QsQ0FBQztZQUVEaEIsNkVBQW9DLElBQUssT0FBTyxFQUFFVSxLQUFLO1lBRXZEVCx1REFBVyxDQUFDLENBQVk7UUFDNUIsQ0FBQyxDQUFDLEtBQUssRUFBQzJCLEdBQUcsRUFBQyxDQUFDO1lBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSw2RUFDRHhCLFdBQVcsQ0FBQzJCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNkO1lBQUFBLE1BQU07WUFBQ1QsZUFBZTtZQUFDRixJQUFJO1FBQUEsQ0FBQztrQkFDckRELFFBQVE7Ozs7OztBQUdyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0ZW50aWNhdGlvbi8uL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD82ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzZXRDb29raWUscGFyc2VDb29raWVzfSBmcm9tICdub29raWVzJ1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcclxuICAgIHJvbGVzOnN0cmluZ1tdO1xyXG59O1xyXG5cclxudHlwZSBTaWduSW5DcmVkZW50aWFscyAgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZyA7XHJcblxyXG59XHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9e1xyXG4gICAgc2lnbkluKGNyZWRlbnRpYWxzIDogU2lnbkluQ3JlZGVudGlhbHMpIDogUHJvbWlzZSA8dm9pZD4gO1xyXG4gICAgdXNlcjpVc2VyO1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcz17XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXHJcblxyXG4gZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlciAoe2NoaWxkcmVufSA6IEF1dGhQcm92aWRlclByb3BzKXtcclxuICAgIGNvbnN0W3VzZXIsIHNldFVzZXJdPSB1c2VTdGF0ZTxVc2VyPigpICAgIFxyXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHsnbmV4dGF1dGgudG9rZW4nOnRva2VufSA9IHBhcnNlQ29va2llcygpXHJcblxyXG4gICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgYXBpLmdldCgnL21lJykudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2VtYWlsLHBlcm1pc3Npb25zLHJvbGVzfSA9IHJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHtlbWFpbCxwZXJtaXNzaW9ucyxyb2xlc30pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHtlbWFpbCxwYXNzd29yZH0gOiBTaWduSW5DcmVkZW50aWFscyl7XHJcbiAgICAgICAgdHJ5eyAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnc2Vzc2lvbnMnICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3R7dG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4se1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zLFxyXG4gICAgICAgICAgICAgICAgcm9sZXMsXHJcbiAgICAgICAgICAgIH0pICAgXHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzaWduSW4saXNBdXRoZW50aWNhdGVkLHVzZXJ9fT4gXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJSb3V0ZXIiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImVtYWlsIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsImRhdGEiLCJzaWduSW4iLCJwYXNzd29yZCIsInBvc3QiLCJyZWZyZXNoVG9rZW4iLCJ1bmRlZmluZWQiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/home.module.scss */ \"./styles/home.module.scss\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { signIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const data = {\n            email,\n            password\n        };\n        await signIn(data);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Entrar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ0E7QUFDUjtBQUVoQyxRQUFRLENBQUNJLElBQUksR0FBSSxDQUFDO0lBQzdCLEtBQUssTUFBRUMsS0FBSyxNQUFDQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsQ0FBRTtJQUNwQyxLQUFLLE1BQUVNLFFBQVEsTUFBRUMsV0FBVyxNQUFJUCwrQ0FBUSxDQUFDLENBQUU7SUFFM0MsS0FBSyxDQUFFLENBQUNRLENBQUFBLE1BQU0sR0FBQyxHQUFHVCxpREFBVSxDQUFDRSw4REFBVzttQkFDekJRLFlBQVksQ0FBQ0MsS0FBaUIsRUFBQyxDQUFDO1FBQzNDQSxLQUFLLENBQUNDLGNBQWM7UUFFcEIsS0FBSyxDQUFDQyxJQUFJLEdBQUMsQ0FBQztZQUNQUixLQUFLO1lBQ0xFLFFBQVE7UUFDYixDQUFDO1FBQ0QsS0FBSyxDQUFDRSxNQUFNLENBQUNJLElBQUk7SUFDckIsQ0FBQztJQUVELE1BQU0sNkVBQ0RDLENBQUk7UUFBQ0MsUUFBUSxFQUFFTCxZQUFZO1FBQUVNLFNBQVMsRUFBRWIsMkVBQWdCOzt3RkFDcERlLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFPO2dCQUFDQyxLQUFLLEVBQUVmLEtBQUs7Z0JBQUVnQixRQUFRLEdBQUVDLENBQUMsR0FBSWhCLFFBQVEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7d0ZBQ3ZFRixDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBVTtnQkFBQ0MsS0FBSyxFQUFFYixRQUFRO2dCQUFFYyxRQUFRLEdBQUVDLENBQUMsR0FBSWQsV0FBVyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3dGQUNoRkksQ0FBTTtnQkFBQ0wsSUFBSSxFQUFDLENBQVE7MEJBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBSXhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRlbnRpY2F0aW9uLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbiB9IGZyb20gXCJjcnlwdG9cIjtcclxuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoICkge1xyXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCAsc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCAge3NpZ25Jbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCA6IEZvcm1FdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YT17XHJcbiAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBzaWduSW4oZGF0YSk7XHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnRyYXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+IFxyXG5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0Iiwic3R5bGVzIiwiSG9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2lnbkluIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333',\n    headers: {\n        Authorization: `Bearer ${cookies['nextauth.token']}`\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUV0QyxLQUFLLENBQUNFLE9BQU8sR0FBRUQscURBQVk7QUFFcEIsS0FBSyxDQUFFRSxHQUFHLEdBQUdILG1EQUFZLENBQUMsQ0FBQztJQUM5QkssT0FBTyxFQUFFLENBQXVCO0lBQ2hDQyxPQUFPLEVBQUMsQ0FBQztRQUNMQyxhQUFhLEdBQUcsT0FBTyxFQUFFTCxPQUFPLENBQUMsQ0FBZ0I7SUFDckQsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRlbnRpY2F0aW9uLy4vc2VydmljZXMvYXBpLnRzPzRiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XHJcblxyXG5jb25zdCBjb29raWVzPSBwYXJzZUNvb2tpZXMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCAgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnLFxyXG4gICAgaGVhZGVyczp7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXNbJ25leHRhdXRoLnRva2VuJ119YCBcclxuICAgIH1cclxufSk7Il0sIm5hbWVzIjpbImF4aW9zIiwicGFyc2VDb29raWVzIiwiY29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();