const capitalize = require ('./capitalize');
test ('Capitalizes the first character in a string', () => {
    expect(capitalize('some string')).toBe('Some string');
});