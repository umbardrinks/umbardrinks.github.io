/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_timetable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pictures__ = __webpack_require__(4);



Object(__WEBPACK_IMPORTED_MODULE_0__components_timetable__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_1__components_nav__["a" /* default */])();
Object(__WEBPACK_IMPORTED_MODULE_2__components_pictures__["a" /* default */])();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Timetable;
function Timetable() {
    var day = new Date().getDay();
    var el = document.getElementsByClassName('timetable');

    for (var x = 0; x < el.length; x++) {
        var timetable = el[x];
        var trs = timetable.getElementsByTagName('tr');
        for (var y = 0; y < trs.length; y++) {
            var tr = trs[y];
            if (tr.dataset.day == day) {
                tr.className = "timetable__row-today";

                tr.getElementsByTagName('td')[0].innerHTML = "Hoje";
            }
        }
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var opened = false;
    var button = document.getElementById('BurgerMenuButton');
    var nav = document.getElementById('nav');
    var logo = document.getElementById('logo');
    var items = nav.getElementsByClassName('nav__item');

    // Add events
    button.addEventListener('click', handleBurgerMenuClick);
    for (var x = 0; x < items.length; x++) {
        items[x].addEventListener('click', handleItemClick);
    }function toogleNav() {
        if (!opened) {
            nav.className += " nav--show";
            logo.className += " logo--inverse";

            var newButtonClass = button.className.replace('burger-menu--open', '') + ' burger-menu--close';
            button.className = newButtonClass;

            opened = true;
        } else {
            nav.className = nav.className.replace("nav--show", "");
            logo.className = logo.className.replace("logo--inverse", "");

            var _newButtonClass = button.className.replace('burger-menu--close', '') + ' burger-menu--open';
            button.className = _newButtonClass;

            opened = false;
        }
    }

    /**
     * Handles menu items click
     */
    function handleItemClick(e) {
        e.preventDefault();
        var anchor = this.attributes.href.nodeValue.substr(1);
        var section = document.querySelector('#section_' + anchor);
        // alert(section.offsetTop)
        var rect = section.getBoundingClientRect();
        var win = section.ownerDocument.defaultView;
        var top = rect.top + win.pageYOffset;

        window.scrollTo(0, top);

        // Closes the nav menu
        toogleNav();

        return false;
    }

    /**
     * Handles burger menu click
     */
    function handleBurgerMenuClick(e) {
        toogleNav();
    }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Pictures;
function Pictures() {
    var pictures = document.getElementById('Pictures');
    var images = pictures.getElementsByClassName('pictures__image');
    var buttons = pictures.getElementsByClassName('pictures__button');
    var current_image = 0;
    var total_images = images.length;

    // Add events
    for (var x = 0; x < buttons.length; x++) {
        buttons[x].addEventListener('click', handleButtonClick);
    } /**
       * Handle nav button click
       */
    function handleButtonClick(e) {
        if (/--next/.test(this.className)) {
            nextImage();
        } else if (/--prev/.test(this.className)) {
            prevImage();
        }
    }

    /**
     * Jumps to the next image
     */
    function nextImage() {
        var next_image = current_image + 1;
        if (next_image == total_images) next_image = 0;
        images[current_image].className = images[current_image].className.replace('pictures__image--show', '').trim();
        images[next_image].className += ' pictures__image--show';
        current_image = next_image;
    }

    /**
     * Jumps to the previous image
     */
    function prevImage() {
        var prev_image = current_image - 1;
        if (prev_image < 0) prev_image = total_images - 1;
        images[current_image].className = images[current_image].className.replace('pictures__image--show', '').trim();
        images[prev_image].className += ' pictures__image--show';
        current_image = prev_image;
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);