/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/scripts/fnc.ts":
/*!*******************************!*\
  !*** ./public/scripts/fnc.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fnc = void 0;\nvar fnc;\n(function (fnc) {\n    /**\n     * generate a UUID\n     * @returns A string containing a randomly generated, 36 character long  UUID.\n     */\n    fnc.ID = () => {\n        return self.crypto.randomUUID();\n    };\n    /**\n     * part of string\n     */\n    let toTrimPos;\n    (function (toTrimPos) {\n        toTrimPos[toTrimPos[\"start\"] = 0] = \"start\";\n        toTrimPos[toTrimPos[\"mid\"] = 1] = \"mid\";\n        toTrimPos[toTrimPos[\"end\"] = 2] = \"end\";\n    })(toTrimPos = fnc.toTrimPos || (fnc.toTrimPos = {}));\n    /**\n     * trimming a string to a specific length\n     * @param str string to trm\n     * @param targetLen resulted lenght\n     * @param trpos part of string to trim\n     * @param char wildcard\n     * @returns string of specified size\n      //! @abstract not good at edge values\n     */\n    fnc.trstr = (str = fnc.ID(), targetLen = 16, trpos = toTrimPos.end, char = '...') => {\n        // how long should be left from the str\n        const trLen = targetLen - char.length;\n        if (trLen > targetLen ||\n            trLen + 1 < char.length ||\n            targetLen >= str.length)\n            return str;\n        switch (trpos) {\n            case 0: // start\n                return char + str.slice(-trLen);\n            case 1: // mid\n                return str.slice(0, trLen / 2) + char + str.slice(-trLen / 2);\n            case 2: // end \n                return str.slice(0, trLen) + char;\n            default:\n                return '';\n        }\n    };\n})(fnc || (exports.fnc = fnc = {}));\n\n\n//# sourceURL=webpack://mpt_site3/./public/scripts/fnc.ts?");

/***/ }),

/***/ "./public/scripts/home.ts":
/*!********************************!*\
  !*** ./public/scripts/home.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.hello = void 0;\nconst fnc_1 = __webpack_require__(/*! ./fnc */ \"./public/scripts/fnc.ts\");\nlet appId = '';\nwindow.onload = () => {\n    appId = fnc_1.fnc.ID();\n    let signFooter = document\n        .getElementsByClassName('mpt_signin_plate_footer')[0];\n    signFooter.innerText = fnc_1.fnc.trstr(appId, 20, fnc_1.fnc.toTrimPos.mid, '...');\n    signFooter.addEventListener('pointerdown', () => {\n        navigator.clipboard.writeText(appId);\n    });\n};\nconst hello = () => {\n    console.log(fnc_1.fnc.ID());\n};\nexports.hello = hello;\n(0, exports.hello)();\n\n\n//# sourceURL=webpack://mpt_site3/./public/scripts/home.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./public/scripts/home.ts");
/******/ 	
/******/ })()
;