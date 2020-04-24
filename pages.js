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

/***/ "./blocks sync recursive \\.js$":
/*!***************************!*\
  !*** ./blocks sync \.js$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/button.js": "./blocks/button/button.js",
	"./calendar/calendar.js": "./blocks/calendar/calendar.js",
	"./calendar/js/datepicker.js": "./blocks/calendar/js/datepicker.js",
	"./calendar/js/datepicker.min.js": "./blocks/calendar/js/datepicker.min.js",
	"./date-diapazon/date-diapazon.js": "./blocks/date-diapazon/date-diapazon.js",
	"./dropdown/data.js": "./blocks/dropdown/data.js",
	"./dropdown/dropdown.js": "./blocks/dropdown/dropdown.js",
	"./expandable/expandable.js": "./blocks/expandable/expandable.js",
	"./input/input.js": "./blocks/input/input.js",
	"./like/like.js": "./blocks/like/like.js",
	"./pagination/pagination.js": "./blocks/pagination/pagination.js",
	"./radio/radio.js": "./blocks/radio/radio.js",
	"./range-slider/range-slider.js": "./blocks/range-slider/range-slider.js",
	"./rate/rate.js": "./blocks/rate/rate.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./blocks sync recursive \\.js$";

/***/ }),

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./blocks/calendar/calendar.js":
/*!*************************************!*\
  !*** ./blocks/calendar/calendar.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _js_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/datepicker */ "./blocks/calendar/js/datepicker.js");
/* harmony import */ var _js_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_datepicker__WEBPACK_IMPORTED_MODULE_0__);

$('.calendar').datepicker({
  //inline: true,
  range: true,
  multipleDates: true,
  clearButton: true,
  todayButton: true
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/calendar/js/datepicker.js":
/*!******************************************!*\
  !*** ./blocks/calendar/js/datepicker.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function (window, $, undefined) {
  ;

  (function () {
    var VERSION = '2.2.3',
        pluginName = 'datepicker',
        autoInitSelector = '.datepicker-here',
        $body,
        $datepickersContainer,
        containerBuilt = false,
        baseTemplate = '' + '<div class="datepicker">' + '<i class="datepicker--pointer"></i>' + '<nav class="datepicker--nav"></nav>' + '<div class="datepicker--content"></div>' + '</div>',
        defaults = {
      classes: '',
      inline: false,
      language: 'ru',
      startDate: new Date(),
      firstDay: '',
      weekends: [6, 0],
      dateFormat: '',
      altField: '',
      altFieldDateFormat: '@',
      toggleSelected: true,
      keyboardNav: true,
      position: 'bottom left',
      offset: 12,
      view: 'days',
      minView: 'days',
      showOtherMonths: true,
      selectOtherMonths: true,
      moveToOtherMonthsOnSelect: true,
      showOtherYears: true,
      selectOtherYears: true,
      moveToOtherYearsOnSelect: true,
      minDate: '',
      maxDate: '',
      disableNavWhenOutOfRange: true,
      multipleDates: false,
      // Boolean or Number
      multipleDatesSeparator: ',',
      range: false,
      todayButton: false,
      clearButton: false,
      showEvent: 'focus',
      autoClose: false,
      // navigation
      monthsField: 'monthsShort',
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: 'MM  &nbsp; <span>yyyy</span>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
      },
      // timepicker
      timepicker: false,
      onlyTimepicker: false,
      dateTimeSeparator: ' ',
      timeFormat: '',
      minHours: 0,
      maxHours: 24,
      minMinutes: 0,
      maxMinutes: 59,
      hoursStep: 1,
      minutesStep: 1,
      // events
      onSelect: '',
      onShow: '',
      onHide: '',
      onChangeMonth: '',
      onChangeYear: '',
      onChangeDecade: '',
      onChangeView: '',
      onRenderCell: ''
    },
        hotKeys = {
      'ctrlRight': [17, 39],
      'ctrlUp': [17, 38],
      'ctrlLeft': [17, 37],
      'ctrlDown': [17, 40],
      'shiftRight': [16, 39],
      'shiftUp': [16, 38],
      'shiftLeft': [16, 37],
      'shiftDown': [16, 40],
      'altUp': [18, 38],
      'altRight': [18, 39],
      'altLeft': [18, 37],
      'altDown': [18, 40],
      'ctrlShiftUp': [16, 17, 38]
    },
        datepicker;

    var Datepicker = function Datepicker(el, options) {
      this.el = el;
      this.$el = $(el);
      this.opts = $.extend(true, {}, defaults, options, this.$el.data());

      if ($body == undefined) {
        $body = $('body');
      }

      if (!this.opts.startDate) {
        this.opts.startDate = new Date();
      }

      if (this.el.nodeName == 'INPUT') {
        this.elIsInput = true;
      }

      if (this.opts.altField) {
        this.$altField = typeof this.opts.altField == 'string' ? $(this.opts.altField) : this.opts.altField;
      }

      this.inited = false;
      this.visible = false;
      this.silent = false; // Need to prevent unnecessary rendering

      this.currentDate = this.opts.startDate;
      this.currentView = this.opts.view;

      this._createShortCuts();

      this.selectedDates = [];
      this.views = {};
      this.keys = [];
      this.minRange = '';
      this.maxRange = '';
      this._prevOnSelectValue = '';
      this.init();
    };

    datepicker = Datepicker;
    datepicker.prototype = {
      VERSION: VERSION,
      viewIndexes: ['days', 'months', 'years'],
      init: function init() {
        if (!containerBuilt && !this.opts.inline && this.elIsInput) {
          this._buildDatepickersContainer();
        }

        this._buildBaseHtml();

        this._defineLocale(this.opts.language);

        this._syncWithMinMaxDates();

        if (this.elIsInput) {
          if (!this.opts.inline) {
            // Set extra classes for proper transitions
            this._setPositionClasses(this.opts.position);

            this._bindEvents();
          }

          if (this.opts.keyboardNav && !this.opts.onlyTimepicker) {
            this._bindKeyboardEvents();
          }

          this.$datepicker.on('mousedown', this._onMouseDownDatepicker.bind(this));
          this.$datepicker.on('mouseup', this._onMouseUpDatepicker.bind(this));
        }

        if (this.opts.classes) {
          this.$datepicker.addClass(this.opts.classes);
        }

        if (this.opts.timepicker) {
          this.timepicker = new $.fn.datepicker.Timepicker(this, this.opts);

          this._bindTimepickerEvents();
        }

        if (this.opts.onlyTimepicker) {
          this.$datepicker.addClass('-only-timepicker-');
        }

        this.views[this.currentView] = new $.fn.datepicker.Body(this, this.currentView, this.opts);
        this.views[this.currentView].show();
        this.nav = new $.fn.datepicker.Navigation(this, this.opts);
        this.view = this.currentView;
        this.$el.on('clickCell.adp', this._onClickCell.bind(this));
        this.$datepicker.on('mouseenter', '.datepicker--cell', this._onMouseEnterCell.bind(this));
        this.$datepicker.on('mouseleave', '.datepicker--cell', this._onMouseLeaveCell.bind(this));
        this.inited = true;
      },
      _createShortCuts: function _createShortCuts() {
        this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-8639999913600000);
        this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(8639999913600000);
      },
      _bindEvents: function _bindEvents() {
        this.$el.on(this.opts.showEvent + '.adp', this._onShowEvent.bind(this));
        this.$el.on('mouseup.adp', this._onMouseUpEl.bind(this));
        this.$el.on('blur.adp', this._onBlur.bind(this));
        this.$el.on('keyup.adp', this._onKeyUpGeneral.bind(this));
        $(window).on('resize.adp', this._onResize.bind(this));
        $('body').on('mouseup.adp', this._onMouseUpBody.bind(this));
      },
      _bindKeyboardEvents: function _bindKeyboardEvents() {
        this.$el.on('keydown.adp', this._onKeyDown.bind(this));
        this.$el.on('keyup.adp', this._onKeyUp.bind(this));
        this.$el.on('hotKey.adp', this._onHotKey.bind(this));
      },
      _bindTimepickerEvents: function _bindTimepickerEvents() {
        this.$el.on('timeChange.adp', this._onTimeChange.bind(this));
      },
      isWeekend: function isWeekend(day) {
        return this.opts.weekends.indexOf(day) !== -1;
      },
      _defineLocale: function _defineLocale(lang) {
        if (typeof lang == 'string') {
          this.loc = $.fn.datepicker.language[lang];

          if (!this.loc) {
            console.warn('Can\'t find language "' + lang + '" in Datepicker.language, will use "ru" instead');
            this.loc = $.extend(true, {}, $.fn.datepicker.language.ru);
          }

          this.loc = $.extend(true, {}, $.fn.datepicker.language.ru, $.fn.datepicker.language[lang]);
        } else {
          this.loc = $.extend(true, {}, $.fn.datepicker.language.ru, lang);
        }

        if (this.opts.dateFormat) {
          this.loc.dateFormat = this.opts.dateFormat;
        }

        if (this.opts.timeFormat) {
          this.loc.timeFormat = this.opts.timeFormat;
        }

        if (this.opts.firstDay !== '') {
          this.loc.firstDay = this.opts.firstDay;
        }

        if (this.opts.timepicker) {
          this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator);
        }

        if (this.opts.onlyTimepicker) {
          this.loc.dateFormat = this.loc.timeFormat;
        }

        var boundary = this._getWordBoundaryRegExp;

        if (this.loc.timeFormat.match(boundary('aa')) || this.loc.timeFormat.match(boundary('AA'))) {
          this.ampm = true;
        }
      },
      _buildDatepickersContainer: function _buildDatepickersContainer() {
        containerBuilt = true;
        $body.append('<div class="datepickers-container" id="datepickers-container"></div>');
        $datepickersContainer = $('#datepickers-container');
      },
      _buildBaseHtml: function _buildBaseHtml() {
        var $appendTarget,
            $inline = $('<div class="datepicker-inline">');

        if (this.el.nodeName == 'INPUT') {
          if (!this.opts.inline) {
            $appendTarget = $datepickersContainer;
          } else {
            $appendTarget = $inline.insertAfter(this.$el);
          }
        } else {
          $appendTarget = $inline.appendTo(this.$el);
        }

        this.$datepicker = $(baseTemplate).appendTo($appendTarget);
        this.$content = $('.datepicker--content', this.$datepicker);
        this.$nav = $('.datepicker--nav', this.$datepicker);
      },
      _triggerOnChange: function _triggerOnChange() {
        if (!this.selectedDates.length) {
          // Prevent from triggering multiple onSelect callback with same argument (empty string) in IE10-11
          if (this._prevOnSelectValue === '') return;
          this._prevOnSelectValue = '';
          return this.opts.onSelect('', '', this);
        }

        var selectedDates = this.selectedDates,
            parsedSelected = datepicker.getParsedDate(selectedDates[0]),
            formattedDates,
            _this = this,
            dates = new Date(parsedSelected.year, parsedSelected.month, parsedSelected.date, parsedSelected.hours, parsedSelected.minutes);

        formattedDates = selectedDates.map(function (date) {
          return _this.formatDate(_this.loc.dateFormat, date);
        }).join(this.opts.multipleDatesSeparator); // Create new dates array, to separate it from original selectedDates

        if (this.opts.multipleDates || this.opts.range) {
          dates = selectedDates.map(function (date) {
            var parsedDate = datepicker.getParsedDate(date);
            return new Date(parsedDate.year, parsedDate.month, parsedDate.date, parsedDate.hours, parsedDate.minutes);
          });
        }

        this._prevOnSelectValue = formattedDates;
        this.opts.onSelect(formattedDates, dates, this);
      },
      next: function next() {
        var d = this.parsedDate,
            o = this.opts;

        switch (this.view) {
          case 'days':
            this.date = new Date(d.year, d.month + 1, 1);
            if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case 'months':
            this.date = new Date(d.year + 1, d.month, 1);
            if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
            break;

          case 'years':
            this.date = new Date(d.year + 10, 0, 1);
            if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
            break;
        }
      },
      prev: function prev() {
        var d = this.parsedDate,
            o = this.opts;

        switch (this.view) {
          case 'days':
            this.date = new Date(d.year, d.month - 1, 1);
            if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case 'months':
            this.date = new Date(d.year - 1, d.month, 1);
            if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
            break;

          case 'years':
            this.date = new Date(d.year - 10, 0, 1);
            if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
            break;
        }
      },
      formatDate: function formatDate(string, date) {
        date = date || this.date;
        var result = string,
            boundary = this._getWordBoundaryRegExp,
            locale = this.loc,
            leadingZero = datepicker.getLeadingZeroNum,
            decade = datepicker.getDecade(date),
            d = datepicker.getParsedDate(date),
            fullHours = d.fullHours,
            hours = d.hours,
            ampm = string.match(boundary('aa')) || string.match(boundary('AA')),
            dayPeriod = 'am',
            replacer = this._replacer,
            validHours;

        if (this.opts.timepicker && this.timepicker && ampm) {
          validHours = this.timepicker._getValidHoursFromDate(date, ampm);
          fullHours = leadingZero(validHours.hours);
          hours = validHours.hours;
          dayPeriod = validHours.dayPeriod;
        }

        switch (true) {
          case /@/.test(result):
            result = result.replace(/@/, date.getTime());

          case /aa/.test(result):
            result = replacer(result, boundary('aa'), dayPeriod);

          case /AA/.test(result):
            result = replacer(result, boundary('AA'), dayPeriod.toUpperCase());

          case /dd/.test(result):
            result = replacer(result, boundary('dd'), d.fullDate);

          case /d/.test(result):
            result = replacer(result, boundary('d'), d.date);

          case /DD/.test(result):
            result = replacer(result, boundary('DD'), locale.days[d.day]);

          case /D/.test(result):
            result = replacer(result, boundary('D'), locale.daysShort[d.day]);

          case /mm/.test(result):
            result = replacer(result, boundary('mm'), d.fullMonth);

          case /m/.test(result):
            result = replacer(result, boundary('m'), d.month + 1);

          case /MM/.test(result):
            result = replacer(result, boundary('MM'), this.loc.months[d.month]);

          case /M/.test(result):
            result = replacer(result, boundary('M'), locale.monthsShort[d.month]);

          case /ii/.test(result):
            result = replacer(result, boundary('ii'), d.fullMinutes);

          case /i/.test(result):
            result = replacer(result, boundary('i'), d.minutes);

          case /hh/.test(result):
            result = replacer(result, boundary('hh'), fullHours);

          case /h/.test(result):
            result = replacer(result, boundary('h'), hours);

          case /yyyy/.test(result):
            result = replacer(result, boundary('yyyy'), d.year);

          case /yyyy1/.test(result):
            result = replacer(result, boundary('yyyy1'), decade[0]);

          case /yyyy2/.test(result):
            result = replacer(result, boundary('yyyy2'), decade[1]);

          case /yy/.test(result):
            result = replacer(result, boundary('yy'), d.year.toString().slice(-2));
        }

        return result;
      },
      _replacer: function _replacer(str, reg, data) {
        return str.replace(reg, function (match, p1, p2, p3) {
          return p1 + data + p3;
        });
      },
      _getWordBoundaryRegExp: function _getWordBoundaryRegExp(sign) {
        var symbols = '\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;';
        return new RegExp('(^|>|' + symbols + ')(' + sign + ')($|<|' + symbols + ')', 'g');
      },
      selectDate: function selectDate(date) {
        var _this = this,
            opts = _this.opts,
            d = _this.parsedDate,
            selectedDates = _this.selectedDates,
            len = selectedDates.length,
            newDate = '';

        if (Array.isArray(date)) {
          date.forEach(function (d) {
            _this.selectDate(d);
          });
          return;
        }

        if (!(date instanceof Date)) return;
        this.lastSelectedDate = date; // Set new time values from Date

        if (this.timepicker) {
          this.timepicker._setTime(date);
        } // On this step timepicker will set valid values in it's instance


        _this._trigger('selectDate', date); // Set correct time values after timepicker's validation
        // Prevent from setting hours or minutes which values are lesser then `min` value or
        // greater then `max` value


        if (this.timepicker) {
          date.setHours(this.timepicker.hours);
          date.setMinutes(this.timepicker.minutes);
        }

        if (_this.view == 'days') {
          if (date.getMonth() != d.month && opts.moveToOtherMonthsOnSelect) {
            newDate = new Date(date.getFullYear(), date.getMonth(), 1);
          }
        }

        if (_this.view == 'years') {
          if (date.getFullYear() != d.year && opts.moveToOtherYearsOnSelect) {
            newDate = new Date(date.getFullYear(), 0, 1);
          }
        }

        if (newDate) {
          _this.silent = true;
          _this.date = newDate;
          _this.silent = false;

          _this.nav._render();
        }

        if (opts.multipleDates && !opts.range) {
          // Set priority to range functionality
          if (len === opts.multipleDates) return;

          if (!_this._isSelected(date)) {
            _this.selectedDates.push(date);
          }
        } else if (opts.range) {
          if (len == 2) {
            _this.selectedDates = [date];
            _this.minRange = date;
            _this.maxRange = '';
          } else if (len == 1) {
            _this.selectedDates.push(date);

            if (!_this.maxRange) {
              _this.maxRange = date;
            } else {
              _this.minRange = date;
            } // Swap dates if they were selected via dp.selectDate() and second date was smaller then first


            if (datepicker.bigger(_this.maxRange, _this.minRange)) {
              _this.maxRange = _this.minRange;
              _this.minRange = date;
            }

            _this.selectedDates = [_this.minRange, _this.maxRange];
          } else {
            _this.selectedDates = [date];
            _this.minRange = date;
          }
        } else {
          _this.selectedDates = [date];
        }

        _this._setInputValue();

        if (opts.onSelect) {
          _this._triggerOnChange();
        }

        if (opts.autoClose && !this.timepickerIsActive) {
          if (!opts.multipleDates && !opts.range) {
            _this.hide();
          } else if (opts.range && _this.selectedDates.length == 2) {
            _this.hide();
          }
        }

        _this.views[this.currentView]._render();
      },
      removeDate: function removeDate(date) {
        var selected = this.selectedDates,
            _this = this;

        if (!(date instanceof Date)) return;
        return selected.some(function (curDate, i) {
          if (datepicker.isSame(curDate, date)) {
            selected.splice(i, 1);

            if (!_this.selectedDates.length) {
              _this.minRange = '';
              _this.maxRange = '';
              _this.lastSelectedDate = '';
            } else {
              _this.lastSelectedDate = _this.selectedDates[_this.selectedDates.length - 1];
            }

            _this.views[_this.currentView]._render();

            _this._setInputValue();

            if (_this.opts.onSelect) {
              _this._triggerOnChange();
            }

            return true;
          }
        });
      },
      today: function today() {
        this.silent = true;
        this.view = this.opts.minView;
        this.silent = false;
        this.date = new Date();

        if (this.opts.todayButton instanceof Date) {
          this.selectDate(this.opts.todayButton);
        }
      },
      clear: function clear() {
        this.selectedDates = [];
        this.minRange = '';
        this.maxRange = '';

        this.views[this.currentView]._render();

        this._setInputValue();

        if (this.opts.onSelect) {
          this._triggerOnChange();
        }
      },

      /**
       * Updates datepicker options
       * @param {String|Object} param - parameter's name to update. If object then it will extend current options
       * @param {String|Number|Object} [value] - new param value
       */
      update: function update(param, value) {
        var len = arguments.length,
            lastSelectedDate = this.lastSelectedDate;

        if (len == 2) {
          this.opts[param] = value;
        } else if (len == 1 && _typeof(param) == 'object') {
          this.opts = $.extend(true, this.opts, param);
        }

        this._createShortCuts();

        this._syncWithMinMaxDates();

        this._defineLocale(this.opts.language);

        this.nav._addButtonsIfNeed();

        if (!this.opts.onlyTimepicker) this.nav._render();

        this.views[this.currentView]._render();

        if (this.elIsInput && !this.opts.inline) {
          this._setPositionClasses(this.opts.position);

          if (this.visible) {
            this.setPosition(this.opts.position);
          }
        }

        if (this.opts.classes) {
          this.$datepicker.addClass(this.opts.classes);
        }

        if (this.opts.onlyTimepicker) {
          this.$datepicker.addClass('-only-timepicker-');
        }

        if (this.opts.timepicker) {
          if (lastSelectedDate) this.timepicker._handleDate(lastSelectedDate);

          this.timepicker._updateRanges();

          this.timepicker._updateCurrentTime(); // Change hours and minutes if it's values have been changed through min/max hours/minutes


          if (lastSelectedDate) {
            lastSelectedDate.setHours(this.timepicker.hours);
            lastSelectedDate.setMinutes(this.timepicker.minutes);
          }
        }

        this._setInputValue();

        return this;
      },
      _syncWithMinMaxDates: function _syncWithMinMaxDates() {
        var curTime = this.date.getTime();
        this.silent = true;

        if (this.minTime > curTime) {
          this.date = this.minDate;
        }

        if (this.maxTime < curTime) {
          this.date = this.maxDate;
        }

        this.silent = false;
      },
      _isSelected: function _isSelected(checkDate, cellType) {
        var res = false;
        this.selectedDates.some(function (date) {
          if (datepicker.isSame(date, checkDate, cellType)) {
            res = date;
            return true;
          }
        });
        return res;
      },
      _setInputValue: function _setInputValue() {
        var _this = this,
            opts = _this.opts,
            format = _this.loc.dateFormat,
            altFormat = opts.altFieldDateFormat,
            value = _this.selectedDates.map(function (date) {
          return _this.formatDate(format, date);
        }),
            altValues;

        if (opts.altField && _this.$altField.length) {
          altValues = this.selectedDates.map(function (date) {
            return _this.formatDate(altFormat, date);
          });
          altValues = altValues.join(this.opts.multipleDatesSeparator);
          this.$altField.val(altValues);
        }

        value = value.join(this.opts.multipleDatesSeparator);
        this.$el.val(value);
      },

      /**
       * Check if date is between minDate and maxDate
       * @param date {object} - date object
       * @param type {string} - cell type
       * @returns {boolean}
       * @private
       */
      _isInRange: function _isInRange(date, type) {
        var time = date.getTime(),
            d = datepicker.getParsedDate(date),
            min = datepicker.getParsedDate(this.minDate),
            max = datepicker.getParsedDate(this.maxDate),
            dMinTime = new Date(d.year, d.month, min.date).getTime(),
            dMaxTime = new Date(d.year, d.month, max.date).getTime(),
            types = {
          day: time >= this.minTime && time <= this.maxTime,
          month: dMinTime >= this.minTime && dMaxTime <= this.maxTime,
          year: d.year >= min.year && d.year <= max.year
        };
        return type ? types[type] : types.day;
      },
      _getDimensions: function _getDimensions($el) {
        var offset = $el.offset();
        return {
          width: $el.outerWidth(),
          height: $el.outerHeight(),
          left: offset.left,
          top: offset.top
        };
      },
      _getDateFromCell: function _getDateFromCell(cell) {
        var curDate = this.parsedDate,
            year = cell.data('year') || curDate.year,
            month = cell.data('month') == undefined ? curDate.month : cell.data('month'),
            date = cell.data('date') || 1;
        return new Date(year, month, date);
      },
      _setPositionClasses: function _setPositionClasses(pos) {
        pos = pos.split(' ');
        var main = pos[0],
            sec = pos[1],
            classes = 'datepicker -' + main + '-' + sec + '- -from-' + main + '-';
        if (this.visible) classes += ' active';
        this.$datepicker.removeAttr('class').addClass(classes);
      },
      setPosition: function setPosition(position) {
        position = position || this.opts.position;

        var dims = this._getDimensions(this.$el),
            selfDims = this._getDimensions(this.$datepicker),
            pos = position.split(' '),
            top,
            left,
            offset = this.opts.offset,
            main = pos[0],
            secondary = pos[1];

        switch (main) {
          case 'top':
            top = dims.top - selfDims.height - offset;
            break;

          case 'right':
            left = dims.left + dims.width + offset;
            break;

          case 'bottom':
            top = dims.top + dims.height + offset;
            break;

          case 'left':
            left = dims.left - selfDims.width - offset;
            break;
        }

        switch (secondary) {
          case 'top':
            top = dims.top;
            break;

          case 'right':
            left = dims.left + dims.width - selfDims.width;
            break;

          case 'bottom':
            top = dims.top + dims.height - selfDims.height;
            break;

          case 'left':
            left = dims.left;
            break;

          case 'center':
            if (/left|right/.test(main)) {
              top = dims.top + dims.height / 2 - selfDims.height / 2;
            } else {
              left = dims.left + dims.width / 2 - selfDims.width / 2;
            }

        }

        this.$datepicker.css({
          left: left,
          top: top
        });
      },
      show: function show() {
        var onShow = this.opts.onShow;
        this.setPosition(this.opts.position);
        this.$datepicker.addClass('active');
        this.visible = true;

        if (onShow) {
          this._bindVisionEvents(onShow);
        }
      },
      hide: function hide() {
        var onHide = this.opts.onHide;
        this.$datepicker.removeClass('active').css({
          left: '-100000px'
        });
        this.focused = '';
        this.keys = [];
        this.inFocus = false;
        this.visible = false;
        this.$el.blur();

        if (onHide) {
          this._bindVisionEvents(onHide);
        }
      },
      down: function down(date) {
        this._changeView(date, 'down');
      },
      up: function up(date) {
        this._changeView(date, 'up');
      },
      _bindVisionEvents: function _bindVisionEvents(event) {
        this.$datepicker.off('transitionend.dp');
        event(this, false);
        this.$datepicker.one('transitionend.dp', event.bind(this, this, true));
      },
      _changeView: function _changeView(date, dir) {
        date = date || this.focused || this.date;
        var nextView = dir == 'up' ? this.viewIndex + 1 : this.viewIndex - 1;
        if (nextView > 2) nextView = 2;
        if (nextView < 0) nextView = 0;
        this.silent = true;
        this.date = new Date(date.getFullYear(), date.getMonth(), 1);
        this.silent = false;
        this.view = this.viewIndexes[nextView];
      },
      _handleHotKey: function _handleHotKey(key) {
        var date = datepicker.getParsedDate(this._getFocusedDate()),
            focusedParsed,
            o = this.opts,
            newDate,
            totalDaysInNextMonth,
            monthChanged = false,
            yearChanged = false,
            decadeChanged = false,
            y = date.year,
            m = date.month,
            d = date.date;

        switch (key) {
          case 'ctrlRight':
          case 'ctrlUp':
            m += 1;
            monthChanged = true;
            break;

          case 'ctrlLeft':
          case 'ctrlDown':
            m -= 1;
            monthChanged = true;
            break;

          case 'shiftRight':
          case 'shiftUp':
            yearChanged = true;
            y += 1;
            break;

          case 'shiftLeft':
          case 'shiftDown':
            yearChanged = true;
            y -= 1;
            break;

          case 'altRight':
          case 'altUp':
            decadeChanged = true;
            y += 10;
            break;

          case 'altLeft':
          case 'altDown':
            decadeChanged = true;
            y -= 10;
            break;

          case 'ctrlShiftUp':
            this.up();
            break;
        }

        totalDaysInNextMonth = datepicker.getDaysCount(new Date(y, m));
        newDate = new Date(y, m, d); // If next month has less days than current, set date to total days in that month

        if (totalDaysInNextMonth < d) d = totalDaysInNextMonth; // Check if newDate is in valid range

        if (newDate.getTime() < this.minTime) {
          newDate = this.minDate;
        } else if (newDate.getTime() > this.maxTime) {
          newDate = this.maxDate;
        }

        this.focused = newDate;
        focusedParsed = datepicker.getParsedDate(newDate);

        if (monthChanged && o.onChangeMonth) {
          o.onChangeMonth(focusedParsed.month, focusedParsed.year);
        }

        if (yearChanged && o.onChangeYear) {
          o.onChangeYear(focusedParsed.year);
        }

        if (decadeChanged && o.onChangeDecade) {
          o.onChangeDecade(this.curDecade);
        }
      },
      _registerKey: function _registerKey(key) {
        var exists = this.keys.some(function (curKey) {
          return curKey == key;
        });

        if (!exists) {
          this.keys.push(key);
        }
      },
      _unRegisterKey: function _unRegisterKey(key) {
        var index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
      },
      _isHotKeyPressed: function _isHotKeyPressed() {
        var currentHotKey,
            found = false,
            _this = this,
            pressedKeys = this.keys.sort();

        for (var hotKey in hotKeys) {
          currentHotKey = hotKeys[hotKey];
          if (pressedKeys.length != currentHotKey.length) continue;

          if (currentHotKey.every(function (key, i) {
            return key == pressedKeys[i];
          })) {
            _this._trigger('hotKey', hotKey);

            found = true;
          }
        }

        return found;
      },
      _trigger: function _trigger(event, args) {
        this.$el.trigger(event, args);
      },
      _focusNextCell: function _focusNextCell(keyCode, type) {
        type = type || this.cellType;
        var date = datepicker.getParsedDate(this._getFocusedDate()),
            y = date.year,
            m = date.month,
            d = date.date;

        if (this._isHotKeyPressed()) {
          return;
        }

        switch (keyCode) {
          case 37:
            // left
            type == 'day' ? d -= 1 : '';
            type == 'month' ? m -= 1 : '';
            type == 'year' ? y -= 1 : '';
            break;

          case 38:
            // up
            type == 'day' ? d -= 7 : '';
            type == 'month' ? m -= 3 : '';
            type == 'year' ? y -= 4 : '';
            break;

          case 39:
            // right
            type == 'day' ? d += 1 : '';
            type == 'month' ? m += 1 : '';
            type == 'year' ? y += 1 : '';
            break;

          case 40:
            // down
            type == 'day' ? d += 7 : '';
            type == 'month' ? m += 3 : '';
            type == 'year' ? y += 4 : '';
            break;
        }

        var nd = new Date(y, m, d);

        if (nd.getTime() < this.minTime) {
          nd = this.minDate;
        } else if (nd.getTime() > this.maxTime) {
          nd = this.maxDate;
        }

        this.focused = nd;
      },
      _getFocusedDate: function _getFocusedDate() {
        var focused = this.focused || this.selectedDates[this.selectedDates.length - 1],
            d = this.parsedDate;

        if (!focused) {
          switch (this.view) {
            case 'days':
              focused = new Date(d.year, d.month, new Date().getDate());
              break;

            case 'months':
              focused = new Date(d.year, d.month, 1);
              break;

            case 'years':
              focused = new Date(d.year, 0, 1);
              break;
          }
        }

        return focused;
      },
      _getCell: function _getCell(date, type) {
        type = type || this.cellType;
        var d = datepicker.getParsedDate(date),
            selector = '.datepicker--cell[data-year="' + d.year + '"]',
            $cell;

        switch (type) {
          case 'month':
            selector = '[data-month="' + d.month + '"]';
            break;

          case 'day':
            selector += '[data-month="' + d.month + '"][data-date="' + d.date + '"]';
            break;
        }

        $cell = this.views[this.currentView].$el.find(selector);
        return $cell.length ? $cell : $('');
      },
      destroy: function destroy() {
        var _this = this;

        _this.$el.off('.adp').data('datepicker', '');

        _this.selectedDates = [];
        _this.focused = '';
        _this.views = {};
        _this.keys = [];
        _this.minRange = '';
        _this.maxRange = '';

        if (_this.opts.inline || !_this.elIsInput) {
          _this.$datepicker.closest('.datepicker-inline').remove();
        } else {
          _this.$datepicker.remove();
        }
      },
      _handleAlreadySelectedDates: function _handleAlreadySelectedDates(alreadySelected, selectedDate) {
        if (this.opts.range) {
          if (!this.opts.toggleSelected) {
            // Add possibility to select same date when range is true
            if (this.selectedDates.length != 2) {
              this._trigger('clickCell', selectedDate);
            }
          } else {
            this.removeDate(selectedDate);
          }
        } else if (this.opts.toggleSelected) {
          this.removeDate(selectedDate);
        } // Change last selected date to be able to change time when clicking on this cell


        if (!this.opts.toggleSelected) {
          this.lastSelectedDate = alreadySelected;

          if (this.opts.timepicker) {
            this.timepicker._setTime(alreadySelected);

            this.timepicker.update();
          }
        }
      },
      _onShowEvent: function _onShowEvent(e) {
        if (!this.visible) {
          this.show();
        }
      },
      _onBlur: function _onBlur() {
        if (!this.inFocus && this.visible) {
          this.hide();
        }
      },
      _onMouseDownDatepicker: function _onMouseDownDatepicker(e) {
        this.inFocus = true;
      },
      _onMouseUpDatepicker: function _onMouseUpDatepicker(e) {
        this.inFocus = false;
        e.originalEvent.inFocus = true;
        if (!e.originalEvent.timepickerFocus) this.$el.focus();
      },
      _onKeyUpGeneral: function _onKeyUpGeneral(e) {
        var val = this.$el.val();

        if (!val) {
          this.clear();
        }
      },
      _onResize: function _onResize() {
        if (this.visible) {
          this.setPosition();
        }
      },
      _onMouseUpBody: function _onMouseUpBody(e) {
        if (e.originalEvent.inFocus) return;

        if (this.visible && !this.inFocus) {
          this.hide();
        }
      },
      _onMouseUpEl: function _onMouseUpEl(e) {
        e.originalEvent.inFocus = true;
        setTimeout(this._onKeyUpGeneral.bind(this), 4);
      },
      _onKeyDown: function _onKeyDown(e) {
        var code = e.which;

        this._registerKey(code); // Arrows


        if (code >= 37 && code <= 40) {
          e.preventDefault();

          this._focusNextCell(code);
        } // Enter


        if (code == 13) {
          if (this.focused) {
            if (this._getCell(this.focused).hasClass('-disabled-')) return;

            if (this.view != this.opts.minView) {
              this.down();
            } else {
              var alreadySelected = this._isSelected(this.focused, this.cellType);

              if (!alreadySelected) {
                if (this.timepicker) {
                  this.focused.setHours(this.timepicker.hours);
                  this.focused.setMinutes(this.timepicker.minutes);
                }

                this.selectDate(this.focused);
                return;
              }

              this._handleAlreadySelectedDates(alreadySelected, this.focused);
            }
          }
        } // Esc


        if (code == 27) {
          this.hide();
        }
      },
      _onKeyUp: function _onKeyUp(e) {
        var code = e.which;

        this._unRegisterKey(code);
      },
      _onHotKey: function _onHotKey(e, hotKey) {
        this._handleHotKey(hotKey);
      },
      _onMouseEnterCell: function _onMouseEnterCell(e) {
        var $cell = $(e.target).closest('.datepicker--cell'),
            date = this._getDateFromCell($cell); // Prevent from unnecessary rendering and setting new currentDate


        this.silent = true;

        if (this.focused) {
          this.focused = '';
        }

        $cell.addClass('-focus-');
        this.focused = date;
        this.silent = false;

        if (this.opts.range && this.selectedDates.length == 1) {
          this.minRange = this.selectedDates[0];
          this.maxRange = '';

          if (datepicker.less(this.minRange, this.focused)) {
            this.maxRange = this.minRange;
            this.minRange = '';
          }

          this.views[this.currentView]._update();
        }
      },
      _onMouseLeaveCell: function _onMouseLeaveCell(e) {
        var $cell = $(e.target).closest('.datepicker--cell');
        $cell.removeClass('-focus-');
        this.silent = true;
        this.focused = '';
        this.silent = false;
      },
      _onTimeChange: function _onTimeChange(e, h, m) {
        var date = new Date(),
            selectedDates = this.selectedDates,
            selected = false;

        if (selectedDates.length) {
          selected = true;
          date = this.lastSelectedDate;
        }

        date.setHours(h);
        date.setMinutes(m);

        if (!selected && !this._getCell(date).hasClass('-disabled-')) {
          this.selectDate(date);
        } else {
          this._setInputValue();

          if (this.opts.onSelect) {
            this._triggerOnChange();
          }
        }
      },
      _onClickCell: function _onClickCell(e, date) {
        if (this.timepicker) {
          date.setHours(this.timepicker.hours);
          date.setMinutes(this.timepicker.minutes);
        }

        this.selectDate(date);
      },

      set focused(val) {
        if (!val && this.focused) {
          var $cell = this._getCell(this.focused);

          if ($cell.length) {
            $cell.removeClass('-focus-');
          }
        }

        this._focused = val;

        if (this.opts.range && this.selectedDates.length == 1) {
          this.minRange = this.selectedDates[0];
          this.maxRange = '';

          if (datepicker.less(this.minRange, this._focused)) {
            this.maxRange = this.minRange;
            this.minRange = '';
          }
        }

        if (this.silent) return;
        this.date = val;
      },

      get focused() {
        return this._focused;
      },

      get parsedDate() {
        return datepicker.getParsedDate(this.date);
      },

      set date(val) {
        if (!(val instanceof Date)) return;
        this.currentDate = val;

        if (this.inited && !this.silent) {
          this.views[this.view]._render();

          this.nav._render();

          if (this.visible && this.elIsInput) {
            this.setPosition();
          }
        }

        return val;
      },

      get date() {
        return this.currentDate;
      },

      set view(val) {
        this.viewIndex = this.viewIndexes.indexOf(val);

        if (this.viewIndex < 0) {
          return;
        }

        this.prevView = this.currentView;
        this.currentView = val;

        if (this.inited) {
          if (!this.views[val]) {
            this.views[val] = new $.fn.datepicker.Body(this, val, this.opts);
          } else {
            this.views[val]._render();
          }

          this.views[this.prevView].hide();
          this.views[val].show();

          this.nav._render();

          if (this.opts.onChangeView) {
            this.opts.onChangeView(val);
          }

          if (this.elIsInput && this.visible) this.setPosition();
        }

        return val;
      },

      get view() {
        return this.currentView;
      },

      get cellType() {
        return this.view.substring(0, this.view.length - 1);
      },

      get minTime() {
        var min = datepicker.getParsedDate(this.minDate);
        return new Date(min.year, min.month, min.date).getTime();
      },

      get maxTime() {
        var max = datepicker.getParsedDate(this.maxDate);
        return new Date(max.year, max.month, max.date).getTime();
      },

      get curDecade() {
        return datepicker.getDecade(this.date);
      }

    }; //  Utils
    // -------------------------------------------------

    datepicker.getDaysCount = function (date) {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    datepicker.getParsedDate = function (date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        fullMonth: date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
        // One based
        date: date.getDate(),
        fullDate: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
        day: date.getDay(),
        hours: date.getHours(),
        fullHours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes: date.getMinutes(),
        fullMinutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      };
    };

    datepicker.getDecade = function (date) {
      var firstYear = Math.floor(date.getFullYear() / 10) * 10;
      return [firstYear, firstYear + 9];
    };

    datepicker.template = function (str, data) {
      return str.replace(/#\{([\w]+)\}/g, function (source, match) {
        if (data[match] || data[match] === 0) {
          return data[match];
        }
      });
    };

    datepicker.isSame = function (date1, date2, type) {
      if (!date1 || !date2) return false;

      var d1 = datepicker.getParsedDate(date1),
          d2 = datepicker.getParsedDate(date2),
          _type = type ? type : 'day',
          conditions = {
        day: d1.date == d2.date && d1.month == d2.month && d1.year == d2.year,
        month: d1.month == d2.month && d1.year == d2.year,
        year: d1.year == d2.year
      };

      return conditions[_type];
    };

    datepicker.less = function (dateCompareTo, date, type) {
      if (!dateCompareTo || !date) return false;
      return date.getTime() < dateCompareTo.getTime();
    };

    datepicker.bigger = function (dateCompareTo, date, type) {
      if (!dateCompareTo || !date) return false;
      return date.getTime() > dateCompareTo.getTime();
    };

    datepicker.getLeadingZeroNum = function (num) {
      return parseInt(num) < 10 ? '0' + num : num;
    };
    /**
     * Returns copy of date with hours and minutes equals to 0
     * @param date {Date}
     */


    datepicker.resetTime = function (date) {
      if (_typeof(date) != 'object') return;
      date = datepicker.getParsedDate(date);
      return new Date(date.year, date.month, date.date);
    };

    $.fn.datepicker = function (options) {
      return this.each(function () {
        if (!$.data(this, pluginName)) {
          $.data(this, pluginName, new Datepicker(this, options));
        } else {
          var _this = $.data(this, pluginName);

          _this.opts = $.extend(true, _this.opts, options);

          _this.update();
        }
      });
    };

    $.fn.datepicker.Constructor = Datepicker;
    $.fn.datepicker.language = {
      ru: {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Применить',
        clear: 'Очистить',
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        firstDay: 1
      }
    };
    $(function () {
      $(autoInitSelector).datepicker();
    });
  })();

  ;

  (function () {
    var templates = {
      days: '' + '<div class="datepicker--days datepicker--body">' + '<div class="datepicker--days-names"></div>' + '<div class="datepicker--cells datepicker--cells-days"></div>' + '</div>',
      months: '' + '<div class="datepicker--months datepicker--body">' + '<div class="datepicker--cells datepicker--cells-months"></div>' + '</div>',
      years: '' + '<div class="datepicker--years datepicker--body">' + '<div class="datepicker--cells datepicker--cells-years"></div>' + '</div>'
    },
        datepicker = $.fn.datepicker,
        dp = datepicker.Constructor;

    datepicker.Body = function (d, type, opts) {
      this.d = d;
      this.type = type;
      this.opts = opts;
      this.$el = $('');
      if (this.opts.onlyTimepicker) return;
      this.init();
    };

    datepicker.Body.prototype = {
      init: function init() {
        this._buildBaseHtml();

        this._render();

        this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.$el.on('click', '.datepicker--cell', $.proxy(this._onClickCell, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        this.$el = $(templates[this.type]).appendTo(this.d.$content);
        this.$names = $('.datepicker--days-names', this.$el);
        this.$cells = $('.datepicker--cells', this.$el);
      },
      _getDayNamesHtml: function _getDayNamesHtml(firstDay, curDay, html, i) {
        curDay = curDay != undefined ? curDay : firstDay;
        html = html ? html : '';
        i = i != undefined ? i : 0;
        if (i > 7) return html;
        if (curDay == 7) return this._getDayNamesHtml(firstDay, 0, html, ++i);
        html += '<div class="datepicker--day-name' + (this.d.isWeekend(curDay) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[curDay] + '</div>';
        return this._getDayNamesHtml(firstDay, ++curDay, html, ++i);
      },
      _getCellContents: function _getCellContents(date, type) {
        var classes = "datepicker--cell datepicker--cell-" + type,
            currentDate = new Date(),
            parent = this.d,
            minRange = dp.resetTime(parent.minRange),
            maxRange = dp.resetTime(parent.maxRange),
            opts = parent.opts,
            d = dp.getParsedDate(date),
            render = {},
            html = d.date;

        switch (type) {
          case 'day':
            if (parent.isWeekend(d.day)) classes += " -weekend-";

            if (d.month != this.d.parsedDate.month) {
              classes += " -other-month-";

              if (!opts.selectOtherMonths) {
                classes += " -disabled-";
              }

              if (!opts.showOtherMonths) html = '';
            }

            break;

          case 'month':
            html = parent.loc[parent.opts.monthsField][d.month];
            break;

          case 'year':
            var decade = parent.curDecade;
            html = d.year;

            if (d.year < decade[0] || d.year > decade[1]) {
              classes += ' -other-decade-';

              if (!opts.selectOtherYears) {
                classes += " -disabled-";
              }

              if (!opts.showOtherYears) html = '';
            }

            break;
        }

        if (opts.onRenderCell) {
          render = opts.onRenderCell(date, type) || {};
          html = render.html ? render.html : html;
          classes += render.classes ? ' ' + render.classes : '';
        }

        if (opts.range) {
          if (dp.isSame(minRange, date, type)) classes += ' -range-from-';
          if (dp.isSame(maxRange, date, type)) classes += ' -range-to-';

          if (parent.selectedDates.length == 1 && parent.focused) {
            if (dp.bigger(minRange, date) && dp.less(parent.focused, date) || dp.less(maxRange, date) && dp.bigger(parent.focused, date)) {
              classes += ' -in-range-';
            }

            if (dp.less(maxRange, date) && dp.isSame(parent.focused, date)) {
              classes += ' -range-from-';
            }

            if (dp.bigger(minRange, date) && dp.isSame(parent.focused, date)) {
              classes += ' -range-to-';
            }
          } else if (parent.selectedDates.length == 2) {
            if (dp.bigger(minRange, date) && dp.less(maxRange, date)) {
              classes += ' -in-range-';
            }
          }
        }

        if (dp.isSame(currentDate, date, type)) classes += ' -current-';
        if (parent.focused && dp.isSame(date, parent.focused, type)) classes += ' -focus-';
        if (parent._isSelected(date, type)) classes += ' -selected-';
        if (!parent._isInRange(date, type) || render.disabled) classes += ' -disabled-';
        return {
          html: html,
          classes: classes
        };
      },

      /**
       * Calculates days number to render. Generates days html and returns it.
       * @param {object} date - Date object
       * @returns {string}
       * @private
       */
      _getDaysHtml: function _getDaysHtml(date) {
        var totalMonthDays = dp.getDaysCount(date),
            firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
            lastMonthDay = new Date(date.getFullYear(), date.getMonth(), totalMonthDays).getDay(),
            daysFromPevMonth = firstMonthDay - this.d.loc.firstDay,
            daysFromNextMonth = 6 - lastMonthDay + this.d.loc.firstDay;
        daysFromPevMonth = daysFromPevMonth < 0 ? daysFromPevMonth + 7 : daysFromPevMonth;
        daysFromNextMonth = daysFromNextMonth > 6 ? daysFromNextMonth - 7 : daysFromNextMonth;
        var startDayIndex = -daysFromPevMonth + 1,
            m,
            y,
            html = '';

        for (var i = startDayIndex, max = totalMonthDays + daysFromNextMonth; i <= max; i++) {
          y = date.getFullYear();
          m = date.getMonth();
          html += this._getDayHtml(new Date(y, m, i));
        }

        return html;
      },
      _getDayHtml: function _getDayHtml(date) {
        var content = this._getCellContents(date, 'day');

        return '<div class="' + content.classes + '" ' + 'data-date="' + date.getDate() + '" ' + 'data-month="' + date.getMonth() + '" ' + 'data-year="' + date.getFullYear() + '">' + content.html + '</div>';
      },

      /**
       * Generates months html
       * @param {object} date - date instance
       * @returns {string}
       * @private
       */
      _getMonthsHtml: function _getMonthsHtml(date) {
        var html = '',
            d = dp.getParsedDate(date),
            i = 0;

        while (i < 12) {
          html += this._getMonthHtml(new Date(d.year, i));
          i++;
        }

        return html;
      },
      _getMonthHtml: function _getMonthHtml(date) {
        var content = this._getCellContents(date, 'month');

        return '<div class="' + content.classes + '" data-month="' + date.getMonth() + '">' + content.html + '</div>';
      },
      _getYearsHtml: function _getYearsHtml(date) {
        var d = dp.getParsedDate(date),
            decade = dp.getDecade(date),
            firstYear = decade[0] - 1,
            html = '',
            i = firstYear;

        for (i; i <= decade[1] + 1; i++) {
          html += this._getYearHtml(new Date(i, 0));
        }

        return html;
      },
      _getYearHtml: function _getYearHtml(date) {
        var content = this._getCellContents(date, 'year');

        return '<div class="' + content.classes + '" data-year="' + date.getFullYear() + '">' + content.html + '</div>';
      },
      _renderTypes: {
        days: function days() {
          var dayNames = this._getDayNamesHtml(this.d.loc.firstDay),
              days = this._getDaysHtml(this.d.currentDate);

          this.$cells.html(days);
          this.$names.html(dayNames);
        },
        months: function months() {
          var html = this._getMonthsHtml(this.d.currentDate);

          this.$cells.html(html);
        },
        years: function years() {
          var html = this._getYearsHtml(this.d.currentDate);

          this.$cells.html(html);
        }
      },
      _render: function _render() {
        if (this.opts.onlyTimepicker) return;

        this._renderTypes[this.type].bind(this)();
      },
      _update: function _update() {
        var $cells = $('.datepicker--cell', this.$cells),
            _this = this,
            classes,
            $cell,
            date;

        $cells.each(function (cell, i) {
          $cell = $(this);
          date = _this.d._getDateFromCell($(this));
          classes = _this._getCellContents(date, _this.d.cellType);
          $cell.attr('class', classes.classes);
        });
      },
      show: function show() {
        if (this.opts.onlyTimepicker) return;
        this.$el.addClass('active');
        this.acitve = true;
      },
      hide: function hide() {
        this.$el.removeClass('active');
        this.active = false;
      },
      //  Events
      // -------------------------------------------------
      _handleClick: function _handleClick(el) {
        var date = el.data('date') || 1,
            month = el.data('month') || 0,
            year = el.data('year') || this.d.parsedDate.year,
            dp = this.d; // Change view if min view does not reach yet

        if (dp.view != this.opts.minView) {
          dp.down(new Date(year, month, date));
          return;
        } // Select date if min view is reached


        var selectedDate = new Date(year, month, date),
            alreadySelected = this.d._isSelected(selectedDate, this.d.cellType);

        if (!alreadySelected) {
          dp._trigger('clickCell', selectedDate);

          return;
        }

        dp._handleAlreadySelectedDates.bind(dp, alreadySelected, selectedDate)();
      },
      _onClickCell: function _onClickCell(e) {
        var $el = $(e.target).closest('.datepicker--cell');
        if ($el.hasClass('-disabled-')) return;

        this._handleClick.bind(this)($el);
      }
    };
  })();

  ;

  (function () {
    var template = '' + '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div>' + '<div class="datepicker--nav-title">#{title}</div>' + '<div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
        buttonsContainerTemplate = '<div class="datepicker--buttons"></div>',
        button = '<button class="button button_theme_simple#{color}" data-action="#{action}">#{label}</span>',
        datepicker = $.fn.datepicker,
        dp = datepicker.Constructor;

    datepicker.Navigation = function (d, opts) {
      this.d = d;
      this.opts = opts;
      this.$buttonsContainer = '';
      this.init();
    };

    datepicker.Navigation.prototype = {
      init: function init() {
        this._buildBaseHtml();

        this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.d.$nav.on('click', '.datepicker--nav-action', $.proxy(this._onClickNavButton, this));
        this.d.$nav.on('click', '.datepicker--nav-title', $.proxy(this._onClickNavTitle, this));
        this.d.$datepicker.on('click', '.datepicker--button', $.proxy(this._onClickNavButton, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        if (!this.opts.onlyTimepicker) {
          this._render();
        }

        this._addButtonsIfNeed();
      },
      _addButtonsIfNeed: function _addButtonsIfNeed() {
        if (this.opts.clearButton) {
          this._addButton('clear');
        }

        if (this.opts.todayButton) {
          this._addButton('today');
        }
      },
      _render: function _render() {
        var title = this._getTitle(this.d.currentDate),
            html = dp.template(template, $.extend({
          title: title
        }, this.opts));

        this.d.$nav.html(html);

        if (this.d.view == 'years') {
          $('.datepicker--nav-title', this.d.$nav).addClass('-disabled-');
        }

        this.setNavStatus();
      },
      _getTitle: function _getTitle(date) {
        return this.d.formatDate(this.opts.navTitles[this.d.view], date);
      },
      _addButton: function _addButton(type) {
        if (!this.$buttonsContainer.length) {
          this._addButtonsContainer();
        }

        var color = type == "clear" ? " button_color_darkShade" : " ";
        var data = {
          action: type,
          color: color,
          label: this.d.loc[type]
        },
            html = dp.template(button, data);
        console.log(html);
        if ($('[data-action=' + type + ']', this.$buttonsContainer).length) return;
        this.$buttonsContainer.append(html);
      },
      _addButtonsContainer: function _addButtonsContainer() {
        this.d.$datepicker.append(buttonsContainerTemplate);
        this.$buttonsContainer = $('.datepicker--buttons', this.d.$datepicker);
      },
      setNavStatus: function setNavStatus() {
        if (!(this.opts.minDate || this.opts.maxDate) || !this.opts.disableNavWhenOutOfRange) return;
        var date = this.d.parsedDate,
            m = date.month,
            y = date.year,
            d = date.date;

        switch (this.d.view) {
          case 'days':
            if (!this.d._isInRange(new Date(y, m - 1, 1), 'month')) {
              this._disableNav('prev');
            }

            if (!this.d._isInRange(new Date(y, m + 1, 1), 'month')) {
              this._disableNav('next');
            }

            break;

          case 'months':
            if (!this.d._isInRange(new Date(y - 1, m, d), 'year')) {
              this._disableNav('prev');
            }

            if (!this.d._isInRange(new Date(y + 1, m, d), 'year')) {
              this._disableNav('next');
            }

            break;

          case 'years':
            var decade = dp.getDecade(this.d.date);

            if (!this.d._isInRange(new Date(decade[0] - 1, 0, 1), 'year')) {
              this._disableNav('prev');
            }

            if (!this.d._isInRange(new Date(decade[1] + 1, 0, 1), 'year')) {
              this._disableNav('next');
            }

            break;
        }
      },
      _disableNav: function _disableNav(nav) {
        $('[data-action="' + nav + '"]', this.d.$nav).addClass('-disabled-');
      },
      _activateNav: function _activateNav(nav) {
        $('[data-action="' + nav + '"]', this.d.$nav).removeClass('-disabled-');
      },
      _onClickNavButton: function _onClickNavButton(e) {
        var $el = $(e.target).closest('[data-action]'),
            action = $el.data('action');
        this.d[action]();
      },
      _onClickNavTitle: function _onClickNavTitle(e) {
        if ($(e.target).hasClass('-disabled-')) return;

        if (this.d.view == 'days') {
          return this.d.view = 'months';
        }

        this.d.view = 'years';
      }
    };
  })();

  ;

  (function () {
    var template = '<div class="datepicker--time">' + '<div class="datepicker--time-current">' + '   <span class="datepicker--time-current-hours">#{hourVisible}</span>' + '   <span class="datepicker--time-current-colon">:</span>' + '   <span class="datepicker--time-current-minutes">#{minValue}</span>' + '</div>' + '<div class="datepicker--time-sliders">' + '   <div class="datepicker--time-row">' + '      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>' + '   </div>' + '   <div class="datepicker--time-row">' + '      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>' + '   </div>' + '</div>' + '</div>',
        datepicker = $.fn.datepicker,
        dp = datepicker.Constructor;

    datepicker.Timepicker = function (inst, opts) {
      this.d = inst;
      this.opts = opts;
      this.init();
    };

    datepicker.Timepicker.prototype = {
      init: function init() {
        var input = 'input';

        this._setTime(this.d.date);

        this._buildHTML();

        if (navigator.userAgent.match(/trident/gi)) {
          input = 'change';
        }

        this.d.$el.on('selectDate', this._onSelectDate.bind(this));
        this.$ranges.on(input, this._onChangeRange.bind(this));
        this.$ranges.on('mouseup', this._onMouseUpRange.bind(this));
        this.$ranges.on('mousemove focus ', this._onMouseEnterRange.bind(this));
        this.$ranges.on('mouseout blur', this._onMouseOutRange.bind(this));
      },
      _setTime: function _setTime(date) {
        var _date = dp.getParsedDate(date);

        this._handleDate(date);

        this.hours = _date.hours < this.minHours ? this.minHours : _date.hours;
        this.minutes = _date.minutes < this.minMinutes ? this.minMinutes : _date.minutes;
      },

      /**
       * Sets minHours and minMinutes from date (usually it's a minDate)
       * Also changes minMinutes if current hours are bigger then @date hours
       * @param date {Date}
       * @private
       */
      _setMinTimeFromDate: function _setMinTimeFromDate(date) {
        this.minHours = date.getHours();
        this.minMinutes = date.getMinutes(); // If, for example, min hours are 10, and current hours are 12,
        // update minMinutes to default value, to be able to choose whole range of values

        if (this.d.lastSelectedDate) {
          if (this.d.lastSelectedDate.getHours() > date.getHours()) {
            this.minMinutes = this.opts.minMinutes;
          }
        }
      },
      _setMaxTimeFromDate: function _setMaxTimeFromDate(date) {
        this.maxHours = date.getHours();
        this.maxMinutes = date.getMinutes();

        if (this.d.lastSelectedDate) {
          if (this.d.lastSelectedDate.getHours() < date.getHours()) {
            this.maxMinutes = this.opts.maxMinutes;
          }
        }
      },
      _setDefaultMinMaxTime: function _setDefaultMinMaxTime() {
        var maxHours = 23,
            maxMinutes = 59,
            opts = this.opts;
        this.minHours = opts.minHours < 0 || opts.minHours > maxHours ? 0 : opts.minHours;
        this.minMinutes = opts.minMinutes < 0 || opts.minMinutes > maxMinutes ? 0 : opts.minMinutes;
        this.maxHours = opts.maxHours < 0 || opts.maxHours > maxHours ? maxHours : opts.maxHours;
        this.maxMinutes = opts.maxMinutes < 0 || opts.maxMinutes > maxMinutes ? maxMinutes : opts.maxMinutes;
      },

      /**
       * Looks for min/max hours/minutes and if current values
       * are out of range sets valid values.
       * @private
       */
      _validateHoursMinutes: function _validateHoursMinutes(date) {
        if (this.hours < this.minHours) {
          this.hours = this.minHours;
        } else if (this.hours > this.maxHours) {
          this.hours = this.maxHours;
        }

        if (this.minutes < this.minMinutes) {
          this.minutes = this.minMinutes;
        } else if (this.minutes > this.maxMinutes) {
          this.minutes = this.maxMinutes;
        }
      },
      _buildHTML: function _buildHTML() {
        var lz = dp.getLeadingZeroNum,
            data = {
          hourMin: this.minHours,
          hourMax: lz(this.maxHours),
          hourStep: this.opts.hoursStep,
          hourValue: this.hours,
          hourVisible: lz(this.displayHours),
          minMin: this.minMinutes,
          minMax: lz(this.maxMinutes),
          minStep: this.opts.minutesStep,
          minValue: lz(this.minutes)
        },
            _template = dp.template(template, data);

        this.$timepicker = $(_template).appendTo(this.d.$datepicker);
        this.$ranges = $('[type="range"]', this.$timepicker);
        this.$hours = $('[name="hours"]', this.$timepicker);
        this.$minutes = $('[name="minutes"]', this.$timepicker);
        this.$hoursText = $('.datepicker--time-current-hours', this.$timepicker);
        this.$minutesText = $('.datepicker--time-current-minutes', this.$timepicker);

        if (this.d.ampm) {
          this.$ampm = $('<span class="datepicker--time-current-ampm">').appendTo($('.datepicker--time-current', this.$timepicker)).html(this.dayPeriod);
          this.$timepicker.addClass('-am-pm-');
        }
      },
      _updateCurrentTime: function _updateCurrentTime() {
        var h = dp.getLeadingZeroNum(this.displayHours),
            m = dp.getLeadingZeroNum(this.minutes);
        this.$hoursText.html(h);
        this.$minutesText.html(m);

        if (this.d.ampm) {
          this.$ampm.html(this.dayPeriod);
        }
      },
      _updateRanges: function _updateRanges() {
        this.$hours.attr({
          min: this.minHours,
          max: this.maxHours
        }).val(this.hours);
        this.$minutes.attr({
          min: this.minMinutes,
          max: this.maxMinutes
        }).val(this.minutes);
      },

      /**
       * Sets minHours, minMinutes etc. from date. If date is not passed, than sets
       * values from options
       * @param [date] {object} - Date object, to get values from
       * @private
       */
      _handleDate: function _handleDate(date) {
        this._setDefaultMinMaxTime();

        if (date) {
          if (dp.isSame(date, this.d.opts.minDate)) {
            this._setMinTimeFromDate(this.d.opts.minDate);
          } else if (dp.isSame(date, this.d.opts.maxDate)) {
            this._setMaxTimeFromDate(this.d.opts.maxDate);
          }
        }

        this._validateHoursMinutes(date);
      },
      update: function update() {
        this._updateRanges();

        this._updateCurrentTime();
      },

      /**
       * Calculates valid hour value to display in text input and datepicker's body.
       * @param date {Date|Number} - date or hours
       * @param [ampm] {Boolean} - 12 hours mode
       * @returns {{hours: *, dayPeriod: string}}
       * @private
       */
      _getValidHoursFromDate: function _getValidHoursFromDate(date, ampm) {
        var d = date,
            hours = date;

        if (date instanceof Date) {
          d = dp.getParsedDate(date);
          hours = d.hours;
        }

        var _ampm = ampm || this.d.ampm,
            dayPeriod = 'am';

        if (_ampm) {
          switch (true) {
            case hours == 0:
              hours = 12;
              break;

            case hours == 12:
              dayPeriod = 'pm';
              break;

            case hours > 11:
              hours = hours - 12;
              dayPeriod = 'pm';
              break;

            default:
              break;
          }
        }

        return {
          hours: hours,
          dayPeriod: dayPeriod
        };
      },

      set hours(val) {
        this._hours = val;

        var displayHours = this._getValidHoursFromDate(val);

        this.displayHours = displayHours.hours;
        this.dayPeriod = displayHours.dayPeriod;
      },

      get hours() {
        return this._hours;
      },

      //  Events
      // -------------------------------------------------
      _onChangeRange: function _onChangeRange(e) {
        var $target = $(e.target),
            name = $target.attr('name');
        this.d.timepickerIsActive = true;
        this[name] = $target.val();

        this._updateCurrentTime();

        this.d._trigger('timeChange', [this.hours, this.minutes]);

        this._handleDate(this.d.lastSelectedDate);

        this.update();
      },
      _onSelectDate: function _onSelectDate(e, data) {
        this._handleDate(data);

        this.update();
      },
      _onMouseEnterRange: function _onMouseEnterRange(e) {
        var name = $(e.target).attr('name');
        $('.datepicker--time-current-' + name, this.$timepicker).addClass('-focus-');
      },
      _onMouseOutRange: function _onMouseOutRange(e) {
        var name = $(e.target).attr('name');
        if (this.d.inFocus) return; // Prevent removing focus when mouse out of range slider

        $('.datepicker--time-current-' + name, this.$timepicker).removeClass('-focus-');
      },
      _onMouseUpRange: function _onMouseUpRange(e) {
        this.d.timepickerIsActive = false;
      }
    };
  })();
})(window, jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/calendar/js/datepicker.min.js":
/*!**********************************************!*\
  !*** ./blocks/calendar/js/datepicker.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e, i) {
  !function () {
    var s,
        a,
        n,
        h = "2.2.3",
        o = "datepicker",
        r = ".datepicker-here",
        c = !1,
        d = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
        l = {
      classes: "",
      inline: !1,
      language: "ru",
      startDate: new Date(),
      firstDay: "",
      weekends: [6, 0],
      dateFormat: "",
      altField: "",
      altFieldDateFormat: "@",
      toggleSelected: !0,
      keyboardNav: !0,
      position: "bottom left",
      offset: 12,
      view: "days",
      minView: "days",
      showOtherMonths: !0,
      selectOtherMonths: !0,
      moveToOtherMonthsOnSelect: !0,
      showOtherYears: !0,
      selectOtherYears: !0,
      moveToOtherYearsOnSelect: !0,
      minDate: "",
      maxDate: "",
      disableNavWhenOutOfRange: !0,
      multipleDates: !1,
      multipleDatesSeparator: ",",
      range: !1,
      todayButton: !1,
      clearButton: !1,
      showEvent: "focus",
      autoClose: !1,
      monthsField: "monthsShort",
      prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
      nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
      navTitles: {
        days: "MM, <i>yyyy</i>",
        months: "yyyy",
        years: "yyyy1 - yyyy2"
      },
      timepicker: !1,
      onlyTimepicker: !1,
      dateTimeSeparator: " ",
      timeFormat: "",
      minHours: 0,
      maxHours: 24,
      minMinutes: 0,
      maxMinutes: 59,
      hoursStep: 1,
      minutesStep: 1,
      onSelect: "",
      onShow: "",
      onHide: "",
      onChangeMonth: "",
      onChangeYear: "",
      onChangeDecade: "",
      onChangeView: "",
      onRenderCell: ""
    },
        u = {
      ctrlRight: [17, 39],
      ctrlUp: [17, 38],
      ctrlLeft: [17, 37],
      ctrlDown: [17, 40],
      shiftRight: [16, 39],
      shiftUp: [16, 38],
      shiftLeft: [16, 37],
      shiftDown: [16, 40],
      altUp: [18, 38],
      altRight: [18, 39],
      altLeft: [18, 37],
      altDown: [18, 40],
      ctrlShiftUp: [16, 17, 38]
    },
        m = function m(t, a) {
      this.el = t, this.$el = e(t), this.opts = e.extend(!0, {}, l, a, this.$el.data()), s == i && (s = e("body")), this.opts.startDate || (this.opts.startDate = new Date()), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? e(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init();
    };

    n = m, n.prototype = {
      VERSION: h,
      viewIndexes: ["days", "months", "years"],
      init: function init() {
        c || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new e.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new e.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new e.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0;
      },
      _createShortCuts: function _createShortCuts() {
        this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5);
      },
      _bindEvents: function _bindEvents() {
        this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), e(t).on("resize.adp", this._onResize.bind(this)), e("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
      },
      _bindKeyboardEvents: function _bindKeyboardEvents() {
        this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this));
      },
      _bindTimepickerEvents: function _bindTimepickerEvents() {
        this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
      },
      isWeekend: function isWeekend(t) {
        return -1 !== this.opts.weekends.indexOf(t);
      },
      _defineLocale: function _defineLocale(t) {
        "string" == typeof t ? (this.loc = e.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru)), this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, e.fn.datepicker.language[t])) : this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
        var i = this._getWordBoundaryRegExp;
        (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0);
      },
      _buildDatepickersContainer: function _buildDatepickersContainer() {
        c = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = e("#datepickers-container");
      },
      _buildBaseHtml: function _buildBaseHtml() {
        var t,
            i = e('<div class="datepicker-inline">');
        t = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = e(d).appendTo(t), this.$content = e(".datepicker--content", this.$datepicker), this.$nav = e(".datepicker--nav", this.$datepicker);
      },
      _triggerOnChange: function _triggerOnChange() {
        if (!this.selectedDates.length) {
          if ("" === this._prevOnSelectValue) return;
          return this._prevOnSelectValue = "", this.opts.onSelect("", "", this);
        }

        var t,
            e = this.selectedDates,
            i = n.getParsedDate(e[0]),
            s = this,
            a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
        t = e.map(function (t) {
          return s.formatDate(s.loc.dateFormat, t);
        }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = e.map(function (t) {
          var e = n.getParsedDate(t);
          return new Date(e.year, e.month, e.date, e.hours, e.minutes);
        })), this._prevOnSelectValue = t, this.opts.onSelect(t, a, this);
      },
      next: function next() {
        var t = this.parsedDate,
            e = this.opts;

        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case "months":
            this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;

          case "years":
            this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      prev: function prev() {
        var t = this.parsedDate,
            e = this.opts;

        switch (this.view) {
          case "days":
            this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
            break;

          case "months":
            this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
            break;

          case "years":
            this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade);
        }
      },
      formatDate: function formatDate(t, e) {
        e = e || this.date;
        var i,
            s = t,
            a = this._getWordBoundaryRegExp,
            h = this.loc,
            o = n.getLeadingZeroNum,
            r = n.getDecade(e),
            c = n.getParsedDate(e),
            d = c.fullHours,
            l = c.hours,
            u = t.match(a("aa")) || t.match(a("AA")),
            m = "am",
            p = this._replacer;

        switch (this.opts.timepicker && this.timepicker && u && (i = this.timepicker._getValidHoursFromDate(e, u), d = o(i.hours), l = i.hours, m = i.dayPeriod), !0) {
          case /@/.test(s):
            s = s.replace(/@/, e.getTime());

          case /aa/.test(s):
            s = p(s, a("aa"), m);

          case /AA/.test(s):
            s = p(s, a("AA"), m.toUpperCase());

          case /dd/.test(s):
            s = p(s, a("dd"), c.fullDate);

          case /d/.test(s):
            s = p(s, a("d"), c.date);

          case /DD/.test(s):
            s = p(s, a("DD"), h.days[c.day]);

          case /D/.test(s):
            s = p(s, a("D"), h.daysShort[c.day]);

          case /mm/.test(s):
            s = p(s, a("mm"), c.fullMonth);

          case /m/.test(s):
            s = p(s, a("m"), c.month + 1);

          case /MM/.test(s):
            s = p(s, a("MM"), this.loc.months[c.month]);

          case /M/.test(s):
            s = p(s, a("M"), h.monthsShort[c.month]);

          case /ii/.test(s):
            s = p(s, a("ii"), c.fullMinutes);

          case /i/.test(s):
            s = p(s, a("i"), c.minutes);

          case /hh/.test(s):
            s = p(s, a("hh"), d);

          case /h/.test(s):
            s = p(s, a("h"), l);

          case /yyyy/.test(s):
            s = p(s, a("yyyy"), c.year);

          case /yyyy1/.test(s):
            s = p(s, a("yyyy1"), r[0]);

          case /yyyy2/.test(s):
            s = p(s, a("yyyy2"), r[1]);

          case /yy/.test(s):
            s = p(s, a("yy"), c.year.toString().slice(-2));
        }

        return s;
      },
      _replacer: function _replacer(t, e, i) {
        return t.replace(e, function (t, e, s, a) {
          return e + i + a;
        });
      },
      _getWordBoundaryRegExp: function _getWordBoundaryRegExp(t) {
        var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
        return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g");
      },
      selectDate: function selectDate(t) {
        var e = this,
            i = e.opts,
            s = e.parsedDate,
            a = e.selectedDates,
            h = a.length,
            o = "";
        if (Array.isArray(t)) return void t.forEach(function (t) {
          e.selectDate(t);
        });

        if (t instanceof Date) {
          if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
            if (h === i.multipleDates) return;
            e._isSelected(t) || e.selectedDates.push(t);
          } else i.range ? 2 == h ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == h ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, n.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];

          e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render();
        }
      },
      removeDate: function removeDate(t) {
        var e = this.selectedDates,
            i = this;
        if (t instanceof Date) return e.some(function (s, a) {
          return n.isSame(s, t) ? (e.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0) : void 0;
        });
      },
      today: function today() {
        this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date(), this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton);
      },
      clear: function clear() {
        this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange();
      },
      update: function update(t, i) {
        var s = arguments.length,
            a = this.lastSelectedDate;
        return 2 == s ? this.opts[t] = i : 1 == s && "object" == _typeof(t) && (this.opts = e.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this;
      },
      _syncWithMinMaxDates: function _syncWithMinMaxDates() {
        var t = this.date.getTime();
        this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1;
      },
      _isSelected: function _isSelected(t, e) {
        var i = !1;
        return this.selectedDates.some(function (s) {
          return n.isSame(s, t, e) ? (i = s, !0) : void 0;
        }), i;
      },
      _setInputValue: function _setInputValue() {
        var t,
            e = this,
            i = e.opts,
            s = e.loc.dateFormat,
            a = i.altFieldDateFormat,
            n = e.selectedDates.map(function (t) {
          return e.formatDate(s, t);
        });
        i.altField && e.$altField.length && (t = this.selectedDates.map(function (t) {
          return e.formatDate(a, t);
        }), t = t.join(this.opts.multipleDatesSeparator), this.$altField.val(t)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n);
      },
      _isInRange: function _isInRange(t, e) {
        var i = t.getTime(),
            s = n.getParsedDate(t),
            a = n.getParsedDate(this.minDate),
            h = n.getParsedDate(this.maxDate),
            o = new Date(s.year, s.month, a.date).getTime(),
            r = new Date(s.year, s.month, h.date).getTime(),
            c = {
          day: i >= this.minTime && i <= this.maxTime,
          month: o >= this.minTime && r <= this.maxTime,
          year: s.year >= a.year && s.year <= h.year
        };
        return e ? c[e] : c.day;
      },
      _getDimensions: function _getDimensions(t) {
        var e = t.offset();
        return {
          width: t.outerWidth(),
          height: t.outerHeight(),
          left: e.left,
          top: e.top
        };
      },
      _getDateFromCell: function _getDateFromCell(t) {
        var e = this.parsedDate,
            s = t.data("year") || e.year,
            a = t.data("month") == i ? e.month : t.data("month"),
            n = t.data("date") || 1;
        return new Date(s, a, n);
      },
      _setPositionClasses: function _setPositionClasses(t) {
        t = t.split(" ");
        var e = t[0],
            i = t[1],
            s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
        this.visible && (s += " active"), this.$datepicker.removeAttr("class").addClass(s);
      },
      setPosition: function setPosition(t) {
        t = t || this.opts.position;

        var e,
            i,
            s = this._getDimensions(this.$el),
            a = this._getDimensions(this.$datepicker),
            n = t.split(" "),
            h = this.opts.offset,
            o = n[0],
            r = n[1];

        switch (o) {
          case "top":
            e = s.top - a.height - h;
            break;

          case "right":
            i = s.left + s.width + h;
            break;

          case "bottom":
            e = s.top + s.height + h;
            break;

          case "left":
            i = s.left - a.width - h;
        }

        switch (r) {
          case "top":
            e = s.top;
            break;

          case "right":
            i = s.left + s.width - a.width;
            break;

          case "bottom":
            e = s.top + s.height - a.height;
            break;

          case "left":
            i = s.left;
            break;

          case "center":
            /left|right/.test(o) ? e = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2;
        }

        this.$datepicker.css({
          left: i,
          top: e
        });
      },
      show: function show() {
        var t = this.opts.onShow;
        this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t);
      },
      hide: function hide() {
        var t = this.opts.onHide;
        this.$datepicker.removeClass("active").css({
          left: "-100000px"
        }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t);
      },
      down: function down(t) {
        this._changeView(t, "down");
      },
      up: function up(t) {
        this._changeView(t, "up");
      },
      _bindVisionEvents: function _bindVisionEvents(t) {
        this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0));
      },
      _changeView: function _changeView(t, e) {
        t = t || this.focused || this.date;
        var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
        i > 2 && (i = 2), 0 > i && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i];
      },
      _handleHotKey: function _handleHotKey(t) {
        var e,
            i,
            s,
            a = n.getParsedDate(this._getFocusedDate()),
            h = this.opts,
            o = !1,
            r = !1,
            c = !1,
            d = a.year,
            l = a.month,
            u = a.date;

        switch (t) {
          case "ctrlRight":
          case "ctrlUp":
            l += 1, o = !0;
            break;

          case "ctrlLeft":
          case "ctrlDown":
            l -= 1, o = !0;
            break;

          case "shiftRight":
          case "shiftUp":
            r = !0, d += 1;
            break;

          case "shiftLeft":
          case "shiftDown":
            r = !0, d -= 1;
            break;

          case "altRight":
          case "altUp":
            c = !0, d += 10;
            break;

          case "altLeft":
          case "altDown":
            c = !0, d -= 10;
            break;

          case "ctrlShiftUp":
            this.up();
        }

        s = n.getDaysCount(new Date(d, l)), i = new Date(d, l, u), u > s && (u = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = n.getParsedDate(i), o && h.onChangeMonth && h.onChangeMonth(e.month, e.year), r && h.onChangeYear && h.onChangeYear(e.year), c && h.onChangeDecade && h.onChangeDecade(this.curDecade);
      },
      _registerKey: function _registerKey(t) {
        var e = this.keys.some(function (e) {
          return e == t;
        });
        e || this.keys.push(t);
      },
      _unRegisterKey: function _unRegisterKey(t) {
        var e = this.keys.indexOf(t);
        this.keys.splice(e, 1);
      },
      _isHotKeyPressed: function _isHotKeyPressed() {
        var t,
            e = !1,
            i = this,
            s = this.keys.sort();

        for (var a in u) {
          t = u[a], s.length == t.length && t.every(function (t, e) {
            return t == s[e];
          }) && (i._trigger("hotKey", a), e = !0);
        }

        return e;
      },
      _trigger: function _trigger(t, e) {
        this.$el.trigger(t, e);
      },
      _focusNextCell: function _focusNextCell(t, e) {
        e = e || this.cellType;
        var i = n.getParsedDate(this._getFocusedDate()),
            s = i.year,
            a = i.month,
            h = i.date;

        if (!this._isHotKeyPressed()) {
          switch (t) {
            case 37:
              "day" == e ? h -= 1 : "", "month" == e ? a -= 1 : "", "year" == e ? s -= 1 : "";
              break;

            case 38:
              "day" == e ? h -= 7 : "", "month" == e ? a -= 3 : "", "year" == e ? s -= 4 : "";
              break;

            case 39:
              "day" == e ? h += 1 : "", "month" == e ? a += 1 : "", "year" == e ? s += 1 : "";
              break;

            case 40:
              "day" == e ? h += 7 : "", "month" == e ? a += 3 : "", "year" == e ? s += 4 : "";
          }

          var o = new Date(s, a, h);
          o.getTime() < this.minTime ? o = this.minDate : o.getTime() > this.maxTime && (o = this.maxDate), this.focused = o;
        }
      },
      _getFocusedDate: function _getFocusedDate() {
        var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
            e = this.parsedDate;
        if (!t) switch (this.view) {
          case "days":
            t = new Date(e.year, e.month, new Date().getDate());
            break;

          case "months":
            t = new Date(e.year, e.month, 1);
            break;

          case "years":
            t = new Date(e.year, 0, 1);
        }
        return t;
      },
      _getCell: function _getCell(t, i) {
        i = i || this.cellType;
        var s,
            a = n.getParsedDate(t),
            h = '.datepicker--cell[data-year="' + a.year + '"]';

        switch (i) {
          case "month":
            h = '[data-month="' + a.month + '"]';
            break;

          case "day":
            h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]';
        }

        return s = this.views[this.currentView].$el.find(h), s.length ? s : e("");
      },
      destroy: function destroy() {
        var t = this;
        t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove();
      },
      _handleAlreadySelectedDates: function _handleAlreadySelectedDates(t, e) {
        this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()));
      },
      _onShowEvent: function _onShowEvent(t) {
        this.visible || this.show();
      },
      _onBlur: function _onBlur() {
        !this.inFocus && this.visible && this.hide();
      },
      _onMouseDownDatepicker: function _onMouseDownDatepicker(t) {
        this.inFocus = !0;
      },
      _onMouseUpDatepicker: function _onMouseUpDatepicker(t) {
        this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus();
      },
      _onKeyUpGeneral: function _onKeyUpGeneral(t) {
        var e = this.$el.val();
        e || this.clear();
      },
      _onResize: function _onResize() {
        this.visible && this.setPosition();
      },
      _onMouseUpBody: function _onMouseUpBody(t) {
        t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide();
      },
      _onMouseUpEl: function _onMouseUpEl(t) {
        t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4);
      },
      _onKeyDown: function _onKeyDown(t) {
        var e = t.which;

        if (this._registerKey(e), e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
          if (this._getCell(this.focused).hasClass("-disabled-")) return;
          if (this.view != this.opts.minView) this.down();else {
            var i = this._isSelected(this.focused, this.cellType);

            if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);

            this._handleAlreadySelectedDates(i, this.focused);
          }
        }

        27 == e && this.hide();
      },
      _onKeyUp: function _onKeyUp(t) {
        var e = t.which;

        this._unRegisterKey(e);
      },
      _onHotKey: function _onHotKey(t, e) {
        this._handleHotKey(e);
      },
      _onMouseEnterCell: function _onMouseEnterCell(t) {
        var i = e(t.target).closest(".datepicker--cell"),
            s = this._getDateFromCell(i);

        this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update());
      },
      _onMouseLeaveCell: function _onMouseLeaveCell(t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1;
      },
      _onTimeChange: function _onTimeChange(t, e, i) {
        var s = new Date(),
            a = this.selectedDates,
            n = !1;
        a.length && (n = !0, s = this.lastSelectedDate), s.setHours(e), s.setMinutes(i), n || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s);
      },
      _onClickCell: function _onClickCell(t, e) {
        this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e);
      },

      set focused(t) {
        if (!t && this.focused) {
          var e = this._getCell(this.focused);

          e.length && e.removeClass("-focus-");
        }

        this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t);
      },

      get focused() {
        return this._focused;
      },

      get parsedDate() {
        return n.getParsedDate(this.date);
      },

      set date(t) {
        return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0;
      },

      get date() {
        return this.currentDate;
      },

      set view(t) {
        return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new e.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t);
      },

      get view() {
        return this.currentView;
      },

      get cellType() {
        return this.view.substring(0, this.view.length - 1);
      },

      get minTime() {
        var t = n.getParsedDate(this.minDate);
        return new Date(t.year, t.month, t.date).getTime();
      },

      get maxTime() {
        var t = n.getParsedDate(this.maxDate);
        return new Date(t.year, t.month, t.date).getTime();
      },

      get curDecade() {
        return n.getDecade(this.date);
      }

    }, n.getDaysCount = function (t) {
      return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    }, n.getParsedDate = function (t) {
      return {
        year: t.getFullYear(),
        month: t.getMonth(),
        fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
        date: t.getDate(),
        fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
        day: t.getDay(),
        hours: t.getHours(),
        fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
        minutes: t.getMinutes(),
        fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
      };
    }, n.getDecade = function (t) {
      var e = 10 * Math.floor(t.getFullYear() / 10);
      return [e, e + 9];
    }, n.template = function (t, e) {
      return t.replace(/#\{([\w]+)\}/g, function (t, i) {
        return e[i] || 0 === e[i] ? e[i] : void 0;
      });
    }, n.isSame = function (t, e, i) {
      if (!t || !e) return !1;
      var s = n.getParsedDate(t),
          a = n.getParsedDate(e),
          h = i ? i : "day",
          o = {
        day: s.date == a.date && s.month == a.month && s.year == a.year,
        month: s.month == a.month && s.year == a.year,
        year: s.year == a.year
      };
      return o[h];
    }, n.less = function (t, e, i) {
      return t && e ? e.getTime() < t.getTime() : !1;
    }, n.bigger = function (t, e, i) {
      return t && e ? e.getTime() > t.getTime() : !1;
    }, n.getLeadingZeroNum = function (t) {
      return parseInt(t) < 10 ? "0" + t : t;
    }, n.resetTime = function (t) {
      return "object" == _typeof(t) ? (t = n.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0;
    }, e.fn.datepicker = function (t) {
      return this.each(function () {
        if (e.data(this, o)) {
          var i = e.data(this, o);
          i.opts = e.extend(!0, i.opts, t), i.update();
        } else e.data(this, o, new m(this, t));
      });
    }, e.fn.datepicker.Constructor = m, e.fn.datepicker.language = {
      ru: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        dateFormat: "dd.mm.yyyy",
        timeFormat: "hh:ii",
        firstDay: 1
      }
    }, e(function () {
      e(r).datepicker();
    });
  }(), function () {
    var t = {
      days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
      months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
      years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
    },
        s = e.fn.datepicker,
        a = s.Constructor;
    s.Body = function (t, i, s) {
      this.d = t, this.type = i, this.opts = s, this.$el = e(""), this.opts.onlyTimepicker || this.init();
    }, s.Body.prototype = {
      init: function init() {
        this._buildBaseHtml(), this._render(), this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.$el.on("click", ".datepicker--cell", e.proxy(this._onClickCell, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        this.$el = e(t[this.type]).appendTo(this.d.$content), this.$names = e(".datepicker--days-names", this.$el), this.$cells = e(".datepicker--cells", this.$el);
      },
      _getDayNamesHtml: function _getDayNamesHtml(t, e, s, a) {
        return e = e != i ? e : t, s = s ? s : "", a = a != i ? a : 0, a > 7 ? s : 7 == e ? this._getDayNamesHtml(t, 0, s, ++a) : (s += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, s, ++a));
      },
      _getCellContents: function _getCellContents(t, e) {
        var i = "datepicker--cell datepicker--cell-" + e,
            s = new Date(),
            n = this.d,
            h = a.resetTime(n.minRange),
            o = a.resetTime(n.maxRange),
            r = n.opts,
            c = a.getParsedDate(t),
            d = {},
            l = c.date;

        switch (e) {
          case "day":
            n.isWeekend(c.day) && (i += " -weekend-"), c.month != this.d.parsedDate.month && (i += " -other-month-", r.selectOtherMonths || (i += " -disabled-"), r.showOtherMonths || (l = ""));
            break;

          case "month":
            l = n.loc[n.opts.monthsField][c.month];
            break;

          case "year":
            var u = n.curDecade;
            l = c.year, (c.year < u[0] || c.year > u[1]) && (i += " -other-decade-", r.selectOtherYears || (i += " -disabled-"), r.showOtherYears || (l = ""));
        }

        return r.onRenderCell && (d = r.onRenderCell(t, e) || {}, l = d.html ? d.html : l, i += d.classes ? " " + d.classes : ""), r.range && (a.isSame(h, t, e) && (i += " -range-from-"), a.isSame(o, t, e) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((a.bigger(h, t) && a.less(n.focused, t) || a.less(o, t) && a.bigger(n.focused, t)) && (i += " -in-range-"), a.less(o, t) && a.isSame(n.focused, t) && (i += " -range-from-"), a.bigger(h, t) && a.isSame(n.focused, t) && (i += " -range-to-")) : 2 == n.selectedDates.length && a.bigger(h, t) && a.less(o, t) && (i += " -in-range-")), a.isSame(s, t, e) && (i += " -current-"), n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"), n._isSelected(t, e) && (i += " -selected-"), (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"), {
          html: l,
          classes: i
        };
      },
      _getDaysHtml: function _getDaysHtml(t) {
        var e = a.getDaysCount(t),
            i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
            s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
            n = i - this.d.loc.firstDay,
            h = 6 - s + this.d.loc.firstDay;
        n = 0 > n ? n + 7 : n, h = h > 6 ? h - 7 : h;

        for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++) {
          r = t.getFullYear(), o = t.getMonth(), d += this._getDayHtml(new Date(r, o, l));
        }

        return d;
      },
      _getDayHtml: function _getDayHtml(t) {
        var e = this._getCellContents(t, "day");

        return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _getMonthsHtml: function _getMonthsHtml(t) {
        for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s;) {
          e += this._getMonthHtml(new Date(i.year, s)), s++;
        }

        return e;
      },
      _getMonthHtml: function _getMonthHtml(t) {
        var e = this._getCellContents(t, "month");

        return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>";
      },
      _getYearsHtml: function _getYearsHtml(t) {
        var e = (a.getParsedDate(t), a.getDecade(t)),
            i = e[0] - 1,
            s = "",
            n = i;

        for (n; n <= e[1] + 1; n++) {
          s += this._getYearHtml(new Date(n, 0));
        }

        return s;
      },
      _getYearHtml: function _getYearHtml(t) {
        var e = this._getCellContents(t, "year");

        return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>";
      },
      _renderTypes: {
        days: function days() {
          var t = this._getDayNamesHtml(this.d.loc.firstDay),
              e = this._getDaysHtml(this.d.currentDate);

          this.$cells.html(e), this.$names.html(t);
        },
        months: function months() {
          var t = this._getMonthsHtml(this.d.currentDate);

          this.$cells.html(t);
        },
        years: function years() {
          var t = this._getYearsHtml(this.d.currentDate);

          this.$cells.html(t);
        }
      },
      _render: function _render() {
        this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)();
      },
      _update: function _update() {
        var t,
            i,
            s,
            a = e(".datepicker--cell", this.$cells),
            n = this;
        a.each(function (a, h) {
          i = e(this), s = n.d._getDateFromCell(e(this)), t = n._getCellContents(s, n.d.cellType), i.attr("class", t.classes);
        });
      },
      show: function show() {
        this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0);
      },
      hide: function hide() {
        this.$el.removeClass("active"), this.active = !1;
      },
      _handleClick: function _handleClick(t) {
        var e = t.data("date") || 1,
            i = t.data("month") || 0,
            s = t.data("year") || this.d.parsedDate.year,
            a = this.d;
        if (a.view != this.opts.minView) return void a.down(new Date(s, i, e));

        var n = new Date(s, i, e),
            h = this.d._isSelected(n, this.d.cellType);

        return h ? void a._handleAlreadySelectedDates.bind(a, h, n)() : void a._trigger("clickCell", n);
      },
      _onClickCell: function _onClickCell(t) {
        var i = e(t.target).closest(".datepicker--cell");
        i.hasClass("-disabled-") || this._handleClick.bind(this)(i);
      }
    };
  }(), function () {
    var t = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
        i = '<div class="datepicker--buttons"></div>',
        s = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
        a = e.fn.datepicker,
        n = a.Constructor;
    a.Navigation = function (t, e) {
      this.d = t, this.opts = e, this.$buttonsContainer = "", this.init();
    }, a.Navigation.prototype = {
      init: function init() {
        this._buildBaseHtml(), this._bindEvents();
      },
      _bindEvents: function _bindEvents() {
        this.d.$nav.on("click", ".datepicker--nav-action", e.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", e.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", e.proxy(this._onClickNavButton, this));
      },
      _buildBaseHtml: function _buildBaseHtml() {
        this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed();
      },
      _addButtonsIfNeed: function _addButtonsIfNeed() {
        this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear");
      },
      _render: function _render() {
        var i = this._getTitle(this.d.currentDate),
            s = n.template(t, e.extend({
          title: i
        }, this.opts));

        this.d.$nav.html(s), "years" == this.d.view && e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus();
      },
      _getTitle: function _getTitle(t) {
        return this.d.formatDate(this.opts.navTitles[this.d.view], t);
      },
      _addButton: function _addButton(t) {
        this.$buttonsContainer.length || this._addButtonsContainer();
        var i = {
          action: t,
          label: this.d.loc[t]
        },
            a = n.template(s, i);
        e("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a);
      },
      _addButtonsContainer: function _addButtonsContainer() {
        this.d.$datepicker.append(i), this.$buttonsContainer = e(".datepicker--buttons", this.d.$datepicker);
      },
      setNavStatus: function setNavStatus() {
        if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
          var t = this.d.parsedDate,
              e = t.month,
              i = t.year,
              s = t.date;

          switch (this.d.view) {
            case "days":
              this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
              break;

            case "months":
              this.d._isInRange(new Date(i - 1, e, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, s), "year") || this._disableNav("next");
              break;

            case "years":
              var a = n.getDecade(this.d.date);
              this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") || this._disableNav("next");
          }
        }
      },
      _disableNav: function _disableNav(t) {
        e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-");
      },
      _activateNav: function _activateNav(t) {
        e('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-");
      },
      _onClickNavButton: function _onClickNavButton(t) {
        var i = e(t.target).closest("[data-action]"),
            s = i.data("action");
        this.d[s]();
      },
      _onClickNavTitle: function _onClickNavTitle(t) {
        return e(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void (this.d.view = "years");
      }
    };
  }(), function () {
    var t = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
        i = e.fn.datepicker,
        s = i.Constructor;
    i.Timepicker = function (t, e) {
      this.d = t, this.opts = e, this.init();
    }, i.Timepicker.prototype = {
      init: function init() {
        var t = "input";
        this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this));
      },
      _setTime: function _setTime(t) {
        var e = s.getParsedDate(t);
        this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes;
      },
      _setMinTimeFromDate: function _setMinTimeFromDate(t) {
        this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes);
      },
      _setMaxTimeFromDate: function _setMaxTimeFromDate(t) {
        this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes);
      },
      _setDefaultMinMaxTime: function _setDefaultMinMaxTime() {
        var t = 23,
            e = 59,
            i = this.opts;
        this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours, this.minMinutes = i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes, this.maxHours = i.maxHours < 0 || i.maxHours > t ? t : i.maxHours, this.maxMinutes = i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes;
      },
      _validateHoursMinutes: function _validateHoursMinutes(t) {
        this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes);
      },
      _buildHTML: function _buildHTML() {
        var i = s.getLeadingZeroNum,
            a = {
          hourMin: this.minHours,
          hourMax: i(this.maxHours),
          hourStep: this.opts.hoursStep,
          hourValue: this.hours,
          hourVisible: i(this.displayHours),
          minMin: this.minMinutes,
          minMax: i(this.maxMinutes),
          minStep: this.opts.minutesStep,
          minValue: i(this.minutes)
        },
            n = s.template(t, a);
        this.$timepicker = e(n).appendTo(this.d.$datepicker), this.$ranges = e('[type="range"]', this.$timepicker), this.$hours = e('[name="hours"]', this.$timepicker), this.$minutes = e('[name="minutes"]', this.$timepicker), this.$hoursText = e(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = e(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"));
      },
      _updateCurrentTime: function _updateCurrentTime() {
        var t = s.getLeadingZeroNum(this.displayHours),
            e = s.getLeadingZeroNum(this.minutes);
        this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod);
      },
      _updateRanges: function _updateRanges() {
        this.$hours.attr({
          min: this.minHours,
          max: this.maxHours
        }).val(this.hours), this.$minutes.attr({
          min: this.minMinutes,
          max: this.maxMinutes
        }).val(this.minutes);
      },
      _handleDate: function _handleDate(t) {
        this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t);
      },
      update: function update() {
        this._updateRanges(), this._updateCurrentTime();
      },
      _getValidHoursFromDate: function _getValidHoursFromDate(t, e) {
        var i = t,
            a = t;
        t instanceof Date && (i = s.getParsedDate(t), a = i.hours);
        var n = e || this.d.ampm,
            h = "am";
        if (n) switch (!0) {
          case 0 == a:
            a = 12;
            break;

          case 12 == a:
            h = "pm";
            break;

          case a > 11:
            a -= 12, h = "pm";
        }
        return {
          hours: a,
          dayPeriod: h
        };
      },

      set hours(t) {
        this._hours = t;

        var e = this._getValidHoursFromDate(t);

        this.displayHours = e.hours, this.dayPeriod = e.dayPeriod;
      },

      get hours() {
        return this._hours;
      },

      _onChangeRange: function _onChangeRange(t) {
        var i = e(t.target),
            s = i.attr("name");
        this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update();
      },
      _onSelectDate: function _onSelectDate(t, e) {
        this._handleDate(e), this.update();
      },
      _onMouseEnterRange: function _onMouseEnterRange(t) {
        var i = e(t.target).attr("name");
        e(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-");
      },
      _onMouseOutRange: function _onMouseOutRange(t) {
        var i = e(t.target).attr("name");
        this.d.inFocus || e(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-");
      },
      _onMouseUpRange: function _onMouseUpRange(t) {
        this.d.timepickerIsActive = !1;
      }
    };
  }();
}(window, jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/date-diapazon/date-diapazon.js":
/*!***********************************************!*\
  !*** ./blocks/date-diapazon/date-diapazon.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//объявление класса календаря с привязкой по двум инпутам
var DateDiapazon = function DateDiapazon(component) {
  var _$$datepicker;

  _classCallCheck(this, DateDiapazon);

  var $start = $('.date-diapazon__start', component);
  var $end = $('.date-diapazon__end', component);
  $(component).datepicker((_$$datepicker = {
    onSelect: function onSelect(fd, d, picker) {
      console.log($start);
      console.log($end);
      console.log(fd);
      $start.val(fd.split(",")[0]);
      $end.val(fd.split(",")[1]);
    },
    range: true,
    clearButton: 'true',
    offset: 0,
    multipleDates: true
  }, _defineProperty(_$$datepicker, "clearButton", true), _defineProperty(_$$datepicker, "todayButton", true), _$$datepicker));
  $('.datepicker-inline', component).addClass('date-diapazon__calendar_hidden');
  $('.datepicker-inline', component).addClass('date-diapazon__calendar');
  $('[data-action="clear"]', component).addClass('date-diapazon__calendar__button_target_clear');
  $('[data-action="today"]', component).addClass('date-diapazon__calendar__button_target_apply');
}; //инициализация календаря с двойными инпутами на соотв. блоках


$(function () {
  $('.date-diapazon').each(function (index, node) {
    new DateDiapazon(node);
  });
}); //отображение календаря

var dateDiapazonShowCalendar = function dateDiapazonShowCalendar(event) {
  var calendar = $('.datepicker-inline', event.target.closest('.date-diapazon'));

  if ($(calendar).hasClass('date-diapazon__calendar_hidden')) {
    $(calendar).removeClass('date-diapazon__calendar_hidden');
    $('.date-diapazon__calendar__button_target_apply', event.target.closest('.date-diapazon')).click(dateDiapazonHideCalendar);
    $('.date-diapazon__calendar__button_target_clear', event.target.closest('.date-diapazon')).click(dateDiapazonClearDates);
  }

  return;
}; //скрытие календаря


var dateDiapazonHideCalendar = function dateDiapazonHideCalendar(event) {
  var parent = event.target.closest('.date-diapazon');
  var calendar = $('.datepicker-inline', parent);
  var wrapperExpanded = $('.date-diapazon__input-wrapper_expanded', parent);
  $(wrapperExpanded).removeClass('date-diapazon__input-wrapper_expanded');
  $(calendar).addClass('date-diapazon__calendar_hidden');
  return;
}; //очистка инпутов с датами


var dateDiapazonClearDates = function dateDiapazonClearDates(event) {
  var start = $('.date-diapazon__start', event.target.closest('.date-diapazon'));
  var end = $('.date-diapazon__end', event.target.closest('.date-diapazon'));
  var inRange = event.target.closest('.date-diapazon').querySelectorAll('.-in-range-');
  inRange.forEach(function (item) {
    $(item).removeClass('-in-range-');
    return;
  });
  var selected = event.target.closest('.date-diapazon').querySelectorAll('.-selected-');
  selected.forEach(function (item) {
    $(item).removeClass('-selected-');
    return;
  });
  $('.-range-to-').removeClass('-range-to-');
  $('.-range-from-').removeClass('-range-from-');
  $(start).val('');
  $(end).val('');
  return;
}; //клик на expand_more/less


$('.date-diapazon__input-wrapper').click(function (event) {
  //если календарь скрыт - покажем!
  if ($(event.target.closest('.date-diapazon')).find('.date-diapazon__calendar_hidden').length) {
    $(event.target).addClass('date-diapazon__input-wrapper_expanded');
    dateDiapazonShowCalendar(event);
  } //а если это expand_less - скроем календарь!
  else if ($(event.target).hasClass('date-diapazon__input-wrapper_expanded')) {
      dateDiapazonHideCalendar(event);
    }
});
/* //разворачиваем календарь
  $('.date-diapazon__start').click(dateDiapazonShowCalendar);
  //разворачиваем календарь
  $('.date-diapazon__end').click(dateDiapazonShowCalendar); */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./blocks/dropdown/data.js":
/*!*********************************!*\
  !*** ./blocks/dropdown/data.js ***!
  \*********************************/
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

/***/ "./blocks/dropdown/dropdown.js":
/*!*************************************!*\
  !*** ./blocks/dropdown/dropdown.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./blocks/dropdown/data.js");
$('.dropdown__i').click(function () {
  $(this).parent().toggleClass('dropdown_state_expanded');
});
$('.dropdown__option-iteration_decrement').click(function () {
  if ($(this).hasClass('dropdown__option-iteration_disabled')) return;
  var quantity = $(this).parent().children('.dropdown__option-quantity').text();
  if (quantity <= 0) return;
  quantity = --quantity;

  if (quantity == 0) {
    $(this).addClass('dropdown__option-iteration_disabled');
  }

  $(this).parent().children('.dropdown__option-quantity').text(quantity);
});
$('.dropdown__option-iteration_increment').click(function () {
  if ($(this).hasClass('dropdown__option-iteration_disabled')) return;
  var quantity = $(this).parent().children('.dropdown__option-quantity').text();
  quantity = ++quantity;

  if ($(this).parent().children('.dropdown__option-iteration_decrement').hasClass('dropdown__option-iteration_disabled')) {
    $(this).parent().children('.dropdown__option-iteration_decrement').removeClass('dropdown__option-iteration_disabled');
  }

  $(this).parent().children('.dropdown__option-quantity').text(quantity);
});


$('.dropdown__button_target_apply').click(function () {
  var target = this.closest('.dropdown').dataset.target;
  var str = "";
  var items = _data_js__WEBPACK_IMPORTED_MODULE_0__["data"][target].items;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this.closest('.dropdown').querySelectorAll('.dropdown__item')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      var option = value.querySelector('.dropdown__option').textContent;
      var quantity = value.querySelector('.dropdown__option-quantity').textContent;
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
$('.dropdown__button_target_clear').click(function () {
  $(this).closest(".dropdown__customization").find('.dropdown__option-quantity').text('0');
  $(this).closest(".dropdown__customization").find('.dropdown__option-iteration_decrement').addClass('dropdown__option-iteration_disabled');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

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

/***/ "./blocks/input/input.js":
/*!*******************************!*\
  !*** ./blocks/input/input.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "../node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  inputmask__WEBPACK_IMPORTED_MODULE_0___default()().mask(document.querySelectorAll(".input_masked"));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

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


function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("./blocks sync recursive \\.js$"));

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