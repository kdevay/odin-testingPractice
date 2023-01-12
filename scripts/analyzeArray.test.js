const analyzeArray = require('./analyzeArray');

test('takes a number array, returns an object w/ the average, min, max, and length', () => {
    expect(analyzeArray([1, 2, 3, 4])).toStrictEqual({average: 2.5, min: 1, max: 4, length: 4});
    expect(analyzeArray([0])).toStrictEqual({average: 0, min: 0, max: 0, length: 1});
    expect(analyzeArray([])).toStrictEqual({});
    expect(analyzeArray()).toStrictEqual(undefined);
});