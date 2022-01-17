"use strict";

var _caeserCipher = _interopRequireDefault(require("./caeserCipher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('"aaabbbccc" becomes "bbbcccddd"', function () {
  expect((0, _caeserCipher["default"])('aaabbbccc')).toBe('bbbcccddd');
});
test('"aAabBbzZz" becomes "bBbcCcaAa"', function () {
  expect((0, _caeserCipher["default"])('aAabBbzZz')).toBe('bBbcCcaAa');
});
test('"a1ab#bc c" becomes "b1bc#cd d"', function () {
  expect((0, _caeserCipher["default"])('a1ab#bc c')).toBe('b1bc#cd d');
});
test('1 becomes "not a string"', function () {
  expect((0, _caeserCipher["default"])(1)).toBe('not a string');
});