(self["webpackChunk"] = self["webpackChunk"] || []).push([["game"],{

/***/ "./assets/class/Hint.js":
/*!******************************!*\
  !*** ./assets/class/Hint.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hint": () => (/* binding */ Hint)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hint = /*#__PURE__*/function () {
  function Hint(number) {
    _classCallCheck(this, Hint);

    this.number = number;
    this.easy = false;
    this.hard = false;
    this.solution = false;
  }

  _createClass(Hint, [{
    key: "seeEasy",
    value: function seeEasy() {
      this.easy = true;
      return this;
    }
  }, {
    key: "seeHard",
    value: function seeHard() {
      this.hard = true;
      return this;
    }
  }, {
    key: "seeSolution",
    value: function seeSolution() {
      this.solution = true;
      return this;
    }
  }]);

  return Hint;
}();

/***/ }),

/***/ "./assets/class/Image.js":
/*!*******************************!*\
  !*** ./assets/class/Image.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Image = /*#__PURE__*/function () {
  function Image(selector, active, inactive, base) {
    _classCallCheck(this, Image);

    this.element = document.querySelector(selector);
    this.active = active;
    this.inactive = inactive;
    this.base = base;
  }

  _createClass(Image, [{
    key: "switch",
    value: function _switch(mode) {
      this.element.style = "background-image: url('/build/".concat(this.base, "/").concat(mode, ".png')");
      return this.element;
    }
  }, {
    key: "activate",
    value: function activate() {
      return this["switch"](this.active);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      return this["switch"](this.inactive);
    }
  }]);

  return Image;
}();

/***/ }),

/***/ "./assets/class/Numpad.js":
/*!********************************!*\
  !*** ./assets/class/Numpad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Numpad": () => (/* binding */ Numpad)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Numpad = /*#__PURE__*/function () {
  function Numpad(pad, output) {
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

    _classCallCheck(this, Numpad);

    this.element = document.querySelector(pad);
    this.output = document.querySelector(output);
    this.limit = limit;
    this.children = this.element.children;
  }

  _createClass(Numpad, [{
    key: "listen",
    value: function listen(child, callback) {
      child.addEventListener('click', callback);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.children.forEach(function (child, index) {
        _this.listen(child, function () {
          switch (index) {
            case 10:
              _this.write('0');

              document.querySelector('#bouton-number-audio').currentTime = 0;
              document.querySelector('#bouton-number-audio').play();
              break;

            case 9:
              _this.reset();

              document.querySelector('#touche-effacer-audio').currentTime = 0;
              document.querySelector('#touche-effacer-audio').play();
              break;

            case 11:
              break;

            default:
              _this.write((index + 1).toString());

              document.querySelector('#bouton-number-audio').currentTime = 0;
              document.querySelector('#bouton-number-audio').play();
              break;
          }
        });
      });
      return this.element;
    }
  }, {
    key: "write",
    value: function write(value) {
      if (this.output.innerHTML.length < this.limit) {
        this.output.innerHTML += value;
      }

      return this.element;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.output.innerHTML = "";
      return this.element;
    }
  }]);

  return Numpad;
}();
;

/***/ }),

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

/***/ "./assets/class/Switch.js":
/*!********************************!*\
  !*** ./assets/class/Switch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Switch": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Switch = /*#__PURE__*/function () {
  function Switch(selector, current, after) {
    var isBack = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Switch);

    this.element = document.querySelector(selector);
    this.current = document.querySelector(current);
    this.after = document.querySelector(after);
    this.isBack = isBack;
  }

  _createClass(Switch, [{
    key: "watch",
    value: function watch() {
      var _this = this;

      this.element.addEventListener('click', function () {
        _this.change();

        if (_this.isBack) {
          document.querySelector('#touche-retour-audio').currentTime = 0;
          document.querySelector('#touche-retour-audio').play();
        } else {
          document.querySelector('#page-audio').currentTime = 0;
          document.querySelector('#page-audio').play();
        }
      });
      return this.element;
    }
  }, {
    key: "change",
    value: function change() {
      this.current.classList.add('visually-hidden');
      this.after.classList.remove('visually-hidden');
      return this.element;
    }
  }]);

  return Switch;
}();
;

/***/ }),

/***/ "./assets/components/music.js":
/*!************************************!*\
  !*** ./assets/components/music.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function musicPlaylist() {
  var currentMusic = localStorage.getItem('music') || '#intro-music';
  localStorage.setItem('music', currentMusic);
  document.querySelector(currentMusic).loop = true;
  document.querySelector(currentMusic).muted = false;
  document.querySelector(currentMusic).volume = 0.5;
  var promise = document.querySelector(localStorage.getItem('music')).play();

  if (promise !== undefined) {
    promise["catch"](function (e) {
      console.log('Music can\'t be restarted without user interaction', e);
      document.querySelector('#music-volume').classList.remove('visually-hidden');
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (musicPlaylist);

/***/ }),

/***/ "./assets/components/scoreFormatter.js":
/*!*********************************************!*\
  !*** ./assets/components/scoreFormatter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);








function formatScore(score) {
  var formattedScore = score.toString().split("");
  formattedScore = formattedScore.slice(0, formattedScore.length - 3).join('') + " " + formattedScore.slice(formattedScore.length - 3).join("");
  return formattedScore;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatScore);

/***/ }),

/***/ "./assets/components/switch.js":
/*!*************************************!*\
  !*** ./assets/components/switch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../class/Switch.js */ "./assets/class/Switch.js");


function initSwitch() {
  //Déclarations des switch
  //hintCode
  var hintBack = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#hint-back', '#hint-pannel', '#game-board', true); //rule-success

  var retourBtn = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#retour', '#rules-pannel', '#game-board', true); //stepCode

  var stepDetail = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#steps-detail', '#step-pannel', '#step-detail-pannel');
  var stepDetailBack = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#step-detail-back', '#step-detail-pannel', '#game-board', true);
  var buttonStepCode = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#bouton-step-code', '#step-detail-pannel', '#step-pannel'); //selectHint

  var selectHintBack = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#select-hint-back', '#select-hint', '#game-board', true);
  var showHintBack = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#back-gb', '#show-hint', '#game-board', true); //teamName

  var teamnameBack = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#teamname-back', '#teamname-pannel', '#game-board', true); //settingUp

  var settingUpBack = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_0__.Switch('#setting-up-back', '#setting-up', '#game-board', true); //Passiv listening of the switches (ie eventlistener on click)

  stepDetail.watch();
  buttonStepCode.watch();
  hintBack.watch();
  selectHintBack.watch();
  showHintBack.watch();
  teamnameBack.watch();
  showHintBack.watch();
  settingUpBack.watch();
  stepDetailBack.watch();
  retourBtn.watch();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSwitch);

/***/ }),

/***/ "./assets/game.js":
/*!************************!*\
  !*** ./assets/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game/gameboard.js */ "./assets/scripts/game/gameboard.js");
/* harmony import */ var _scripts_game_rulesSuccess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game/rulesSuccess.js */ "./assets/scripts/game/rulesSuccess.js");
/* harmony import */ var _scripts_game_teamname_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game/teamname.js */ "./assets/scripts/game/teamname.js");
/* harmony import */ var _scripts_game_settingUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/game/settingUp.js */ "./assets/scripts/game/settingUp.js");
/* harmony import */ var _scripts_game_stepCode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/game/stepCode.js */ "./assets/scripts/game/stepCode.js");
/* harmony import */ var _scripts_game_hintCode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/game/hintCode.js */ "./assets/scripts/game/hintCode.js");
/* harmony import */ var _scripts_game_selectHint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/game/selectHint.js */ "./assets/scripts/game/selectHint.js");
/* harmony import */ var _scripts_game_detailsPannel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/game/detailsPannel.js */ "./assets/scripts/game/detailsPannel.js");
/* harmony import */ var _scripts_game_question_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/game/question.js */ "./assets/scripts/game/question.js");
/* harmony import */ var _components_switch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/switch.js */ "./assets/components/switch.js");
//Import scripts specific to each sub view used during the game








 //import components basic functions (switch buttons are all prepared at once)


window.addEventListener('DOMContentLoaded', function () {
  (0,_components_switch_js__WEBPACK_IMPORTED_MODULE_9__.default)();
});

window.onbeforeunload = function () {
  return "Abandonner la partie ou quitter la page fera perdre définitivement l'accèes au jeu.";
};

/***/ }),

/***/ "./assets/leave.js":
/*!*************************!*\
  !*** ./assets/leave.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
window.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('#leave-suite')) {
    document.querySelector('#leave-suite').addEventListener('click', function () {
      leave();
      window.location.href = "/";
    });
  }

  if (document.querySelector('#final-leave')) {
    document.querySelector('#final-leave').addEventListener('click', function () {
      leave();
      window.location.href = "/";
    });
  }
});

function leave() {
  if (localStorage.getItem('stepStartTimer') !== null) localStorage.clear('stepStartTimer');
  if (localStorage.getItem('currentTime') !== null) localStorage.clear('currentTime');
  if (localStorage.getItem('score') !== null) localStorage.clear('score');
  if (localStorage.getItem('teamname') !== null) localStorage.clear('teamname');
  if (localStorage.getItem('currentStep') !== null) localStorage.clear('currentStep');
  if (localStorage.getItem('timer') !== null) localStorage.clear('timer');
  if (localStorage.getItem('firstStepTimer') !== null) localStorage.clear('firstStepTimer');
  if (localStorage.getItem('startTime') !== null) localStorage.clear('startTime');
  if (localStorage.getItem('hints') !== null) localStorage.clear('hints');
  window.clearInterval(localStorage.getItem('interval'));
  /* switchView('#'); */

  localStorage.clear('i');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leave);

/***/ }),

/***/ "./assets/scripts/game/detailsPannel.js":
/*!**********************************************!*\
  !*** ./assets/scripts/game/detailsPannel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _class_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class/Page.js */ "./assets/class/Page.js");


var stepDetailPannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page('#step-detail-pannel');
var endStep = new _class_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page('#end-step');
var gameBoard = new _class_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page('#game-board');

function refreshStepDetailAssets() {
  var currentStep = parseInt(window.localStorage.getItem('currentStep'));

  var _loop = function _loop(i) {
    document.querySelector('[data-numbers="' + i + '"]').style.backgroundImage = "url('/build/etapes_recap/etape".concat(i, ".png')");
    document.querySelector('[data-numbers="' + i + '"]').style.opacity = 1;
    document.querySelector('[data-numbers="' + i + '"]').addEventListener('click', function () {
      document.querySelector('#bonus-pts').classList.add('visually-hidden');
      stepDetailPannel.hide();
      endStep.show();
      document.querySelector('#end-step').style.backgroundImage = "url('/build/fin_etapes/etape_".concat(i, ".jpg')");
      document.querySelector('#end-step').addEventListener('click', function () {
        document.querySelector('#bonus-pts').classList.remove('visually-hidden');
        endStep.hide();
        gameBoard.hide();
        stepDetailPannel.show();
      });
    });
  };

  for (var i = currentStep - 1; i >= 1; i--) {
    _loop(i);
  }

  if (localStorage.getItem('succesA') == 'true') {
    document.querySelector('[data-numbers="10"]').style.opacity = 1;
    document.querySelector('[data-numbers="10"]').addEventListener('click', function () {
      document.querySelector('#bonus-pts').classList.add('visually-hidden');
      stepDetailPannel.hide();
      endStep.show();
      document.querySelector('#end-step').style.backgroundImage = "url('/build/fin_etapes/etape_bonus_1.jpg')";
      document.querySelector('#end-step').addEventListener('click', function () {
        document.querySelector('#bonus-pts').classList.remove('visually-hidden');
        endStep.hide();
        gameBoard.hide();
        stepDetailPannel.show();
      });
    });
  }

  if (localStorage.getItem('succesB') == 'true') {
    document.querySelector('[data-numbers="11"]').style.opacity = 1;
    document.querySelector('[data-numbers="11"]').addEventListener('click', function () {
      document.querySelector('#bonus-pts').classList.add('visually-hidden');
      stepDetailPannel.hide();
      endStep.show();
      document.querySelector('#end-step').style.backgroundImage = "url('/build/fin_etapes/etape_bonus_2.jpg')";
      document.querySelector('#end-step').addEventListener('click', function () {
        document.querySelector('#bonus-pts').classList.remove('visually-hidden');
        endStep.hide();
        gameBoard.hide();
        stepDetailPannel.show();
      });
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshStepDetailAssets);

/***/ }),

/***/ "./assets/scripts/game/gameboard.js":
/*!******************************************!*\
  !*** ./assets/scripts/game/gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _class_Page_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../class/Page.js */ "./assets/class/Page.js");
/* harmony import */ var _class_Image_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../class/Image.js */ "./assets/class/Image.js");
/* harmony import */ var _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../class/Hint.js */ "./assets/class/Hint.js");
/* harmony import */ var _settingUp_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settingUp.js */ "./assets/scripts/game/settingUp.js");
/* harmony import */ var _class_Switch_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../class/Switch.js */ "./assets/class/Switch.js");
/* harmony import */ var _components_scoreFormatter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/scoreFormatter */ "./assets/components/scoreFormatter.js");
/* harmony import */ var _components_music_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/music.js */ "./assets/components/music.js");
/* harmony import */ var _stepCode_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./stepCode.js */ "./assets/scripts/game/stepCode.js");
/* harmony import */ var _leave_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../leave.js */ "./assets/leave.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
























 //Game board it self

var gameBoard = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#game-board');
var giveUpPage = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#give-up'); //giveUP

var returnGameBoard = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_19__.Switch('#return-game-board', '#give-up', '#game-board'); //end game

var averageScore = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#average-score'); //Other subviews

var teamnamePannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#teamname-pannel'); // à corriger après les test //

var rulesPannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#rules-pannel'); //#rules-pannel
// - - - - - - - - - - - - - //
//average score 

var averageScoreSuite = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_19__.Switch('#score-suite', '#average-score', '#q1-pannel');
var settingUp = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#setting-up');
var selectHint = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#select-hint'); //Available buttons on the game board

var teamnameButton = document.querySelector('#team-name');
var rulesButton = document.querySelector('#rules');
var startButton = document.querySelector('#game-start');
var showStep = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#step-pannel');
var showHint = new _class_Page_js__WEBPACK_IMPORTED_MODULE_15__.Page('#hint-pannel');
var step = new _class_Image_js__WEBPACK_IMPORTED_MODULE_16__.Image('#step', 'etapes_enable', 'etapes_disable', 'menu_principal');
var hint = new _class_Image_js__WEBPACK_IMPORTED_MODULE_16__.Image('#hint', 'indices_enable', 'indices_disable', 'menu_principal'); //Display change for team name

var teamnameOutputDiv = document.querySelector('#team-name-output');
initHints();
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#music-volume').addEventListener('click', function () {
    document.querySelector('#music-volume').classList.add('visually-hidden');
    (0,_components_music_js__WEBPACK_IMPORTED_MODULE_21__.default)();
  });
  (0,_components_music_js__WEBPACK_IMPORTED_MODULE_21__.default)();

  if (localStorage.getItem('currentStep')) {
    if (localStorage.getItem('currentStep') == '1' && localStorage.getItem('firstStepTimer') > 0) {
      (0,_settingUp_js__WEBPACK_IMPORTED_MODULE_18__.default)();
      document.querySelector('#separator').classList.add('visually-hidden');
      document.querySelector('#bar-charge-container').classList.remove('visually-hidden');
      document.querySelector('#bar-charge').classList.remove('visually-hidden');
      var baseInterval = window.setInterval(function () {
        if (localStorage.getItem('firstStepTimer') != '0') localStorage.setItem('firstStepTimer', localStorage.getItem('firstStepTimer') - 1);else clearInterval();
        if (localStorage.getItem('currentStep') == 2) clearInterval();
      }, 1000);
      localStorage.setItem('interval', baseInterval);
    } else hint.activate();

    teamnameUpdate();
    startBtnFct();
    document.querySelector('#team-name').style.backgroundImage = "url('/build/menu_principal/nom_equipe_vide.png')";
    document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/abandonnerpartie.png')";
    step.activate();
    step.element.addEventListener('click', showSteps);
    hint.element.addEventListener('click', showHints);
    document.querySelector('#score').innerHTML = localStorage.getItem('score') + " pts";
    document.querySelector('#time').innerHTML = localStorage.getItem('timer');
    var restartInterval = window.setInterval(function () {
      /* if (localStorage.getItem('teamname') === null) {
          return leave();
      } */
      var now = new Date().getTime();
      localStorage.setItem('currentTime', now);
      localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 1);
      var timeleft = 5400000 - (localStorage.getItem('currentTime') - localStorage.getItem('startTime'));
      var isTimeLeftNegative = timeleft < 0;
      timeleft = Math.abs(timeleft); // Calculating the hours, minutes and seconds left

      var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(timeleft % (1000 * 60) / 1000); // Result is output to the specific element

      document.getElementById("time").innerHTML = hours + " : " + (minutes.toString().length == 2 ? minutes : '0' + minutes.toString()) + " : " + (seconds.toString().length == 2 ? seconds : '0' + seconds.toString());
      isTimeLeftNegative ? document.getElementById("time").innerHTML = "- " + document.getElementById("time").innerHTML : false;
      document.getElementById("score").innerHTML = (0,_components_scoreFormatter__WEBPACK_IMPORTED_MODULE_20__.default)(localStorage.getItem('score')) + ' pts'; // Display the message when countdown is over

      if (timeleft < 0) {
        clearInterval();
        document.getElementById("time").innerHTML = ""; //document.getElementById("end").innerHTML = "TIME UP!!";
      }
    }, 1000);
    localStorage.setItem('interval', restartInterval);
  } //View switch (we name events to be able to remove them later)


  teamnameButton.addEventListener('click', teamnameView);
  rulesButton.addEventListener('click', rulesView);
  endGame(); //Look for changes of display coming from other scripts

  var observer = new MutationObserver(callback); //callback is defined later

  observer.observe(startButton, {
    attributes: true
  });
  observer.observe(teamnameButton, {
    attributes: true
  });
  observer.observe(step.element, {
    attributes: true
  });
  observer.observe(hint.element, {
    attributes: true
  });
}); //Views events

function teamnameView() {
  switchView(teamnamePannel);
}

function rulesView() {
  switchView(rulesPannel);
} //Main view swith


function switchView(view) {
  gameBoard.hide();
  view.show();
  document.querySelector('#page-audio').currentTime = 0;
  document.querySelector('#page-audio').play();
} //Observe if there is a change in the htmlElement (here bg img change)


var callback = function callback(mutationsList) {
  var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var mutation = _step.value;

      if (mutation.type === 'attributes') {
        switch (mutation.target.id) {
          case 'team-name':
            teamnameUpdate();
            break;

          case 'game-start':
            startBtnFct();
            break;

          case 'step':
            step.element.addEventListener('click', showSteps);
            break;

          case 'hint':
            hint.element.addEventListener('click', showHints);
            break;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}; //Update teamname


function teamnameUpdate() {
  teamnameButton.removeEventListener('click', teamnameView);
  teamnameOutputDiv.innerHTML = window.localStorage.getItem('teamname');
  teamnameOutputDiv.style.zIndex = 9999; //previously at -1 bc it makes the button unclickable otherwise
} //check where the player is atm to either add the start game event or replace it for the end game event


function startBtnFct() {
  if (localStorage.getItem('currentStep')) {
    startButton.removeEventListener('click', startGame);
    startButton.addEventListener('click', giveUp);
  } else {
    startButton.addEventListener('click', startGame);
  }
} //Now the fun beggins


function startGame() {
  switchView(settingUp);
}

function showSteps() {
  switchView(showStep);
}

function showHints() {
  if (localStorage.getItem('hintChecked') == 'true') {
    switchView(selectHint);
  } else {
    switchView(showHint);
  }
}

function giveUp() {
  giveUpPage.show();
  gameBoard.hide();
  returnGameBoard.watch();
  document.querySelector('#comfirm-give-up').addEventListener('click', function () {
    (0,_leave_js__WEBPACK_IMPORTED_MODULE_23__.default)();
    window.location.href = '/game/leave';
  });
}

function initHints() {
  if (!localStorage.getItem('hints')) {
    var HINTS = [new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(1), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(2), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(3), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(4), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(5), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(6), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(7), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(8), new _class_Hint_js__WEBPACK_IMPORTED_MODULE_17__.Hint(9)];
    localStorage.setItem('hints', JSON.stringify(HINTS));
  }
}

function endGame() {
  if (localStorage.getItem('endgame') == "true") {
    gameBoard.hide();
    averageScore.show();
    averageScoreSuite.element.addEventListener('click', function () {
      averageScoreSuite.change();
      localStorage.setItem('currentStep', 11);
      (0,_stepCode_js__WEBPACK_IMPORTED_MODULE_22__.getNextStepMusic)(11);
    });
    document.querySelector('#score-div').innerHTML = localStorage.getItem('finalScore') + ' pts';
  }
}

/***/ }),

/***/ "./assets/scripts/game/hintCode.js":
/*!*****************************************!*\
  !*** ./assets/scripts/game/hintCode.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/Page.js */ "./assets/class/Page.js");
/* harmony import */ var _class_Numpad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class/Numpad.js */ "./assets/class/Numpad.js");

 //import axios

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js").default; //display used in query response


var hintPannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#hint-pannel');
var selectHint = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#select-hint');
var gameBoard = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#game-board'); //hint error

var hintError = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#hint-error-pannel'); //rswitches

var hintBack = document.querySelector('#hint-back');
var hintPad = new _class_Numpad_js__WEBPACK_IMPORTED_MODULE_1__.Numpad('#numpad-hint', '#hint-code-output');
window.addEventListener('DOMContentLoaded', function () {
  //Numpad is ready to write
  hintPad.start(); //Return btn listener

  hintBack.addEventListener('click', function () {
    hintPad.reset();
  });
  document.querySelector('#hint-code-validate').addEventListener('click', function () {
    axios.post('/game/hintCode', {
      step: window.localStorage.getItem('currentStep'),
      code: hintPad.output.innerHTML
    }).then(function (response) {
      if (response.data.step == 'wrong') {
        console.log(response);
        hintPannel.hide();
        hintError.show();
        document.querySelector('#hint-error-back').addEventListener('click', function () {
          hintError.hide();
          gameBoard.show();
        });
      }

      if (response.data.step == 'step') {
        selectHint.show();
        hintPannel.hide();
        document.querySelector('#jingle-win-audio').currentTime = 0;
        document.querySelector('#jingle-win-audio').play();
        window.localStorage.setItem('hintChecked', 'true');
      } else {
        document.querySelector('#code-erreur').currentTime = 0;
        document.querySelector('#code-erreur').play();
      }

      hintPad.reset();
    })["catch"](function (error) {
      console.log(error);
    });
  });
});
/* let hints = JSON.parse(window.localStorage.getItem('hints'));
console.log(hints.stepTwo)
hints.stepTwo.easy = true;
let newHint = new Hint(hints.stepTwo.number);
if (hints.stepTwo.easy) newHint.seeEasy();
if (hints.stepTwo.easy) newHint.seeHard();
if (hints.stepTwo.easy) newHint.seeSolution();
window.localStorage.setItem('hints', JSON.stringify(hints))
console.log(JSON.parse(window.localStorage.getItem('hints')))
 */

/***/ }),

/***/ "./assets/scripts/game/question.js":
/*!*****************************************!*\
  !*** ./assets/scripts/game/question.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _class_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../class/Switch */ "./assets/class/Switch.js");
/* harmony import */ var _class_Numpad_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../class/Numpad.js */ "./assets/class/Numpad.js");
/* harmony import */ var _class_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../class/Page */ "./assets/class/Page.js");
/* harmony import */ var _leave_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../leave.js */ "./assets/leave.js");














var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js").default;


var success = [];
localStorage.setItem('question', localStorage.getItem('question') || 1);
localStorage.setItem('succesA', localStorage.getItem('succesA') || false);
localStorage.setItem('succesB', localStorage.getItem('succesB') || false);
localStorage.setItem('success', JSON.stringify(success));
localStorage.setItem('bonusPoints', 0);
var succes = new _class_Page__WEBPACK_IMPORTED_MODULE_12__.Page('#succes');
var resPannel = new _class_Page__WEBPACK_IMPORTED_MODULE_12__.Page('#res-pannel');
var q1p1 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q1p1', '#q1-pannel', '#res-pannel');
var q1p2 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q1p2', '#q1-pannel', '#res-pannel');
var q1p3 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q1p3', '#q1-pannel', '#res-pannel');
var q1p4 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q1p4', '#q1-pannel', '#res-pannel');
var q1p5 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q1p5', '#q1-pannel', '#res-pannel');
var q2p1 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q2p1', '#q2-pannel', '#res-pannel');
var q2p2 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q2p2', '#q2-pannel', '#succes');
var q3p1 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q3p1', '#q3-pannel', '#res-pannel');
var q3p2 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q3p2', '#q3-pannel', '#res-pannel');
var q4p1 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q4p1', '#q4-pannel', '#res-pannel');
var q4p2 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q4p2', '#q4-pannel', '#succes');
var q4p3 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q4p3', '#q4-pannel', '#res-pannel');
var q4p4 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q4p4', '#q4-pannel', '#res-pannel');
var q5p1 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q5p1', '#q5-pannel', '#res-pannel');
var q5p2 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q5p2', '#q5-pannel', '#res-pannel');
var q5p3 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q5p3', '#q5-pannel', '#res-pannel');
var q5p4 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q5p4', '#q5-pannel', '#res-pannel');
var q5p5 = new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#q5p5', '#q5-pannel', '#res-pannel');
var q6Numpad = new _class_Numpad_js__WEBPACK_IMPORTED_MODULE_11__.Numpad('#numpad-zip', '#zip-code-output', 5);
var propositions = [[q1p1, q1p2, q1p3, q1p4, q1p5], [q2p1, q2p2], [q3p1, q3p2], [q4p1, q4p2, q4p3, q4p4], [q5p1, q5p2, q5p3, q5p4, q5p5]];
window.addEventListener('DOMContentLoaded', function () {
  q6Numpad.start();
  propositions.forEach(function (group, index) {
    group.forEach(function (prop, subIndex) {
      prop.element.addEventListener('click', function () {
        updateAnswerPannel(index + 1, subIndex + 1);
        document.querySelector('#page-audio').currentTime = 0;
        document.querySelector('#page-audio').play();
      });
    });
  });
  document.querySelector('#res-suite').addEventListener('click', function () {
    new _class_Switch__WEBPACK_IMPORTED_MODULE_10__.Switch('#res-img', '#res-pannel', "#q".concat(localStorage.getItem('question'), "-pannel")).change();
    document.querySelector('#page-audio').currentTime = 0;
    document.querySelector('#page-audio').play();
  });
  document.querySelector('#zip-code-validate').addEventListener('click', function () {
    var zip = document.querySelector('#zip-code-output').innerHTML.toString();
    zip.length == 0 ? zip = '00000' : false;

    if (zip.match(/[0-9]{5}/)) {
      axios.post('/game/final', {
        Zip: zip,
        numberPlayers: localStorage.getItem('numberPlayers'),
        successes: JSON.parse(localStorage.getItem('success')),
        bonusPoints: localStorage.getItem('bonusPoints')
      })
      /* .then(() => leave()) */
      .then(function () {
        return window.location.replace('/game/scoreboard');
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  });
});

function updateAnswerPannel(question, proposition) {
  switch (question) {
    case 1:
      localStorage.setItem('question', 2);
      localStorage.setItem('numberPlayers', proposition);
      document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_1/reponse_b.png')";
      if (proposition == 1) document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_1/reponse_a.png')";
      q1p1.change();
      break;

    case 2:
      localStorage.setItem('question', 3);

      if (proposition == 2) {
        var listenNow = function listenNow() {
          document.querySelector('#page-audio').currentTime = 0;
          document.querySelector('#page-audio').play();
          succes.hide();
          resPannel.show();
          document.querySelector('#succes').removeEventListener('click', listenNow);
        };

        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
        document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_2/reponse_b.png')";
        document.querySelector('#succes').style.backgroundImage = "url('/build/succes/succes_1.jpeg')";
        q2p2.change();
        localStorage.setItem('success', JSON.stringify(JSON.parse(localStorage.getItem('success')).concat(["Salon de thé"])));
        localStorage.setItem('bonusPoints', parseInt(localStorage.getItem('bonusPoints')) + 100);
        document.querySelector('#succes').addEventListener('click', listenNow);
      } else {
        document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_2/reponse_a.png')";
        q2p1.change();
      }

      break;

    case 3:
      localStorage.setItem('question', 4);
      if (proposition == 1) document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_aa.png')";
      if (proposition == 1 && localStorage.getItem('succesA') == 'true') document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_a.png')";
      if (proposition == 2) document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_b.png')";
      if (proposition == 2 && localStorage.getItem('succesA') == 'true') document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_3/reponse_bb.png')";
      q3p1.change();
      break;

    case 4:
      localStorage.setItem('question', 5);

      if (proposition == 1) {
        document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_a.png')";
        q4p1.change();
      }

      if (proposition == 2) {
        document.querySelector('#jingle-bonus-audio').currentTime = 0;
        document.querySelector('#jingle-bonus-audio').play();
        document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_b.png')";
        document.querySelector('#succes').style.backgroundImage = "url('/build/succes/succes_3.jpeg')";
        q4p2.change();
        localStorage.setItem('success', JSON.stringify(JSON.parse(localStorage.getItem('success')).concat(["Superstition"])));
        localStorage.setItem('bonusPoints', parseInt(localStorage.getItem('bonusPoints')) + 100);
        document.querySelector('#succes').addEventListener('click', function () {
          document.querySelector('#page-audio').currentTime = 0;
          document.querySelector('#page-audio').play();
          succes.hide();
          resPannel.show();
        });
      }

      if (proposition == 3) {
        document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_c.png')";
        q4p1.change();
      }

      if (proposition == 4) {
        document.querySelector('#res-img').style.backgroundImage = "url( '/build/questionnaire_fin/reponses/question_4/reponse_d.png')";
        q4p1.change();
      }

      break;

    case 5:
      localStorage.setItem('question', 6);
      document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_b.png')";
      if (proposition == 1 || proposition == 2) document.querySelector('#res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_a.png')";
      q5p1.change();
      break;

    /*   case 6:
          localStorage.setItem('question', 7);
          document.querySelector('#final-res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_b.png')";
          if (proposition == 1 || proposition == 2) document.querySelector('#final-res-img').style.backgroundImage = "url('/build/questionnaire_fin/reponses/question_5/reponse_a.png')";
          q5p1.change();
          break; */
  }
}

/***/ }),

/***/ "./assets/scripts/game/rulesSuccess.js":
/*!*********************************************!*\
  !*** ./assets/scripts/game/rulesSuccess.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/Page.js */ "./assets/class/Page.js");
/* harmony import */ var _class_Image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class/Image.js */ "./assets/class/Image.js");

 //Pages or subpages

var rulesContent = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#rules-content');
var successContent = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#success-content'); //Top btns for display change in subview

var rulesBtn = new _class_Image_js__WEBPACK_IMPORTED_MODULE_1__.Image('#rules-button', 'reglement_enable', 'reglement_disable', 'reglement');
var successBtn = new _class_Image_js__WEBPACK_IMPORTED_MODULE_1__.Image('#success-button', 'succes_enable', 'succes_disable', 'reglement');
window.addEventListener('DOMContentLoaded', function () {
  successBtn.element.addEventListener('click', function () {
    rulesBtn.deactivate();
    successBtn.activate();
    rulesContent.hide();
    successContent.show();
    document.querySelector('#page-audio').currentTime = 0;
    document.querySelector('#page-audio').play();
  });
  rulesBtn.element.addEventListener('click', function () {
    rulesBtn.activate();
    successBtn.deactivate();
    rulesContent.show();
    successContent.hide();
    document.querySelector('#page-audio').currentTime = 0;
    document.querySelector('#page-audio').play();
  });
});

/***/ }),

/***/ "./assets/scripts/game/selectHint.js":
/*!*******************************************!*\
  !*** ./assets/scripts/game/selectHint.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _class_Hint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class/Hint */ "./assets/class/Hint.js");
/* harmony import */ var _class_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../class/Switch */ "./assets/class/Switch.js");


 //hint selection

var hardHint = new _class_Switch__WEBPACK_IMPORTED_MODULE_2__.Switch('#hard-hint', '#select-hint', '#show-hint');
var easyHint = new _class_Switch__WEBPACK_IMPORTED_MODULE_2__.Switch('#easy-hint', '#select-hint', '#show-hint');
var solution = new _class_Switch__WEBPACK_IMPORTED_MODULE_2__.Switch('#solution', '#select-hint', '#show-hint'); //hints array

var hints = JSON.parse(window.localStorage.getItem('hints'));
window.addEventListener('DOMContentLoaded', function () {
  updateDisplay();
  hardHint.element.addEventListener('click', function () {
    updateHint('hard');
    document.querySelector('#hint-display').style.backgroundImage = "url('/build/indices/etape" + window.localStorage.getItem('currentStep') + "/indice_difficile.png')";
    hardHint.change();
    document.querySelector('#jingle-bonus-audio').currentTime = 0;
    document.querySelector('#jingle-bonus-audio').play();
  });
  easyHint.element.addEventListener('click', function () {
    updateHint('easy');
    document.querySelector('#hint-display').style.backgroundImage = "url('/build/indices/etape" + window.localStorage.getItem('currentStep') + "/indice_facile.png')";
    easyHint.change();
    document.querySelector('#jingle-bonus-audio').currentTime = 0;
    document.querySelector('#jingle-bonus-audio').play();
  });
  solution.element.addEventListener('click', function () {
    updateHint('solution');
    document.querySelector('#hint-display').style.backgroundImage = "url('/build/indices/etape" + window.localStorage.getItem('currentStep') + "/solution.png')";
    solution.change();
    document.querySelector('#jingle-bonus-audio').currentTime = 0;
    document.querySelector('#jingle-bonus-audio').play();
  });
});

function updateHint(difficulty) {
  var currentStep = window.localStorage.getItem('currentStep');
  var newHint = new _class_Hint__WEBPACK_IMPORTED_MODULE_1__.Hint(hints[currentStep - 1].number);

  if (hints[currentStep - 1].easy) {
    newHint.seeEasy();
  }

  if (hints[currentStep - 1].hard) {
    newHint.seeHard();
  }

  if (hints[currentStep - 1].solution) {
    newHint.seeSolution();
  }

  if (difficulty == 'easy') {
    newHint.easy == false ? localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 250) : false;
    newHint.easy = true;
  }

  if (difficulty == 'hard') {
    newHint.hard == false ? localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 100) : false;
    newHint.hard = true;
  }

  if (difficulty == 'solution') {
    newHint.solution == false ? localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 600) : false;
    newHint.solution = true;
  }

  hints[currentStep - 1] = newHint;
  window.localStorage.setItem('hints', JSON.stringify(hints));
  updateDisplay();
}

function updateDisplay() {
  if (window.localStorage.getItem('currentStep') && window.localStorage.getItem('currentStep') != 1) {
    var currentStep = window.localStorage.getItem('currentStep');

    if (hints[currentStep - 1].easy) {
      easyHint.element.style.backgroundImage = "url('/build/choix_indices/indice_facile_revoir.png')";
    }

    if (hints[currentStep - 1].hard) {
      hardHint.element.style.backgroundImage = "url('/build/choix_indices/indice_difficile_revoir.png')";
    }

    if (hints[currentStep - 1].solution) {
      solution.element.style.backgroundImage = "url('/build/choix_indices/solution_revoir.png')";
    }
  }
}

/***/ }),

/***/ "./assets/scripts/game/settingUp.js":
/*!******************************************!*\
  !*** ./assets/scripts/game/settingUp.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _class_Image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../class/Image.js */ "./assets/class/Image.js");
/* harmony import */ var _class_Switch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../class/Switch.js */ "./assets/class/Switch.js");
/* harmony import */ var _components_music_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/music.js */ "./assets/components/music.js");
/* harmony import */ var _components_scoreFormatter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/scoreFormatter.js */ "./assets/components/scoreFormatter.js");








 //validation btn

var validation = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_6__.Switch('#lets-go', '#setting-up', '#first-code');
var firstCodeValidation = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_6__.Switch('#first-code-validation', '#first-code', '#game-board'); //display enable step, hint and change game-start

var step = new _class_Image_js__WEBPACK_IMPORTED_MODULE_5__.Image('#step', 'etapes_enable', 'etapes_disable', 'menu_principal');
var barCharge = document.querySelector('#bar-charge');
window.addEventListener('DOMContentLoaded', function () {
  validation.element.addEventListener('click', function () {
    localStorage.setItem('currentStep', 1);
    validation.change();
    document.querySelector('#page-audio').currentTime = 0;
    document.querySelector('#page-audio').play();
    localStorage.setItem('firstStepTimer', 120);
    firstStepTimer();
    globalTimer();
    updateBar();
    document.querySelector('#bar-charge-container').classList.remove('visually-hidden');
    document.querySelector('#bar-charge').classList.remove('visually-hidden');
    document.querySelector(localStorage.getItem('music')).pause();
    localStorage.setItem('music', '#mini-jeu-music');
    (0,_components_music_js__WEBPACK_IMPORTED_MODULE_7__.default)();
  });
  firstCodeValidation.element.addEventListener('click', function () {
    document.querySelector('#separator').classList.add('visually-hidden');
    firstCodeValidation.change();
    document.querySelector('#page-audio').currentTime = 0;
    document.querySelector('#page-audio').play();
    step.activate();
    document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/abandonnerpartie.png')";
  });
  setTimeout(function () {
    if (!document.querySelector('#first-code').classList.contains('visually-hidden')) {
      firstCodeValidation.change();
      document.querySelector('#separator').classList.add('visually-hidden');
      document.querySelector('#page-audio').currentTime = 0;
      document.querySelector('#page-audio').play();
      step.activate();
      document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/abandonnerpartie.png')";
    }
  }, 30000);
});

function firstStepTimer() {
  var baseInterval = window.setInterval(function () {
    if (localStorage.getItem('firstStepTimer') != '0') {
      localStorage.setItem('firstStepTimer', localStorage.getItem('firstStepTimer') - 1);
    } else {
      document.querySelector('#bar-charge-container').classList.add('visually-hidden');
      document.querySelector('#bar-charge').classList.add('visually-hidden');
      clearInterval(baseInterval);
    }

    if (localStorage.getItem('firstStepTimer') == '1') {
      document.querySelector('#jingle-loose-audio').currentTime = 0;
      document.querySelector('#jingle-loose-audio').play();
    }

    if (localStorage.getItem('currentStep') == 2) {
      clearInterval(baseInterval);
      document.querySelector('#bar-charge-container').classList.add('visually-hidden');
      document.querySelector('#bar-charge').classList.add('visually-hidden');
    }

    ;
  }, 1000);
  localStorage.setItem('interval', baseInterval);
}

function updateBar() {
  var i = parseInt(localStorage.getItem('i')) || 0;
  barCharge.style.width = '86%';
  document.querySelector('#bar-charge-container').style = "animation: fadeIn 5s; -webkit-animation: fadeIn 5s; -moz-animation: fadeIn 5s; -o-animation: fadeIn 5s; -ms-animation: fadeIn 5s; background-image: url('/build/menu_principal/cadre_jauge.png')";
  barCharge.style = "animation: fadeIn 5s; -webkit-animation: fadeIn 5s; -moz-animation: fadeIn 5s; -o-animation: fadeIn 5s; -ms-animation: fadeIn 5s;";
  setInterval(function () {
    if (localStorage.getItem('firstStepTimer') != '0') {
      i += .1;
      localStorage.setItem('i', i);
      barCharge.style.width = 86 - i * .72 + '%';

      if (i <= 20) {
        barCharge.style.backgroundColor = '#69B34C';
      } else if (i <= 40) {
        barCharge.style.backgroundColor = '#ACB334';
      } else if (i <= 60) {
        barCharge.style.backgroundColor = '#FAB733';
      } else if (i <= 80) {
        barCharge.style.backgroundColor = '#FF8E15';
      } else if (i <= 100) {
        barCharge.style.backgroundColor = '#FF4E11';
      } else if (i <= 120) {
        barCharge.style.backgroundColor = '#FF0D0D';
      }
    } else {
      clearInterval();
    }
  }, 100);
}

function globalTimer() {
  var currentDate = new Date().getTime(); //Game start timer (actual current date irl)

  if (localStorage.getItem('startTime') === null) {
    localStorage.setItem('startTime', currentDate);
  } //Actual timer of the game (updated every second with a new date)


  if (localStorage.getItem('currentTime') === null) {
    localStorage.setItem('currentTime', currentDate);
  } //This timer will be changed every new step (so we keep track when it started)


  if (localStorage.getItem('stepStartTime') === null) {
    localStorage.setItem('stepStartTime', currentDate);
  }

  if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', 10000);
  }

  var countDownDate = currentDate + 5400000;
  setInterval(function () {
    var now = new Date().getTime();
    localStorage.setItem('currentTime', now);
    localStorage.setItem('score', parseInt(localStorage.getItem('score')) - 1);
    var timeleft = countDownDate - now; // Calculating the hours, minutes and seconds left

    var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(timeleft % (1000 * 60) / 1000); // Result is output to the specific element

    document.getElementById("time").innerHTML = hours + " : " + (minutes.toString().length == 2 ? minutes : '0' + minutes.toString()) + " : " + (seconds.toString().length == 2 ? seconds : '0' + seconds.toString());
    document.getElementById("score").innerHTML = (0,_components_scoreFormatter_js__WEBPACK_IMPORTED_MODULE_8__.default)(localStorage.getItem('score')) + " pts"; // Display the message when countdown is over

    if (timeleft < 0) {
      clearInterval();
      document.getElementById("time").innerHTML = "";
    }

    if (localStorage.getItem('currentStep') == '2') return clearInterval();
  }, 1000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateBar);

/***/ }),

/***/ "./assets/scripts/game/stepCode.js":
/*!*****************************************!*\
  !*** ./assets/scripts/game/stepCode.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextStepMusic": () => (/* binding */ getNextStepMusic)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _class_Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../class/Page.js */ "./assets/class/Page.js");
/* harmony import */ var _class_Numpad_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../class/Numpad.js */ "./assets/class/Numpad.js");
/* harmony import */ var _class_Switch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../class/Switch.js */ "./assets/class/Switch.js");
/* harmony import */ var _class_Image_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../class/Image.js */ "./assets/class/Image.js");
/* harmony import */ var _detailsPannel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detailsPannel.js */ "./assets/scripts/game/detailsPannel.js");
/* harmony import */ var _components_music_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/music.js */ "./assets/components/music.js");









 //import axios

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js").default; //display


var gameBoard = new _class_Page_js__WEBPACK_IMPORTED_MODULE_4__.Page('#game-board');
var stepPannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_4__.Page('#step-pannel');
var endStep = new _class_Page_js__WEBPACK_IMPORTED_MODULE_4__.Page('#end-step');
var stepDetailPannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_4__.Page('#step-detail-pannel');
var averageScore = new _class_Page_js__WEBPACK_IMPORTED_MODULE_4__.Page('#average-score'); //only for step 1 //

var hint = new _class_Image_js__WEBPACK_IMPORTED_MODULE_7__.Image('#hint', 'indices_enable', 'indices_disable', 'menu_principal'); //step error

var stepError = new _class_Page_js__WEBPACK_IMPORTED_MODULE_4__.Page('#step-error-pannel'); //succes pannel

var succesPannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_4__.Page('#succes'); //quiz //

var averageScoreSuite = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_6__.Switch('#score-suite', '#average-score', '#q1-pannel'); //return btn

var stepBack = new _class_Switch_js__WEBPACK_IMPORTED_MODULE_6__.Switch('#step-back', '#step-pannel', '#game-board', true);
var stepPad = new _class_Numpad_js__WEBPACK_IMPORTED_MODULE_5__.Numpad('#numpad-step', '#step-code-output');
var hardHint = document.querySelector('#hard-hint');
var easyHint = document.querySelector('#easy-hint');
var solution = document.querySelector('#solution');
window.addEventListener('DOMContentLoaded', function () {
  (0,_detailsPannel_js__WEBPACK_IMPORTED_MODULE_8__.default)(); //Numpad is ready to write

  stepPad.start(); //Return btn listener

  stepBack.element.addEventListener('click', function () {
    stepPad.reset();
    stepBack.change();
    document.querySelector('#touche-retour-audio').currentTime = 0;
    document.querySelector('#touche-retour-audio').play();
  });
  document.querySelector('#step-code-validate').addEventListener('click', function () {
    Math.floor((new Date().getTime() - localStorage.getItem('stepStartTime')) / 1000);
    axios.post('/game/stepCode', {
      step: localStorage.getItem('currentStep'),
      code: stepPad.output.innerHTML,
      timeStart: Math.floor((localStorage.getItem('stepStartTime') - localStorage.getItem('startTime')) / 1000),
      timeEnd: Math.floor((new Date().getTime() - localStorage.getItem('startTime')) / 1000),
      hints: JSON.parse(localStorage.getItem('hints')),
      score: localStorage.getItem('score'),
      teamName: localStorage.getItem('teamname')
    }).then(function (response) {
      if (response.data.step === 'wrong') {
        //show the page for good code but wront time
        console.log(response);
        stepPannel.hide();
        stepError.show();
        document.querySelector('#step-error-back').addEventListener('click', function () {
          stepError.hide();
          gameBoard.show();
        });
      }

      if (response.data.step === 'step') {
        document.querySelector(localStorage.getItem('music')).pause();
        var timeStart = Math.floor((localStorage.getItem('stepStartTime') - localStorage.getItem('startTime')) / 1000);
        var timeEnd = Math.floor((new Date().getTime() - localStorage.getItem('startTime')) / 1000);
        succes(timeEnd, timeStart);
        document.querySelector('#page-audio').currentTime = 0;
        document.querySelector('#page-audio').play();
        localStorage.setItem('stepStartTime', new Date().getTime());

        if (localStorage.getItem('currentStep') == '1') {
          document.querySelector('#separator').classList.remove('visually-hidden');
          localStorage.setItem('score', parseInt(localStorage.getItem('score')) + parseInt(localStorage.getItem('firstStepTimer')));
          updateBonusScore(50);
          document.querySelector('#jingle-bonus-audio').currentTime = 0;
          document.querySelector('#jingle-bonus-audio').play();
        } else if (localStorage.getItem('currentStep') == '9') {
          localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 50);
          updateBonusScore(50);
          document.querySelector('#jingle-bonus-audio').currentTime = 0;
          document.querySelector('#jingle-bonus-audio').play();
          localStorage.setItem('endgame', 'true');
          stepPannel.hide();
          localStorage.setItem('finalScore', localStorage.getItem('score'));
          document.querySelector('#score-div').innerHTML = localStorage.getItem('finalScore') + ' pts';
          endStep.element.addEventListener('click', function () {
            gameBoard.hide();
            averageScore.show();
            localStorage.setItem('currentStep', 10);
            getNextStepMusic(10);
          });
        } else {
          document.querySelector('#separator').classList.remove('visually-hidden');
          localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 50);
        }

        window.localStorage.setItem('currentStep', parseInt(window.localStorage.getItem('currentStep')) + 1);

        if (localStorage.getItem('currentStep') == '2') {
          hint.activate();
          document.querySelector('#bar-charge-container').style.display = 'none';
          document.querySelector('#bar-charge').style.display = 'none';
        }

        document.querySelector('#jingle-win-audio').currentTime = 0;
        document.querySelector('#jingle-win-audio').play(); //reset the hints display

        easyHint.style.backgroundImage = "url('/build/choix_indices/indice_facile.png')";
        hardHint.style.backgroundImage = "url('/build/choix_indices/indice_difficile.png')";
        solution.style.backgroundImage = "url('/build/choix_indices/solution.png')";
        window.localStorage.setItem('hintChecked', 'false');
        changeEndStepAssets();
      } else if (response.data.step === 'bonus 1' && localStorage.getItem('succesA') == 'false') {
        localStorage.setItem('succesA', 'true');
        changeBonusStepAssets(1);
        endStep.show();
        stepPannel.hide();
        updateBonusScore(response.data.points);
      } else if (response.data.step === 'bonus 2' && localStorage.getItem('succesB') == 'false') {
        localStorage.setItem('succesB', 'true');
        changeBonusStepAssets(2);
        endStep.show();
        stepPannel.hide();
        updateBonusScore(response.data.points);
      } else {
        document.querySelector('#code-erreur').currentTime = 0;
        document.querySelector('#code-erreur').play();
      }

      (0,_detailsPannel_js__WEBPACK_IMPORTED_MODULE_8__.default)();
      stepPad.reset();
    })["catch"](function (error) {
      return console.log(error);
    });
  });
});

function changeEndStepAssets() {
  var currentStep = parseInt(window.localStorage.getItem('currentStep'));
  document.querySelector('#end-step').style.backgroundImage = "url('/build/fin_etapes/etape_".concat(currentStep - 1, ".jpg')");

  if (localStorage.getItem('endgame') == 'true') {
    getNextStepMusic(currentStep);
    document.querySelector('#end-step').addEventListener('click', function () {
      endStep.hide();
      averageScore.show();
      averageScoreSuite.element.addEventListener('click', function () {
        averageScoreSuite.change();
        localStorage.setItem('currentStep', 11);
        getNextStepMusic(11);
      });
      document.querySelector('#bonus-pts').style.animation = "";
    });
  } else {
    document.querySelector('#end-step').addEventListener('click', function () {
      getNextStepMusic(currentStep);
      endStep.hide();
      gameBoard.show();
      stepDetailPannel.hide();
      document.querySelector('#bonus-pts').style.animation = "";
    });
  }
}

function changeBonusStepAssets(bonusStep) {
  document.querySelector('#end-step').style.backgroundImage = "url('/build/fin_etapes/etape_bonus_".concat(bonusStep, ".jpg')");
  document.querySelector('#end-step').addEventListener('click', function () {
    endStep.hide();
    gameBoard.show();
    stepDetailPannel.hide();
    document.querySelector('#bonus-pts').style.animation = "";
  });
}

function updateBonusScore(number) {
  document.querySelector('#ink-reveal-audio').currentTime = 0;
  document.querySelector('#ink-reveal-audio').play();
  var bonusPts = document.querySelector('#bonus-pts').style;
  bonusPts.animation = "smoke 2s linear forwards";
  bonusPts.backgroundImage = "url('/build/bonus_score/+_".concat(number, "_pts.png')");
}

function updateBonusSuccesScore(number) {
  document.querySelector('#ink-reveal-audio').currentTime = 0;
  document.querySelector('#ink-reveal-audio').play();
  var bonusSuccesPts = document.querySelector('#bonus-succes-pts').style;
  bonusSuccesPts.animation = "smoke 2s linear forwards";
  bonusSuccesPts.backgroundImage = "url('/build/bonus_score/+_".concat(number, "_pts.png')");
}

function getNextStepMusic(stepNumber) {
  document.querySelector(localStorage.getItem('music')).pause();

  switch (stepNumber) {
    case 2:
      localStorage.setItem('music', '#detente-1-music');
      break;

    case 3:
      localStorage.setItem('music', '#detente-2-music');
      break;

    case 4:
      localStorage.setItem('music', '#mysterieux-music');
      break;

    case 5:
      localStorage.setItem('music', '#minuscule-music');
      break;

    case 6:
      localStorage.setItem('music', '#angoisse-music');
      break;

    case 7:
      localStorage.setItem('music', '#nage-music');
      break;

    case 8:
      localStorage.setItem('music', '#intro-music');
      break;

    case 9:
      localStorage.setItem('music', '#finale-music');
      break;

    case 10:
      localStorage.setItem('music', '#intro-music');
      break;

    case 11:
      localStorage.setItem('music', '#mini-jeu-music');
      break;
  }

  if (localStorage.getItem('currentStep') == "") {
    document.querySelector('#chute-audio').loop = false;
    document.querySelector('#chute-audio').currentTime = 0;
    document.querySelector('#chute-audio').play();
  }

  if (localStorage.getItem('currentStep') == "4") {
    document.querySelector('#retrecit-audio').loop = false;
    document.querySelector('#retrecit-audio').currentTime = 0;
    document.querySelector('#retrecit-audio').play();
  }

  if (localStorage.getItem('currentStep') == "6") {
    document.querySelector('#grandit-audio').loop = false;
    document.querySelector('#grandit-audio').currentTime = 0;
    document.querySelector('#grandit-audio').play();
  }

  (0,_components_music_js__WEBPACK_IMPORTED_MODULE_9__.default)();
}

function changeSuccesAssets(number) {
  document.querySelector('#succes').style.backgroundImage = "url('/build/succes/succes_".concat(number, ".jpeg')");
}

function succes(timeEnd, timeStart) {
  if (timeEnd - timeStart <= 120 && localStorage.getItem('currentStep') == '4') {
    var listenNow = function listenNow() {
      document.querySelector('#bonus-pts').style.animation = "";
      document.querySelector('#bonus-succes-pts').style.animation = "";
      updateBonusScore(50);
      endStep.show();
      succesPannel.hide();
      document.querySelector('#succes').removeEventListener('click', listenNow);
    };

    localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 150);
    changeSuccesAssets(2);
    updateBonusSuccesScore(100);
    succesPannel.show();
    stepPannel.hide();
    document.querySelector('#jingle-bonus-audio').currentTime = 0;
    document.querySelector('#jingle-bonus-audio').play();
    document.querySelector('#succes').addEventListener('click', listenNow);
  } else if (Object.values(JSON.parse(window.localStorage.getItem('hints'))[5]).indexOf(true) === -1 && localStorage.getItem('currentStep') == '6') {
    var _listenNow = function _listenNow() {
      document.querySelector('#bonus-pts').style.animation = "";
      document.querySelector('#bonus-succes-pts').style.animation = "";
      updateBonusScore(50);
      endStep.show();
      succesPannel.hide();
      document.querySelector('#succes').removeEventListener('click', _listenNow);
    };

    localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 200);
    changeSuccesAssets(5);
    updateBonusSuccesScore(150);
    succesPannel.show();
    stepPannel.hide();
    document.querySelector('#jingle-bonus-audio').currentTime = 0;
    document.querySelector('#jingle-bonus-audio').play();
    document.querySelector('#succes').addEventListener('click', _listenNow);
  } else if (Object.values(JSON.parse(window.localStorage.getItem('hints'))[8]).indexOf(true) === -1 && localStorage.getItem('currentStep') == '9') {
    var _listenNow2 = function _listenNow2() {
      document.querySelector('#bonus-pts').style.animation = "";
      document.querySelector('#bonus-succes-pts').style.animation = "";
      updateBonusScore(50);
      endStep.show();
      succesPannel.hide();
      document.querySelector('#succes').removeEventListener('click', _listenNow2);
    };

    localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 200);
    changeSuccesAssets(7);
    updateBonusSuccesScore(150);
    succesPannel.show();
    stepPannel.hide();
    document.querySelector('#jingle-bonus-audio').currentTime = 0;
    document.querySelector('#jingle-bonus-audio').play();
    document.querySelector('#succes').addEventListener('click', _listenNow2);
    endStep.element.addEventListener('click', function () {
      document.querySelector('#bonus-pts').style.animation = "";
      endStep.hide();
      averageScore.show();
      localStorage.setItem('finalScore', localStorage.getItem('score'));
      document.querySelector('#score-div').innerHTML = localStorage.getItem('finalScore') + ' pts';
    });
  } else {
    updateBonusScore(50);
    endStep.show();
    stepPannel.hide();
    endStep.element.addEventListener('click', function () {
      document.querySelector('#bonus-pts').style.animation = "";
      endStep.hide();
      gameBoard.show();
      stepDetailPannel.hide();
    });
  }
}



/***/ }),

/***/ "./assets/scripts/game/teamname.js":
/*!*****************************************!*\
  !*** ./assets/scripts/game/teamname.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Rewriter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/Rewriter.js */ "./assets/class/Rewriter.js");
/* harmony import */ var _class_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class/Page.js */ "./assets/class/Page.js");
/* harmony import */ var _class_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../class/Switch */ "./assets/class/Switch.js");
//Import Rewriter and Page


 //import axios

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js").default; //Game board it self


var gameBoard = new _class_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page('#game-board'); //This view

var teamnamePannel = new _class_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page('#teamname-pannel'); //Confirm button

var confirmDiv = document.querySelector('#accept'); //Teamname rewriter

var teamname = new _class_Rewriter_js__WEBPACK_IMPORTED_MODULE_0__.Rewriter('.hidden-team-input', '#team-output');
window.addEventListener('DOMContentLoaded', function () {
  //Write the input text as the correct place as they are separated divs for display reasons
  teamname.watch(); //Not the same as Switch.watch !!!
  //Listen to the click on Valider to send the data

  confirmDiv.addEventListener('click', function () {
    makePost(teamname.finalOutput());
  });
});

function makePost(team) {
  axios.post('/game/team', {
    teamname: team
  }).then(function (response) {
    if (response.data != null) {
      if (window.localStorage.getItem('teamname')) {
        window.localStorage.clear('teamname');
      }

      window.localStorage.setItem('teamname', response.data);
      document.querySelector('#team-name').style.backgroundImage = "url('/build/menu_principal/nom_equipe_vide.png')";
      document.querySelector('#team-name').style.backgroundSize = "100% 60%";
      document.querySelector('#team-name').style.marginBottom = "-3rem";
      document.querySelector('#game-start').style.backgroundImage = "url('/build/menu_principal/lancerpartie_enable.png')";
      gameBoard.show();
      teamnamePannel.hide();
    }

    teamname.reset();
  })["catch"](function (error) {
    console.log(error);
  });
}

;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_object_define-property_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-6657b7","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_index-of_js-node_mo-865dba","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-01f765"], () => (__webpack_exec__("./assets/game.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2xhc3MvSGludC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2xhc3MvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NsYXNzL051bXBhZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2xhc3MvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2xhc3MvUmV3cml0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NsYXNzL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9tdXNpYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zY29yZUZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xlYXZlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2dhbWUvZGV0YWlsc1Bhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9nYW1lL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9nYW1lL2hpbnRDb2RlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2dhbWUvcXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZ2FtZS9ydWxlc1N1Y2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZ2FtZS9zZWxlY3RIaW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2dhbWUvc2V0dGluZ1VwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2dhbWUvc3RlcENvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZ2FtZS90ZWFtbmFtZS5qcyJdLCJuYW1lcyI6WyJIaW50IiwibnVtYmVyIiwiZWFzeSIsImhhcmQiLCJzb2x1dGlvbiIsIkltYWdlIiwic2VsZWN0b3IiLCJhY3RpdmUiLCJpbmFjdGl2ZSIsImJhc2UiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kZSIsInN0eWxlIiwiTnVtcGFkIiwicGFkIiwib3V0cHV0IiwibGltaXQiLCJjaGlsZHJlbiIsImNoaWxkIiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsImluZGV4IiwibGlzdGVuIiwid3JpdGUiLCJjdXJyZW50VGltZSIsInBsYXkiLCJyZXNldCIsInRvU3RyaW5nIiwidmFsdWUiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJQYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiUmV3cml0ZXIiLCJpbnB1dCIsImlzV2hpdGVTcGFjZUFsbG93ZWQiLCJhbGxvd2VkQ2hhcnMiLCJlIiwiaW5kZXhPZiIsImRhdGEiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJTd2l0Y2giLCJjdXJyZW50IiwiYWZ0ZXIiLCJpc0JhY2siLCJjaGFuZ2UiLCJtdXNpY1BsYXlsaXN0IiwiY3VycmVudE11c2ljIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJsb29wIiwibXV0ZWQiLCJ2b2x1bWUiLCJwcm9taXNlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImZvcm1hdFNjb3JlIiwic2NvcmUiLCJmb3JtYXR0ZWRTY29yZSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiaW5pdFN3aXRjaCIsImhpbnRCYWNrIiwicmV0b3VyQnRuIiwic3RlcERldGFpbCIsInN0ZXBEZXRhaWxCYWNrIiwiYnV0dG9uU3RlcENvZGUiLCJzZWxlY3RIaW50QmFjayIsInNob3dIaW50QmFjayIsInRlYW1uYW1lQmFjayIsInNldHRpbmdVcEJhY2siLCJ3YXRjaCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwibGVhdmUiLCJsb2NhdGlvbiIsImhyZWYiLCJjbGVhciIsImNsZWFySW50ZXJ2YWwiLCJzdGVwRGV0YWlsUGFubmVsIiwiZW5kU3RlcCIsImdhbWVCb2FyZCIsInJlZnJlc2hTdGVwRGV0YWlsQXNzZXRzIiwiY3VycmVudFN0ZXAiLCJwYXJzZUludCIsImkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvcGFjaXR5IiwiaGlkZSIsInNob3ciLCJnaXZlVXBQYWdlIiwicmV0dXJuR2FtZUJvYXJkIiwiYXZlcmFnZVNjb3JlIiwidGVhbW5hbWVQYW5uZWwiLCJydWxlc1Bhbm5lbCIsImF2ZXJhZ2VTY29yZVN1aXRlIiwic2V0dGluZ1VwIiwic2VsZWN0SGludCIsInRlYW1uYW1lQnV0dG9uIiwicnVsZXNCdXR0b24iLCJzdGFydEJ1dHRvbiIsInNob3dTdGVwIiwic2hvd0hpbnQiLCJzdGVwIiwiaGludCIsInRlYW1uYW1lT3V0cHV0RGl2IiwiaW5pdEhpbnRzIiwidXBkYXRlQmFyIiwiYmFzZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJhY3RpdmF0ZSIsInRlYW1uYW1lVXBkYXRlIiwic3RhcnRCdG5GY3QiLCJzaG93U3RlcHMiLCJzaG93SGludHMiLCJyZXN0YXJ0SW50ZXJ2YWwiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVsZWZ0IiwiaXNUaW1lTGVmdE5lZ2F0aXZlIiwiTWF0aCIsImFicyIsImhvdXJzIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsImdldEVsZW1lbnRCeUlkIiwidGVhbW5hbWVWaWV3IiwicnVsZXNWaWV3IiwiZW5kR2FtZSIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwic3dpdGNoVmlldyIsInZpZXciLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJ0eXBlIiwidGFyZ2V0IiwiaWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiekluZGV4Iiwic3RhcnRHYW1lIiwiZ2l2ZVVwIiwiSElOVFMiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0TmV4dFN0ZXBNdXNpYyIsImF4aW9zIiwicmVxdWlyZSIsImhpbnRQYW5uZWwiLCJoaW50RXJyb3IiLCJoaW50UGFkIiwic3RhcnQiLCJwb3N0IiwiY29kZSIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwic3VjY2VzcyIsInN1Y2NlcyIsInJlc1Bhbm5lbCIsInExcDEiLCJxMXAyIiwicTFwMyIsInExcDQiLCJxMXA1IiwicTJwMSIsInEycDIiLCJxM3AxIiwicTNwMiIsInE0cDEiLCJxNHAyIiwicTRwMyIsInE0cDQiLCJxNXAxIiwicTVwMiIsInE1cDMiLCJxNXA0IiwicTVwNSIsInE2TnVtcGFkIiwicHJvcG9zaXRpb25zIiwiZ3JvdXAiLCJwcm9wIiwic3ViSW5kZXgiLCJ1cGRhdGVBbnN3ZXJQYW5uZWwiLCJ6aXAiLCJtYXRjaCIsIlppcCIsIm51bWJlclBsYXllcnMiLCJzdWNjZXNzZXMiLCJwYXJzZSIsImJvbnVzUG9pbnRzIiwicXVlc3Rpb24iLCJwcm9wb3NpdGlvbiIsImxpc3Rlbk5vdyIsImNvbmNhdCIsInJ1bGVzQ29udGVudCIsInN1Y2Nlc3NDb250ZW50IiwicnVsZXNCdG4iLCJzdWNjZXNzQnRuIiwiZGVhY3RpdmF0ZSIsImhhcmRIaW50IiwiZWFzeUhpbnQiLCJoaW50cyIsInVwZGF0ZURpc3BsYXkiLCJ1cGRhdGVIaW50IiwiZGlmZmljdWx0eSIsIm5ld0hpbnQiLCJzZWVFYXN5Iiwic2VlSGFyZCIsInNlZVNvbHV0aW9uIiwidmFsaWRhdGlvbiIsImZpcnN0Q29kZVZhbGlkYXRpb24iLCJiYXJDaGFyZ2UiLCJmaXJzdFN0ZXBUaW1lciIsImdsb2JhbFRpbWVyIiwicGF1c2UiLCJtdXNpY1BsYXlMaXN0Iiwic2V0VGltZW91dCIsImNvbnRhaW5zIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJyZW50RGF0ZSIsImNvdW50RG93bkRhdGUiLCJzdGVwUGFubmVsIiwic3RlcEVycm9yIiwic3VjY2VzUGFubmVsIiwic3RlcEJhY2siLCJzdGVwUGFkIiwidGltZVN0YXJ0IiwidGltZUVuZCIsInRlYW1OYW1lIiwidXBkYXRlQm9udXNTY29yZSIsImRpc3BsYXkiLCJjaGFuZ2VFbmRTdGVwQXNzZXRzIiwiY2hhbmdlQm9udXNTdGVwQXNzZXRzIiwicG9pbnRzIiwiYW5pbWF0aW9uIiwiYm9udXNTdGVwIiwiYm9udXNQdHMiLCJ1cGRhdGVCb251c1N1Y2Nlc1Njb3JlIiwiYm9udXNTdWNjZXNQdHMiLCJzdGVwTnVtYmVyIiwiY2hhbmdlU3VjY2VzQXNzZXRzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uZmlybURpdiIsInRlYW1uYW1lIiwibWFrZVBvc3QiLCJmaW5hbE91dHB1dCIsInRlYW0iLCJiYWNrZ3JvdW5kU2l6ZSIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxJQUFiO0FBQ0ksZ0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDs7QUFOTDtBQUFBO0FBQUEsV0FRSSxtQkFBVTtBQUNOLFdBQUtGLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFYTDtBQUFBO0FBQUEsV0FhSSxtQkFBVTtBQUNOLFdBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLFdBa0JJLHVCQUFjO0FBQ1YsV0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBckJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1DLEtBQWI7QUFDSSxpQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEJDLFFBQTlCLEVBQXdDQyxJQUF4QyxFQUE4QztBQUFBOztBQUMxQyxTQUFLQyxPQUFMLEdBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qk4sUUFBdkIsQ0FB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ckMsQ0FBMkN5UCxjQUEzQyxHQUE0RCxVQUE1RDtBQUNBNVAsY0FBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDRSxLQUFyQyxDQUEyQzBQLFlBQTNDLEdBQTBELE9BQTFEO0FBQ0E3UCxjQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NFLEtBQXRDLENBQTRDaUYsZUFBNUMsR0FBOEQsc0RBQTlEO0FBQ0FMLGVBQVMsQ0FBQ1EsSUFBVjtBQUNBSSxvQkFBYyxDQUFDTCxJQUFmO0FBQ0g7O0FBQ0RrSyxZQUFRLENBQUN0TyxLQUFUO0FBQ0gsR0FqQkQsV0FrQk8sVUFBVTRJLEtBQVYsRUFBaUI7QUFDeEIzRyxXQUFPLENBQUNDLEdBQVIsQ0FBWTBHLEtBQVo7QUFDQyxHQXBCRDtBQXFCSDs7QUFBQSxDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGludCB7XG4gICAgY29uc3RydWN0b3IobnVtYmVyKSB7XG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLmVhc3kgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXJkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc29sdXRpb24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZWVFYXN5KCkge1xuICAgICAgICB0aGlzLmVhc3kgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVIYXJkKCkge1xuICAgICAgICB0aGlzLmhhcmQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVTb2x1dGlvbigpIHtcbiAgICAgICAgdGhpcy5zb2x1dGlvbiA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBJbWFnZSB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGFjdGl2ZSwgaW5hY3RpdmUsIGJhc2UpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLmluYWN0aXZlID0gaW5hY3RpdmU7XG4gICAgICAgIHRoaXMuYmFzZSA9IGJhc2U7XG4gICAgfVxuXG4gICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2J1aWxkLyR7dGhpcy5iYXNlfS8ke21vZGV9LnBuZycpYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3dpdGNoKHRoaXMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zd2l0Y2godGhpcy5pbmFjdGl2ZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBOdW1wYWQge1xuICAgIGNvbnN0cnVjdG9yKHBhZCwgb3V0cHV0LCBsaW1pdCA9IDQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYWQpO1xuICAgICAgICB0aGlzLm91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3V0cHV0KTtcbiAgICAgICAgdGhpcy5saW1pdCA9IGxpbWl0O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5lbGVtZW50LmNoaWxkcmVuO1xuICAgIH1cbiAgICBcbiAgICBsaXN0ZW4oY2hpbGQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW4oY2hpbGQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlKCcwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm91dG9uLW51bWJlci1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3V0b24tbnVtYmVyLWF1ZGlvJykucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaGUtZWZmYWNlci1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaGUtZWZmYWNlci1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlKChpbmRleCArIDEpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdXRvbi1udW1iZXItYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm91dG9uLW51bWJlci1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG5cbiAgICB3cml0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5vdXRwdXQuaW5uZXJIVE1MLmxlbmd0aCA8IHRoaXMubGltaXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0LmlubmVySFRNTCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLm91dHB1dC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cblxufTtcbiIsImV4cG9ydCBjbGFzcyBQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgIH1cbn07IiwiZXhwb3J0IGNsYXNzIFJld3JpdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCwgb3V0cHV0LCBpc1doaXRlU3BhY2VBbGxvd2VkID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dCk7XG4gICAgICAgIHRoaXMub3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdXRwdXQpO1xuICAgICAgICB0aGlzLmlzV2hpdGVTcGFjZUFsbG93ZWQgPSBpc1doaXRlU3BhY2VBbGxvd2VkO1xuICAgICAgICB0aGlzLmFsbG93ZWRDaGFycyA9IFwiYXplcnR5dWlvcHFzZGZnaGprbG13eGN2Ym5BWkVSVFlVSU9QUVNERkdISktMTVdYQ1ZCTiEwMTIzNDU2Nzg5XCI7XG4gICAgfVxuICAgIHdhdGNoKCkge1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3V0b24tbnVtYmVyLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdXRvbi1udW1iZXItYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNXaGl0ZVNwYWNlQWxsb3dlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbG93ZWRDaGFycy5pbmRleE9mKGUuZGF0YSkgPT0gLTEpXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUucmVwbGFjZShlLmRhdGEsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vdXRwdXQuaW5uZXJIVE1MID0gdGhpcy5pbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmaW5hbE91dHB1dCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoZS12YWxpZGVyLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2hlLXZhbGlkZXItYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLm91dHB1dC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2hlLWVmZmFjZXItYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaGUtZWZmYWNlci1hdWRpbycpLnBsYXkoKTtcbiAgICB9XG59OyIsImV4cG9ydCBjbGFzcyBTd2l0Y2gge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjdXJyZW50LCBhZnRlciwgaXNCYWNrID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3VycmVudCk7XG4gICAgICAgIHRoaXMuYWZ0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFmdGVyKTtcbiAgICAgICAgdGhpcy5pc0JhY2sgPSBpc0JhY2tcbiAgICB9XG5cbiAgICB3YXRjaCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNCYWNrKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoZS1yZXRvdXItYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoZS1yZXRvdXItYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWF1ZGlvJykucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICBjaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5hZnRlci5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG59O1xuIiwiZnVuY3Rpb24gbXVzaWNQbGF5bGlzdCgpIHtcbiAgICB2YXIgY3VycmVudE11c2ljID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211c2ljJykgfHwgJyNpbnRyby1tdXNpYyc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2ljJywgY3VycmVudE11c2ljKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3VycmVudE11c2ljKS5sb29wID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGN1cnJlbnRNdXNpYykubXV0ZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGN1cnJlbnRNdXNpYykudm9sdW1lID0gMC41O1xuICAgIGNvbnN0IHByb21pc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXNpYycpKS5wbGF5KCk7XG4gICAgaWYgKHByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9taXNlLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNdXNpYyBjYW5cXCd0IGJlIHJlc3RhcnRlZCB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24nLCBlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVzaWMtdm9sdW1lJykuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbXVzaWNQbGF5bGlzdDtcbiIsImZ1bmN0aW9uIGZvcm1hdFNjb3JlKHNjb3JlKSB7XG4gICAgbGV0IGZvcm1hdHRlZFNjb3JlID0gc2NvcmUudG9TdHJpbmcoKS5zcGxpdChcIlwiKTtcbiAgICBmb3JtYXR0ZWRTY29yZSA9IGZvcm1hdHRlZFNjb3JlLnNsaWNlKDAsIGZvcm1hdHRlZFNjb3JlLmxlbmd0aCAtIDMpLmpvaW4oJycpICsgXCIgXCIgKyBmb3JtYXR0ZWRTY29yZS5zbGljZShmb3JtYXR0ZWRTY29yZS5sZW5ndGggLSAzKS5qb2luKFwiXCIpXG4gICAgcmV0dXJuIGZvcm1hdHRlZFNjb3JlO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0U2NvcmU7IiwiaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnLi8uLi9jbGFzcy9Td2l0Y2guanMnO1xuXG5mdW5jdGlvbiBpbml0U3dpdGNoKCkge1xuICAgIC8vRMOpY2xhcmF0aW9ucyBkZXMgc3dpdGNoXG4gICAgLy9oaW50Q29kZVxuICAgIGNvbnN0IGhpbnRCYWNrID0gbmV3IFN3aXRjaCgnI2hpbnQtYmFjaycsICcjaGludC1wYW5uZWwnLCAnI2dhbWUtYm9hcmQnLCB0cnVlKTtcbiAgICAvL3J1bGUtc3VjY2Vzc1xuICAgIGNvbnN0IHJldG91ckJ0biA9IG5ldyBTd2l0Y2goJyNyZXRvdXInLCAnI3J1bGVzLXBhbm5lbCcsICcjZ2FtZS1ib2FyZCcsIHRydWUpO1xuICAgIC8vc3RlcENvZGVcbiAgICBjb25zdCBzdGVwRGV0YWlsID0gbmV3IFN3aXRjaCgnI3N0ZXBzLWRldGFpbCcsICcjc3RlcC1wYW5uZWwnLCAnI3N0ZXAtZGV0YWlsLXBhbm5lbCcpO1xuICAgIGNvbnN0IHN0ZXBEZXRhaWxCYWNrID0gbmV3IFN3aXRjaCgnI3N0ZXAtZGV0YWlsLWJhY2snLCAnI3N0ZXAtZGV0YWlsLXBhbm5lbCcsICcjZ2FtZS1ib2FyZCcsIHRydWUpO1xuICAgIGNvbnN0IGJ1dHRvblN0ZXBDb2RlID0gbmV3IFN3aXRjaCgnI2JvdXRvbi1zdGVwLWNvZGUnLCAnI3N0ZXAtZGV0YWlsLXBhbm5lbCcsICcjc3RlcC1wYW5uZWwnKTtcbiAgICAvL3NlbGVjdEhpbnRcbiAgICBjb25zdCBzZWxlY3RIaW50QmFjayA9IG5ldyBTd2l0Y2goJyNzZWxlY3QtaGludC1iYWNrJywgJyNzZWxlY3QtaGludCcsICcjZ2FtZS1ib2FyZCcsIHRydWUpO1xuICAgIGNvbnN0IHNob3dIaW50QmFjayA9IG5ldyBTd2l0Y2goJyNiYWNrLWdiJywgJyNzaG93LWhpbnQnLCAnI2dhbWUtYm9hcmQnLCB0cnVlKTtcbiAgICAvL3RlYW1OYW1lXG4gICAgY29uc3QgdGVhbW5hbWVCYWNrID0gbmV3IFN3aXRjaCgnI3RlYW1uYW1lLWJhY2snLCAnI3RlYW1uYW1lLXBhbm5lbCcsICcjZ2FtZS1ib2FyZCcsIHRydWUpO1xuICAgIC8vc2V0dGluZ1VwXG4gICAgY29uc3Qgc2V0dGluZ1VwQmFjayA9IG5ldyBTd2l0Y2goJyNzZXR0aW5nLXVwLWJhY2snLCAnI3NldHRpbmctdXAnLCAnI2dhbWUtYm9hcmQnLCB0cnVlKTtcblxuXG4gICAgLy9QYXNzaXYgbGlzdGVuaW5nIG9mIHRoZSBzd2l0Y2hlcyAoaWUgZXZlbnRsaXN0ZW5lciBvbiBjbGljaylcbiAgICBzdGVwRGV0YWlsLndhdGNoKCk7XG4gICAgYnV0dG9uU3RlcENvZGUud2F0Y2goKTtcblxuICAgIGhpbnRCYWNrLndhdGNoKCk7XG4gICAgc2VsZWN0SGludEJhY2sud2F0Y2goKTtcbiAgICBzaG93SGludEJhY2sud2F0Y2goKTtcbiAgICB0ZWFtbmFtZUJhY2sud2F0Y2goKTtcbiAgICBzaG93SGludEJhY2sud2F0Y2goKTtcbiAgICBzZXR0aW5nVXBCYWNrLndhdGNoKCk7XG4gICAgc3RlcERldGFpbEJhY2sud2F0Y2goKTtcbiAgICByZXRvdXJCdG4ud2F0Y2goKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdFN3aXRjaDsiLCIvL0ltcG9ydCBzY3JpcHRzIHNwZWNpZmljIHRvIGVhY2ggc3ViIHZpZXcgdXNlZCBkdXJpbmcgdGhlIGdhbWVcbmltcG9ydCAnLi9zY3JpcHRzL2dhbWUvZ2FtZWJvYXJkLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL2dhbWUvcnVsZXNTdWNjZXNzLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL2dhbWUvdGVhbW5hbWUuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZ2FtZS9zZXR0aW5nVXAuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZ2FtZS9zdGVwQ29kZS5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9nYW1lL2hpbnRDb2RlLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL2dhbWUvc2VsZWN0SGludC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9nYW1lL2RldGFpbHNQYW5uZWwuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZ2FtZS9xdWVzdGlvbi5qcyc7XG4vL2ltcG9ydCBjb21wb25lbnRzIGJhc2ljIGZ1bmN0aW9ucyAoc3dpdGNoIGJ1dHRvbnMgYXJlIGFsbCBwcmVwYXJlZCBhdCBvbmNlKVxuaW1wb3J0IGluaXRTd2l0Y2ggZnJvbSAnLi9jb21wb25lbnRzL3N3aXRjaC5qcyc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBpbml0U3dpdGNoKCk7XG4gICAgXG59KVxuXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiQWJhbmRvbm5lciBsYSBwYXJ0aWUgb3UgcXVpdHRlciBsYSBwYWdlIGZlcmEgcGVyZHJlIGTDqWZpbml0aXZlbWVudCBsJ2FjY8OoZXMgYXUgamV1LlwiOyB9O1xuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWF2ZS1zdWl0ZScpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWF2ZS1zdWl0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGVhdmUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYWwtbGVhdmUnKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYWwtbGVhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxlYXZlKCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGxlYXZlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RlcFN0YXJ0VGltZXInKSAhPT0gbnVsbCkgbG9jYWxTdG9yYWdlLmNsZWFyKCdzdGVwU3RhcnRUaW1lcicpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VGltZScpICE9PSBudWxsKSBsb2NhbFN0b3JhZ2UuY2xlYXIoJ2N1cnJlbnRUaW1lJylcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykgIT09IG51bGwpIGxvY2FsU3RvcmFnZS5jbGVhcignc2NvcmUnKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVhbW5hbWUnKSAhPT0gbnVsbCkgbG9jYWxTdG9yYWdlLmNsZWFyKCd0ZWFtbmFtZScpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpICE9PSBudWxsKSBsb2NhbFN0b3JhZ2UuY2xlYXIoJ2N1cnJlbnRTdGVwJylcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbWVyJykgIT09IG51bGwpIGxvY2FsU3RvcmFnZS5jbGVhcigndGltZXInKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RTdGVwVGltZXInKSAhPT0gbnVsbCkgbG9jYWxTdG9yYWdlLmNsZWFyKCdmaXJzdFN0ZXBUaW1lcicpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydFRpbWUnKSAhPT0gbnVsbCkgbG9jYWxTdG9yYWdlLmNsZWFyKCdzdGFydFRpbWUnKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGludHMnKSAhPT0gbnVsbCkgbG9jYWxTdG9yYWdlLmNsZWFyKCdoaW50cycpXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ludGVydmFsJykpXG4gICAgLyogc3dpdGNoVmlldygnIycpOyAqL1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcignaScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxlYXZlO1xuIiwiaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2NsYXNzL1BhZ2UuanMnO1xuXG5jb25zdCBzdGVwRGV0YWlsUGFubmVsID0gbmV3IFBhZ2UoJyNzdGVwLWRldGFpbC1wYW5uZWwnKVxuY29uc3QgZW5kU3RlcCA9IG5ldyBQYWdlKCcjZW5kLXN0ZXAnKVxuY29uc3QgZ2FtZUJvYXJkID0gbmV3IFBhZ2UoJyNnYW1lLWJvYXJkJylcblxuZnVuY3Rpb24gcmVmcmVzaFN0ZXBEZXRhaWxBc3NldHMoKSB7XG4gICAgbGV0IGN1cnJlbnRTdGVwID0gcGFyc2VJbnQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpKTtcblxuICAgIGZvciAobGV0IGkgPSBjdXJyZW50U3RlcC0xOyBpID49IDE7IGktLSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1udW1iZXJzPVwiJysoaSkrJ1wiXScpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy9idWlsZC9ldGFwZXNfcmVjYXAvZXRhcGUke2l9LnBuZycpYDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbnVtYmVycz1cIicrKGkpKydcIl0nKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbnVtYmVycz1cIicrKGkpKydcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib251cy1wdHMnKS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHN0ZXBEZXRhaWxQYW5uZWwuaGlkZSgpO1xuICAgICAgICAgICAgZW5kU3RlcC5zaG93KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXN0ZXAnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcvYnVpbGQvZmluX2V0YXBlcy9ldGFwZV8ke2l9LmpwZycpYDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc3RlcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib251cy1wdHMnKS5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBlbmRTdGVwLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHN0ZXBEZXRhaWxQYW5uZWwuc2hvdygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkgIFxuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc0EnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbnVtYmVycz1cIjEwXCJdJykuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW51bWJlcnM9XCIxMFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvbnVzLXB0cycpLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICAgICAgc3RlcERldGFpbFBhbm5lbC5oaWRlKCk7XG4gICAgICAgICAgICBlbmRTdGVwLnNob3coKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc3RlcCcpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy9idWlsZC9maW5fZXRhcGVzL2V0YXBlX2JvbnVzXzEuanBnJylgO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zdGVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvbnVzLXB0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIGVuZFN0ZXAuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGdhbWVCb2FyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgc3RlcERldGFpbFBhbm5lbC5zaG93KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgXG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3VjY2VzQicpID09ICd0cnVlJykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1udW1iZXJzPVwiMTFcIl0nKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbnVtYmVycz1cIjExXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtcHRzJykuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgICAgICAgICBzdGVwRGV0YWlsUGFubmVsLmhpZGUoKTtcbiAgICAgICAgICAgIGVuZFN0ZXAuc2hvdygpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zdGVwJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnL2J1aWxkL2Zpbl9ldGFwZXMvZXRhcGVfYm9udXNfMi5qcGcnKWA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXN0ZXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtcHRzJykuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgZW5kU3RlcC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzdGVwRGV0YWlsUGFubmVsLnNob3coKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZnJlc2hTdGVwRGV0YWlsQXNzZXRzOyIsImltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbGFzcy9QYWdlLmpzJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vY2xhc3MvSW1hZ2UuanMnO1xuaW1wb3J0IHsgSGludCB9IGZyb20gJy4uLy4uL2NsYXNzL0hpbnQuanMnO1xuXG5pbXBvcnQgdXBkYXRlQmFyIGZyb20gJy4vc2V0dGluZ1VwLmpzJztcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJy4uLy4uL2NsYXNzL1N3aXRjaC5qcyc7XG5cbmltcG9ydCBmb3JtYXRTY29yZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Njb3JlRm9ybWF0dGVyJztcbmltcG9ydCBtdXNpY1BsYXlsaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbXVzaWMuanMnO1xuaW1wb3J0IHsgZ2V0TmV4dFN0ZXBNdXNpYyAgfSBmcm9tICcuL3N0ZXBDb2RlLmpzJztcbmltcG9ydCBsZWF2ZSBmcm9tICcuLi8uLi9sZWF2ZS5qcyc7XG5cbi8vR2FtZSBib2FyZCBpdCBzZWxmXG5jb25zdCBnYW1lQm9hcmQgPSBuZXcgUGFnZSgnI2dhbWUtYm9hcmQnKTtcbmNvbnN0IGdpdmVVcFBhZ2UgPSBuZXcgUGFnZSgnI2dpdmUtdXAnKTtcbi8vZ2l2ZVVQXG5jb25zdCByZXR1cm5HYW1lQm9hcmQgPSBuZXcgU3dpdGNoKCcjcmV0dXJuLWdhbWUtYm9hcmQnLCAnI2dpdmUtdXAnLCAnI2dhbWUtYm9hcmQnKVxuLy9lbmQgZ2FtZVxuY29uc3QgYXZlcmFnZVNjb3JlID0gbmV3IFBhZ2UoJyNhdmVyYWdlLXNjb3JlJyk7XG4vL090aGVyIHN1YnZpZXdzXG5jb25zdCB0ZWFtbmFtZVBhbm5lbCA9IG5ldyBQYWdlKCcjdGVhbW5hbWUtcGFubmVsJyk7XG4vLyDDoCBjb3JyaWdlciBhcHLDqHMgbGVzIHRlc3QgLy9cbmNvbnN0IHJ1bGVzUGFubmVsID0gbmV3IFBhZ2UoJyNydWxlcy1wYW5uZWwnKTsvLyNydWxlcy1wYW5uZWxcbi8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLy9cbi8vYXZlcmFnZSBzY29yZSBcbmNvbnN0IGF2ZXJhZ2VTY29yZVN1aXRlID0gbmV3IFN3aXRjaCgnI3Njb3JlLXN1aXRlJywgJyNhdmVyYWdlLXNjb3JlJywgJyNxMS1wYW5uZWwnKVxuY29uc3Qgc2V0dGluZ1VwID0gbmV3IFBhZ2UoJyNzZXR0aW5nLXVwJyk7XG5jb25zdCBzZWxlY3RIaW50ID0gbmV3IFBhZ2UoJyNzZWxlY3QtaGludCcpO1xuLy9BdmFpbGFibGUgYnV0dG9ucyBvbiB0aGUgZ2FtZSBib2FyZFxuY29uc3QgdGVhbW5hbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVhbS1uYW1lJyk7XG5jb25zdCBydWxlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNydWxlcycpO1xuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zdGFydCcpO1xuY29uc3Qgc2hvd1N0ZXAgPSBuZXcgUGFnZSgnI3N0ZXAtcGFubmVsJyk7XG5jb25zdCBzaG93SGludCA9IG5ldyBQYWdlKCcjaGludC1wYW5uZWwnKTtcblxuY29uc3Qgc3RlcCA9IG5ldyBJbWFnZSgnI3N0ZXAnLCAnZXRhcGVzX2VuYWJsZScsICdldGFwZXNfZGlzYWJsZScsICdtZW51X3ByaW5jaXBhbCcpO1xuY29uc3QgaGludCA9IG5ldyBJbWFnZSgnI2hpbnQnLCAnaW5kaWNlc19lbmFibGUnLCAnaW5kaWNlc19kaXNhYmxlJywgJ21lbnVfcHJpbmNpcGFsJyk7XG5cbi8vRGlzcGxheSBjaGFuZ2UgZm9yIHRlYW0gbmFtZVxuY29uc3QgdGVhbW5hbWVPdXRwdXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVhbS1uYW1lLW91dHB1dCcpO1xuXG5pbml0SGludHMoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI211c2ljLXZvbHVtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVzaWMtdm9sdW1lJykuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgICAgIG11c2ljUGxheWxpc3QoKTtcbiAgICB9KVxuICAgIG11c2ljUGxheWxpc3QoKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTdGVwJykpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09ICcxJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RTdGVwVGltZXInKSA+IDApIHtcbiAgICAgICAgICAgIHVwZGF0ZUJhcigpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlcGFyYXRvcicpLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhci1jaGFyZ2UtY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFyLWNoYXJnZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICAgICAgY29uc3QgYmFzZUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0U3RlcFRpbWVyJykgIT0gJzAnKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RTdGVwVGltZXInLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RTdGVwVGltZXInKSAtIDEpO1xuICAgICAgICAgICAgICAgIGVsc2UgY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSA9PSAyKSBjbGVhckludGVydmFsKCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbnRlcnZhbCcsIGJhc2VJbnRlcnZhbClcbiAgICAgICAgfSBlbHNlIGhpbnQuYWN0aXZhdGUoKTtcbiAgICAgICAgdGVhbW5hbWVVcGRhdGUoKTtcbiAgICAgICAgc3RhcnRCdG5GY3QoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlYW0tbmFtZScpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYnVpbGQvbWVudV9wcmluY2lwYWwvbm9tX2VxdWlwZV92aWRlLnBuZycpXCJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtc3RhcnQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL21lbnVfcHJpbmNpcGFsL2FiYW5kb25uZXJwYXJ0aWUucG5nJylcIjtcbiAgICAgICAgc3RlcC5hY3RpdmF0ZSgpO1xuICAgICAgICBzdGVwLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U3RlcHMpO1xuICAgICAgICBoaW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SGludHMpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSArIFwiIHB0c1wiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZScpLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lcicpO1xuICAgICAgICB2YXIgcmVzdGFydEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8qIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVhbW5hbWUnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWF2ZSgpO1xuICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRUaW1lJywgbm93KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKSAtIDEpO1xuXG4gICAgICAgICAgICB2YXIgdGltZWxlZnQgPSA1NDAwMDAwIC0gKChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFRpbWUnKSAtIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydFRpbWUnKSkpO1xuICAgICAgICAgICAgbGV0IGlzVGltZUxlZnROZWdhdGl2ZSA9IHRpbWVsZWZ0IDwgMDtcbiAgICAgICAgICAgIHRpbWVsZWZ0ID0gTWF0aC5hYnModGltZWxlZnQpO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRpbmcgdGhlIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIGxlZnRcbiAgICAgICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVsZWZ0ICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lbGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lbGVmdCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICAvLyBSZXN1bHQgaXMgb3V0cHV0IHRvIHRoZSBzcGVjaWZpYyBlbGVtZW50XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikuaW5uZXJIVE1MID0gaG91cnMgKyBcIiA6IFwiICsgKG1pbnV0ZXMudG9TdHJpbmcoKS5sZW5ndGggPT0gMiA/IG1pbnV0ZXMgOiAnMCcgKyBtaW51dGVzLnRvU3RyaW5nKCkpICsgXCIgOiBcIiArIChzZWNvbmRzLnRvU3RyaW5nKCkubGVuZ3RoID09IDIgPyBzZWNvbmRzIDogJzAnICsgc2Vjb25kcy50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlzVGltZUxlZnROZWdhdGl2ZSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKS5pbm5lckhUTUwgPSBcIi0gXCIgKyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikuaW5uZXJIVE1MIDogZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLmlubmVySFRNTCA9IGZvcm1hdFNjb3JlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKSArICcgcHRzJztcbiAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIG1lc3NhZ2Ugd2hlbiBjb3VudGRvd24gaXMgb3ZlclxuICAgICAgICAgICAgaWYgKHRpbWVsZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRcIikuaW5uZXJIVE1MID0gXCJUSU1FIFVQISFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbnRlcnZhbCcsIHJlc3RhcnRJbnRlcnZhbClcbiAgICB9XG4gICAgLy9WaWV3IHN3aXRjaCAod2UgbmFtZSBldmVudHMgdG8gYmUgYWJsZSB0byByZW1vdmUgdGhlbSBsYXRlcilcbiAgICB0ZWFtbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlYW1uYW1lVmlldyk7XG4gICAgcnVsZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydWxlc1ZpZXcpO1xuXG4gICAgZW5kR2FtZSgpO1xuXG4gICAgLy9Mb29rIGZvciBjaGFuZ2VzIG9mIGRpc3BsYXkgY29taW5nIGZyb20gb3RoZXIgc2NyaXB0c1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spOyAvL2NhbGxiYWNrIGlzIGRlZmluZWQgbGF0ZXJcbiAgICBvYnNlcnZlci5vYnNlcnZlKHN0YXJ0QnV0dG9uLCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0ZWFtbmFtZUJ1dHRvbiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoc3RlcC5lbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaW50LmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbn0pXG5cbi8vVmlld3MgZXZlbnRzXG5mdW5jdGlvbiB0ZWFtbmFtZVZpZXcoKSB7XG4gICAgc3dpdGNoVmlldyh0ZWFtbmFtZVBhbm5lbCk7XG59XG5cbmZ1bmN0aW9uIHJ1bGVzVmlldygpIHtcbiAgICBzd2l0Y2hWaWV3KHJ1bGVzUGFubmVsKTtcbn1cblxuLy9NYWluIHZpZXcgc3dpdGhcbmZ1bmN0aW9uIHN3aXRjaFZpZXcodmlldykge1xuICAgIGdhbWVCb2FyZC5oaWRlKCk7XG4gICAgdmlldy5zaG93KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5wbGF5KCk7XG59XG5cbi8vT2JzZXJ2ZSBpZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiB0aGUgaHRtbEVsZW1lbnQgKGhlcmUgYmcgaW1nIGNoYW5nZSlcbmNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QpIHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgc3dpdGNoIChtdXRhdGlvbi50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0ZWFtLW5hbWUnOlxuICAgICAgICAgICAgICAgICAgICB0ZWFtbmFtZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdnYW1lLXN0YXJ0JzpcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdG5GY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RlcCc6XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTdGVwcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpbnQnOlxuICAgICAgICAgICAgICAgICAgICBoaW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SGludHMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vVXBkYXRlIHRlYW1uYW1lXG5mdW5jdGlvbiB0ZWFtbmFtZVVwZGF0ZSgpIHtcbiAgICB0ZWFtbmFtZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRlYW1uYW1lVmlldyk7XG4gICAgdGVhbW5hbWVPdXRwdXREaXYuaW5uZXJIVE1MID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZWFtbmFtZScpO1xuICAgIHRlYW1uYW1lT3V0cHV0RGl2LnN0eWxlLnpJbmRleCA9IDk5OTk7IC8vcHJldmlvdXNseSBhdCAtMSBiYyBpdCBtYWtlcyB0aGUgYnV0dG9uIHVuY2xpY2thYmxlIG90aGVyd2lzZVxufVxuXG4vL2NoZWNrIHdoZXJlIHRoZSBwbGF5ZXIgaXMgYXRtIHRvIGVpdGhlciBhZGQgdGhlIHN0YXJ0IGdhbWUgZXZlbnQgb3IgcmVwbGFjZSBpdCBmb3IgdGhlIGVuZCBnYW1lIGV2ZW50XG5mdW5jdGlvbiBzdGFydEJ0bkZjdCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTdGVwJykpIHtcbiAgICAgICAgc3RhcnRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuICAgICAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdpdmVVcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuICAgIH1cbn1cblxuLy9Ob3cgdGhlIGZ1biBiZWdnaW5zXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgc3dpdGNoVmlldyhzZXR0aW5nVXApO1xufVxuXG5mdW5jdGlvbiBzaG93U3RlcHMoKSB7XG4gICAgc3dpdGNoVmlldyhzaG93U3RlcCk7XG59XG5cbmZ1bmN0aW9uIHNob3dIaW50cygpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpbnRDaGVja2VkJykgPT0gJ3RydWUnKSB7XG4gICAgICAgIHN3aXRjaFZpZXcoc2VsZWN0SGludClcbiAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2hWaWV3KHNob3dIaW50KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZ2l2ZVVwKCkge1xuICAgIGdpdmVVcFBhZ2Uuc2hvdygpO1xuICAgIGdhbWVCb2FyZC5oaWRlKCk7XG4gICAgcmV0dXJuR2FtZUJvYXJkLndhdGNoKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbWZpcm0tZ2l2ZS11cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZWF2ZSgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZ2FtZS9sZWF2ZSc7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBpbml0SGludHMoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGludHMnKSkge1xuICAgICAgICB2YXIgSElOVFMgPSBbXG4gICAgICAgICAgICBuZXcgSGludCgxKSxcbiAgICAgICAgICAgIG5ldyBIaW50KDIpLFxuICAgICAgICAgICAgbmV3IEhpbnQoMyksXG4gICAgICAgICAgICBuZXcgSGludCg0KSxcbiAgICAgICAgICAgIG5ldyBIaW50KDUpLFxuICAgICAgICAgICAgbmV3IEhpbnQoNiksXG4gICAgICAgICAgICBuZXcgSGludCg3KSxcbiAgICAgICAgICAgIG5ldyBIaW50KDgpLFxuICAgICAgICAgICAgbmV3IEhpbnQoOSksXG4gICAgICAgIF07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaW50cycsIEpTT04uc3RyaW5naWZ5KEhJTlRTKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZW5kR2FtZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZGdhbWUnKSA9PSBcInRydWVcIikge1xuICAgICAgICBnYW1lQm9hcmQuaGlkZSgpO1xuICAgICAgICBhdmVyYWdlU2NvcmUuc2hvdygpO1xuICAgICAgICBhdmVyYWdlU2NvcmVTdWl0ZS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYXZlcmFnZVNjb3JlU3VpdGUuY2hhbmdlKCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFN0ZXAnLCAxMSlcbiAgICAgICAgICAgIGdldE5leHRTdGVwTXVzaWMoMTEpO1xuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUtZGl2JykuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbmFsU2NvcmUnKSArICcgcHRzJ1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vY2xhc3MvUGFnZS5qcyc7XG5pbXBvcnQgeyBOdW1wYWQgfSBmcm9tICcuLi8uLi9jbGFzcy9OdW1wYWQuanMnO1xuXG4vL2ltcG9ydCBheGlvc1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XG5cbi8vZGlzcGxheSB1c2VkIGluIHF1ZXJ5IHJlc3BvbnNlXG5jb25zdCBoaW50UGFubmVsID0gbmV3IFBhZ2UoJyNoaW50LXBhbm5lbCcpO1xuY29uc3Qgc2VsZWN0SGludCA9IG5ldyBQYWdlKCcjc2VsZWN0LWhpbnQnKTtcbmNvbnN0IGdhbWVCb2FyZCA9IG5ldyBQYWdlKCcjZ2FtZS1ib2FyZCcpO1xuXG4vL2hpbnQgZXJyb3JcbmNvbnN0IGhpbnRFcnJvciA9IG5ldyBQYWdlKCcjaGludC1lcnJvci1wYW5uZWwnKVxuXG4vL3Jzd2l0Y2hlc1xuY29uc3QgaGludEJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGludC1iYWNrJyk7XG5cblxuY29uc3QgaGludFBhZCA9IG5ldyBOdW1wYWQoJyNudW1wYWQtaGludCcsICcjaGludC1jb2RlLW91dHB1dCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIC8vTnVtcGFkIGlzIHJlYWR5IHRvIHdyaXRlXG4gICAgaGludFBhZC5zdGFydCgpO1xuXG4gICAgLy9SZXR1cm4gYnRuIGxpc3RlbmVyXG4gICAgaGludEJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGhpbnRQYWQucmVzZXQoKTsgIFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGludC1jb2RlLXZhbGlkYXRlJylcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2dhbWUvaGludENvZGUnLCB7XG4gICAgICAgICAgICAgICAgc3RlcDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpLFxuICAgICAgICAgICAgICAgIGNvZGU6IGhpbnRQYWQub3V0cHV0LmlubmVySFRNTCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGVwID09ICd3cm9uZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBoaW50UGFubmVsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaGludEVycm9yLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpbnQtZXJyb3ItYmFjaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGludEVycm9yLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVCb2FyZC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0ZXAgPT0gJ3N0ZXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEhpbnQuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBoaW50UGFubmVsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS13aW4tYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtd2luLWF1ZGlvJykucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpbnRDaGVja2VkJywgJ3RydWUnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2RlLWVycmV1cicpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvZGUtZXJyZXVyJykucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaW50UGFkLnJlc2V0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICB9KTtcbn0pXG5cbi8qIGxldCBoaW50cyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaW50cycpKTtcbmNvbnNvbGUubG9nKGhpbnRzLnN0ZXBUd28pXG5oaW50cy5zdGVwVHdvLmVhc3kgPSB0cnVlO1xubGV0IG5ld0hpbnQgPSBuZXcgSGludChoaW50cy5zdGVwVHdvLm51bWJlcik7XG5pZiAoaGludHMuc3RlcFR3by5lYXN5KSBuZXdIaW50LnNlZUVhc3koKTtcbmlmIChoaW50cy5zdGVwVHdvLmVhc3kpIG5ld0hpbnQuc2VlSGFyZCgpO1xuaWYgKGhpbnRzLnN0ZXBUd28uZWFzeSkgbmV3SGludC5zZWVTb2x1dGlvbigpO1xud2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaW50cycsIEpTT04uc3RyaW5naWZ5KGhpbnRzKSlcbmNvbnNvbGUubG9nKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaW50cycpKSlcbiAqL1xuIiwiaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIi4uLy4uL2NsYXNzL1N3aXRjaFwiO1xuaW1wb3J0IHsgTnVtcGFkIH0gZnJvbSAnLi4vLi4vY2xhc3MvTnVtcGFkLmpzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vLi4vY2xhc3MvUGFnZVwiO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XG5pbXBvcnQgbGVhdmUgZnJvbSAnLi4vLi4vbGVhdmUuanMnO1xuXG52YXIgc3VjY2VzcyA9IFtdO1xuXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncXVlc3Rpb24nLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncXVlc3Rpb24nKSB8fCAxKTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdWNjZXNBJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc0EnKSB8fCBmYWxzZSk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3VjY2VzQicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdWNjZXNCJykgfHwgZmFsc2UpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N1Y2Nlc3MnLCBKU09OLnN0cmluZ2lmeShzdWNjZXNzKSk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9udXNQb2ludHMnLCAwKTtcblxuY29uc3Qgc3VjY2VzID0gbmV3IFBhZ2UoJyNzdWNjZXMnKTtcblxuY29uc3QgcmVzUGFubmVsID0gbmV3IFBhZ2UoJyNyZXMtcGFubmVsJyk7XG5cbmNvbnN0IHExcDEgPSBuZXcgU3dpdGNoKCcjcTFwMScsICcjcTEtcGFubmVsJywgJyNyZXMtcGFubmVsJyk7XG5jb25zdCBxMXAyID0gbmV3IFN3aXRjaCgnI3ExcDInLCAnI3ExLXBhbm5lbCcsICcjcmVzLXBhbm5lbCcpO1xuY29uc3QgcTFwMyA9IG5ldyBTd2l0Y2goJyNxMXAzJywgJyNxMS1wYW5uZWwnLCAnI3Jlcy1wYW5uZWwnKTtcbmNvbnN0IHExcDQgPSBuZXcgU3dpdGNoKCcjcTFwNCcsICcjcTEtcGFubmVsJywgJyNyZXMtcGFubmVsJyk7XG5jb25zdCBxMXA1ID0gbmV3IFN3aXRjaCgnI3ExcDUnLCAnI3ExLXBhbm5lbCcsICcjcmVzLXBhbm5lbCcpO1xuXG5jb25zdCBxMnAxID0gbmV3IFN3aXRjaCgnI3EycDEnLCAnI3EyLXBhbm5lbCcsICcjcmVzLXBhbm5lbCcpO1xuY29uc3QgcTJwMiA9IG5ldyBTd2l0Y2goJyNxMnAyJywgJyNxMi1wYW5uZWwnLCAnI3N1Y2NlcycpO1xuXG5jb25zdCBxM3AxID0gbmV3IFN3aXRjaCgnI3EzcDEnLCAnI3EzLXBhbm5lbCcsICcjcmVzLXBhbm5lbCcpO1xuY29uc3QgcTNwMiA9IG5ldyBTd2l0Y2goJyNxM3AyJywgJyNxMy1wYW5uZWwnLCAnI3Jlcy1wYW5uZWwnKTtcblxuY29uc3QgcTRwMSA9IG5ldyBTd2l0Y2goJyNxNHAxJywgJyNxNC1wYW5uZWwnLCAnI3Jlcy1wYW5uZWwnKTtcbmNvbnN0IHE0cDIgPSBuZXcgU3dpdGNoKCcjcTRwMicsICcjcTQtcGFubmVsJywgJyNzdWNjZXMnKTtcbmNvbnN0IHE0cDMgPSBuZXcgU3dpdGNoKCcjcTRwMycsICcjcTQtcGFubmVsJywgJyNyZXMtcGFubmVsJyk7XG5jb25zdCBxNHA0ID0gbmV3IFN3aXRjaCgnI3E0cDQnLCAnI3E0LXBhbm5lbCcsICcjcmVzLXBhbm5lbCcpO1xuXG5jb25zdCBxNXAxID0gbmV3IFN3aXRjaCgnI3E1cDEnLCAnI3E1LXBhbm5lbCcsICcjcmVzLXBhbm5lbCcpO1xuY29uc3QgcTVwMiA9IG5ldyBTd2l0Y2goJyNxNXAyJywgJyNxNS1wYW5uZWwnLCAnI3Jlcy1wYW5uZWwnKTtcbmNvbnN0IHE1cDMgPSBuZXcgU3dpdGNoKCcjcTVwMycsICcjcTUtcGFubmVsJywgJyNyZXMtcGFubmVsJyk7XG5jb25zdCBxNXA0ID0gbmV3IFN3aXRjaCgnI3E1cDQnLCAnI3E1LXBhbm5lbCcsICcjcmVzLXBhbm5lbCcpO1xuY29uc3QgcTVwNSA9IG5ldyBTd2l0Y2goJyNxNXA1JywgJyNxNS1wYW5uZWwnLCAnI3Jlcy1wYW5uZWwnKTtcblxuY29uc3QgcTZOdW1wYWQgPSBuZXcgTnVtcGFkKCcjbnVtcGFkLXppcCcsICcjemlwLWNvZGUtb3V0cHV0JywgNSlcblxuY29uc3QgcHJvcG9zaXRpb25zID0gW1xuICAgIFtxMXAxLCBxMXAyLCBxMXAzLCBxMXA0LCBxMXA1XSxcbiAgICBbcTJwMSwgcTJwMl0sXG4gICAgW3EzcDEsIHEzcDJdLFxuICAgIFtxNHAxLCBxNHAyLCBxNHAzLCBxNHA0XSxcbiAgICBbcTVwMSwgcTVwMiwgcTVwMywgcTVwNCwgcTVwNV0sXG5dO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBxNk51bXBhZC5zdGFydCgpO1xuICAgIHByb3Bvc2l0aW9ucy5mb3JFYWNoKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgZ3JvdXAuZm9yRWFjaCgocHJvcCwgc3ViSW5kZXgpID0+IHtcbiAgICAgICAgICAgIHByb3AuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVBbnN3ZXJQYW5uZWwoaW5kZXggKyAxLCBzdWJJbmRleCArIDEpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXMtc3VpdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgKG5ldyBTd2l0Y2goJyNyZXMtaW1nJywgJyNyZXMtcGFubmVsJywgYCNxJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncXVlc3Rpb24nKX0tcGFubmVsYCkpLmNoYW5nZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5wbGF5KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ppcC1jb2RlLXZhbGlkYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCB6aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjemlwLWNvZGUtb3V0cHV0JykuaW5uZXJIVE1MLnRvU3RyaW5nKCk7XG4gICAgICAgIHppcC5sZW5ndGggPT0gMCA/IHppcCA9ICcwMDAwMCcgOiBmYWxzZTtcbiAgICAgICAgaWYgKHppcC5tYXRjaCgvWzAtOV17NX0vKSkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2dhbWUvZmluYWwnLCB7XG4gICAgICAgICAgICAgICAgWmlwOiB6aXAsXG4gICAgICAgICAgICAgICAgbnVtYmVyUGxheWVyczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bWJlclBsYXllcnMnKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzZXM6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc3MnKSksXG4gICAgICAgICAgICAgICAgYm9udXNQb2ludHM6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdib251c1BvaW50cycpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvKiAudGhlbigoKSA9PiBsZWF2ZSgpKSAqL1xuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvZ2FtZS9zY29yZWJvYXJkJykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuZnVuY3Rpb24gdXBkYXRlQW5zd2VyUGFubmVsKHF1ZXN0aW9uLCBwcm9wb3NpdGlvbikge1xuICAgIHN3aXRjaCAocXVlc3Rpb24pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3F1ZXN0aW9uJywgMik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbnVtYmVyUGxheWVycycsIHByb3Bvc2l0aW9uKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL3F1ZXN0aW9ubmFpcmVfZmluL3JlcG9uc2VzL3F1ZXN0aW9uXzEvcmVwb25zZV9iLnBuZycpXCI7XG4gICAgICAgICAgICBpZiAocHJvcG9zaXRpb24gPT0gMSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL3F1ZXN0aW9ubmFpcmVfZmluL3JlcG9uc2VzL3F1ZXN0aW9uXzEvcmVwb25zZV9hLnBuZycpXCI7XG4gICAgICAgICAgICBxMXAxLmNoYW5nZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdxdWVzdGlvbicsIDMpO1xuICAgICAgICAgICAgaWYgKHByb3Bvc2l0aW9uID09IDIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWJvbnVzLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtYm9udXMtYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCggJy9idWlsZC9xdWVzdGlvbm5haXJlX2Zpbi9yZXBvbnNlcy9xdWVzdGlvbl8yL3JlcG9uc2VfYi5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWNjZXMnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcvYnVpbGQvc3VjY2VzL3N1Y2Nlc18xLmpwZWcnKWA7XG4gICAgICAgICAgICAgICAgcTJwMi5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3VjY2VzcycsIEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc3MnKSkuY29uY2F0KFtcIlNhbG9uIGRlIHRow6lcIl0pKSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JvbnVzUG9pbnRzJywgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JvbnVzUG9pbnRzJykpICsgMTAwKVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGxpc3Rlbk5vdygpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWF1ZGlvJykucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXNQYW5uZWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VjY2VzJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Ob3cpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWNjZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3Rlbk5vdylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCggJy9idWlsZC9xdWVzdGlvbm5haXJlX2Zpbi9yZXBvbnNlcy9xdWVzdGlvbl8yL3JlcG9uc2VfYS5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIHEycDEuY2hhbmdlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncXVlc3Rpb24nLCA0KTtcbiAgICAgICAgICAgIGlmIChwcm9wb3NpdGlvbiA9PSAxKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzLWltZycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCAnL2J1aWxkL3F1ZXN0aW9ubmFpcmVfZmluL3JlcG9uc2VzL3F1ZXN0aW9uXzMvcmVwb25zZV9hYS5wbmcnKVwiO1xuICAgICAgICAgICAgaWYgKHByb3Bvc2l0aW9uID09IDEgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc0EnKSA9PSAndHJ1ZScpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXMtaW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoICcvYnVpbGQvcXVlc3Rpb25uYWlyZV9maW4vcmVwb25zZXMvcXVlc3Rpb25fMy9yZXBvbnNlX2EucG5nJylcIjtcbiAgICAgICAgICAgIGlmIChwcm9wb3NpdGlvbiA9PSAyKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzLWltZycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCAnL2J1aWxkL3F1ZXN0aW9ubmFpcmVfZmluL3JlcG9uc2VzL3F1ZXN0aW9uXzMvcmVwb25zZV9iLnBuZycpXCI7XG4gICAgICAgICAgICBpZiAocHJvcG9zaXRpb24gPT0gMiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3VjY2VzQScpID09ICd0cnVlJykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCggJy9idWlsZC9xdWVzdGlvbm5haXJlX2Zpbi9yZXBvbnNlcy9xdWVzdGlvbl8zL3JlcG9uc2VfYmIucG5nJylcIjtcbiAgICAgICAgICAgIHEzcDEuY2hhbmdlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3F1ZXN0aW9uJywgNSk7XG4gICAgICAgICAgICBpZiAocHJvcG9zaXRpb24gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXMtaW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoICcvYnVpbGQvcXVlc3Rpb25uYWlyZV9maW4vcmVwb25zZXMvcXVlc3Rpb25fNC9yZXBvbnNlX2EucG5nJylcIjtcbiAgICAgICAgICAgICAgICBxNHAxLmNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3Bvc2l0aW9uID09IDIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWJvbnVzLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtYm9udXMtYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCggJy9idWlsZC9xdWVzdGlvbm5haXJlX2Zpbi9yZXBvbnNlcy9xdWVzdGlvbl80L3JlcG9uc2VfYi5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWNjZXMnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcvYnVpbGQvc3VjY2VzL3N1Y2Nlc18zLmpwZWcnKWA7XG4gICAgICAgICAgICAgICAgcTRwMi5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3VjY2VzcycsIEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc3MnKSkuY29uY2F0KFtcIlN1cGVyc3RpdGlvblwiXSkpKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9udXNQb2ludHMnLCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9udXNQb2ludHMnKSkgKyAxMDApXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Y2NlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc1Bhbm5lbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wb3NpdGlvbiA9PSAzKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCggJy9idWlsZC9xdWVzdGlvbm5haXJlX2Zpbi9yZXBvbnNlcy9xdWVzdGlvbl80L3JlcG9uc2VfYy5wbmcnKVwiO1xuICAgICAgICAgICAgICAgIHE0cDEuY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcG9zaXRpb24gPT0gNCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXMtaW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoICcvYnVpbGQvcXVlc3Rpb25uYWlyZV9maW4vcmVwb25zZXMvcXVlc3Rpb25fNC9yZXBvbnNlX2QucG5nJylcIjtcbiAgICAgICAgICAgICAgICBxNHAxLmNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdxdWVzdGlvbicsIDYpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL3F1ZXN0aW9ubmFpcmVfZmluL3JlcG9uc2VzL3F1ZXN0aW9uXzUvcmVwb25zZV9iLnBuZycpXCI7XG4gICAgICAgICAgICBpZiAocHJvcG9zaXRpb24gPT0gMSB8fCBwcm9wb3NpdGlvbiA9PSAyKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzLWltZycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYnVpbGQvcXVlc3Rpb25uYWlyZV9maW4vcmVwb25zZXMvcXVlc3Rpb25fNS9yZXBvbnNlX2EucG5nJylcIjtcbiAgICAgICAgICAgIHE1cDEuY2hhbmdlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLyogICBjYXNlIDY6XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdxdWVzdGlvbicsIDcpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYWwtcmVzLWltZycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYnVpbGQvcXVlc3Rpb25uYWlyZV9maW4vcmVwb25zZXMvcXVlc3Rpb25fNS9yZXBvbnNlX2IucG5nJylcIjtcbiAgICAgICAgICAgICAgaWYgKHByb3Bvc2l0aW9uID09IDEgfHwgcHJvcG9zaXRpb24gPT0gMikgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmFsLXJlcy1pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL3F1ZXN0aW9ubmFpcmVfZmluL3JlcG9uc2VzL3F1ZXN0aW9uXzUvcmVwb25zZV9hLnBuZycpXCI7XG4gICAgICAgICAgICAgIHE1cDEuY2hhbmdlKCk7XG4gICAgICAgICAgICAgIGJyZWFrOyAqL1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbGFzcy9QYWdlLmpzJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vY2xhc3MvSW1hZ2UuanMnO1xuXG4vL1BhZ2VzIG9yIHN1YnBhZ2VzXG5jb25zdCBydWxlc0NvbnRlbnQgPSBuZXcgUGFnZSgnI3J1bGVzLWNvbnRlbnQnKTtcbmNvbnN0IHN1Y2Nlc3NDb250ZW50ID0gbmV3IFBhZ2UoJyNzdWNjZXNzLWNvbnRlbnQnKTtcblxuLy9Ub3AgYnRucyBmb3IgZGlzcGxheSBjaGFuZ2UgaW4gc3Vidmlld1xuY29uc3QgcnVsZXNCdG4gPSBuZXcgSW1hZ2UoJyNydWxlcy1idXR0b24nLCAncmVnbGVtZW50X2VuYWJsZScsICdyZWdsZW1lbnRfZGlzYWJsZScsICdyZWdsZW1lbnQnKTtcbmNvbnN0IHN1Y2Nlc3NCdG4gPSBuZXcgSW1hZ2UoJyNzdWNjZXNzLWJ1dHRvbicsICdzdWNjZXNfZW5hYmxlJywgJ3N1Y2Nlc19kaXNhYmxlJywgJ3JlZ2xlbWVudCcpO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgc3VjY2Vzc0J0bi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBydWxlc0J0bi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHN1Y2Nlc3NCdG4uYWN0aXZhdGUoKTtcbiAgICAgICAgcnVsZXNDb250ZW50LmhpZGUoKTtcbiAgICAgICAgc3VjY2Vzc0NvbnRlbnQuc2hvdygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5wbGF5KCk7XG4gICAgfSlcbiAgICBcbiAgICBydWxlc0J0bi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBydWxlc0J0bi5hY3RpdmF0ZSgpO1xuICAgICAgICBzdWNjZXNzQnRuLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgcnVsZXNDb250ZW50LnNob3coKTtcbiAgICAgICAgc3VjY2Vzc0NvbnRlbnQuaGlkZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5wbGF5KCk7XG4gICAgfSlcblxufSlcbiIsImltcG9ydCB7IEhpbnQgfSBmcm9tIFwiLi4vLi4vY2xhc3MvSGludFwiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIi4uLy4uL2NsYXNzL1N3aXRjaFwiO1xuXG4vL2hpbnQgc2VsZWN0aW9uXG5jb25zdCBoYXJkSGludCA9IG5ldyBTd2l0Y2goJyNoYXJkLWhpbnQnLCAnI3NlbGVjdC1oaW50JywgJyNzaG93LWhpbnQnKVxuY29uc3QgZWFzeUhpbnQgPSBuZXcgU3dpdGNoKCcjZWFzeS1oaW50JywgJyNzZWxlY3QtaGludCcsICcjc2hvdy1oaW50JylcbmNvbnN0IHNvbHV0aW9uID0gbmV3IFN3aXRjaCgnI3NvbHV0aW9uJywgJyNzZWxlY3QtaGludCcsICcjc2hvdy1oaW50Jyk7XG5cbi8vaGludHMgYXJyYXlcbnZhciBoaW50cyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaW50cycpKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xuICAgIFxuICAgIGhhcmRIaW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUhpbnQoJ2hhcmQnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpbnQtZGlzcGxheScpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYnVpbGQvaW5kaWNlcy9ldGFwZVwiICsgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpICsgXCIvaW5kaWNlX2RpZmZpY2lsZS5wbmcnKVwiO1xuICAgICAgICBoYXJkSGludC5jaGFuZ2UoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLnBsYXkoKTtcbiAgICB9KTtcblxuICAgIGVhc3lIaW50LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUhpbnQoJ2Vhc3knKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpbnQtZGlzcGxheScpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYnVpbGQvaW5kaWNlcy9ldGFwZVwiICsgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpICsgXCIvaW5kaWNlX2ZhY2lsZS5wbmcnKVwiO1xuICAgICAgICBlYXN5SGludC5jaGFuZ2UoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLnBsYXkoKTtcbiAgICB9KTtcbiAgICBcbiAgICBzb2x1dGlvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGVIaW50KCdzb2x1dGlvbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGludC1kaXNwbGF5Jykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9idWlsZC9pbmRpY2VzL2V0YXBlXCIgKyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTdGVwJykgKyBcIi9zb2x1dGlvbi5wbmcnKVwiO1xuICAgICAgICBzb2x1dGlvbi5jaGFuZ2UoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLnBsYXkoKTtcbiAgICB9KTtcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUhpbnQoZGlmZmljdWx0eSkge1xuICAgIGxldCBjdXJyZW50U3RlcCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKTtcbiAgICBsZXQgbmV3SGludCA9IG5ldyBIaW50KGhpbnRzW2N1cnJlbnRTdGVwLTFdLm51bWJlcik7XG4gICAgaWYgKGhpbnRzW2N1cnJlbnRTdGVwLTFdLmVhc3kpIHtuZXdIaW50LnNlZUVhc3koKTt9XG4gICAgaWYgKGhpbnRzW2N1cnJlbnRTdGVwLTFdLmhhcmQpIHtuZXdIaW50LnNlZUhhcmQoKTt9XG4gICAgaWYgKGhpbnRzW2N1cnJlbnRTdGVwLTFdLnNvbHV0aW9uKSB7bmV3SGludC5zZWVTb2x1dGlvbigpO31cbiAgICBcbiAgICBpZiAoZGlmZmljdWx0eSA9PSAnZWFzeScpIHsgXG4gICAgICAgIG5ld0hpbnQuZWFzeSA9PSBmYWxzZSA/IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKSAtIDI1MCk6IGZhbHNlO1xuICAgICAgICBuZXdIaW50LmVhc3kgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZGlmZmljdWx0eSA9PSAnaGFyZCcpIHsgXG4gICAgICAgIG5ld0hpbnQuaGFyZCA9PSBmYWxzZSA/IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKSAtIDEwMCk6IGZhbHNlO1xuICAgICAgICBuZXdIaW50LmhhcmQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZGlmZmljdWx0eSA9PSAnc29sdXRpb24nKSB7IFxuICAgICAgICBuZXdIaW50LnNvbHV0aW9uID09IGZhbHNlID8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpIC0gNjAwKTogZmFsc2U7XG4gICAgICAgIG5ld0hpbnQuc29sdXRpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGhpbnRzW2N1cnJlbnRTdGVwLTFdID0gbmV3SGludDtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpbnRzJywgSlNPTi5zdHJpbmdpZnkoaGludHMpKTtcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTdGVwJykgIT0gMSkge1xuICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTdGVwJyk7XG4gICAgICAgIGlmIChoaW50c1tjdXJyZW50U3RlcC0xXS5lYXN5KSB7ZWFzeUhpbnQuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL2Nob2l4X2luZGljZXMvaW5kaWNlX2ZhY2lsZV9yZXZvaXIucG5nJylcIn1cbiAgICAgICAgaWYgKGhpbnRzW2N1cnJlbnRTdGVwLTFdLmhhcmQpIHtoYXJkSGludC5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYnVpbGQvY2hvaXhfaW5kaWNlcy9pbmRpY2VfZGlmZmljaWxlX3Jldm9pci5wbmcnKVwifVxuICAgICAgICBpZiAoaGludHNbY3VycmVudFN0ZXAtMV0uc29sdXRpb24pIHtzb2x1dGlvbi5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvYnVpbGQvY2hvaXhfaW5kaWNlcy9zb2x1dGlvbl9yZXZvaXIucG5nJylcIn1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL2NsYXNzL0ltYWdlLmpzJztcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJy4uLy4uL2NsYXNzL1N3aXRjaC5qcyc7XG5pbXBvcnQgbXVzaWNQbGF5TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL211c2ljLmpzJztcbmltcG9ydCBmb3JtYXRTY29yZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Njb3JlRm9ybWF0dGVyLmpzJztcbi8vdmFsaWRhdGlvbiBidG5cbmNvbnN0IHZhbGlkYXRpb24gPSBuZXcgU3dpdGNoKCcjbGV0cy1nbycsICcjc2V0dGluZy11cCcsICcjZmlyc3QtY29kZScpO1xuXG5jb25zdCBmaXJzdENvZGVWYWxpZGF0aW9uID0gbmV3IFN3aXRjaCgnI2ZpcnN0LWNvZGUtdmFsaWRhdGlvbicsICcjZmlyc3QtY29kZScsICcjZ2FtZS1ib2FyZCcpO1xuXG4vL2Rpc3BsYXkgZW5hYmxlIHN0ZXAsIGhpbnQgYW5kIGNoYW5nZSBnYW1lLXN0YXJ0XG5jb25zdCBzdGVwID0gbmV3IEltYWdlKCcjc3RlcCcsICdldGFwZXNfZW5hYmxlJywgJ2V0YXBlc19kaXNhYmxlJywgJ21lbnVfcHJpbmNpcGFsJyk7XG5cbmNvbnN0IGJhckNoYXJnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXItY2hhcmdlJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHZhbGlkYXRpb24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRTdGVwJywgMSk7XG4gICAgICAgIHZhbGlkYXRpb24uY2hhbmdlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0U3RlcFRpbWVyJywgMTIwKTtcbiAgICAgICAgZmlyc3RTdGVwVGltZXIoKTtcbiAgICAgICAgZ2xvYmFsVGltZXIoKTtcbiAgICAgICAgdXBkYXRlQmFyKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXItY2hhcmdlLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFyLWNoYXJnZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXNpYycpKS5wYXVzZSgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWMnLCAnI21pbmktamV1LW11c2ljJyk7XG4gICAgICAgIG11c2ljUGxheUxpc3QoKTtcbiAgICB9KVxuXG4gICAgZmlyc3RDb2RlVmFsaWRhdGlvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VwYXJhdG9yJykuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgZmlyc3RDb2RlVmFsaWRhdGlvbi5jaGFuZ2UoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWF1ZGlvJykucGxheSgpO1xuICAgICAgICBzdGVwLmFjdGl2YXRlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXN0YXJ0Jykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9idWlsZC9tZW51X3ByaW5jaXBhbC9hYmFuZG9ubmVycGFydGllLnBuZycpXCI7XG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdC1jb2RlJykuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSkge1xuICAgICAgICAgICAgZmlyc3RDb2RlVmFsaWRhdGlvbi5jaGFuZ2UoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXBhcmF0b3InKS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgICAgIHN0ZXAuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXN0YXJ0Jykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9idWlsZC9tZW51X3ByaW5jaXBhbC9hYmFuZG9ubmVycGFydGllLnBuZycpXCI7XG4gICAgICAgIH1cbiAgICB9LCAzMDAwMClcbn0pXG5cbmZ1bmN0aW9uIGZpcnN0U3RlcFRpbWVyKCkge1xuICAgIGNvbnN0IGJhc2VJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RTdGVwVGltZXInKSAhPSAnMCcpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdFN0ZXBUaW1lcicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdFN0ZXBUaW1lcicpIC0gMSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXItY2hhcmdlLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhci1jaGFyZ2UnKS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYmFzZUludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0U3RlcFRpbWVyJykgPT0gJzEnKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtbG9vc2UtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWxvb3NlLWF1ZGlvJykucGxheSgpO1xuICAgICAgICB9IFxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTdGVwJykgPT0gMikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChiYXNlSW50ZXJ2YWwpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhci1jaGFyZ2UtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFyLWNoYXJnZScpLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgICAgICB9O1xuICAgIH0sIDEwMDApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbnRlcnZhbCcsIGJhc2VJbnRlcnZhbClcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFyKCkge1xuICAgIHZhciBpID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2knKSkgfHwgMDtcbiAgICBiYXJDaGFyZ2Uuc3R5bGUud2lkdGggPSAnODYlJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFyLWNoYXJnZS1jb250YWluZXInKS5zdHlsZSA9IFwiYW5pbWF0aW9uOiBmYWRlSW4gNXM7IC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNXM7IC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gNXM7IC1vLWFuaW1hdGlvbjogZmFkZUluIDVzOyAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gNXM7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2J1aWxkL21lbnVfcHJpbmNpcGFsL2NhZHJlX2phdWdlLnBuZycpXCI7XG4gICAgYmFyQ2hhcmdlLnN0eWxlID0gXCJhbmltYXRpb246IGZhZGVJbiA1czsgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA1czsgLW1vei1hbmltYXRpb246IGZhZGVJbiA1czsgLW8tYW5pbWF0aW9uOiBmYWRlSW4gNXM7IC1tcy1hbmltYXRpb246IGZhZGVJbiA1cztcIjtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RTdGVwVGltZXInKSAhPSAnMCcpIHtcbiAgICAgICAgICAgIGkgKz0gLjE7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaScsIGkpO1xuICAgICAgICAgICAgYmFyQ2hhcmdlLnN0eWxlLndpZHRoID0gKDg2IC0gaSAqIC43MikgKyAnJSc7XG4gICAgICAgICAgICBpZiAoaSA8PSAyMCkge1xuICAgICAgICAgICAgICAgIGJhckNoYXJnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY5QjM0Qyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPD0gNDApIHtcbiAgICAgICAgICAgICAgICBiYXJDaGFyZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNBQ0IzMzQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDw9IDYwKSB7XG4gICAgICAgICAgICAgICAgYmFyQ2hhcmdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkFCNzMzJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8PSA4MCkge1xuICAgICAgICAgICAgICAgIGJhckNoYXJnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGOEUxNSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPD0gMTAwKSB7XG4gICAgICAgICAgICAgICAgYmFyQ2hhcmdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkY0RTExJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8PSAxMjApIHtcbiAgICAgICAgICAgICAgICBiYXJDaGFyZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGRjBEMEQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgfSwgMTAwKVxufVxuXG5mdW5jdGlvbiBnbG9iYWxUaW1lcigpIHtcbiAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAvL0dhbWUgc3RhcnQgdGltZXIgKGFjdHVhbCBjdXJyZW50IGRhdGUgaXJsKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhcnRUaW1lJykgPT09IG51bGwpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXJ0VGltZScsIGN1cnJlbnREYXRlKTtcbiAgICB9XG4gICAgLy9BY3R1YWwgdGltZXIgb2YgdGhlIGdhbWUgKHVwZGF0ZWQgZXZlcnkgc2Vjb25kIHdpdGggYSBuZXcgZGF0ZSlcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRUaW1lJykgPT09IG51bGwpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRUaW1lJywgY3VycmVudERhdGUpO1xuICAgIH1cbiAgICAvL1RoaXMgdGltZXIgd2lsbCBiZSBjaGFuZ2VkIGV2ZXJ5IG5ldyBzdGVwIChzbyB3ZSBrZWVwIHRyYWNrIHdoZW4gaXQgc3RhcnRlZClcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXBTdGFydFRpbWUnKSA9PT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RlcFN0YXJ0VGltZScsIGN1cnJlbnREYXRlKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpID09PSBudWxsKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIDEwMDAwKTtcbiAgICB9XG4gICAgdmFyIGNvdW50RG93bkRhdGUgPSBjdXJyZW50RGF0ZSArIDU0MDAwMDA7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRUaW1lJywgbm93KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpIC0gMSk7XG5cbiAgICAgICAgdmFyIHRpbWVsZWZ0ID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAvLyBDYWxjdWxhdGluZyB0aGUgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgbGVmdFxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lbGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lbGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVsZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgLy8gUmVzdWx0IGlzIG91dHB1dCB0byB0aGUgc3BlY2lmaWMgZWxlbWVudFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVcIikuaW5uZXJIVE1MID0gaG91cnMgKyBcIiA6IFwiICsgKG1pbnV0ZXMudG9TdHJpbmcoKS5sZW5ndGggPT0gMiA/IG1pbnV0ZXMgOiAnMCcgKyBtaW51dGVzLnRvU3RyaW5nKCkpICsgXCIgOiBcIiArIChzZWNvbmRzLnRvU3RyaW5nKCkubGVuZ3RoID09IDIgPyBzZWNvbmRzIDogJzAnICsgc2Vjb25kcy50b1N0cmluZygpKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKS5pbm5lckhUTUwgPSBmb3JtYXRTY29yZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyBcIiBwdHNcIjtcbiAgICAgICAgLy8gRGlzcGxheSB0aGUgbWVzc2FnZSB3aGVuIGNvdW50ZG93biBpcyBvdmVyXG4gICAgICAgIGlmICh0aW1lbGVmdCA8IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09ICcyJykgcmV0dXJuIGNsZWFySW50ZXJ2YWwoKTtcbiAgICB9LCAxMDAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQmFyOyIsImltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbGFzcy9QYWdlLmpzJztcbmltcG9ydCB7IE51bXBhZCB9IGZyb20gJy4uLy4uL2NsYXNzL051bXBhZC5qcyc7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICcuLi8uLi9jbGFzcy9Td2l0Y2guanMnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi9jbGFzcy9JbWFnZS5qcyc7XG5pbXBvcnQgcmVmcmVzaFN0ZXBEZXRhaWxBc3NldHMgZnJvbSAnLi9kZXRhaWxzUGFubmVsLmpzJ1xuaW1wb3J0IG11c2ljUGxheWxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tdXNpYy5qcydcbi8vaW1wb3J0IGF4aW9zXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcbi8vZGlzcGxheVxuY29uc3QgZ2FtZUJvYXJkID0gbmV3IFBhZ2UoJyNnYW1lLWJvYXJkJyk7XG5jb25zdCBzdGVwUGFubmVsID0gbmV3IFBhZ2UoJyNzdGVwLXBhbm5lbCcpO1xuY29uc3QgZW5kU3RlcCA9IG5ldyBQYWdlKCcjZW5kLXN0ZXAnKTtcbmNvbnN0IHN0ZXBEZXRhaWxQYW5uZWwgPSBuZXcgUGFnZSgnI3N0ZXAtZGV0YWlsLXBhbm5lbCcpO1xuY29uc3QgYXZlcmFnZVNjb3JlID0gbmV3IFBhZ2UoJyNhdmVyYWdlLXNjb3JlJyk7XG4vL29ubHkgZm9yIHN0ZXAgMSAvL1xuY29uc3QgaGludCA9IG5ldyBJbWFnZSgnI2hpbnQnLCAnaW5kaWNlc19lbmFibGUnLCAnaW5kaWNlc19kaXNhYmxlJywgJ21lbnVfcHJpbmNpcGFsJyk7XG4vL3N0ZXAgZXJyb3JcbmNvbnN0IHN0ZXBFcnJvciA9IG5ldyBQYWdlKCcjc3RlcC1lcnJvci1wYW5uZWwnKVxuLy9zdWNjZXMgcGFubmVsXG5jb25zdCBzdWNjZXNQYW5uZWwgPSBuZXcgUGFnZSgnI3N1Y2NlcycpXG4vL3F1aXogLy9cbmNvbnN0IGF2ZXJhZ2VTY29yZVN1aXRlID0gbmV3IFN3aXRjaCgnI3Njb3JlLXN1aXRlJywgJyNhdmVyYWdlLXNjb3JlJywgJyNxMS1wYW5uZWwnKVxuLy9yZXR1cm4gYnRuXG5jb25zdCBzdGVwQmFjayA9IG5ldyBTd2l0Y2goJyNzdGVwLWJhY2snLCAnI3N0ZXAtcGFubmVsJywgJyNnYW1lLWJvYXJkJywgdHJ1ZSk7XG5cbmNvbnN0IHN0ZXBQYWQgPSBuZXcgTnVtcGFkKCcjbnVtcGFkLXN0ZXAnLCAnI3N0ZXAtY29kZS1vdXRwdXQnKTtcblxuY29uc3QgaGFyZEhpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFyZC1oaW50Jyk7XG5jb25zdCBlYXN5SGludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlYXN5LWhpbnQnKTtcbmNvbnN0IHNvbHV0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvbHV0aW9uJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHJlZnJlc2hTdGVwRGV0YWlsQXNzZXRzKCk7XG4gICAgLy9OdW1wYWQgaXMgcmVhZHkgdG8gd3JpdGVcbiAgICBzdGVwUGFkLnN0YXJ0KCk7XG4gICAgLy9SZXR1cm4gYnRuIGxpc3RlbmVyXG4gICAgc3RlcEJhY2suZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RlcFBhZC5yZXNldCgpO1xuICAgICAgICBzdGVwQmFjay5jaGFuZ2UoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdWNoZS1yZXRvdXItYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaGUtcmV0b3VyLWF1ZGlvJykucGxheSgpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcC1jb2RlLXZhbGlkYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIE1hdGguZmxvb3IoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXBTdGFydFRpbWUnKSkgLyAxMDAwKTtcbiAgICAgICAgYXhpb3MucG9zdCgnL2dhbWUvc3RlcENvZGUnLCB7XG4gICAgICAgICAgICBzdGVwOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSxcbiAgICAgICAgICAgIGNvZGU6IHN0ZXBQYWQub3V0cHV0LmlubmVySFRNTCxcbiAgICAgICAgICAgIHRpbWVTdGFydDogTWF0aC5mbG9vcigobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXBTdGFydFRpbWUnKSAtIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydFRpbWUnKSkgLyAxMDAwKSxcbiAgICAgICAgICAgIHRpbWVFbmQ6IE1hdGguZmxvb3IoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0VGltZScpKSAvIDEwMDApLFxuICAgICAgICAgICAgaGludHM6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpbnRzJykpLFxuICAgICAgICAgICAgc2NvcmU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpLFxuICAgICAgICAgICAgdGVhbU5hbWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZWFtbmFtZScpLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0ZXAgPT09ICd3cm9uZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9zaG93IHRoZSBwYWdlIGZvciBnb29kIGNvZGUgYnV0IHdyb250IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBzdGVwUGFubmVsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RlcEVycm9yLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXAtZXJyb3ItYmFjaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcEVycm9yLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVCb2FyZC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RlcCA9PT0gJ3N0ZXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211c2ljJykpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lU3RhcnQgPSBNYXRoLmZsb29yKChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RlcFN0YXJ0VGltZScpIC0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0VGltZScpKSAvIDEwMDApXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lRW5kID0gTWF0aC5mbG9vcigobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhcnRUaW1lJykpIC8gMTAwMClcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzKHRpbWVFbmQsIHRpbWVTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZS1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXBTdGFydFRpbWUnLCAobmV3IERhdGUoKS5nZXRUaW1lKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09ICcxJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlcGFyYXRvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RTdGVwVGltZXInKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb251c1Njb3JlKDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtYm9udXMtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWJvbnVzLWF1ZGlvJykucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09ICc5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpICsgNTApXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb251c1Njb3JlKDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtYm9udXMtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWJvbnVzLWF1ZGlvJykucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VuZGdhbWUnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcFBhbm5lbC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmluYWxTY29yZScsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlLWRpdicpLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaW5hbFNjb3JlJykgKyAnIHB0cydcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFN0ZXAuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lQm9hcmQuaGlkZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZlcmFnZVNjb3JlLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFN0ZXAnLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXROZXh0U3RlcE11c2ljKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VwYXJhdG9yJykuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpICsgNTApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50U3RlcCcsIHBhcnNlSW50KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09ICcyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGludC5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhci1jaGFyZ2UtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXItY2hhcmdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLXdpbi1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS13aW4tYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVzZXQgdGhlIGhpbnRzIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgZWFzeUhpbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9idWlsZC9jaG9peF9pbmRpY2VzL2luZGljZV9mYWNpbGUucG5nJylcIjtcbiAgICAgICAgICAgICAgICAgICAgaGFyZEhpbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9idWlsZC9jaG9peF9pbmRpY2VzL2luZGljZV9kaWZmaWNpbGUucG5nJylcIjtcbiAgICAgICAgICAgICAgICAgICAgc29sdXRpb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9idWlsZC9jaG9peF9pbmRpY2VzL3NvbHV0aW9uLnBuZycpXCI7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGludENoZWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRW5kU3RlcEFzc2V0cygpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLnN0ZXAgPT09ICdib251cyAxJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3VjY2VzQScpID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N1Y2Nlc0EnLCAndHJ1ZScpXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUJvbnVzU3RlcEFzc2V0cygxKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kU3RlcC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBQYW5uZWwuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb251c1Njb3JlKHJlc3BvbnNlLmRhdGEucG9pbnRzKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5zdGVwID09PSAnYm9udXMgMicgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc0InKSA9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdWNjZXNCJywgJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VCb251c1N0ZXBBc3NldHMoMik7XG4gICAgICAgICAgICAgICAgICAgIGVuZFN0ZXAuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBzdGVwUGFubmVsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9udXNTY29yZShyZXNwb25zZS5kYXRhLnBvaW50cylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29kZS1lcnJldXInKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2RlLWVycmV1cicpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVmcmVzaFN0ZXBEZXRhaWxBc3NldHMoKTtcbiAgICAgICAgICAgICAgICBzdGVwUGFkLnJlc2V0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBjaGFuZ2VFbmRTdGVwQXNzZXRzKCkge1xuICAgIGxldCBjdXJyZW50U3RlcCA9IHBhcnNlSW50KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zdGVwJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnL2J1aWxkL2Zpbl9ldGFwZXMvZXRhcGVfJHtjdXJyZW50U3RlcCAtIDF9LmpwZycpYDtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZGdhbWUnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgZ2V0TmV4dFN0ZXBNdXNpYyhjdXJyZW50U3RlcCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc3RlcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZW5kU3RlcC5oaWRlKCk7XG4gICAgICAgICAgICBhdmVyYWdlU2NvcmUuc2hvdygpO1xuICAgICAgICAgICAgYXZlcmFnZVNjb3JlU3VpdGUuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBhdmVyYWdlU2NvcmVTdWl0ZS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFN0ZXAnLCAxMSlcbiAgICAgICAgICAgICAgICBnZXROZXh0U3RlcE11c2ljKDExKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtcHRzJykuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXN0ZXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGdldE5leHRTdGVwTXVzaWMoY3VycmVudFN0ZXApO1xuICAgICAgICAgICAgZW5kU3RlcC5oaWRlKCk7XG4gICAgICAgICAgICBnYW1lQm9hcmQuc2hvdygpO1xuICAgICAgICAgICAgc3RlcERldGFpbFBhbm5lbC5oaWRlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtcHRzJykuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY2hhbmdlQm9udXNTdGVwQXNzZXRzKGJvbnVzU3RlcCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc3RlcCcpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy9idWlsZC9maW5fZXRhcGVzL2V0YXBlX2JvbnVzXyR7Ym9udXNTdGVwfS5qcGcnKWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zdGVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVuZFN0ZXAuaGlkZSgpO1xuICAgICAgICBnYW1lQm9hcmQuc2hvdygpO1xuICAgICAgICBzdGVwRGV0YWlsUGFubmVsLmhpZGUoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvbnVzLXB0cycpLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9udXNTY29yZShudW1iZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5rLXJldmVhbC1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5rLXJldmVhbC1hdWRpbycpLnBsYXkoKTtcbiAgICBsZXQgYm9udXNQdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtcHRzJykuc3R5bGU7XG4gICAgYm9udXNQdHMuYW5pbWF0aW9uID0gXCJzbW9rZSAycyBsaW5lYXIgZm9yd2FyZHNcIjtcbiAgICBib251c1B0cy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcvYnVpbGQvYm9udXNfc2NvcmUvK18ke251bWJlcn1fcHRzLnBuZycpYDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9udXNTdWNjZXNTY29yZShudW1iZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5rLXJldmVhbC1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5rLXJldmVhbC1hdWRpbycpLnBsYXkoKTtcbiAgICBsZXQgYm9udXNTdWNjZXNQdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtc3VjY2VzLXB0cycpLnN0eWxlO1xuICAgIGJvbnVzU3VjY2VzUHRzLmFuaW1hdGlvbiA9IFwic21va2UgMnMgbGluZWFyIGZvcndhcmRzXCI7XG4gICAgYm9udXNTdWNjZXNQdHMuYmFja2dyb3VuZEltYWdlID0gYHVybCgnL2J1aWxkL2JvbnVzX3Njb3JlLytfJHtudW1iZXJ9X3B0cy5wbmcnKWA7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTdGVwTXVzaWMoc3RlcE51bWJlcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211c2ljJykpLnBhdXNlKCk7XG4gICAgc3dpdGNoIChzdGVwTnVtYmVyKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXNpYycsICcjZGV0ZW50ZS0xLW11c2ljJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2ljJywgJyNkZXRlbnRlLTItbXVzaWMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWMnLCAnI215c3RlcmlldXgtbXVzaWMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWMnLCAnI21pbnVzY3VsZS1tdXNpYycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXNpYycsICcjYW5nb2lzc2UtbXVzaWMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWMnLCAnI25hZ2UtbXVzaWMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWMnLCAnI2ludHJvLW11c2ljJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2ljJywgJyNmaW5hbGUtbXVzaWMnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWMnLCAnI2ludHJvLW11c2ljJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2ljJywgJyNtaW5pLWpldS1tdXNpYycpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09IFwiXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NodXRlLWF1ZGlvJykubG9vcCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2h1dGUtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaHV0ZS1hdWRpbycpLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09IFwiNFwiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXRyZWNpdC1hdWRpbycpLmxvb3AgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JldHJlY2l0LWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV0cmVjaXQtYXVkaW8nKS5wbGF5KCk7XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSA9PSBcIjZcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JhbmRpdC1hdWRpbycpLmxvb3AgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyYW5kaXQtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmFuZGl0LWF1ZGlvJykucGxheSgpO1xuICAgIH1cbiAgICBtdXNpY1BsYXlsaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVN1Y2Nlc0Fzc2V0cyhudW1iZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VjY2VzJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnL2J1aWxkL3N1Y2Nlcy9zdWNjZXNfJHtudW1iZXJ9LmpwZWcnKWA7XG59XG5cbmZ1bmN0aW9uIHN1Y2Nlcyh0aW1lRW5kLCB0aW1lU3RhcnQpIHtcbiAgICBpZiAoKHRpbWVFbmQgLSB0aW1lU3RhcnQpIDw9IDEyMCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSA9PSAnNCcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpICsgMTUwKVxuICAgICAgICBjaGFuZ2VTdWNjZXNBc3NldHMoMik7XG4gICAgICAgIHVwZGF0ZUJvbnVzU3VjY2VzU2NvcmUoMTAwKTtcbiAgICAgICAgc3VjY2VzUGFubmVsLnNob3coKTtcbiAgICAgICAgc3RlcFBhbm5lbC5oaWRlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtYm9udXMtYXVkaW8nKS5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqaW5nbGUtYm9udXMtYXVkaW8nKS5wbGF5KCk7XG4gICAgICAgIGZ1bmN0aW9uIGxpc3Rlbk5vdygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib251cy1wdHMnKS5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvbnVzLXN1Y2Nlcy1wdHMnKS5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgdXBkYXRlQm9udXNTY29yZSg1MCk7XG4gICAgICAgICAgICBlbmRTdGVwLnNob3coKTtcbiAgICAgICAgICAgIHN1Y2Nlc1Bhbm5lbC5oaWRlKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VjY2VzJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Ob3cpXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Y2NlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuTm93KVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LnZhbHVlcyhKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGludHMnKSlbNV0pLmluZGV4T2YodHJ1ZSkgPT09IC0xICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3RlcCcpID09ICc2Jykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgKyAyMDApXG4gICAgICAgIGNoYW5nZVN1Y2Nlc0Fzc2V0cyg1KTtcbiAgICAgICAgdXBkYXRlQm9udXNTdWNjZXNTY29yZSgxNTApO1xuICAgICAgICBzdWNjZXNQYW5uZWwuc2hvdygpO1xuICAgICAgICBzdGVwUGFubmVsLmhpZGUoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ppbmdsZS1ib251cy1hdWRpbycpLnBsYXkoKTtcbiAgICAgICAgZnVuY3Rpb24gbGlzdGVuTm93KCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvbnVzLXB0cycpLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtc3VjY2VzLXB0cycpLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICB1cGRhdGVCb251c1Njb3JlKDUwKTtcbiAgICAgICAgICAgIGVuZFN0ZXAuc2hvdygpO1xuICAgICAgICAgICAgc3VjY2VzUGFubmVsLmhpZGUoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWNjZXMnKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3Rlbk5vdylcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VjY2VzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Ob3cpXG4gICAgfSBlbHNlIGlmIChPYmplY3QudmFsdWVzKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaW50cycpKVs4XSkuaW5kZXhPZih0cnVlKSA9PT0gLTEgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTdGVwJykgPT0gJzknKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKSArIDIwMClcbiAgICAgICAgY2hhbmdlU3VjY2VzQXNzZXRzKDcpO1xuICAgICAgICB1cGRhdGVCb251c1N1Y2Nlc1Njb3JlKDE1MCk7XG4gICAgICAgIHN1Y2Nlc1Bhbm5lbC5zaG93KCk7XG4gICAgICAgIHN0ZXBQYW5uZWwuaGlkZSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWJvbnVzLWF1ZGlvJykuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjamluZ2xlLWJvbnVzLWF1ZGlvJykucGxheSgpO1xuICAgICAgICBmdW5jdGlvbiBsaXN0ZW5Ob3coKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtcHRzJykuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib251cy1zdWNjZXMtcHRzJykuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgICAgICAgIHVwZGF0ZUJvbnVzU2NvcmUoNTApO1xuICAgICAgICAgICAgZW5kU3RlcC5zaG93KCk7XG4gICAgICAgICAgICBzdWNjZXNQYW5uZWwuaGlkZSgpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VjY2VzJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Ob3cpXG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Y2NlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuTm93KVxuICAgICAgICBlbmRTdGVwLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9udXMtcHRzJykuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICAgICAgICAgIGVuZFN0ZXAuaGlkZSgpO1xuICAgICAgICAgICAgYXZlcmFnZVNjb3JlLnNob3coKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaW5hbFNjb3JlJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUtZGl2JykuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbmFsU2NvcmUnKSArICcgcHRzJ1xuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZUJvbnVzU2NvcmUoNTApO1xuICAgICAgICBlbmRTdGVwLnNob3coKTtcbiAgICAgICAgc3RlcFBhbm5lbC5oaWRlKCk7XG4gICAgICAgIGVuZFN0ZXAuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib251cy1wdHMnKS5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgZW5kU3RlcC5oaWRlKCk7XG4gICAgICAgICAgICBnYW1lQm9hcmQuc2hvdygpO1xuICAgICAgICAgICAgc3RlcERldGFpbFBhbm5lbC5oaWRlKCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgeyBnZXROZXh0U3RlcE11c2ljIH07IiwiLy9JbXBvcnQgUmV3cml0ZXIgYW5kIFBhZ2VcbmltcG9ydCB7IFJld3JpdGVyIH0gZnJvbSAnLi4vLi4vY2xhc3MvUmV3cml0ZXIuanMnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2NsYXNzL1BhZ2UuanMnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIi4uLy4uL2NsYXNzL1N3aXRjaFwiO1xuLy9pbXBvcnQgYXhpb3NcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xuLy9HYW1lIGJvYXJkIGl0IHNlbGZcbmNvbnN0IGdhbWVCb2FyZCA9IG5ldyBQYWdlKCcjZ2FtZS1ib2FyZCcpO1xuLy9UaGlzIHZpZXdcbmNvbnN0IHRlYW1uYW1lUGFubmVsID0gbmV3IFBhZ2UoJyN0ZWFtbmFtZS1wYW5uZWwnKTtcbi8vQ29uZmlybSBidXR0b25cbmNvbnN0IGNvbmZpcm1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjZXB0Jyk7XG4vL1RlYW1uYW1lIHJld3JpdGVyXG5jb25zdCB0ZWFtbmFtZSA9IG5ldyBSZXdyaXRlcignLmhpZGRlbi10ZWFtLWlucHV0JywgJyN0ZWFtLW91dHB1dCcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvL1dyaXRlIHRoZSBpbnB1dCB0ZXh0IGFzIHRoZSBjb3JyZWN0IHBsYWNlIGFzIHRoZXkgYXJlIHNlcGFyYXRlZCBkaXZzIGZvciBkaXNwbGF5IHJlYXNvbnNcbiAgICB0ZWFtbmFtZS53YXRjaCgpOyAvL05vdCB0aGUgc2FtZSBhcyBTd2l0Y2gud2F0Y2ggISEhXG5cbiAgICAvL0xpc3RlbiB0byB0aGUgY2xpY2sgb24gVmFsaWRlciB0byBzZW5kIHRoZSBkYXRhXG4gICAgY29uZmlybURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVBvc3QodGVhbW5hbWUuZmluYWxPdXRwdXQoKSk7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIG1ha2VQb3N0KHRlYW0pIHtcbiAgICBheGlvcy5wb3N0KCcvZ2FtZS90ZWFtJywge1xuICAgICAgICB0ZWFtbmFtZTogdGVhbVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICE9IG51bGwgKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZWFtbmFtZScpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigndGVhbW5hbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVhbW5hbWUnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWFtLW5hbWUnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL21lbnVfcHJpbmNpcGFsL25vbV9lcXVpcGVfdmlkZS5wbmcnKVwiXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVhbS1uYW1lJykuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjEwMCUgNjAlXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVhbS1uYW1lJykuc3R5bGUubWFyZ2luQm90dG9tID0gXCItM3JlbVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtc3RhcnQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2J1aWxkL21lbnVfcHJpbmNpcGFsL2xhbmNlcnBhcnRpZV9lbmFibGUucG5nJylcIlxuICAgICAgICAgICAgZ2FtZUJvYXJkLnNob3coKTtcbiAgICAgICAgICAgIHRlYW1uYW1lUGFubmVsLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0ZWFtbmFtZS5yZXNldCgpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxufTsiXSwic291cmNlUm9vdCI6IiJ9