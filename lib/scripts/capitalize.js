"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// takes a string and returns it with the first character capitalized
var capitalize = function capitalize(string) {
  for (var i = 0; i < string.length; i++) {
    if (isUpperCase(string[i])) {
      return string;
    } else if (isLowerCase(string[i])) {
      var newString = string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1, string.length + 1);
      return newString;
    }
  }

  return 'no valid characters';
};

var isLowerCase = function isLowerCase(_char) {
  if (_char == _char.toLowerCase() && _char != _char.toUpperCase()) {
    return true;
  }

  return false;
};

var isUpperCase = function isUpperCase(_char2) {
  if (_char2 == _char2.toUpperCase() && _char2 != _char2.toLowerCase()) {
    return true;
  }

  return false;
};

var _default = capitalize;
exports["default"] = _default;