"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isValidArguments = function isValidArguments(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  } else {
    return true;
  }
};

var add = function add(x, y) {
  if (isValidArguments(x, y)) {
    return x + y;
  }

  return 'Arguments contain a non-number';
};

var subtract = function subtract(x, y) {
  if (isValidArguments(x, y)) {
    return x - y;
  }

  return 'Arguments contain a non-number';
};

var divide = function divide(x, y) {
  if (isValidArguments(x, y)) {
    return x / y;
  }

  return 'Arguments contain a non-number';
};

var multiply = function multiply(x, y) {
  if (isValidArguments(x, y)) {
    return x * y;
  }

  return 'Arguments contain a non-number';
};

var calculator = {
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply
};
var _default = calculator;
exports["default"] = _default;