"use strict";

var _reverseString = _interopRequireDefault(require("./reverseString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('"test" becomes "tset"', function () {
  expect((0, _reverseString["default"])('test')).toBe('tset');
});
test('"what about spaces" becomes "secaps tuoba tahw"', function () {
  expect((0, _reverseString["default"])('what about spaces')).toBe('secaps tuoba tahw');
});
test('"12345" becomes "54321"', function () {
  expect((0, _reverseString["default"])('12345')).toBe('54321');
});
test('12345 becomes "not a string"', function () {
  expect((0, _reverseString["default"])(12345)).toBe('not a string');
});