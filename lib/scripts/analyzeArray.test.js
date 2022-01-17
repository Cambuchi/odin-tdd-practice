"use strict";

var _analyzeArray = _interopRequireDefault(require("./analyzeArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('normal number array', function () {
  expect((0, _analyzeArray["default"])([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
});
test('array with non-number', function () {
  expect((0, _analyzeArray["default"])([1, 2, 3, 4, '5'])).toBe('not an array');
});
test('array-like object (string)', function () {
  expect((0, _analyzeArray["default"])('12345')).toBe('not an array');
});