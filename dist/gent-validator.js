(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['gent-validator'] = {})));
}(this, (function (exports) { 'use strict';

var rules = {};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Validator = function Validator() {
  //

  classCallCheck(this, Validator);
};

exports.rules = rules;
exports.Validator = Validator;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gent-validator.js.map
