(self["webpackChunk"] = self["webpackChunk"] || []).push([["landing"],{

/***/ "./assets/class/Page.js":
/*!******************************!*\
  !*** ./assets/class/Page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Page = /*#__PURE__*/function () {
  function Page(selector) {
    _classCallCheck(this, Page);

    this.element = document.querySelector(selector);
  }

  _createClass(Page, [{
    key: "hide",
    value: function hide() {
      this.element.classList.add('visually-hidden');
    }
  }, {
    key: "show",
    value: function show() {
      this.element.classList.remove('visually-hidden');
    }
  }]);

  return Page;
}();
;

/***/ }),

/***/ "./assets/class/Rewriter.js":
/*!**********************************!*\
  !*** ./assets/class/Rewriter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rewriter": () => (/* binding */ Rewriter)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rewriter = /*#__PURE__*/function () {
  function Rewriter(input, output) {
    var isWhiteSpaceAllowed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Rewriter);

    this.input = document.querySelector(input);
    this.output = document.querySelector(output);
    this.isWhiteSpaceAllowed = isWhiteSpaceAllowed;
    this.allowedChars = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN!0123456789";
  }

  _createClass(Rewriter, [{
    key: "watch",
    value: function watch() {
      var _this = this;

      this.input.addEventListener('input', function (e) {
        document.querySelector('#bouton-number-audio').currentTime = 0;
        document.querySelector('#bouton-number-audio').play();

        if (!_this.isWhiteSpaceAllowed) {
          if (_this.allowedChars.indexOf(e.data) == -1) _this.input.value = _this.input.value.replace(e.data, "");
        }

        _this.output.innerHTML = _this.input.value.toLowerCase();
      });
    }
  }, {
    key: "finalOutput",
    value: function finalOutput() {
      document.querySelector('#touche-valider-audio').currentTime = 0;
      document.querySelector('#touche-valider-audio').play();
      return this.input.value.toLowerCase();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.input.value = "";
      this.output.innerHTML = "";
      document.querySelector('#touche-effacer-audio').currentTime = 0;
      document.querySelector('#touche-effacer-audio').play();
    }
  }]);

  return Rewriter;
}();
;

/***/ }),

/***/ "./assets/landing.js":
/*!***************************!*\
  !*** ./assets/landing.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/validation.js */ "./assets/scripts/validation.js");
/* harmony import */ var _scripts_orientation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/orientation.js */ "./assets/scripts/orientation.js");

//import validation code
 //import screen orientation script


var landing = document.querySelector('#portrait-screen');
var code = document.querySelector('#code');
var cancelDiv = document.querySelector('#cancel');
window.addEventListener('DOMContentLoaded', function (event) {
  //Enable click on img after 3 secondes
  setTimeout(function () {
    landing.addEventListener('click', function () {
      landing.classList.add("visually-hidden");
      code.classList.remove("visually-hidden");
      document.querySelector('#page-audio').currentTime = 0;
      document.querySelector('#page-audio').play();
    });
  }, 100); //Go back to landing page

  cancelDiv.addEventListener('click', function () {
    document.querySelector('#code').classList.add('visually-hidden');
    document.querySelector('#portrait-screen').classList.remove('visually-hidden');
    document.querySelector('#touche-retour-audio').currentTime = 0;
    document.querySelector('#touche-retour-audio').play();
  });
});

/***/ }),

/***/ "./assets/scripts/orientation.js":
/*!***************************************!*\
  !*** ./assets/scripts/orientation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Page */ "./assets/class/Page.js");

var portraitScreen = new _class_Page__WEBPACK_IMPORTED_MODULE_0__.Page('#portrait-screen');
var landscapeScreen = new _class_Page__WEBPACK_IMPORTED_MODULE_0__.Page('#landscape-screen');
window.addEventListener('DOMContentLoaded', function (event) {
  //Check the screen orientation directly and if it is enabled in the current browser
  checkScreen();
  window.addEventListener('orientationchange', function () {
    checkScreen();
  });
});

function checkScreen() {
  portraitScreen.show();
  landscapeScreen.hide();

  if (window.orientation != 0) {
    portraitScreen.hide();
    landscapeScreen.show();
  }
}

/***/ }),

/***/ "./assets/scripts/validation.js":
/*!**************************************!*\
  !*** ./assets/scripts/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _class_Rewriter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/Rewriter.js */ "./assets/class/Rewriter.js");



var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js").default;

var code = new _class_Rewriter_js__WEBPACK_IMPORTED_MODULE_1__.Rewriter('input.hidden-input', '#output', false);
var confirm = document.querySelector('#confirm');
window.addEventListener('DOMContentLoaded', function () {
  //Write the input text as the correct place as they are separated divs for display reasons
  code.watch(); //Listen to the click on Valider to send the data

  confirm.addEventListener('click', function () {
    makePost(code.finalOutput());
  });
});

function makePost(password) {
  axios.post('/code', {
    password: password
  }).then(function (response) {
    if (response.data != null) {
      document.querySelector('#jingle-win-audio').currentTime = 0;
      document.querySelector('#jingle-win-audio').play();
      setTimeout(function () {
        window.location = '/game';
      }, 2000);
    } else {
      console.log('Code invalide');
      document.querySelector('#jingle-loose-audio').currentTime = 0;
      document.querySelector('#jingle-loose-audio').play();
    }
  })["catch"](function (e) {
    return console.log('code already used', e);
  });
}

;

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  return !String(Symbol()) ||
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_object_define-property_js","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_index-of_js-node_mo-865dba"], () => (__webpack_exec__("./assets/landing.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2xhc3MvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2xhc3MvUmV3cml0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvb3JpZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiXSwibmFtZXMiOlsiUGFnZSIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlJld3JpdGVyIiwiaW5wdXQiLCJvdXRwdXQiLCJpc1doaXRlU3BhY2VBbGxvd2VkIiwiYWxsb3dlZENoYXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50VGltZSIsInBsYXkiLCJpbmRleE9mIiwiZGF0YSIsInZhbHVlIiwicmVwbGFjZSIsImlubmVySFRNTCIsInRvTG93ZXJDYXNlIiwibGFuZGluZyIsImNvZGUiLCJjYW5jZWxEaXYiLCJ3aW5kb3ciLCJldmVudCIsInNldFRpbWVvdXQiLCJwb3J0cmFpdFNjcmVlbiIsImxhbmRzY2FwZVNjcmVlbiIsImNoZWNrU2NyZWVuIiwic2hvdyIsImhpZGUiLCJvcmllbnRhdGlvbiIsImF4aW9zIiwicmVxdWlyZSIsImNvbmZpcm0iLCJ3YXRjaCIsIm1ha2VQb3N0IiwiZmluYWxPdXRwdXQiLCJwYXNzd29yZCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsSUFBYjtBQUNJLGdCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCLFNBQUtDLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxhQUFULENBQXVCSCxRQUF2QixDQUFmO0FBQ0g7O0FBSEw7QUFBQTtBQUFBLFdBS0ksZ0JBQU87QUFDSCxXQUFLQyxPQUFMLENBQWFHLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGlCQUEzQjtBQUNIO0FBUEw7QUFBQTtBQUFBLFdBU0ksZ0JBQU87QUFDSCxXQUFLSixPQUFMLENBQWFHLFNBQWIsQ0FBdUJFLE1BQXZCLENBQThCLGlCQUE5QjtBQUNIO0FBWEw7O0FBQUE7QUFBQTtBQVlDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTSxJQUFNQyxRQUFiO0FBQ0ksb0JBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQXVEO0FBQUEsUUFBNUJDLG1CQUE0Qix1RUFBTixJQUFNOztBQUFBOztBQUNuRCxTQUFLRixLQUFMLEdBQWFOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkssS0FBdkIsQ0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY1AsUUFBUSxDQUFDQyxhQUFULENBQXVCTSxNQUF2QixDQUFkO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkJBLG1CQUEzQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsaUVBQXBCO0FBQ0g7O0FBTkw7QUFBQTtBQUFBLFdBT0ksaUJB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QUMsNkZBQWdDO0FBQ3pELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDVkQsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFNUUsc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMscUZBQTRCOztBQUV4RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFVBQVUsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDcEMsVUFBVSxtQkFBTyxDQUFDLGlFQUFrQjtBQUNwQyxvQkFBb0IsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDeEQsd0JBQXdCLG1CQUFPLENBQUMsNkZBQWdDOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJsYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgfVxufTsiLCJleHBvcnQgY2xhc3MgUmV3cml0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGlucHV0LCBvdXRwdXQsIGlzV2hpdGVTcGFjZUFsbG93ZWQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlucHV0KTtcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG91dHB1dCk7XG4gICAgICAgIHRoaXMuaXNXaGl0ZVNwYWNlQWxsb3dlZCA9IGlzV2hpdGVTcGFjZUFsbG93ZWQ7XG4gICAgICAgIHRoaXMuYWxsb3dlZENoYXJzID0gXCJhemVydHl1aW9wcXNkZmdoamtsbXd4Y3ZibkFaRVJUWVVJT1BRU0RGR0hKS0xNV1hDVkJOITAxMjM0NTY3ODlcIjtcbiAgICB9XG4gICAgd2F0Y2goKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdXRvbi1udW1iZXItYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm91dG9uLW51bWJlci1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1doaXRlU3BhY2VBbGxvd2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dlZENoYXJzLmluZGV4T2YoZS5kYXRhKSA9PSAtMSlcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZS5yZXBsYWNlKGUuZGF0YSwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm91dHB1dC5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZpbmFsT3V0cHV0KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2hlLXZhbGlkZXItYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaGUtdmFsaWRlci1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMub3V0cHV0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaGUtZWZmYWNlci1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoZS1lZmZhY2VyLWF1ZGlvJykucGxheSgpO1xuICAgIH1cbn07IiwiLy9pbXBvcnQgdmFsaWRhdGlvbiBjb2RlXG5pbXBvcnQgJy4vc2NyaXB0cy92YWxpZGF0aW9uLmpzJztcbi8vaW1wb3J0IHNjcmVlbiBvcmllbnRhdGlvbiBzY3JpcHRcbmltcG9ydCAnLi9zY3JpcHRzL29yaWVudGF0aW9uLmpzJztcblxuY29uc3QgbGFuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0cmFpdC1zY3JlZW4nKTtcbmNvbnN0IGNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29kZScpO1xuY29uc3QgY2FuY2VsRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgIC8vRW5hYmxlIGNsaWNrIG9uIGltZyBhZnRlciAzIHNlY29uZGVzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxhbmRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIGxhbmRpbmcuY2xhc3NMaXN0LmFkZChcInZpc3VhbGx5LWhpZGRlblwiKTtcbiAgICAgICAgICAgY29kZS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgIH0pXG4gICAgfSwgMTAwKVxuXG4gICAgLy9HbyBiYWNrIHRvIGxhbmRpbmcgcGFnZVxuICAgIGNhbmNlbERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvZGUnKS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRyYWl0LXNjcmVlbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2hlLXJldG91ci1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoZS1yZXRvdXItYXVkaW8nKS5wbGF5KCk7XG4gICAgfSlcbn0pXG5cbiIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vY2xhc3MvUGFnZVwiO1xuXG5jb25zdCBwb3J0cmFpdFNjcmVlbiA9IG5ldyBQYWdlKCcjcG9ydHJhaXQtc2NyZWVuJylcbmNvbnN0IGxhbmRzY2FwZVNjcmVlbiA9IG5ldyBQYWdlKCcjbGFuZHNjYXBlLXNjcmVlbicpXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAvL0NoZWNrIHRoZSBzY3JlZW4gb3JpZW50YXRpb24gZGlyZWN0bHkgYW5kIGlmIGl0IGlzIGVuYWJsZWQgaW4gdGhlIGN1cnJlbnQgYnJvd3NlclxuICAgIGNoZWNrU2NyZWVuKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjaGVja1NjcmVlbigpO1xuICAgIH0pXG59KTtcblxuZnVuY3Rpb24gY2hlY2tTY3JlZW4oKSB7XG4gICAgcG9ydHJhaXRTY3JlZW4uc2hvdygpO1xuICAgIGxhbmRzY2FwZVNjcmVlbi5oaWRlKCk7XG4gICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiAhPSAwKSB7XG4gICAgICAgIHBvcnRyYWl0U2NyZWVuLmhpZGUoKTtcbiAgICAgICAgbGFuZHNjYXBlU2NyZWVuLnNob3coKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUmV3cml0ZXIgfSBmcm9tICcuLi9jbGFzcy9SZXdyaXRlci5qcyc7XG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xuXG5jb25zdCBjb2RlID0gbmV3IFJld3JpdGVyKCdpbnB1dC5oaWRkZW4taW5wdXQnLCAnI291dHB1dCcsIGZhbHNlKVxuXG5jb25zdCBjb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0nKTtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvL1dyaXRlIHRoZSBpbnB1dCB0ZXh0IGFzIHRoZSBjb3JyZWN0IHBsYWNlIGFzIHRoZXkgYXJlIHNlcGFyYXRlZCBkaXZzIGZvciBkaXNwbGF5IHJlYXNvbnNcbiAgICBjb2RlLndhdGNoKCk7XG5cbiAgICAvL0xpc3RlbiB0byB0aGUgY2xpY2sgb24gVmFsaWRlciB0byBzZW5kIHRoZSBkYXRhXG4gICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVBvc3QoY29kZS5maW5hbE91dHB1dCgpKTtcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gbWFrZVBvc3QocGFzc3dvcmQpIHtcbiAgICBheGlvcy5wb3N0KCcvY29kZScsIHtcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS13aW4tYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS13aW4tYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbiA9ICcvZ2FtZSd9LCAyMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvZGUgaW52YWxpZGUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWxvb3NlLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtbG9vc2UtYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdjb2RlIGFscmVhZHkgdXNlZCcsIGUpKVxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgdmVyc2lvbiA9IG1hdGNoWzBdIDwgNCA/IDEgOiBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKSB8fFxuICAgIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgY29kZVBvaW50QXQsIGF0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgcG9zKSB7XG4gICAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBmaXJzdCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgPyBDT05WRVJUX1RPX1NUUklORyA/IFMuY2hhckF0KHBvc2l0aW9uKSA6IGZpcnN0XG4gICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkcgPyBTLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkgfHwgIShOQVRJVkVfU1lNQk9MIHx8IHR5cGVvZiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPT0gJ3N0cmluZycpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICAgIH1cbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=