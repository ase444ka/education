/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pages": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "https://ase444ka.github.io/Education/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./layouts/UI kit/UIKit.js","vendors~pages"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!./layouts/UI kit/UIKit.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--5-2!../node_modules/sass-loader/dist/cjs.js??ref--5-3!./layouts/UI kit/UIKit.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./blocks/expandable/expandable.js":
/*!*****************************************!*\
  !*** ./blocks/expandable/expandable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.expandable i').click(function () {
  var txt = $(this).text();
  txt = txt == 'expand_more' ? 'expand_less' : 'expand_more';
  $(this).parent().toggleClass('expandable_expanded');
  $(this).text(txt);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/input/__button/_target_apply/input__button_target_apply.js":
/*!***************************************************************************!*\
  !*** ./blocks/input/__button/_target_apply/input__button_target_apply.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data.js */ "./blocks/input/data.js");


$('.input__button_target_apply').click(function () {
  var target = this.closest('.input').dataset.target;
  var str = "";
  var items = _data_js__WEBPACK_IMPORTED_MODULE_0__["data"][target].items;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this.closest('.input').querySelectorAll('.input__item')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      var option = value.querySelector('.input__option').textContent;
      var quantity = value.querySelector('.input__option-quantity').textContent;
      if (quantity == 0) continue;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          if (item.value == option) {
            str += item.writing_mode(quantity) + ", ";
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  str = str.slice(0, -2);
  alert(str);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/input/__button/_target_clear/input__button_target_clear.js":
/*!***************************************************************************!*\
  !*** ./blocks/input/__button/_target_clear/input__button_target_clear.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.input__button_target_clear').click(function () {
  $(this).closest(".input__customization").find('.input__option-quantity').text('0');
  $(this).closest(".input__customization").find('.input__option-iteration_decrement').addClass('input__option-iteration_disabled');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/input/__option-iteration/_decrement/input__option-iteration_decrement.js":
/*!*****************************************************************************************!*\
  !*** ./blocks/input/__option-iteration/_decrement/input__option-iteration_decrement.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.input__option-iteration_decrement').click(function () {
  if ($(this).hasClass('input__option-iteration_disabled')) return;
  var quantity = $(this).parent().children('.input__option-quantity').text();
  if (quantity <= 0) return;
  quantity = --quantity;

  if (quantity == 0) {
    $(this).addClass('input__option-iteration_disabled');
  }

  $(this).parent().children('.input__option-quantity').text(quantity);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/input/__option-iteration/_increment/input__option-iteration_increment.js":
/*!*****************************************************************************************!*\
  !*** ./blocks/input/__option-iteration/_increment/input__option-iteration_increment.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.input__option-iteration_increment').click(function () {
  if ($(this).hasClass('input__option-iteration_disabled')) return;
  var quantity = $(this).parent().children('.input__option-quantity').text();
  quantity = ++quantity;

  if ($(this).parent().children('.input__option-iteration_decrement').hasClass('input__option-iteration_disabled')) {
    $(this).parent().children('.input__option-iteration_decrement').removeClass('input__option-iteration_disabled');
  }

  $(this).parent().children('.input__option-quantity').text(quantity);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/input/_type_select/input_type_select.js":
/*!********************************************************!*\
  !*** ./blocks/input/_type_select/input_type_select.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.input_type_select i').click(function () {
  $(this).parent().toggleClass('input_expanded');
});
/* 
import {guests} from '../data.js';
import {rooms} from '../data.js';
$(document).ready(function(){
    $('.input_target_guests').children('.input__placeholder').text(guests.initial_value);
    $('.input_target_rooms').children('.input__placeholder').text(rooms.initial_value);
    let li = $('.input_target_guests').children('.input__options').children('li');
    for (let i = 1; i++; i < guests.items.length) {
        li.append(li)
    }
    let i = 1;
    guests.items.forEach(function () {
        $('.input_target_guests').children('.input__option:nth-child(' + i++ + ')').text(guests.initial_value);
    })
    li = $('.input_target_rooms').children('.input__options').children('li');
    for (let i = 1; i++; i < rooms.items.length) {
        li.append(li)
    }
}); */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/input/data.js":
/*!******************************!*\
  !*** ./blocks/input/data.js ***!
  \******************************/
/*! exports provided: data, endDigit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endDigit", function() { return endDigit; });
function endDigit(quantity) {
  for (var _len = arguments.length, digits = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    digits[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _digits = digits; _i < _digits.length; _i++) {
    var digit = _digits[_i];
    if (quantity % 10 == digit && (quantity - digit) / 10 % 10 != 1) return true;
  }

  return false;
}

var data = {
  guests: {
    initial_value: "СИКОКА гостей",
    items: [{
      value: "взрослые",
      max_quantity: 100,
      writing_mode: function writing_mode(quantity) {
        if (endDigit(quantity, 1)) {
          return quantity + " взрослый";
        }

        return quantity + " взрослых";
      }
    }, {
      value: "дети",
      max_quantity: 50,
      writing_mode: function writing_mode(quantity) {
        if (endDigit(quantity, 1)) {
          return quantity + " ребенок";
        }

        if (endDigit(quantity, 2, 3, 4)) {
          return quantity + " ребенка";
        }

        return quantity + " детей";
      }
    }, {
      value: "младенцы",
      max_quantity: 30,
      writing_mode: function writing_mode(quantity) {
        if (endDigit(quantity, 1)) {
          return quantity + " младенец";
        }

        if (endDigit(quantity, 2, 3, 4)) {
          return quantity + " младенца";
        }

        return quantity + " младенцев";
      }
    }],
    result: function result(all) {
      if (endDigit(all, 1)) return all + " гость";
      if (endDigit(all, 2, 3, 4)) return all + " гость";
      return all + " гостей";
    }
  },
  rooms: {
    initial_value: "Какой нумерочик..",
    items: [{
      value: "спальни",
      max_quantity: 5,
      writing_mode: function writing_mode(quantity) {
        if (endDigit(quantity, 1)) {
          return quantity + " спальня";
        }

        if (endDigit(quantity, 2, 3, 4)) {
          return quantity + " спальни";
        }

        return quantity + " спален";
      }
    }, {
      value: "кровати",
      max_quantity: 30,
      writing_mode: function writing_mode(quantity) {
        if (endDigit(quantity, 1)) {
          return quantity + " кровать";
        }

        if (endDigit(quantity, 2, 3, 4)) {
          return quantity + " кровати";
        }

        return quantity + " кроватей";
      }
    }, {
      value: "ванные комнаты",
      max_quantity: 50,
      writing_mode: function writing_mode(quantity) {
        if (endDigit(quantity, 1)) {
          return quantity + " ванная комната";
        }

        if (endDigit(quantity, 2, 3, 4)) {
          return quantity + " ванные комнаты";
        }

        return quantity + " ванных комнат";
      }
    }]
  }
};


/***/ }),

/***/ "./blocks/input/input.js":
/*!*******************************!*\
  !*** ./blocks/input/input.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type_select_input_type_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_type_select/input_type_select */ "./blocks/input/_type_select/input_type_select.js");
/* harmony import */ var _type_select_input_type_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_type_select_input_type_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _option_iteration_decrement_input_option_iteration_decrement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__option-iteration/_decrement/input__option-iteration_decrement.js */ "./blocks/input/__option-iteration/_decrement/input__option-iteration_decrement.js");
/* harmony import */ var _option_iteration_decrement_input_option_iteration_decrement_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_option_iteration_decrement_input_option_iteration_decrement_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _option_iteration_increment_input_option_iteration_increment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__option-iteration/_increment/input__option-iteration_increment.js */ "./blocks/input/__option-iteration/_increment/input__option-iteration_increment.js");
/* harmony import */ var _option_iteration_increment_input_option_iteration_increment_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_option_iteration_increment_input_option_iteration_increment_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_target_clear_input_button_target_clear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__button/_target_clear/input__button_target_clear.js */ "./blocks/input/__button/_target_clear/input__button_target_clear.js");
/* harmony import */ var _button_target_clear_input_button_target_clear_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_target_clear_input_button_target_clear_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_target_apply_input_button_target_apply_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./__button/_target_apply/input__button_target_apply.js */ "./blocks/input/__button/_target_apply/input__button_target_apply.js");






/***/ }),

/***/ "./blocks/like/like.js":
/*!*****************************!*\
  !*** ./blocks/like/like.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(".like").click(function () {
  var checked = "like__button_checked";
  var likes = $(this).find('.like__button').first().text();
  $(this).find('.like__button').toggleClass(checked);
  $(this).find('.like__base').toggleClass('like__base_checked');
  if ($(this).find('.like__button').hasClass(checked)) $(this).find('.like__button').text(++likes);else $(this).find('.like__button').text(--likes);
  return;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/pagination/pagination.js":
/*!*****************************************!*\
  !*** ./blocks/pagination/pagination.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('click', function (event) {
  var tar = event.target;
  var list = tar.classList;
  if (!list.contains('pagination__item')) return;
  if (list.contains('pagination__item_current')) return;
  var offset = +tar.parentElement.dataset.offset;
  var total = +tar.parentElement.dataset.total;
  /* -----------обработка троеточия------------ */

  if (list.contains('pagination__item_hidden')) {
    var firstItem = tar.parentElement.firstElementChild;

    var _current = tar.parentElement.querySelector('.pagination__item_current');

    _current.classList.remove('pagination__item_current');

    firstItem.nextElementSibling.classList.add('pagination__item_current');
    var firstVal = 0;

    if (firstItem.classList.contains('pagination__item_previous')) {
      firstVal = +firstItem.nextElementSibling.textContent + 2;
    } else {
      firstVal = +firstItem.textContent + 3;
      firstItem.classList.add('pagination__item_previous');
      firstItem.textContent = 'arrow_back';
    }

    tar.parentElement.children[1].textContent = firstVal;
    tar.parentElement.children[2].textContent = firstVal + 1;

    if (firstVal >= total - 4) {
      tar.textContent = firstVal + 2;
      tar.classList.remove('pagination__item_hidden');
    }

    var lastItem = tar.parentElement.children[5];
    var lastVal = offset + firstVal + 1;

    if (lastVal < total - 1) {
      tar.parentElement.children[5].classList.add('pagination__item_next');
      tar.parentElement.children[4].textContent = firstVal + offset + 1;
    } else {
      tar.parentElement.children[5].classList.remove('pagination__item_next');

      if (lastVal == total) {
        tar.parentElement.children[4].textContent = lastVal - 1;
        tar.parentElement.children[5].textContent = lastVal;
      } else if (lastVal == total - 1) {
        tar.parentElement.children[4].textContent = lastVal;
        tar.parentElement.children[5].textContent = lastVal + 1;
      }
    }

    return;
  }
  /* ------------обработка кнопки next-------------- */


  if (list.contains('pagination__item_next')) {
    var _current2 = tar.parentElement.querySelector('.pagination__item_current');

    var _firstVal = +tar.previousElementSibling.textContent + 1;

    _current2.classList.remove('pagination__item_current');

    tar.parentElement.children[0].textContent = "arrow_back";
    tar.parentElement.children[0].classList.add('pagination__item_previous');
    tar.parentElement.children[1].textContent = _firstVal;
    tar.parentElement.children[1].classList.add('pagination__item_current');
    tar.parentElement.children[2].textContent = _firstVal + 1;

    if (_firstVal >= total - 4) {
      tar.parentElement.children[3].textContent = _firstVal + 2;
      tar.parentElement.children[3].classList.remove('pagination__item_hidden');
      tar.parentElement.children[4].textContent = _firstVal + 3;
      tar.parentElement.children[5].textContent = _firstVal + 4;
      tar.parentElement.children[5].classList.remove('pagination__item_next');
      return;
    }

    var _lastVal = _firstVal + offset + 1;

    if (_lastVal == total - 1) {
      tar.parentElement.children[4].textContent = _lastVal;
      tar.textContent = total;
      tar.classList.remove('pagination__item_next');
      return;
    }

    if (_lastVal == total) {
      tar.parentElement.children[4].textContent = _lastVal - 1;
      tar.textContent = total;
      tar.classList.remove('pagination__item_next');
      return;
    }

    tar.parentElement.children[4].textContent = _firstVal + 1 + offset;
    return;
  }
  /* ---------------------обработка кнопки previous------------- */


  if (tar.classList.contains('pagination__item_previous')) {
    var _current3 = tar.parentNode.querySelector('.pagination__item_current');

    _current3.classList.remove('pagination__item_current');

    var first = +tar.nextElementSibling.textContent - offset - 1;
    if (first < 1) first = 1;

    if (first == 1) {
      tar.classList.remove('pagination__item_previous');
      tar.textContent = first++;
      tar.classList.add('pagination__item_current');
    }

    tar.parentElement.children[1].textContent = first;
    tar.parentElement.children[2].textContent = first + 1;
    tar.parentElement.children[3].classList.add('pagination__item_hidden');
    tar.parentElement.children[3].textContent = "...";
    tar.parentElement.children[4].textContent = first + offset + 1;

    if (!tar.classList.contains('pagination__item_current')) {
      tar.parentElement.children[1].classList.add('pagination__item_current');
    }

    return;
  }

  var current = tar.parentNode.querySelector('.pagination__item_current');
  current.classList.remove('pagination__item_current');
  list.add('pagination__item_current');
});

/***/ }),

/***/ "./blocks/radio/radio.js":
/*!*******************************!*\
  !*** ./blocks/radio/radio.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* $('.radio__item').click(function(){
    $('.radio__item .radio__input').removeAttr("checked");
    $(this).find('.radio__input').attr("checked",true);
}) */

/***/ }),

/***/ "./blocks/range-slider/range-slider.js":
/*!*********************************************!*\
  !*** ./blocks/range-slider/range-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ion-rangeslider */ "../node_modules/ion-rangeslider/js/ion.rangeSlider.js");
/* harmony import */ var ion_rangeslider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider__WEBPACK_IMPORTED_MODULE_0__);
/*  //------------------ТАК ПРИ ЗАГРУЗКЕ ОК ПРИ CHANGE НЕ ОК
import "ion-rangeslider"

let _setDiapason = function()   {
    let context = this;
    return function()  {
        let _from = $(context).prev().find(".irs-from").text();
        let _to = $(context).prev().find(".irs-to").text();
        let str = _from + "-" + _to;
        $(context).parent().prev().html(str);
        return;
    }
};

$(document).ready(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 15000,
        from: 5000,
        to: 10000,
        skin: "custom",
        hide_min_max: true,
        postfix: "&#8381;"
        // hide_from_to: true
        
    });
    $(".js-range-slider").on("change", _setDiapason.call($(this)));
    let elems = $(document).find(".js-range-slider");
    for (let elem of elems) {
        let boundF = _setDiapason.bind(elem);
        boundF()();
    }   
    
});  */
//------------------ТАК ПРИ ЗАГРУЗКЕ НЕ ОК ПРИ CHANGE  ОК

/* import "ion-rangeslider"

let _setDiapason = ()  => {
    return function() {
        let _from = $(this).prev().find(".irs-from").text();
        let _to = $(this).prev().find(".irs-to").text();
        let str = _from + "-" + _to;
        $(this).parent().prev().html(str);
        return;
    }
};
 
$(document).ready(function(){
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 15000,
        from: 5000,
        to: 10000,
        skin: "custom",
        hide_min_max: true,
        postfix: "&#8381;"
        // hide_from_to: true
        
    });
    let elems = document.querySelectorAll(".js-range-slider");
    for (let elem of elems) {
        let boundF = _setDiapason.bind(elem);
        _setDiapason()();
    }
    
    $(".js-range-slider").on("change", _setDiapason.call(this));
    
}); */
//---------------------КОСТЫЛЬ, Но надо двигаться дальше хоть как-то!


var _setDiapason = function _setDiapason() {
  var context = this;
  return function () {
    var _from = $(context).prev().find(".irs-from").text();

    var _to = $(context).prev().find(".irs-to").text();

    var str = _from + "-" + _to;
    $(context).parent().parent().find('.field__annotation').html(str);
    return;
  };
};

$(document).ready(function () {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 15000,
    from: 5000,
    to: 10000,
    skin: "custom",
    hide_min_max: true,
    postfix: "&#8381;",
    step: 100 // hide_from_to: true

  });
  $(".js-range-slider").on("change", function () {
    var _from = $(this).prev().find(".irs-from").text();

    var _to = $(this).prev().find(".irs-to").text();

    var str = _from + "-" + _to;
    $(this).parent().parent().find('.field__annotation').html(str);
  });
  var elems = $(document).find(".js-range-slider");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;

      var boundF = _setDiapason.bind(elem);

      boundF()();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/rate/rate.js":
/*!*****************************!*\
  !*** ./blocks/rate/rate.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var click = false;
$('.rate__star').mouseenter(function (event) {
  if (!$(this).parent().hasClass("rate_ratable")) return;
  $(this).addClass('rate__star_checked');
  $(this).prevAll().addClass('rate__star_checked');
  $(this).nextAll().removeClass('rate__star_checked');
});
$('.rate_ratable').mouseleave(function () {
  if (!click) $(this).children().removeClass('rate__star_checked');
});
$('.rate_ratable').mousedown(function () {
  click = true;
  $(this).removeClass('rate_ratable');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./layouts/UI kit/Forms/forms.js":
/*!***************************************!*\
  !*** ./layouts/UI kit/Forms/forms.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Blocks_input_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Blocks/input/input */ "./blocks/input/input.js");
/* harmony import */ var Blocks_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Blocks/range-slider/range-slider */ "./blocks/range-slider/range-slider.js");
/* harmony import */ var Blocks_expandable_expandable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Blocks/expandable/expandable */ "./blocks/expandable/expandable.js");
/* harmony import */ var Blocks_expandable_expandable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Blocks_expandable_expandable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Blocks_radio_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Blocks/radio/radio */ "./blocks/radio/radio.js");
/* harmony import */ var Blocks_radio_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Blocks_radio_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Blocks_like_like__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Blocks/like/like */ "./blocks/like/like.js");
/* harmony import */ var Blocks_like_like__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(Blocks_like_like__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Blocks_rate_rate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Blocks/rate/rate */ "./blocks/rate/rate.js");
/* harmony import */ var Blocks_rate_rate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Blocks_rate_rate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Blocks_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Blocks/button/button */ "./blocks/button/button.js");
/* harmony import */ var Blocks_button_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Blocks_button_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Blocks_pagination_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Blocks/pagination/pagination */ "./blocks/pagination/pagination.js");
/* harmony import */ var Blocks_pagination_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(Blocks_pagination_pagination__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./layouts/UI kit/UIKit.js":
/*!*********************************!*\
  !*** ./layouts/UI kit/UIKit.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UIKit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIKit.scss */ "./layouts/UI kit/UIKit.scss");
/* harmony import */ var _UIKit_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_UIKit_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Forms_forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms/forms.js */ "./layouts/UI kit/Forms/forms.js");



/***/ }),

/***/ "./layouts/UI kit/UIKit.scss":
/*!***********************************!*\
  !*** ./layouts/UI kit/UIKit.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./UIKit.scss */ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!./layouts/UI kit/UIKit.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=pages.js.map