const caesar = require('./caesar');

test('enciphers text such that each character is one further along in the alphabet', () => {
    expect(caesar('abcd')).toBe('bcde');
    expect(caesar('Z')).toBe('A');
    expect(caesar('z')).toBe('a');
    expect(caesar('123456789!@#$%')).toBe('123456789!@#$%');
    expect(caesar(' ')).toBe(' ');
});