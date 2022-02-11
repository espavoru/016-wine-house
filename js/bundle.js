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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/burger/burger.js":
/*!*************************************!*\
  !*** ./src/blocks/burger/burger.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ready = __webpack_require__(/*! ../../js/utils/documentReady.js */ \"./src/js/utils/documentReady.js\");\n\nready(function () {\n  var burgers = document.querySelectorAll('.burger');\n\n  for (var i = 0; i < burgers.length; i++) {\n    var burger = burgers[i];\n    burger.addEventListener('click', showBurgerTarget);\n  }\n\n  function showBurgerTarget() {\n    var targetId = this.getAttribute('data-target-id');\n    var targetClassToggle = this.getAttribute('data-target-class-toggle');\n\n    if (targetId && targetClassToggle) {\n      this.classList.toggle('burger--close');\n      document.getElementById(targetId).classList.toggle(targetClassToggle);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/blocks/burger/burger.js?");

/***/ }),

/***/ "./src/blocks/main-nav/main-nav.js":
/*!*****************************************!*\
  !*** ./src/blocks/main-nav/main-nav.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ready = __webpack_require__(/*! ../../js/utils/documentReady.js */ \"./src/js/utils/documentReady.js\");\n\nready(function () {\n  // Добавление/удаление модификаторов при фокусировке на ссылочном элементе\n  var linkClassName = 'main-nav__link';\n  var linkClassNameShowChild = 'main-nav__item--show-child';\n  var findLinkClassName = new RegExp(linkClassName); // Слежение за всплывшим событием focus (нужно добавить класс, показывающий потомков)\n\n  document.addEventListener('focus', function (event) {\n    // Если событие всплыло от одной из ссылок гл. меню\n    if (findLinkClassName.test(event.target.className)) {\n      // Добавим классы, показывающие списки вложенных уровней, на всех родителей\n      var parents = getParents(event.target, '.main-nav__item');\n\n      for (var i = 0; i < parents.length; i++) {\n        parents[i].classList.add(linkClassNameShowChild);\n      }\n    }\n  }, true); // Слежение за всплывшим событием blur (нужно убрать класс, показывающий потомков)\n\n  document.addEventListener('blur', function (event) {\n    // Если событие всплыло от одной из ссылок гл. меню\n    if (findLinkClassName.test(event.target.className)) {\n      // Уберем все классы, показывающие списки 2+ уровней\n      var parents = document.querySelectorAll('.' + linkClassNameShowChild);\n\n      for (var i = 0; i < parents.length; i++) {\n        parents[i].classList.remove(linkClassNameShowChild);\n      }\n    }\n  }, true); // eslint-disable\n\n  /*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */\n\n  /**\n   * Get all of an element's parent elements up the DOM tree\n   * @param  {Node}   elem     The element\n   * @param  {String} selector Selector to match against [optional]\n   * @return {Array}           The parent elements\n   */\n\n  var getParents = function getParents(elem, selector) {\n    // Element.matches() polyfill\n    if (!Element.prototype.matches) {\n      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {\n        var matches = (this.document || this.ownerDocument).querySelectorAll(s),\n            i = matches.length;\n\n        while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line\n\n\n        return i > -1;\n      };\n    } // Setup parents array\n\n\n    var parents = []; // Get matching parent elements\n\n    for (; elem && elem !== document; elem = elem.parentNode) {\n      // Add matching parents to array\n      if (selector) {\n        if (elem.matches(selector)) {\n          parents.push(elem);\n        }\n      } else {\n        parents.push(elem);\n      }\n    }\n\n    return parents;\n  };\n});\n\n//# sourceURL=webpack:///./src/blocks/main-nav/main-nav.js?");

/***/ }),

/***/ "./src/blocks/modernizr/modernizr.js":
/*!*******************************************!*\
  !*** ./src/blocks/modernizr/modernizr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*! modernizr 3.6.0 (Custom Build) | MIT *\n * https://modernizr.com/download/?webpalpha&q=webp !*/\n!function (n, e, o) {\n  function t(n, e) {\n    return _typeof(n) === e;\n  }\n\n  function s() {\n    var n, e, o, s, a, i, l;\n\n    for (var f in r) {\n      if (r.hasOwnProperty(f)) {\n        if (n = [], e = r[f], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (o = 0; o < e.options.aliases.length; o++) {\n          n.push(e.options.aliases[o].toLowerCase());\n        }\n\n        for (s = t(e.fn, \"function\") ? e.fn() : e.fn, a = 0; a < n.length; a++) {\n          i = n[a], l = i.split(\".\"), 1 === l.length ? Modernizr[l[0]] = s : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = s), c.push((s ? \"\" : \"no-\") + l.join(\"-\"));\n        }\n      }\n    }\n  }\n\n  function a(n) {\n    var e = u.className,\n        o = Modernizr._config.classPrefix || \"\";\n\n    if (A && (e = e.baseVal), Modernizr._config.enableJSClass) {\n      var t = new RegExp(\"(^|\\\\s)\" + o + \"no-js(\\\\s|$)\");\n      e = e.replace(t, \"$1\" + o + \"js$2\");\n    }\n\n    Modernizr._config.enableClasses && (e += \" \" + o + n.join(\" \" + o), A ? u.className.baseVal = e : u.className = e);\n  }\n\n  function i(n, e) {\n    if (\"object\" == _typeof(n)) for (var o in n) {\n      f(n, o) && i(o, n[o]);\n    } else {\n      n = n.toLowerCase();\n      var t = n.split(\".\"),\n          s = Modernizr[t[0]];\n      if (2 == t.length && (s = s[t[1]]), \"undefined\" != typeof s) return Modernizr;\n      e = \"function\" == typeof e ? e() : e, 1 == t.length ? Modernizr[t[0]] = e : (!Modernizr[t[0]] || Modernizr[t[0]] instanceof Boolean || (Modernizr[t[0]] = new Boolean(Modernizr[t[0]])), Modernizr[t[0]][t[1]] = e), a([(e && 0 != e ? \"\" : \"no-\") + t.join(\"-\")]), Modernizr._trigger(n, e);\n    }\n    return Modernizr;\n  }\n\n  var r = [],\n      l = {\n    _version: \"3.6.0\",\n    _config: {\n      classPrefix: \"\",\n      enableClasses: !0,\n      enableJSClass: !0,\n      usePrefixes: !0\n    },\n    _q: [],\n    on: function on(n, e) {\n      var o = this;\n      setTimeout(function () {\n        e(o[n]);\n      }, 0);\n    },\n    addTest: function addTest(n, e, o) {\n      r.push({\n        name: n,\n        fn: e,\n        options: o\n      });\n    },\n    addAsyncTest: function addAsyncTest(n) {\n      r.push({\n        name: null,\n        fn: n\n      });\n    }\n  },\n      Modernizr = function Modernizr() {};\n\n  Modernizr.prototype = l, Modernizr = new Modernizr();\n  var f,\n      c = [];\n  !function () {\n    var n = {}.hasOwnProperty;\n    f = t(n, \"undefined\") || t(n.call, \"undefined\") ? function (n, e) {\n      return e in n && t(n.constructor.prototype[e], \"undefined\");\n    } : function (e, o) {\n      return n.call(e, o);\n    };\n  }();\n  var u = e.documentElement,\n      A = \"svg\" === u.nodeName.toLowerCase();\n  l._l = {}, l.on = function (n, e) {\n    this._l[n] || (this._l[n] = []), this._l[n].push(e), Modernizr.hasOwnProperty(n) && setTimeout(function () {\n      Modernizr._trigger(n, Modernizr[n]);\n    }, 0);\n  }, l._trigger = function (n, e) {\n    if (this._l[n]) {\n      var o = this._l[n];\n      setTimeout(function () {\n        var n, t;\n\n        for (n = 0; n < o.length; n++) {\n          (t = o[n])(e);\n        }\n      }, 0), delete this._l[n];\n    }\n  }, Modernizr._q.push(function () {\n    l.addTest = i;\n  }), Modernizr.addAsyncTest(function () {\n    var n = new Image();\n    n.onerror = function () {\n      i(\"webpalpha\", !1, {\n        aliases: [\"webp-alpha\"]\n      });\n    }, n.onload = function () {\n      i(\"webpalpha\", 1 == n.width, {\n        aliases: [\"webp-alpha\"]\n      });\n    }, n.src = \"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\";\n  }), s(), delete l.addTest, delete l.addAsyncTest;\n\n  for (var p = 0; p < Modernizr._q.length; p++) {\n    Modernizr._q[p]();\n  }\n\n  n.Modernizr = Modernizr;\n}(window, document);\n\n//# sourceURL=webpack:///./src/blocks/modernizr/modernizr.js?");

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Любые изменения этого файла будут потеряны при следующей компиляции.\n * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n */\n__webpack_require__(/*! ../blocks/modernizr/modernizr.js */ \"./src/blocks/modernizr/modernizr.js\");\n\n__webpack_require__(/*! ../blocks/burger/burger.js */ \"./src/blocks/burger/burger.js\");\n\n__webpack_require__(/*! ../blocks/main-nav/main-nav.js */ \"./src/blocks/main-nav/main-nav.js\");\n\n__webpack_require__(/*! ./script.js */ \"./src/js/script.js\");\n/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Любые изменения этого файла будут потеряны при следующей компиляции.\n * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n */\n\n//# sourceURL=webpack:///./src/js/entry.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const ready = require('./utils/documentReady.js');\n// ready(function(){\n//   console.log('DOM героически построен!');\n// });\n// const $ = require('jquery');\n// $( document ).ready(function() {});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/js/utils/documentReady.js":
/*!***************************************!*\
  !*** ./src/js/utils/documentReady.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ready = function ready(fn) {\n  if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\") {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n};\n\nmodule.exports = ready;\n\n//# sourceURL=webpack:///./src/js/utils/documentReady.js?");

/***/ })

/******/ });