import analyzeArray from './analyzeArray';

test('normal number array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('array with non-number', () => {
  expect(analyzeArray([1, 2, 3, 4, '5'])).toBe('not an array');
});

test('array-like object (string)', () => {
  expect(analyzeArray('12345')).toBe('not an array');
});
