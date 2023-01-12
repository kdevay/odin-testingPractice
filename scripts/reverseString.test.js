const reverseString = require('./reverseString');

test('returns string in reverse order', () => {
    expect(reverseString('string')).toBe('gnirts');
});