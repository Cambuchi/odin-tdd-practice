"use strict";

var _capitalize = _interopRequireDefault(require("./capitalize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('"test" should become "Test"', function () {
  expect((0, _capitalize["default"])('test')).toBe('Test');
});
test('"Test" should become "Test"', function () {
  expect((0, _capitalize["default"])('Test')).toBe('Test');
});
test('"TEST" should become "TEST"', function () {
  expect((0, _capitalize["default"])('TEST')).toBe('TEST');
});
test('"three word test" should become "Three word test"', function () {
  expect((0, _capitalize["default"])('three word test')).toBe('Three word test');
});
test('"12@#abcd@#34" should become "12@#Abcd@#34"', function () {
  expect((0, _capitalize["default"])('12@#abcd@#34')).toBe('12@#Abcd@#34');
});
test('"12@#Abcd@#34" should become "12@#Abcd@#34"', function () {
  expect((0, _capitalize["default"])('12@#Abcd@#34')).toBe('12@#Abcd@#34');
});
test('"1234" should become "no valid characters"', function () {
  expect((0, _capitalize["default"])('1234')).toBe('no valid characters');
});
test('"@#$" should become "no valid characters"', function () {
  expect((0, _capitalize["default"])('@#$')).toBe('no valid characters');
});
test('1234 should become "no valid characters"', function () {
  expect((0, _capitalize["default"])(1234)).toBe('no valid characters');
});