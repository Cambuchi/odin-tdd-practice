"use strict";

var _calculator = _interopRequireDefault(require("./calculator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('add(4, 2) is 8', function () {
  expect(_calculator["default"].add(4, 2)).toBe(6);
});
test('add(-4, 2) is -2', function () {
  expect(_calculator["default"].add(-4, 2)).toBe(-2);
});
test('add(0.5, 0.2) is 0.7', function () {
  expect(_calculator["default"].add(0.5, 0.2)).toBe(0.7);
});
test('add("4", 2) is "Arguments contain a non-number"', function () {
  expect(_calculator["default"].add('4', 2)).toBe('Arguments contain a non-number');
});
test('subtract(4, 2) is 2', function () {
  expect(_calculator["default"].subtract(4, 2)).toBe(2);
});
test('subtract(-4, 2) is -6', function () {
  expect(_calculator["default"].subtract(-4, 2)).toBe(-6);
});
test('subtract(0.5, 0.2) is 0.3', function () {
  expect(_calculator["default"].subtract(0.5, 0.2)).toBe(0.3);
});
test('subtract("4", 2) is "Arguments contain a non-number"', function () {
  expect(_calculator["default"].subtract('4', 2)).toBe('Arguments contain a non-number');
});
test('divide(4, 2) is 2', function () {
  expect(_calculator["default"].divide(4, 2)).toBe(2);
});
test('divide(-4, 2) is -2', function () {
  expect(_calculator["default"].divide(-4, 2)).toBe(-2);
});
test('divide(0.5, 0.2) is 2.5', function () {
  expect(_calculator["default"].divide(0.5, 0.2)).toBe(2.5);
});
test('divide("4", 2) is "Arguments contain a non-number"', function () {
  expect(_calculator["default"].divide('4', 2)).toBe('Arguments contain a non-number');
});
test('multiply(4, 2) is 8', function () {
  expect(_calculator["default"].multiply(4, 2)).toBe(8);
});
test('multiply(-4, 2) is -8', function () {
  expect(_calculator["default"].multiply(-4, 2)).toBe(-8);
});
test('multiply(0.5, 0.2) is 0.1', function () {
  expect(_calculator["default"].multiply(0.5, 0.2)).toBe(0.1);
});
test('multiply("4", 2) is "Arguments contain a non-number"', function () {
  expect(_calculator["default"].multiply('4', 2)).toBe('Arguments contain a non-number');
});