/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ea1c67244a07\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2Y2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlYTFjNjcyNDRhMDdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Cursor.tsx":
/*!***********************************!*\
  !*** ./app/components/Cursor.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Ribbons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ribbons */ \"(app-pages-browser)/./app/components/Ribbons.tsx\");\n/* harmony import */ var _Ribbons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Ribbons__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Cursor() {\n    _s();\n    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check for dark mode preference\n        const checkDarkMode = ()=>{\n            setIsDark(document.documentElement.classList.contains(\"dark\") || window.matchMedia(\"(prefers-color-scheme: dark)\").matches);\n        };\n        checkDarkMode();\n        // Listen for changes\n        const mediaQuery = window.matchMedia(\"(prefers-color-scheme: dark)\");\n        mediaQuery.addEventListener(\"change\", checkDarkMode);\n        // Listen for class changes on html element\n        const observer = new MutationObserver(checkDarkMode);\n        observer.observe(document.documentElement, {\n            attributes: true,\n            attributeFilter: [\n                \"class\"\n            ]\n        });\n        return ()=>{\n            mediaQuery.removeEventListener(\"change\", checkDarkMode);\n            observer.disconnect();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 pointer-events-none z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Ribbons__WEBPACK_IMPORTED_MODULE_2___default()), {\n            baseThickness: 30,\n            colors: isDark ? [\n                \"#ffffff\"\n            ] : [\n                \"#000000\"\n            ],\n            speedMultiplier: 0.5,\n            maxAge: 500,\n            enableFade: false,\n            enableShaderEffect: true,\n            pointCount: 50,\n            baseSpring: 0.03,\n            baseFriction: 0.9,\n            offsetFactor: 0.05,\n            effectAmplitude: 2,\n            backgroundColor: [\n                0,\n                0,\n                0,\n                0\n            ]\n        }, void 0, false, {\n            fileName: \"D:\\\\portfolio\\\\app\\\\components\\\\Cursor.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\portfolio\\\\app\\\\components\\\\Cursor.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Cursor, \"q9ovQTvwIdpxeVii6kJLTuTYpwE=\");\n_c = Cursor;\nvar _c;\n$RefreshReg$(_c, \"Cursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0N1cnNvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDWjtBQUVoQixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSLGlDQUFpQztRQUNqQyxNQUFNTSxnQkFBZ0I7WUFDcEJELFVBQ0VFLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsV0FDNUNDLE9BQU9DLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU87UUFFN0Q7UUFFQVA7UUFFQSxxQkFBcUI7UUFDckIsTUFBTVEsYUFBYUgsT0FBT0MsVUFBVSxDQUFDO1FBQ3JDRSxXQUFXQyxnQkFBZ0IsQ0FBQyxVQUFVVDtRQUV0QywyQ0FBMkM7UUFDM0MsTUFBTVUsV0FBVyxJQUFJQyxpQkFBaUJYO1FBQ3RDVSxTQUFTRSxPQUFPLENBQUNYLFNBQVNDLGVBQWUsRUFBRTtZQUN6Q1csWUFBWTtZQUNaQyxpQkFBaUI7Z0JBQUM7YUFBUTtRQUM1QjtRQUVBLE9BQU87WUFDTE4sV0FBV08sbUJBQW1CLENBQUMsVUFBVWY7WUFDekNVLFNBQVNNLFVBQVU7UUFDckI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ3RCLGlEQUFPQTtZQUNOdUIsZUFBZTtZQUNmQyxRQUFRdEIsU0FBUztnQkFBQzthQUFVLEdBQUc7Z0JBQUM7YUFBVTtZQUMxQ3VCLGlCQUFpQjtZQUNqQkMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLG9CQUFvQjtZQUNwQkMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLGNBQWM7WUFDZEMsY0FBYztZQUNkQyxpQkFBaUI7WUFDakJDLGlCQUFpQjtnQkFBQztnQkFBRztnQkFBRztnQkFBRzthQUFFOzs7Ozs7Ozs7OztBQUlyQztHQWpEd0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9DdXJzb3IudHN4PzBhNDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSaWJib25zIGZyb20gJy4vUmliYm9ucydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnNvcigpIHtcclxuICBjb25zdCBbaXNEYXJrLCBzZXRJc0RhcmtdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaGVjayBmb3IgZGFyayBtb2RlIHByZWZlcmVuY2VcclxuICAgIGNvbnN0IGNoZWNrRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzRGFyayhcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykgfHxcclxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRGFya01vZGUoKVxyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlc1xyXG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcclxuICAgIG1lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hlY2tEYXJrTW9kZSlcclxuXHJcbiAgICAvLyBMaXN0ZW4gZm9yIGNsYXNzIGNoYW5nZXMgb24gaHRtbCBlbGVtZW50XHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNoZWNrRGFya01vZGUpXHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBtZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrRGFya01vZGUpXHJcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHBvaW50ZXItZXZlbnRzLW5vbmUgei01MFwiPlxyXG4gICAgICA8UmliYm9uc1xyXG4gICAgICAgIGJhc2VUaGlja25lc3M9ezMwfVxyXG4gICAgICAgIGNvbG9ycz17aXNEYXJrID8gWycjZmZmZmZmJ10gOiBbJyMwMDAwMDAnXX1cclxuICAgICAgICBzcGVlZE11bHRpcGxpZXI9ezAuNX1cclxuICAgICAgICBtYXhBZ2U9ezUwMH1cclxuICAgICAgICBlbmFibGVGYWRlPXtmYWxzZX1cclxuICAgICAgICBlbmFibGVTaGFkZXJFZmZlY3Q9e3RydWV9XHJcbiAgICAgICAgcG9pbnRDb3VudD17NTB9XHJcbiAgICAgICAgYmFzZVNwcmluZz17MC4wM31cclxuICAgICAgICBiYXNlRnJpY3Rpb249ezAuOX1cclxuICAgICAgICBvZmZzZXRGYWN0b3I9ezAuMDV9XHJcbiAgICAgICAgZWZmZWN0QW1wbGl0dWRlPXsyfVxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17WzAsIDAsIDAsIDBdfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJpYmJvbnMiLCJDdXJzb3IiLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJjaGVja0RhcmtNb2RlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibWVkaWFRdWVyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUZpbHRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYmFzZVRoaWNrbmVzcyIsImNvbG9ycyIsInNwZWVkTXVsdGlwbGllciIsIm1heEFnZSIsImVuYWJsZUZhZGUiLCJlbmFibGVTaGFkZXJFZmZlY3QiLCJwb2ludENvdW50IiwiYmFzZVNwcmluZyIsImJhc2VGcmljdGlvbiIsIm9mZnNldEZhY3RvciIsImVmZmVjdEFtcGxpdHVkZSIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Cursor.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Ribbons.tsx":
/*!************************************!*\
  !*** ./app/components/Ribbons.tsx ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});