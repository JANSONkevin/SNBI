(self["webpackChunk"] = self["webpackChunk"] || []).push([["leave"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/leave.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbGVhdmUuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxlYXZlIiwibG9jYXRpb24iLCJocmVmIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQzlDLE1BQUlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFKLEVBQTRDO0FBQ3hDRCxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNGLGdCQUF2QyxDQUF3RCxPQUF4RCxFQUFpRSxZQUFNO0FBQ25FRyxXQUFLO0FBQ0xKLFlBQU0sQ0FBQ0ssUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsR0FBdkI7QUFDSCxLQUhEO0FBSUg7O0FBQ0QsTUFBSUosUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQUosRUFBNEM7QUFDeENELFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q0YsZ0JBQXZDLENBQXdELE9BQXhELEVBQWlFLFlBQU07QUFDbkVHLFdBQUs7QUFDTEosWUFBTSxDQUFDSyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUNILEtBSEQ7QUFJSDtBQUNKLENBYkQ7O0FBZUEsU0FBU0YsS0FBVCxHQUFpQjtBQUNiLE1BQUlHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsTUFBMkMsSUFBL0MsRUFBcURELFlBQVksQ0FBQ0UsS0FBYixDQUFtQixnQkFBbkI7QUFDckQsTUFBSUYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLE1BQXdDLElBQTVDLEVBQWtERCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsYUFBbkI7QUFDbEQsTUFBSUYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXRDLEVBQTRDRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsT0FBbkI7QUFDNUMsTUFBSUYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLE1BQXFDLElBQXpDLEVBQStDRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsVUFBbkI7QUFDL0MsTUFBSUYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLE1BQXdDLElBQTVDLEVBQWtERCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsYUFBbkI7QUFDbEQsTUFBSUYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXRDLEVBQTRDRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsT0FBbkI7QUFDNUMsTUFBSUYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixNQUEyQyxJQUEvQyxFQUFxREQsWUFBWSxDQUFDRSxLQUFiLENBQW1CLGdCQUFuQjtBQUNyRCxNQUFJRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsTUFBc0MsSUFBMUMsRUFBZ0RELFlBQVksQ0FBQ0UsS0FBYixDQUFtQixXQUFuQjtBQUNoRCxNQUFJRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsTUFBa0MsSUFBdEMsRUFBNENELFlBQVksQ0FBQ0UsS0FBYixDQUFtQixPQUFuQjtBQUM1Q1QsUUFBTSxDQUFDVSxhQUFQLENBQXFCSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBckI7QUFDQTs7QUFDQUQsY0FBWSxDQUFDRSxLQUFiLENBQW1CLEdBQW5CO0FBQ0g7O0FBRUQsaUVBQWVMLEtBQWYsRSIsImZpbGUiOiJsZWF2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVhdmUtc3VpdGUnKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVhdmUtc3VpdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxlYXZlKCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmFsLWxlYXZlJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmFsLWxlYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZWF2ZSgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBsZWF2ZSgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXBTdGFydFRpbWVyJykgIT09IG51bGwpIGxvY2FsU3RvcmFnZS5jbGVhcignc3RlcFN0YXJ0VGltZXInKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFRpbWUnKSAhPT0gbnVsbCkgbG9jYWxTdG9yYWdlLmNsZWFyKCdjdXJyZW50VGltZScpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpICE9PSBudWxsKSBsb2NhbFN0b3JhZ2UuY2xlYXIoJ3Njb3JlJylcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlYW1uYW1lJykgIT09IG51bGwpIGxvY2FsU3RvcmFnZS5jbGVhcigndGVhbW5hbWUnKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFN0ZXAnKSAhPT0gbnVsbCkgbG9jYWxTdG9yYWdlLmNsZWFyKCdjdXJyZW50U3RlcCcpXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aW1lcicpICE9PSBudWxsKSBsb2NhbFN0b3JhZ2UuY2xlYXIoJ3RpbWVyJylcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0U3RlcFRpbWVyJykgIT09IG51bGwpIGxvY2FsU3RvcmFnZS5jbGVhcignZmlyc3RTdGVwVGltZXInKVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhcnRUaW1lJykgIT09IG51bGwpIGxvY2FsU3RvcmFnZS5jbGVhcignc3RhcnRUaW1lJylcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpbnRzJykgIT09IG51bGwpIGxvY2FsU3RvcmFnZS5jbGVhcignaGludHMnKVxuICAgIHdpbmRvdy5jbGVhckludGVydmFsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnRlcnZhbCcpKVxuICAgIC8qIHN3aXRjaFZpZXcoJyMnKTsgKi9cbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoJ2knKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsZWF2ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=