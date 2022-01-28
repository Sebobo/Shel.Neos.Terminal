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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/createClass.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/createClass.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/extends.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/extends.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/inherits.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/inherits.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "../../../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "../../../../node_modules/@babel/runtime/helpers/typeof.js")["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "../../../../node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "../../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "../../../../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "../../../../node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../../../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "../../../../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/typeof.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/typeof.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../../../node_modules/@babel/runtime/regenerator/index.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@babel/runtime/regenerator/index.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../../../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
function readFromConsumerApi(key) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, tslib_1.__spread(args));
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "../../../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithErrorHandling = undefined;

var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;
var fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;
exports.fetchWithErrorHandling = fetchWithErrorHandling;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-css-themr/index.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-css-themr/index.js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactCssThemr;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/redux-actions/index.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/redux-actions/index.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reduxActions;

/***/ }),

/***/ "../../../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var weightMatch = position.match(/end\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!endKeys[weight]) {
                endKeys[weight] = [];
            }
            endKeys[weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][weight]) {
                    beforeKeys[reference][weight] = [];
                }
                beforeKeys[reference][weight].push(key);
            }
        } else if (position.startsWith('after')) {
            var match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!afterKeys[reference]) {
                    afterKeys[reference] = {};
                }
                if (!afterKeys[reference][weight]) {
                    afterKeys[reference][weight] = [];
                }
                afterKeys[reference][weight].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            var e_8, _a, e_9, _b;
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                try {
                    for (var beforeWeights_1 = tslib_1.__values(beforeWeights), beforeWeights_1_1 = beforeWeights_1.next(); !beforeWeights_1_1.done; beforeWeights_1_1 = beforeWeights_1.next()) {
                        var i = beforeWeights_1_1.value;
                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                } finally {
                    try {
                        if (beforeWeights_1_1 && !beforeWeights_1_1.done && (_a = beforeWeights_1["return"])) _a.call(beforeWeights_1);
                    } finally {
                        if (e_8) throw e_8.error;
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                try {
                    for (var afterWeights_1 = tslib_1.__values(afterWeights), afterWeights_1_1 = afterWeights_1.next(); !afterWeights_1_1.done; afterWeights_1_1 = afterWeights_1.next()) {
                        var i = afterWeights_1_1.value;
                        addToResults(afterKeys[key][i], result);
                    }
                } catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                } finally {
                    try {
                        if (afterWeights_1_1 && !afterWeights_1_1.done && (_b = afterWeights_1["return"])) _b.call(afterWeights_1);
                    } finally {
                        if (e_9) throw e_9.error;
                    }
                }
            }
        });
    };
    try {
        for (var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            addToResults(startKeys[i], resultStart);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_j && !_j.done && (_a = _h["return"])) _a.call(_h);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    try {
        for (var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var i = _l.value;
            addToResults(middleKeys[i], resultMiddle);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_l && !_l.done && (_b = _k["return"])) _b.call(_k);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    try {
        for (var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            addToResults(endKeys[i], resultEnd);
        }
    } catch (e_3_1) {
        e_3 = { error: e_3_1 };
    } finally {
        try {
            if (_o && !_o.done && (_c = _m["return"])) _c.call(_m);
        } finally {
            if (e_3) throw e_3.error;
        }
    }
    try {
        for (var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _r = (e_5 = void 0, tslib_1.__values(sortedWeights(beforeKeys[key], false))), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var i = _s.value;
                    addToResults(beforeKeys[key][i], resultStart);
                }
            } catch (e_5_1) {
                e_5 = { error: e_5_1 };
            } finally {
                try {
                    if (_s && !_s.done && (_e = _r["return"])) _e.call(_r);
                } finally {
                    if (e_5) throw e_5.error;
                }
            }
        }
    } catch (e_4_1) {
        e_4 = { error: e_4_1 };
    } finally {
        try {
            if (_q && !_q.done && (_d = _p["return"])) _d.call(_p);
        } finally {
            if (e_4) throw e_4.error;
        }
    }
    try {
        for (var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next(); !_u.done; _u = _t.next()) {
            var key = _u.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _v = (e_7 = void 0, tslib_1.__values(sortedWeights(afterKeys[key], false))), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var i = _w.value;
                    addToResults(afterKeys[key][i], resultMiddle);
                }
            } catch (e_7_1) {
                e_7 = { error: e_7_1 };
            } finally {
                try {
                    if (_w && !_w.done && (_g = _v["return"])) _g.call(_v);
                } finally {
                    if (e_7) throw e_7.error;
                }
            }
        }
    } catch (e_6_1) {
        e_6 = { error: e_6_1 };
    } finally {
        try {
            if (_u && !_u.done && (_f = _t["return"])) _f.call(_t);
        } finally {
            if (e_6) throw e_6.error;
        }
    }
    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "../../../../node_modules/base64-js/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/base64-js/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../../../node_modules/buffer/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/buffer/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../../../node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../../../node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../../../node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../node_modules/clone/clone.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/clone/clone.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( true && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "../../../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../node_modules/defaults/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/defaults/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var clone = __webpack_require__(/*! clone */ "../../../../node_modules/clone/clone.js");

module.exports = function(options, defaults) {
  options = options || {};

  Object.keys(defaults).forEach(function(key) {
    if (typeof options[key] === 'undefined') {
      options[key] = clone(defaults[key]);
    }
  });

  return options;
};

/***/ }),

/***/ "../../../../node_modules/ieee754/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/ieee754/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../../../node_modules/isarray/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/isarray/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/Terminal.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/Terminal.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../../../../node_modules/@babel/runtime/regenerator/index.js")),_toConsumableArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../../node_modules/@babel/runtime/helpers/toConsumableArray.js")),_asyncToGenerator2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js")),_classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js")),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../node_modules/@babel/runtime/helpers/defineProperty.js")),_react=_interopRequireWildcard(__webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js")),_defaults=_interopRequireDefault(__webpack_require__(/*! defaults */ "../../../../node_modules/defaults/index.js")),_reactFastCompare=_interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "../../../../node_modules/react-fast-compare/index.js")),_TerminalMessage=_interopRequireDefault(__webpack_require__(/*! ./TerminalMessage */ "../../../../node_modules/react-console-emulator/dist/TerminalMessage.js")),_validateCommands=_interopRequireDefault(__webpack_require__(/*! ./handlers/validateCommands */ "../../../../node_modules/react-console-emulator/dist/handlers/validateCommands.js")),_scrollHistory=_interopRequireDefault(__webpack_require__(/*! ./handlers/scrollHistory */ "../../../../node_modules/react-console-emulator/dist/handlers/scrollHistory.js")),_parseEOL=_interopRequireDefault(__webpack_require__(/*! ./handlers/parseEOL */ "../../../../node_modules/react-console-emulator/dist/handlers/parseEOL.js")),_Terminal=_interopRequireDefault(__webpack_require__(/*! ./defs/styles/Terminal */ "../../../../node_modules/react-console-emulator/dist/defs/styles/Terminal.js")),_Terminal2=_interopRequireDefault(__webpack_require__(/*! ./defs/types/Terminal */ "../../../../node_modules/react-console-emulator/dist/defs/types/Terminal.js")),_commandExists2=_interopRequireDefault(__webpack_require__(/*! ./utils/commandExists */ "../../../../node_modules/react-console-emulator/dist/utils/commandExists.js")),_constructEcho=_interopRequireDefault(__webpack_require__(/*! ./utils/constructEcho */ "../../../../node_modules/react-console-emulator/dist/utils/constructEcho.js")),_shouldPromptBeVisible=_interopRequireDefault(__webpack_require__(/*! ./utils/shouldPromptBeVisible */ "../../../../node_modules/react-console-emulator/dist/utils/shouldPromptBeVisible.js"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var Terminal=function(a){function b(a){var d;return(0,_classCallCheck2["default"])(this,b),d=c.call(this,a),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"focusTerminal",function(){var a="Range"===window.getSelection().type;a||d.terminalInput.current.focus()}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"scrollToBottom",function(){var a=d.terminalRoot.current;setTimeout(function(){a.scrollTop=a.scrollHeight},1)}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"validateCommands",function(){var a=d.props,b=a.commands,c=a.noDefaults,e=a.ignoreCommandCase,f=(0,_validateCommands["default"])(b,d.showHelp,d.clearStdout,{noDefaults:c,ignoreCommandCase:e});d.setState({commands:f})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"showWelcomeMessage",function(){var a=d.props.welcomeMessage;"boolean"==typeof a?d.pushToStdout("Welcome to the React terminal! Type 'help' to get a list of commands."):Array.isArray(a)?a.map(function(a){return d.pushToStdout(a)}):d.pushToStdout(a)}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"showHelp",function(){var a=d.state.commands;for(var f in a){var b=a[f],e=b.usage?" - ".concat(b.usage):"";d.pushToStdout("".concat(f," - ").concat(b.description).concat(e))}}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"pushToStdout",function(a,b){var c=d.state.stdout;d.props.locked&&c.pop(),c.push({message:a,isEcho:(null===b||void 0===b?void 0:b.isEcho)||!1}),null!==b&&void 0!==b&&b.rawInput&&d.pushToHistory(b.rawInput),d.setState({stdout:c})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"pushToHistory",function(a){var b=d.state.history;b.push(a),d.setState({history:b,historyPosition:null})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"getStdout",function(){var a=d.props.noNewlineParsing?d.state.stdout:(0,_parseEOL["default"])(d.state.stdout);return a.map(function(a,b){return _react["default"].createElement(_TerminalMessage["default"],{key:b,content:a.message,dangerMode:d.props.dangerMode,className:a.isEcho?void 0:d.props.messageClassName,style:a.isEcho?void 0:d.props.messageStyle})})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"clearStdout",function(){d.setState({stdout:[]})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"clearInput",function(){d.setState({historyPosition:null}),d.terminalInput.current.value=""}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"processCommand",function(){d.setState({processing:!0},(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function a(){var b,c,e,f,g,h,i,j,k,l;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b={command:null,args:[],rawInput:null,result:null},c=d.terminalInput.current.value,d.props.noHistory||d.pushToHistory(c),d.props.noEchoBack||d.pushToStdout((0,_constructEcho["default"])(d.props.promptLabel||"$",c,d.props),{isEcho:!0}),!c){a.next=25;break}if(e=c.split(" "),f=e.splice(0,1)[0],g=e,b.rawInput=c,b.command=f,b.args=g,h=(0,_commandExists2["default"])(d.state.commands,f,d.props.ignoreCommandCase),i=h.exists,j=h.command,i){a.next=16;break}d.pushToStdout(d.props.errorText?d.props.errorText.replace(/\[command\]/gi,j):"Command '".concat(f,"' not found!")),a.next=25;break;case 16:return k=d.state.commands[j],a.next=19,k.fn.apply(k,(0,_toConsumableArray2["default"])(g));case 19:if(l=a.sent,d.pushToStdout(l),b.result=l,!k.explicitExec){a.next=25;break}return a.next=25,k.fn.apply(k,(0,_toConsumableArray2["default"])(g));case 25:d.setState({processing:!1},function(){d.clearInput(),d.props.noAutoScroll||d.scrollToBottom(),d.props.commandCallback&&d.props.commandCallback(b)});case 26:case"end":return a.stop();}},a)})))}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"scrollHistory",function(a){var b=d.state,c=b.history,e=b.historyPosition,f=b.previousHistoryPosition,g=(0,_scrollHistory["default"])(a,{history:c,historyPosition:e,previousHistoryPosition:f,terminalInput:d.terminalInput});g&&d.setState(g)}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(d),"handleInput",function(a){switch(a.key){case"Enter":d.processCommand();break;case"ArrowUp":d.scrollHistory("up");break;case"ArrowDown":d.scrollHistory("down");}}),d.state={commands:{},stdout:[],history:[],historyPosition:null,previousHistoryPosition:null,processing:!1},d.terminalRoot=_react["default"].createRef(),d.terminalInput=_react["default"].createRef(),d}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"componentDidUpdate",value:function componentDidUpdate(a){(0,_reactFastCompare["default"])(a.commands,this.props.commands)||this.validateCommands()}},{key:"componentDidMount",value:function componentDidMount(){this.validateCommands(),this.props.welcomeMessage&&this.showWelcomeMessage(),this.props.autoFocus&&this.focusTerminal()}},{key:"render",value:function render(){var a={container:(0,_defaults["default"])(this.props.style,_Terminal["default"].container),content:(0,_defaults["default"])(this.props.contentStyle,_Terminal["default"].content),inputArea:(0,_defaults["default"])(this.props.inputAreaStyle,_Terminal["default"].inputArea),promptLabel:(0,_defaults["default"])(this.props.promptLabelStyle,_Terminal["default"].promptLabel),input:(0,_defaults["default"])(_objectSpread(_objectSpread({},this.props.inputStyle),this.props.inputTextStyle),_objectSpread(_objectSpread({},_Terminal["default"].input),_Terminal["default"].inputText))};return _react["default"].createElement("div",{ref:this.terminalRoot,name:"react-console-emulator",className:this.props.className,style:a.container,onClick:this.focusTerminal},_react["default"].createElement("div",{name:"react-console-emulator__content",className:this.props.contentClassName,style:a.content},this.getStdout(),_react["default"].createElement("div",{name:"react-console-emulator__inputArea",className:this.props.inputAreaClassName,style:(0,_shouldPromptBeVisible["default"])(this.state,this.props)?a.inputArea:{display:"none"}},_react["default"].createElement("span",{name:"react-console-emulator__promptLabel",className:this.props.promptLabelClassName,style:a.promptLabel},this.props.promptLabel||"$"),_react["default"].createElement("input",{ref:this.terminalInput,name:"react-console-emulator__input",className:this.props.inputClassName,style:a.input,onKeyDown:this.handleInput,type:"text",autoComplete:"off",disabled:this.props.disabled||this.props.disableOnProcess&&this.state.processing}))))}}]),b}(_react.Component);exports["default"]=Terminal,(0,_defineProperty2["default"])(Terminal,"propTypes",_Terminal2["default"]);

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/TerminalMessage.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/TerminalMessage.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),_interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../../../../node_modules/@babel/runtime/helpers/extends.js")),_classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../../node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../../node_modules/@babel/runtime/helpers/createClass.js")),_inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../../node_modules/@babel/runtime/helpers/inherits.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../node_modules/@babel/runtime/helpers/defineProperty.js")),_react=_interopRequireWildcard(__webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js")),_reactInnerHtml=_interopRequireDefault(__webpack_require__(/*! react-inner-html */ "../../../../node_modules/react-inner-html/react-inner-html.es.js")),_defaults=_interopRequireDefault(__webpack_require__(/*! defaults */ "../../../../node_modules/defaults/index.js")),_TerminalMessage=_interopRequireDefault(__webpack_require__(/*! ./defs/types/TerminalMessage */ "../../../../node_modules/react-console-emulator/dist/defs/types/TerminalMessage.js")),_TerminalMessage2=_interopRequireDefault(__webpack_require__(/*! ./defs/styles/TerminalMessage */ "../../../../node_modules/react-console-emulator/dist/defs/styles/TerminalMessage.js"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var TerminalMessage=function(a){function b(){return(0,_classCallCheck2["default"])(this,b),c.apply(this,arguments)}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this.props,b=a.content,c=a.style,d=a.className,e={message:(0,_defaults["default"])(c,_TerminalMessage2["default"])};return this.props.dangerMode?_react["default"].createElement("div",(0,_extends2["default"])({className:d,style:e.message},(0,_reactInnerHtml["default"])(b))):_react["default"].createElement("div",{className:d,style:e.message},b)}}]),b}(_react.Component);exports["default"]=TerminalMessage,(0,_defineProperty2["default"])(TerminalMessage,"propTypes",_TerminalMessage["default"]);

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/defs/styles/Terminal.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/defs/styles/Terminal.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default={container:{minHeight:"300px",maxWidth:"100%",maxHeight:"100%",borderRadius:"5px",overflow:"auto",cursor:"text",backgroundColor:"#212121",backgroundSize:"cover"},content:{padding:"20px",height:"100%",fontSize:"15px",color:"#FFFFFF",fontFamily:"monospace"},inputArea:{display:"inline-flex",width:"100%"},promptLabel:{paddingTop:"3px",color:"#EE9C34"},inputText:{fontSize:"15px",color:"#F0BF81",fontFamily:"monospace"},input:{border:"0",padding:"0 0 0 7px",margin:"0",flexGrow:"100",width:"100%",height:"22px",background:"transparent",outline:"none"}};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/defs/styles/TerminalMessage.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/defs/styles/TerminalMessage.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default={lineHeight:"21px"};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/defs/types/Terminal.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/defs/types/Terminal.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../node_modules/@babel/runtime/helpers/defineProperty.js")),_propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var styleTypes={style:_propTypes["default"].object,contentStyle:_propTypes["default"].object,inputAreaStyle:_propTypes["default"].object,promptLabelStyle:_propTypes["default"].object,inputStyle:_propTypes["default"].object,inputTextStyle:_propTypes["default"].object},classNameTypes={className:_propTypes["default"].string,contentClassName:_propTypes["default"].string,inputAreaClassName:_propTypes["default"].string,promptLabelClassName:_propTypes["default"].string,inputClassName:_propTypes["default"].string,inputTextClassName:_propTypes["default"].string},optionTypes={autoFocus:_propTypes["default"].bool,dangerMode:_propTypes["default"].bool,styleEchoBack:_propTypes["default"].oneOf(["labelOnly","textOnly","fullInherit","messageInherit"]),locked:_propTypes["default"].bool,readOnly:_propTypes["default"].bool,disabled:_propTypes["default"].bool,disableOnProcess:_propTypes["default"].bool,hidePromptWhenDisabled:_propTypes["default"].bool,ignoreCommandCase:_propTypes["default"].bool,noDefaults:_propTypes["default"].bool,noEchoBack:_propTypes["default"].bool,noHistory:_propTypes["default"].bool,noAutoScroll:_propTypes["default"].bool,noNewlineParsing:_propTypes["default"].bool},labelTypes={welcomeMessage:_propTypes["default"].oneOfType([_propTypes["default"].bool,_propTypes["default"].arrayOf(_propTypes["default"].string),_propTypes["default"].string]),promptLabel:_propTypes["default"].node,errorText:_propTypes["default"].string},commandTypes={commands:_propTypes["default"].object.isRequired,commandCallback:_propTypes["default"].func},messageTypes={messageStyle:_propTypes["default"].object,messageClassName:_propTypes["default"].string},_default=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},styleTypes),classNameTypes),optionTypes),labelTypes),commandTypes),messageTypes);exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/defs/types/TerminalMessage.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/defs/types/TerminalMessage.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js")),_default={content:_propTypes["default"].node,style:_propTypes["default"].object,className:_propTypes["default"].string,dangerMode:_propTypes["default"].bool};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/handlers/parseEOL.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/handlers/parseEOL.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _reactInnertext=_interopRequireDefault(__webpack_require__(/*! react-innertext */ "../../../../node_modules/react-innertext/index.js"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var _default=function(a){for(var b=[],c=0;c<a.length;c++){var d,e=a[c],f=e.message,g=e.isEcho,h=(0,_reactInnertext["default"])(f),j=!g&&/\n|\\n/g.test(h)?h.split(/\n|\\n/g):[f],k=_createForOfIteratorHelper(j);try{for(k.s();!(d=k.n()).done;){var l=d.value;b.push({message:l,isEcho:e.isEcho})}}catch(a){k.e(a)}finally{k.f()}}return b};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/handlers/scrollHistory.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/handlers/scrollHistory.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _cleanArray=_interopRequireDefault(__webpack_require__(/*! ../utils/cleanArray */ "../../../../node_modules/react-console-emulator/dist/utils/cleanArray.js")),_sendCursorToEnd=_interopRequireDefault(__webpack_require__(/*! ../utils/sendCursorToEnd */ "../../../../node_modules/react-console-emulator/dist/utils/sendCursorToEnd.js")),_default=function(a,b){var c=b.history,d=b.historyPosition,e=b.previousHistoryPosition,f=b.terminalInput,g=(0,_cleanArray["default"])(c).reverse(),h=d,i=e,j=f.current;if(0<g.length)switch(a){case"up":{var k=g[0],l=g[g.length-1],m=g[h+1];return null===h?(j.value=k,(0,_sendCursorToEnd["default"])(j),{historyPosition:0,previousHistoryPosition:null}):h+1===g.length?(j.value=l,(0,_sendCursorToEnd["default"])(j),{historyPosition:g.length-1,previousHistoryPosition:1===g.length?null:g.length-2}):(j.value=m,(0,_sendCursorToEnd["default"])(j),{historyPosition:h+1,previousHistoryPosition:h})}case"down":{var n=g[0],o=g[h-1];return null!==h&&g[h]?-1==h-1?(j.value=null===i||0===h&&1===i?"":n,(0,_sendCursorToEnd["default"])(j),{historyPosition:null,previousHistoryPosition:null}):(j.value=o,(0,_sendCursorToEnd["default"])(j),{historyPosition:h-1,previousHistoryPosition:h}):(j.value="",(0,_sendCursorToEnd["default"])(j),{historyPosition:null,previousHistoryPosition:null})}}};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/handlers/validateCommands.js":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/handlers/validateCommands.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _typeof2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../node_modules/@babel/runtime/helpers/typeof.js")),_defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../node_modules/@babel/runtime/helpers/defineProperty.js")),_commandExists2=_interopRequireDefault(__webpack_require__(/*! ../utils/commandExists */ "../../../../node_modules/react-console-emulator/dist/utils/commandExists.js"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default=function(a,b,d,e){var f,g={help:{description:"Show a list of available commands.",fn:b},clear:{description:"Empty the terminal window.",explicitExec:!0,fn:d}};for(var j in f=e.noDefaults?{}:_objectSpread({},g),a){if(e.ignoreCommandCase&&/[^a-zA-Z0-9-_]/gi.test(j))throw new Error("Command name '".concat(j,"' is invalid; command names can only contain latin characters (A-Z), numbers (0-9) and dashes/underscores (- or _)"));var h=(0,_commandExists2["default"])(f,j,e.ignoreCommandCase),i=h.exists;if(i)throw new Error("Attempting to override existing command '".concat(j,"'; please only supply one definition of a certain command, or set the noDefaults property to enable overriding of existing commands"));if("function"!=typeof a[j].fn)throw new Error("'fn' property of command '".concat(j,"' is invalid; expected 'function', got '").concat((0,_typeof2["default"])(a[j].fn),"'"));a[j].description||(a[j].description="None"),f[j]=a[j]}return f};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/utils/cleanArray.js":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/utils/cleanArray.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=cleanArray;function cleanArray(a){var b=Array.from(a);return b.filter(function(a){return a!==void 0})}

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/utils/commandExists.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/utils/commandExists.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default=function(a,b,c){if(c){for(var d,e=0,f=Object.keys(a);e<f.length;e++)if(d=f[e],new RegExp("^".concat(b,"$"),"gi").test(d))return{exists:!0,command:d};return{exists:!1,command:null}}return{exists:b in a,command:b}};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/utils/constructEcho.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/utils/constructEcho.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js")),_defaults=_interopRequireDefault(__webpack_require__(/*! defaults */ "../../../../node_modules/defaults/index.js")),_Terminal=_interopRequireDefault(__webpack_require__(/*! ../defs/styles/Terminal */ "../../../../node_modules/react-console-emulator/dist/defs/styles/Terminal.js")),_TerminalMessage=_interopRequireDefault(__webpack_require__(/*! ../defs/styles/TerminalMessage */ "../../../../node_modules/react-console-emulator/dist/defs/styles/TerminalMessage.js")),_default=function(a,b,c){var d={echo:{label:{className:c.promptLabelClassName,style:(0,_defaults["default"])(c.promptLabelStyle,_Terminal["default"].promptLabel)},text:{className:c.inputTextClassName,style:(0,_defaults["default"])(c.inputTextStyle,_Terminal["default"].inputText)}},message:{label:{className:c.messageClassName,style:(0,_defaults["default"])(c.messageStyle,_TerminalMessage["default"])},text:{className:c.messageClassName,style:(0,_defaults["default"])(c.messageStyle,_TerminalMessage["default"])}}},e=function(){switch(c.styleEchoBack){case"fullInherit":return d.echo;case"messageInherit":return d.message;case"labelOnly":return{label:d.echo.label,text:{}};case"textOnly":return{label:{},text:d.echo.text};default:return{label:{},text:{}};}}();return _react["default"].createElement("div",null,_react["default"].createElement("span",e.label,a," "),_react["default"].createElement("span",e.text,b))};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/utils/sendCursorToEnd.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/utils/sendCursorToEnd.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default=function(a){if(a){var b=a.selectionStart,c=a.selectionEnd;setTimeout(function(){return a.setSelectionRange(b,c)},10)}};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-console-emulator/dist/utils/shouldPromptBeVisible.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-console-emulator/dist/utils/shouldPromptBeVisible.js ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default=function(a,b){var c=!b.readOnly,d=b.hidePromptWhenDisabled,e=b.disableOnProcess,f=b.disabled,g=a.processing;if(d){if(f)return!1;if(e&&g)return!1}return c};exports["default"]=_default;

/***/ }),

/***/ "../../../../node_modules/react-fast-compare/index.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-fast-compare/index.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "../../../../node_modules/react-inner-html/react-inner-html.es.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-inner-html/react-inner-html.es.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reactInnerHTML; });
function reactInnerHTML(html) {
  return {
    dangerouslySetInnerHTML: { __html: html },
  };
}


/***/ }),

/***/ "../../../../node_modules/react-innertext/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/react-innertext/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasProps = function (jsx) {
    return Object.prototype.hasOwnProperty.call(jsx, 'props');
};
var reduceJsxToString = function (previous, current) {
    return previous + innerText(current);
};
var innerText = function (jsx) {
    if (jsx === null ||
        typeof jsx === 'boolean' ||
        typeof jsx === 'undefined') {
        return '';
    }
    if (typeof jsx === 'number') {
        return jsx.toString();
    }
    if (typeof jsx === 'string') {
        return jsx;
    }
    if (Array.isArray(jsx)) {
        return jsx.reduce(reduceJsxToString, '');
    }
    if (hasProps(jsx) &&
        Object.prototype.hasOwnProperty.call(jsx.props, 'children')) {
        return innerText(jsx.props.children);
    }
    return '';
};
innerText.default = innerText;
module.exports = innerText;


/***/ }),

/***/ "../../../../node_modules/regenerator-runtime/runtime.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "../../../../node_modules/tslib/tslib.es6.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Packages/Plugins/Shel.Neos.Terminal/node_modules/tslib/tslib.es6.js ***!
  \**********************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/FallbackPlugin.tsx":
/*!********************************!*\
  !*** ./src/FallbackPlugin.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plow-js */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js");
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plow_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neos-project/neos-ui-decorators */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js");
/* harmony import */ var _neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js");
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_fetchCommands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/fetchCommands */ "./src/helpers/fetchCommands.ts");
/* harmony import */ var _helpers_doInvokeCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/doInvokeCommand */ "./src/helpers/doInvokeCommand.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Neos dependencies are provided by the UI
// @ts-ignore

// @ts-ignore



// @ts-ignore
let FallbackPlugin = 
/**
 * The fallback plugin provides the command functionality in Neos 4.3 via the browser console.
 * Full UI integration is not supported due to the old React version in Neos 4.3.
 */
class FallbackPlugin extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    componentDidMount() {
        const { getCommandsEndPoint, invokeCommandEndPoint } = this.props.config;
        // Fetch and register all available commands
        Object(_helpers_fetchCommands__WEBPACK_IMPORTED_MODULE_6__["default"])(getCommandsEndPoint).then(({ success, result }) => {
            if (!success)
                return;
            const invokeCommand = (commandName, ...args) => {
                const { siteNode, documentNode, focusedNodes } = this.props;
                const focusedNode = (focusedNodes === null || focusedNodes === void 0 ? void 0 : focusedNodes.length) > 0 ? focusedNodes[0] : null;
                return Object(_helpers_doInvokeCommand__WEBPACK_IMPORTED_MODULE_7__["default"])(invokeCommandEndPoint, commandName, args, siteNode.contextPath, focusedNode, documentNode.contextPath).then(({ success, result, uiFeedback }) => {
                    if (success)
                        console.log(result);
                    else
                        console.error(result);
                    // Forward server feedback to the Neos UI
                    if (uiFeedback) {
                        this.props.handleServerFeedback(uiFeedback);
                    }
                    return result;
                });
            };
            Object.keys(result).forEach((commandName) => {
                // Register command globally
                window.NeosTerminal[commandName] = (...args) => invokeCommand(commandName, args);
            });
            console.info('Neos Terminal commands are available via "NeosTerminal".');
        });
    }
    render() {
        // Plugin is invisible and just registers terminal commands
        return null;
    }
};
FallbackPlugin.propTypes = {
    config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    i18nRegistry: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    siteNode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    documentNode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    focusedNodes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
    handleServerFeedback: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
};
FallbackPlugin = __decorate([
    Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(Object(plow_js__WEBPACK_IMPORTED_MODULE_2__["$transform"])({
        user: Object(plow_js__WEBPACK_IMPORTED_MODULE_2__["$get"])('user.name'),
        siteNode: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["selectors"].CR.Nodes.siteNodeSelector,
        documentNode: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["selectors"].CR.Nodes.documentNodeSelector,
        focusedNodes: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["selectors"].CR.Nodes.focusedNodePathsSelector,
    }), {
        handleServerFeedback: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["actions"].ServerFeedback.handleServerFeedback,
    }),
    Object(_neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4__["neos"])((globalRegistry) => ({
        i18nRegistry: globalRegistry.get('i18n'),
        config: globalRegistry.get('frontendConfiguration').get('Shel.Neos.Terminal:Terminal'),
    }))
    /**
     * The fallback plugin provides the command functionality in Neos 4.3 via the browser console.
     * Full UI integration is not supported due to the old React version in Neos 4.3.
     */
], FallbackPlugin);
/* harmony default export */ __webpack_exports__["default"] = (FallbackPlugin);


/***/ }),

/***/ "./src/Terminal.tsx":
/*!**************************!*\
  !*** ./src/Terminal.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plow-js */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js");
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plow_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neos-project/neos-ui-decorators */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js");
/* harmony import */ var _neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js");
/* harmony import */ var _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ReplWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ReplWrapper */ "./src/components/ReplWrapper.tsx");
/* harmony import */ var _provider_CommandsProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider/CommandsProvider */ "./src/provider/CommandsProvider.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./src/actions/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Neos dependencies are provided by the UI
// @ts-ignore

// @ts-ignore




// @ts-ignore
let Terminal = class Terminal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        var _a, _b, _c;
        const { config } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_provider_CommandsProvider__WEBPACK_IMPORTED_MODULE_7__["CommandsProvider"], { getCommandsEndPoint: config.getCommandsEndPoint, invokeCommandEndPoint: config.invokeCommandEndPoint, siteNode: (_a = this.props.siteNode) === null || _a === void 0 ? void 0 : _a.contextPath, documentNode: (_b = this.props.documentNode) === null || _b === void 0 ? void 0 : _b.contextPath, focusedNode: ((_c = this.props.focusedNodes) === null || _c === void 0 ? void 0 : _c.length) > 0 ? this.props.focusedNodes[0] : null, i18nRegistry: this.props.i18nRegistry, handleServerFeedback: this.props.handleServerFeedback },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ReplWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.props))));
    }
};
Terminal.propTypes = {
    config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    i18nRegistry: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    user: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    siteNode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    documentNode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    focusedNodes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
    terminalOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    toggleNeosTerminal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
    handleServerFeedback: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
};
Terminal = __decorate([
    Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(() => ({}), {
        toggleNeosTerminal: _actions__WEBPACK_IMPORTED_MODULE_8__["actions"].toggleNeosTerminal,
    })
    // @ts-ignore
    ,
    Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(Object(plow_js__WEBPACK_IMPORTED_MODULE_2__["$transform"])({
        user: Object(plow_js__WEBPACK_IMPORTED_MODULE_2__["$get"])('user.name'),
        siteNode: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["selectors"].CR.Nodes.siteNodeSelector,
        documentNode: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["selectors"].CR.Nodes.documentNodeSelector,
        focusedNodes: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["selectors"].CR.Nodes.focusedNodePathsSelector,
        terminalOpen: _actions__WEBPACK_IMPORTED_MODULE_8__["selectors"].terminalOpen,
    }), {
        handleServerFeedback: _neos_project_neos_ui_redux_store__WEBPACK_IMPORTED_MODULE_5__["actions"].ServerFeedback.handleServerFeedback,
    }),
    Object(_neos_project_neos_ui_decorators__WEBPACK_IMPORTED_MODULE_4__["neos"])((globalRegistry) => ({
        i18nRegistry: globalRegistry.get('i18n'),
        config: globalRegistry.get('frontendConfiguration').get('Shel.Neos.Terminal:Terminal'),
    }))
], Terminal);
/* harmony default export */ __webpack_exports__["default"] = (Terminal);


/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! exports provided: actionTypes, actions, reducer, selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/redux-actions/index.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plow-js */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js");
/* harmony import */ var plow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plow_js__WEBPACK_IMPORTED_MODULE_1__);


const actionTypes = {
    TOGGLE_NEOS_TERMINAL: 'TOGGLE_NEOS_TERMINAL',
};
const toggleNeosTerminal = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(actionTypes.TOGGLE_NEOS_TERMINAL);
const actions = {
    toggleNeosTerminal,
};
const reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
    TOGGLE_NEOS_TERMINAL: (state, action) => {
        var _a, _b;
        return (Object.assign(Object.assign({}, state), { plugins: Object.assign(Object.assign({}, state.plugins), { neosTerminal: {
                    open: action.payload !== undefined ? action.payload.open : !((_b = (_a = state.plugins) === null || _a === void 0 ? void 0 : _a.neosTerminal) === null || _b === void 0 ? void 0 : _b.open),
                } }) }));
    },
}, {
    plugins: {
        neosTerminal: {
            open: false,
        },
    },
});
const selectors = {
    terminalOpen: (state) => Object(plow_js__WEBPACK_IMPORTED_MODULE_1__["$get"])('plugins.neosTerminal.open', state),
};


/***/ }),

/***/ "./src/components/ReplWrapper.css":
/*!****************************************!*\
  !*** ./src/components/ReplWrapper.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"replWrapper":"ReplWrapper__replWrapper___2DBp3","terminalWrapper":"ReplWrapper__terminalWrapper___2CSvE"};

/***/ }),

/***/ "./src/components/ReplWrapper.tsx":
/*!****************************************!*\
  !*** ./src/components/ReplWrapper.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_console_emulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-console-emulator */ "../../../../node_modules/react-console-emulator/dist/Terminal.js");
/* harmony import */ var react_console_emulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_console_emulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _friendsofreactjs_react_css_themr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @friendsofreactjs/react-css-themr */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-css-themr/index.js");
/* harmony import */ var _friendsofreactjs_react_css_themr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_friendsofreactjs_react_css_themr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neos-project/react-ui-components */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SponsorshipBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SponsorshipBadge */ "./src/components/SponsorshipBadge.tsx");
/* harmony import */ var _provider_CommandsProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/CommandsProvider */ "./src/provider/CommandsProvider.tsx");
/* harmony import */ var _ReplWrapper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReplWrapper.css */ "./src/components/ReplWrapper.css");
/* harmony import */ var _ReplWrapper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ReplWrapper_css__WEBPACK_IMPORTED_MODULE_6__);


// @ts-ignore

// @ts-ignore



// @ts-ignore

const ReplWrapper = ({ config, theme, user, siteNode, documentNode, terminalOpen, toggleNeosTerminal, }) => {
    const { invokeCommand, commands, translate } = Object(_provider_CommandsProvider__WEBPACK_IMPORTED_MODULE_5__["useCommands"])();
    const terminal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const promptLabel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const currentPath = (siteNode === null || siteNode === void 0 ? void 0 : siteNode.contextPath) === (documentNode === null || documentNode === void 0 ? void 0 : documentNode.contextPath) ? '~' : documentNode === null || documentNode === void 0 ? void 0 : documentNode.properties.uriPathSegment;
        return `${user.firstName}@${siteNode === null || siteNode === void 0 ? void 0 : siteNode.name}:${currentPath}$`;
    }, [user.firstName, siteNode === null || siteNode === void 0 ? void 0 : siteNode.name, documentNode === null || documentNode === void 0 ? void 0 : documentNode.contextPath, documentNode === null || documentNode === void 0 ? void 0 : documentNode.properties.uriPathSegment]);
    const commandsDefinition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const newCommands = Object.keys(commands).reduce((carry, commandName) => {
            var _a;
            const command = commands[commandName];
            // Register command globally
            window.NeosTerminal[commandName] = (...args) => invokeCommand(commandName, args);
            carry[commandName] = Object.assign(Object.assign({}, command), { description: translate((_a = command.description) !== null && _a !== void 0 ? _a : ''), fn: (...args) => {
                    const currentTerminal = terminal.current;
                    invokeCommand(commandName, args)
                        .then((result) => {
                        currentTerminal.state.stdout.pop();
                        let output = result;
                        if (!result) {
                            output = translate('command.empty');
                        }
                        currentTerminal.pushToStdout(output);
                    })
                        .catch((error) => {
                        console.error(error, translate('command.invocationError', 'An error occurred during invocation of the "{commandName}" command', { commandName }));
                        currentTerminal.state.stdout.pop();
                        currentTerminal.pushToStdout(translate('command.error'));
                    });
                    return translate('command.evaluating');
                } });
            return carry;
        }, {});
        newCommands['help'] = {
            name: 'help',
            description: translate('command.help.description'),
            usage: 'help <commandName>',
            fn: (commandName) => {
                const currentTerminal = terminal.current;
                if (!commandName) {
                    currentTerminal.showHelp();
                }
                else if (!commands[commandName]) {
                    currentTerminal.pushToStdout(translate('command.help.unknownCommand'));
                }
                else {
                    const command = commands[commandName];
                    currentTerminal.pushToStdout(`${translate(command.description)} - ${command.usage}`);
                }
            },
        };
        newCommands['clear'] = {
            name: 'clear',
            description: translate('command.clear.description'),
            usage: 'clear',
            fn: () => terminal.current.clearStdout(),
        };
        return newCommands;
    }, [commands, invokeCommand]);
    const autocomplete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((input) => {
        const commandNames = Object.keys(commands);
        const currentValue = input.value;
        const matches = commandNames.filter((key) => key.startsWith(currentValue));
        if (!matches)
            return;
        if (matches.length === 1) {
            input.value = matches[0] + ' ';
        }
        else {
            const currentTerminal = terminal.current;
            const [lastItem] = currentTerminal.state.stdout.slice(-1);
            const message = translate('matchingCommands', 'Matching commands: {commands}', {
                commands: matches.join(' '),
            });
            if (lastItem.message !== message) {
                currentTerminal.pushToStdout(message, { isEcho: true });
            }
        }
    }, [commands]);
    // Focus terminal when opened
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (terminalOpen) {
            setTimeout(() => { var _a; return (_a = terminal.current) === null || _a === void 0 ? void 0 : _a.focusTerminal(); }, 0);
        }
    }, [terminalOpen]);
    // Close terminal on ESC
    const onKeyUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((e) => {
        if (terminalOpen && e.keyCode === 27) {
            toggleNeosTerminal(false);
        }
    }, [terminalOpen]);
    if (!Object.keys(commands).length)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: theme.replWrapper, onKeyUp: onKeyUp },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_3__["IconButton"], { onClick: () => toggleNeosTerminal(), isActive: terminalOpen, title: translate('toggleTerminal'), icon: "terminal" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: theme.terminalWrapper, style: { display: terminalOpen ? 'block' : 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_console_emulator__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({ autoFocus: true, ref: terminal, commands: commandsDefinition, ignoreCommandCase: true, welcomeMessage: translate(config.welcomeMessage), promptLabel: promptLabel, onTab: autocomplete, noDefaults: true, style: { borderRadius: 0, maxHeight: '50vh' } }, config.theme)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SponsorshipBadge__WEBPACK_IMPORTED_MODULE_4__["default"], { registrationKey: config.registrationKey }))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Object(_friendsofreactjs_react_css_themr__WEBPACK_IMPORTED_MODULE_2__["themr"])('shel-neos-terminal/replWrapper', _ReplWrapper_css__WEBPACK_IMPORTED_MODULE_6___default.a)(ReplWrapper)));


/***/ }),

/***/ "./src/components/SponsorshipBadge.css":
/*!*********************************************!*\
  !*** ./src/components/SponsorshipBadge.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"sponsorshipWidget":"SponsorshipBadge__sponsorshipWidget___2tT6K"};

/***/ }),

/***/ "./src/components/SponsorshipBadge.tsx":
/*!*********************************************!*\
  !*** ./src/components/SponsorshipBadge.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SponsorshipBadge_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SponsorshipBadge.css */ "./src/components/SponsorshipBadge.css");
/* harmony import */ var _SponsorshipBadge_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SponsorshipBadge_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider_CommandsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/CommandsProvider */ "./src/provider/CommandsProvider.tsx");

// @ts-ignore


const CONSOLE_PREFIX = 'Shel.Neos.Terminal:';
const SponsorshipBadge = ({ registrationKey }) => {
    const { translate } = Object(_provider_CommandsProvider__WEBPACK_IMPORTED_MODULE_2__["useCommands"])();
    const [verified, setVerified] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (!registrationKey || !registrationKey.id || !registrationKey.signature) {
            return console.info(CONSOLE_PREFIX, translate('sponsorship.missing'));
        }
        const { id, signature } = registrationKey;
        const result = [...id.split('')].reduce((acc, char) => {
            acc = (acc << 5) - acc + char.charCodeAt(0);
            return acc & acc;
        }, 0);
        if ('V1' + result === atob(signature)) {
            if (registrationKey.showThankYouMessage) {
                console.info(CONSOLE_PREFIX, translate('sponsorship.verified'));
            }
            setVerified(true);
        }
        else {
            console.warn(CONSOLE_PREFIX, translate('sponsorship.invalid'));
        }
    }, [registrationKey]);
    if (verified)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _SponsorshipBadge_css__WEBPACK_IMPORTED_MODULE_1___default.a.sponsorshipWidget },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "https://github.com/Sebobo/Shel.Neos.Terminal", target: "_blank", rel: "noreferrer noopener", title: translate('sponsorship.title') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('sponsorship')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: "178", height: "181", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 178 181" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M0 180.017h37.287L71.35 52.898H34.061zM48.717 0l-9.083 33.898h36.675L85.392 0z", fill: "#b9b7b3" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", { id: "a", gradientUnits: "userSpaceOnUse", x1: "84.788", y1: "116.678", x2: "177.799", y2: "116.678" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", { offset: "0", stopColor: "#287aac" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", { offset: "1", stopColor: "#54aada" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M140.51 53.119H92.788l-8 28.306h47.691l-28.03 98.813h39.287l34.063-127.119z", fill: "url(#a)" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SponsorshipBadge));


/***/ }),

/***/ "./src/helpers/doInvokeCommand.ts":
/*!****************************************!*\
  !*** ./src/helpers/doInvokeCommand.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @neos-project/neos-ui-backend-connector */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js");
/* harmony import */ var _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0__);
// @ts-ignore

const doInvokeCommand = async (endPoint, commandName, args, siteNode = null, focusedNode = null, documentNode = null) => {
    return _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0__["fetchWithErrorHandling"]
        .withCsrfToken((csrfToken) => ({
        url: endPoint,
        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            commandName,
            argument: args.join(' '),
            siteNode,
            focusedNode,
            documentNode,
        }),
    }))
        .then((response) => response && response.json());
};
/* harmony default export */ __webpack_exports__["default"] = (doInvokeCommand);


/***/ }),

/***/ "./src/helpers/fetchCommands.ts":
/*!**************************************!*\
  !*** ./src/helpers/fetchCommands.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @neos-project/neos-ui-backend-connector */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js");
/* harmony import */ var _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0__);
// @ts-ignore

const fetchCommands = async (endPoint) => {
    return _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_0__["fetchWithErrorHandling"]
        .withCsrfToken((csrfToken) => ({
        url: endPoint,
        method: 'POST',
        credentials: 'include',
        headers: {
            'X-Flow-Csrftoken': csrfToken,
            'Content-Type': 'application/json',
        },
    }))
        .then((response) => response && response.json());
};
/* harmony default export */ __webpack_exports__["default"] = (fetchCommands);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "../../../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _actions = __webpack_require__(/*! ./actions */ "./src/actions/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window['NeosTerminal'] = window.NeosTerminal || {};

(0, _neosUiExtensibility2.default)('Shel.Neos.Terminal:Terminal', {}, function (globalRegistry, _ref) {
    var frontendConfiguration = _ref.frontendConfiguration;
    var enabled = frontendConfiguration['Shel.Neos.Terminal:Terminal'].enabled;


    if (!enabled) return;

    var containersRegistry = globalRegistry.get('containers');

    var _ReactVersion$split = _react.version.split('.'),
        _ReactVersion$split2 = _slicedToArray(_ReactVersion$split, 2),
        major = _ReactVersion$split2[0],
        minor = _ReactVersion$split2[1];

    // Terminal UI integration requires minimum React version (provided since Neos 5.2.0)


    if (major >= 16 && minor >= 8) {
        var hotkeyRegistry = globalRegistry.get('hotkeys');
        var reducersRegistry = globalRegistry.get('reducers');

        if (frontendConfiguration.hotkeys !== null && frontendConfiguration.hotkeys.length !== 0) {
            hotkeyRegistry.set('Shel.Neos.Terminal.toggle', {
                description: 'Toggle Neos Terminal',
                action: _actions.actions.toggleNeosTerminal
            });

            reducersRegistry.set('Shel.Neos.Terminal', { reducer: _actions.reducer });
        }

        Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! ./Terminal */ "./src/Terminal.tsx")).then(function (Terminal) {
            containersRegistry.set('PrimaryToolbar/Middle/Terminal', Terminal.default);
        });
    } else {
        Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! ./FallbackPlugin */ "./src/FallbackPlugin.tsx")).then(function (FallbackPlugin) {
            containersRegistry.set('PrimaryToolbar/Left/Terminal', FallbackPlugin.default);
        });
    }
});

/***/ }),

/***/ "./src/provider/CommandsProvider.tsx":
/*!*******************************************!*\
  !*** ./src/provider/CommandsProvider.tsx ***!
  \*******************************************/
/*! exports provided: CommandsContext, useCommands, CommandsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsContext", function() { return CommandsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCommands", function() { return useCommands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsProvider", function() { return CommandsProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_fetchCommands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetchCommands */ "./src/helpers/fetchCommands.ts");
/* harmony import */ var _helpers_doInvokeCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/doInvokeCommand */ "./src/helpers/doInvokeCommand.ts");




const CommandsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const useCommands = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CommandsContext);
const CommandsProvider = ({ invokeCommandEndPoint, getCommandsEndPoint, children, documentNode, focusedNode, siteNode, i18nRegistry, handleServerFeedback, }) => {
    const [commands, setCommands] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        Object(_helpers_fetchCommands__WEBPACK_IMPORTED_MODULE_1__["default"])(getCommandsEndPoint).then(({ result }) => setCommands(result));
    }, [getCommandsEndPoint, setCommands]);
    const translate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((id, fallback = '', params = [], packageKey = 'Shel.Neos.Terminal', sourceName = 'Main') => {
        return i18nRegistry.translate(id, fallback, params, packageKey, sourceName);
    }, []);
    const invokeCommand = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((commandName, args) => {
        const command = commands[commandName];
        if (!command)
            throw Error(translate('command.doesNotExist', `The command {commandName} does not exist!`, { commandName }));
        return Object(_helpers_doInvokeCommand__WEBPACK_IMPORTED_MODULE_2__["default"])(invokeCommandEndPoint, commandName, args, siteNode, focusedNode, documentNode).then(({ success, result, uiFeedback }) => {
            let parsedResult = result;
            let textResult = result;
            // Try to prettify json results
            try {
                parsedResult = JSON.parse(result);
                if (typeof parsedResult !== 'string') {
                    textResult = JSON.stringify(parsedResult, null, 2);
                }
                else {
                    textResult = parsedResult;
                }
            }
            catch (e) {
                // Treat result as simple string
            }
            console[success ? 'log' : 'error'](parsedResult, translate('command.output', `Output of command "{commandName} {argument}"`, {
                commandName,
                argument: args.join(' '),
            }));
            // Forward server feedback to the Neos UI
            if (uiFeedback) {
                handleServerFeedback(uiFeedback);
            }
            return textResult;
        });
    }, [commands, siteNode, documentNode, focusedNode]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CommandsContext.Provider, { value: { invokeCommand, commands, translate } }, children));
};


/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map