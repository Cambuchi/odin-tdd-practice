"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var cipher = 'bcdefghijklmnopqrstuvwxyza';

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

var singleLowerCipher = function singleLowerCipher(_char3) {
  var index = alphabet.indexOf(_char3);
  var cipherCharacter = cipher[index];
  return cipherCharacter;
};

var caeserCipher = function caeserCipher(string) {
  if (typeof string !== 'string') {
    return 'not a string';
  }

  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (isUpperCase(string[i]) || isLowerCase(string[i])) {
      if (isLowerCase(string[i])) {
        newString += singleLowerCipher(string[i]);
      } else if (isUpperCase(string[i])) {
        newString += singleLowerCipher(string[i].toLowerCase()).toUpperCase();
      }
    } else {
      newString += string[i];
    }
  }

  return newString;
};

var _default = caeserCipher;
exports["default"] = _default;