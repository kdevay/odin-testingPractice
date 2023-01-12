function reverseString(string) {
    let clone = string.split('')
    clone.reverse();
    return clone.join('');
}

module.exports = reverseString;