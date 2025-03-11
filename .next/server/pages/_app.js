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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/ScrollTopButton.js":
/*!***************************************!*\
  !*** ./components/ScrollTopButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"react-scroll\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ScrollTopButton = ({ showOffset, duration, easing, tooltip })=>{\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ScrollTopButton.useEffect\": ()=>{\n            const handleShow = {\n                \"ScrollTopButton.useEffect.handleShow\": (e)=>{\n                    if (e.currentTarget.pageYOffset > showOffset) {\n                        setShow(true);\n                    } else {\n                        setShow(false);\n                    }\n                }\n            }[\"ScrollTopButton.useEffect.handleShow\"];\n            window.addEventListener('scroll', handleShow);\n            return ({\n                \"ScrollTopButton.useEffect\": ()=>window.removeEventListener('scroll', handleShow)\n            })[\"ScrollTopButton.useEffect\"];\n        }\n    }[\"ScrollTopButton.useEffect\"], [\n        showOffset\n    ]);\n    const scrollToTop = ()=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.animateScroll.scrollToTop({\n            duration: duration,\n            smooth: easing\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"btton\",\n        className: `btn-scroll-top${show ? ' show' : ''}`,\n        onClick: scrollToTop,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"btn-scroll-top-tooltip text-muted fs-sm me-2\",\n                children: tooltip\n            }, void 0, false, {\n                fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\components\\\\ScrollTopButton.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"btn-scroll-top-icon fi-chevron-up\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\components\\\\ScrollTopButton.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\components\\\\ScrollTopButton.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvU2Nyb2xsVG9wQnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1c7QUFFdEQsTUFBTUksa0JBQWtCLENBQUMsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0lBRWhFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBO3FDQUFDO1lBQ1IsTUFBTVU7d0RBQWEsQ0FBQ0M7b0JBQ2xCLElBQUlBLEVBQUVDLGFBQWEsQ0FBQ0MsV0FBVyxHQUFHVCxZQUFZO3dCQUM1Q0ssUUFBUTtvQkFDVixPQUFPO3dCQUNMQSxRQUFRO29CQUNWO2dCQUNGOztZQUVBSyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVTDtZQUNsQzs2Q0FBTyxJQUFNSSxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTjs7UUFDcEQ7b0NBQUc7UUFBQ047S0FBVztJQUVmLE1BQU1hLGNBQWM7UUFDbEJmLHVEQUFNQSxDQUFDZSxXQUFXLENBQUM7WUFDakJaLFVBQVVBO1lBQ1ZhLFFBQVFaO1FBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFPQyxNQUFLO1FBQVFDLFdBQVcsQ0FBQyxjQUFjLEVBQUViLE9BQU8sVUFBVSxJQUFJO1FBQUVjLFNBQVNMOzswQkFDL0UsOERBQUNNO2dCQUFLRixXQUFVOzBCQUFnRGQ7Ozs7OzswQkFDaEUsOERBQUNpQjtnQkFBRUgsV0FBVTs7Ozs7Ozs7Ozs7O0FBR25CO0FBRUEsaUVBQWVsQixlQUFlQSxFQUFBIiwic291cmNlcyI6WyJFOlxcU2NvdXRsaWZ5IC0gUmVhbCBFc3RhdGUgTGlzaXRpbmcgRGlyZWN0b3J5XFxjb21wb25lbnRzXFxTY3JvbGxUb3BCdXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5cbmNvbnN0IFNjcm9sbFRvcEJ1dHRvbiA9ICh7IHNob3dPZmZzZXQsIGR1cmF0aW9uLCBlYXNpbmcsIHRvb2x0aXAgfSkgPT4ge1xuXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2hvdyA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnBhZ2VZT2Zmc2V0ID4gc2hvd09mZnNldCkge1xuICAgICAgICBzZXRTaG93KHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTaG93KGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTaG93KVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2hvdylcbiAgfSwgW3Nob3dPZmZzZXRdKVxuXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCh7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBzbW9vdGg6IGVhc2luZ1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gdHlwZT0nYnR0b24nIGNsYXNzTmFtZT17YGJ0bi1zY3JvbGwtdG9wJHtzaG93ID8gJyBzaG93JyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYnRuLXNjcm9sbC10b3AtdG9vbHRpcCB0ZXh0LW11dGVkIGZzLXNtIG1lLTInPnt0b29sdGlwfTwvc3Bhbj5cbiAgICAgIDxpIGNsYXNzTmFtZT0nYnRuLXNjcm9sbC10b3AtaWNvbiBmaS1jaGV2cm9uLXVwJz48L2k+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9wQnV0dG9uXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsIiwiU2Nyb2xsVG9wQnV0dG9uIiwic2hvd09mZnNldCIsImR1cmF0aW9uIiwiZWFzaW5nIiwidG9vbHRpcCIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlU2hvdyIsImUiLCJjdXJyZW50VGFyZ2V0IiwicGFnZVlPZmZzZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvVG9wIiwic21vb3RoIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIiwiaSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/ScrollTopButton.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"(pages-dir-node)/./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ScrollTopButton */ \"(pages-dir-node)/./components/ScrollTopButton.js\");\n/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/theme.scss */ \"(pages-dir-node)/./scss/theme.scss\");\n/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_theme_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst SafeSSRProvider = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"vendor-chunks/react-bootstrap\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-bootstrap/SSRProvider */ \"(pages-dir-node)/./node_modules/react-bootstrap/cjs/SSRProvider.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"react-bootstrap/SSRProvider\"\n        ]\n    },\n    ssr: false\n});\nconst Finder = ({ Component, pageProps })=>{\n    // Bind NProgress to Next Router events (Page loading animation)\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().start());\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SafeSSRProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Scoutlify | Real Estate Directory\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Finder - Directory & Listings React / Next.js Bootstrap Template\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"react, nextjs, bootstrap, business, directory, listings, e-commerce, car dealer, city guide, real estate, job board, user account, multipurpose, ui kit, css3, javascript, gallery, slider, touch\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Createx Studio\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"apple-touch-icon\",\n                        sizes: \"180x180\",\n                        href: \"/favicon/apple-touch-icon.png\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        sizes: \"32x32\",\n                        href: \"/favicon/favicon-32x32.png\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        sizes: \"16x16\",\n                        href: \"/favicon/favicon-16x16.png\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"manifest\",\n                        href: \"/favicon/site.webmanifest\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"mask-icon\",\n                        color: \"#5bbad5\",\n                        href: \"/favicon/safari-pinned-tab.svg\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"msapplication-TileColor\",\n                        content: \"#766df4\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#ffffff\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                showOffset: 600,\n                duration: 800,\n                easing: \"easeInOutQuart\",\n                tooltip: \"Top\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Scoutlify - Real Estate Lisiting Directory\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ0Y7QUFDSjtBQUNLO0FBQzBCO0FBQ2hDO0FBRTVCLE1BQU1LLGtCQUFrQkwsbURBQU9BLENBQUMsSUFBTSx5T0FBcUM7Ozs7OztJQUN6RU0sS0FBSzs7QUFHUCxNQUFNQyxTQUFTLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDdEMsZ0VBQWdFO0lBQ2hFUix5REFBYSxDQUFDVSxFQUFFLENBQUMsb0JBQW9CLElBQU1SLHNEQUFlO0lBQzFERix5REFBYSxDQUFDVSxFQUFFLENBQUMsdUJBQXVCLElBQU1SLHFEQUFjO0lBQzVERix5REFBYSxDQUFDVSxFQUFFLENBQUMsb0JBQW9CLElBQU1SLHFEQUFjO0lBRXpELHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNILGtEQUFJQTs7a0NBQ0gsOERBQUNZO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDSDt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7O2tDQUVWLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBU0MsU0FBUTs7Ozs7O2tDQUM1Qiw4REFBQ0U7d0JBQ0NDLEtBQUk7d0JBQ0pDLE9BQU07d0JBQ05DLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ0g7d0JBQ0NDLEtBQUk7d0JBQ0pHLE1BQUs7d0JBQ0xGLE9BQU07d0JBQ05DLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ0g7d0JBQ0NDLEtBQUk7d0JBQ0pHLE1BQUs7d0JBQ0xGLE9BQU07d0JBQ05DLE1BQUs7Ozs7OztrQ0FFUCw4REFBQ0g7d0JBQUtDLEtBQUk7d0JBQVdFLE1BQUs7Ozs7OztrQ0FDMUIsOERBQUNIO3dCQUNDQyxLQUFJO3dCQUNKSSxPQUFNO3dCQUNORixNQUFLOzs7Ozs7a0NBRVAsOERBQUNQO3dCQUFLQyxNQUFLO3dCQUEwQkMsU0FBUTs7Ozs7O2tDQUM3Qyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFHbkMsOERBQUNSO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFFeEIsOERBQUNMLG1FQUFlQTtnQkFDZG9CLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZDLFFBQU87Z0JBQ1BDLFNBQVE7Ozs7Ozs7Ozs7OztBQUloQjtBQUVBLGlFQUFlcEIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiRTpcXFNjb3V0bGlmeSAtIFJlYWwgRXN0YXRlIExpc2l0aW5nIERpcmVjdG9yeVxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IFNjcm9sbFRvcEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JvbGxUb3BCdXR0b25cIjtcbmltcG9ydCBcIi4uL3Njc3MvdGhlbWUuc2Nzc1wiO1xuXG5jb25zdCBTYWZlU1NSUHJvdmlkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWJvb3RzdHJhcC9TU1JQcm92aWRlclwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IEZpbmRlciA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgLy8gQmluZCBOUHJvZ3Jlc3MgdG8gTmV4dCBSb3V0ZXIgZXZlbnRzIChQYWdlIGxvYWRpbmcgYW5pbWF0aW9uKVxuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XG4gIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuICByZXR1cm4gKFxuICAgIDxTYWZlU1NSUHJvdmlkZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPHRpdGxlPlNjb3V0bGlmeSB8IFJlYWwgRXN0YXRlIERpcmVjdG9yeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiRmluZGVyIC0gRGlyZWN0b3J5ICZhbXA7IExpc3RpbmdzIFJlYWN0IC8gTmV4dC5qcyBCb290c3RyYXAgVGVtcGxhdGVcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgY29udGVudD1cInJlYWN0LCBuZXh0anMsIGJvb3RzdHJhcCwgYnVzaW5lc3MsIGRpcmVjdG9yeSwgbGlzdGluZ3MsIGUtY29tbWVyY2UsIGNhciBkZWFsZXIsIGNpdHkgZ3VpZGUsIHJlYWwgZXN0YXRlLCBqb2IgYm9hcmQsIHVzZXIgYWNjb3VudCwgbXVsdGlwdXJwb3NlLCB1aSBraXQsIGNzczMsIGphdmFzY3JpcHQsIGdhbGxlcnksIHNsaWRlciwgdG91Y2hcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkNyZWF0ZXggU3R1ZGlvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJtYXNrLWljb25cIlxuICAgICAgICAgIGNvbG9yPVwiIzViYmFkNVwiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjNzY2ZGY0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICAgIDxTY3JvbGxUb3BCdXR0b25cbiAgICAgICAgc2hvd09mZnNldD17NjAwfVxuICAgICAgICBkdXJhdGlvbj17ODAwfVxuICAgICAgICBlYXNpbmc9XCJlYXNlSW5PdXRRdWFydFwiXG4gICAgICAgIHRvb2x0aXA9XCJUb3BcIlxuICAgICAgLz5cbiAgICA8L1NhZmVTU1JQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbmRlcjtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiUm91dGVyIiwiSGVhZCIsIk5Qcm9ncmVzcyIsIlNjcm9sbFRvcEJ1dHRvbiIsIlNhZmVTU1JQcm92aWRlciIsInNzciIsIkZpbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJsaW5rIiwicmVsIiwic2l6ZXMiLCJocmVmIiwidHlwZSIsImNvbG9yIiwic2hvd09mZnNldCIsImR1cmF0aW9uIiwiZWFzaW5nIiwidG9vbHRpcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./scss/theme.scss":
/*!*************************!*\
  !*** ./scss/theme.scss ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "@restart/ui/ssr":
/*!**********************************!*\
  !*** external "@restart/ui/ssr" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ssr");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();