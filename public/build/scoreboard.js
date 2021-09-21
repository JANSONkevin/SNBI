(self["webpackChunk"] = self["webpackChunk"] || []).push([["scoreboard"],{

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

/***/ "./assets/scripts/scoreboard/scoreboard.js":
/*!*************************************************!*\
  !*** ./assets/scripts/scoreboard/scoreboard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/Page.js */ "./assets/class/Page.js");

var scoreboard = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#final-score');
var statistiques = new _class_Page_js__WEBPACK_IMPORTED_MODULE_0__.Page('#statistiques');
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#intro-music').loop = true;
  document.querySelector('#intro-music').volume = .3;
  document.querySelector('#intro-music').currentTime = 0;
  document.querySelector('#intro-music').play();
  changeSuccesDetailAssets();
  document.querySelector('#statistiques-show').addEventListener('click', function () {
    scoreboard.hide();
    statistiques.show();
  });
  document.querySelector('#statistiques-leave').addEventListener('click', function () {
    scoreboard.show();
    statistiques.hide();
  });
});

function changeSuccesDetailAssets() {
  var _loop = function _loop(i) {
    document.querySelector('#succes-' + i).addEventListener('click', function () {
      document.querySelector('#succes-description').style.backgroundImage = "url('/build/questionnaire_fin/statistiques/description_succes_".concat(i, ".png')");
    });
  };

  for (var i = 1; i <= 10; i++) {
    _loop(i);
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_object_define-property_js"], () => (__webpack_exec__("./assets/scripts/scoreboard/scoreboard.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2xhc3MvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zY29yZWJvYXJkL3Njb3JlYm9hcmQuanMiXSwibmFtZXMiOlsiUGFnZSIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjb3JlYm9hcmQiLCJzdGF0aXN0aXF1ZXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9vcCIsInZvbHVtZSIsImN1cnJlbnRUaW1lIiwicGxheSIsImNoYW5nZVN1Y2Nlc0RldGFpbEFzc2V0cyIsImhpZGUiLCJzaG93IiwiaSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLElBQWI7QUFDSSxnQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNsQixTQUFLQyxPQUFMLEdBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsUUFBdkIsQ0FBZjtBQUNIOztBQUhMO0FBQUE7QUFBQSxXQUtJLGdCQUFPO0FBQ0gsV0FBS0MsT0FBTCxDQUFhRyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixpQkFBM0I7QUFDSDtBQVBMO0FBQUE7QUFBQSxXQVNJLGdCQUFPO0FBQ0gsV0FBS0osT0FBTCxDQUFhRyxTQUFiLENBQXVCRSxNQUF2QixDQUE4QixpQkFBOUI7QUFDSDtBQVhMOztBQUFBO0FBQUE7QUFZQyxDOzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFFQSxJQUFNQyxVQUFVLEdBQUcsSUFBSVIsZ0RBQUosQ0FBUyxjQUFULENBQW5CO0FBQ0EsSUFBTVMsWUFBWSxHQUFHLElBQUlULGdEQUFKLENBQVMsZUFBVCxDQUFyQjtBQUVBVSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQzlDUixVQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNRLElBQXZDLEdBQThDLElBQTlDO0FBQ0FULFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q1MsTUFBdkMsR0FBZ0QsRUFBaEQ7QUFDQVYsVUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDVSxXQUF2QyxHQUFxRCxDQUFyRDtBQUNBWCxVQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNXLElBQXZDO0FBQ0FDLDBCQUF3QjtBQUN4QmIsVUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixFQUE2Q08sZ0JBQTdDLENBQThELE9BQTlELEVBQXVFLFlBQU07QUFDekVILGNBQVUsQ0FBQ1MsSUFBWDtBQUNBUixnQkFBWSxDQUFDUyxJQUFiO0FBQ0gsR0FIRDtBQUlBZixVQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDTyxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0UsWUFBTTtBQUMxRUgsY0FBVSxDQUFDVSxJQUFYO0FBQ0FULGdCQUFZLENBQUNRLElBQWI7QUFDSCxHQUhEO0FBSUgsQ0FkRDs7QUFpQkEsU0FBU0Qsd0JBQVQsR0FBb0M7QUFBQSw2QkFDdkJHLENBRHVCO0FBRTVCaEIsWUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQWFlLENBQXBDLEVBQXVDUixnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNuRVIsY0FBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q2dCLEtBQTlDLENBQW9EQyxlQUFwRCwyRUFBdUlGLENBQXZJO0FBQ0gsS0FGRDtBQUY0Qjs7QUFDaEMsT0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEVBQXJCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQUEsVUFBckJBLENBQXFCO0FBSTdCO0FBQ0osQyIsImZpbGUiOiJzY29yZWJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vY2xhc3MvUGFnZS5qcyc7XG5cbmNvbnN0IHNjb3JlYm9hcmQgPSBuZXcgUGFnZSgnI2ZpbmFsLXNjb3JlJylcbmNvbnN0IHN0YXRpc3RpcXVlcyA9IG5ldyBQYWdlKCcjc3RhdGlzdGlxdWVzJylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvLW11c2ljJykubG9vcCA9IHRydWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvLW11c2ljJykudm9sdW1lID0gLjM7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvLW11c2ljJykuY3VycmVudFRpbWUgPSAwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRyby1tdXNpYycpLnBsYXkoKTtcbiAgICBjaGFuZ2VTdWNjZXNEZXRhaWxBc3NldHMoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0aXN0aXF1ZXMtc2hvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY29yZWJvYXJkLmhpZGUoKTtcbiAgICAgICAgc3RhdGlzdGlxdWVzLnNob3coKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0aXN0aXF1ZXMtbGVhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2NvcmVib2FyZC5zaG93KCk7XG4gICAgICAgIHN0YXRpc3RpcXVlcy5oaWRlKCk7XG4gICAgfSlcbn0pXG5cblxuZnVuY3Rpb24gY2hhbmdlU3VjY2VzRGV0YWlsQXNzZXRzKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Y2Nlcy0nICsgaSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VjY2VzLWRlc2NyaXB0aW9uJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnL2J1aWxkL3F1ZXN0aW9ubmFpcmVfZmluL3N0YXRpc3RpcXVlcy9kZXNjcmlwdGlvbl9zdWNjZXNfJHtpfS5wbmcnKWA7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==