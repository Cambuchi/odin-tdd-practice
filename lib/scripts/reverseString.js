"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var reverseString = function reverseString(string) {
  if (typeof string === 'string') {
    var splitStringArray = string.split('');
    var reverseArray = splitStringArray.reverse();
    var newString = reverseArray.join('');
    return newString;
  }

  return 'not a string';
};

var _default = reverseString;
exports["default"] = _default;