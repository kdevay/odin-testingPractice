const calculate = require('./calculate');

test('returns correct calculation of two numbers', () => {
    expect(calculate.add(1, 2)).toBe(3);
    expect(calculate.subtract(5, 2)).toBe(3);
    expect(calculate.divide(6, 2)).toBe(3);
    expect(calculate.multiply(1.5, 2)).toBe(3);
});