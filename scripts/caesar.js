function isAlpha(char){
    if (char >= 'a' && char <= 'z'){ return true }
    if (char >= 'A' && char <= 'Z'){ return true }
    return false;
}

function isZ(char){
    if (char === 'z') { return 'a' }
    if (char === 'Z') { return'A' }
    return false;
}

function caesar(string) {
    let clone = ''
    for (let i = 0; i < string.length; i++) {
        if (!isAlpha(string[i])) {
            clone += string[i];
        } else if (isZ(string[i])) {
            clone += isZ(string[i]);
        } else {
            // Get char's ascii value, add 1, convert value to string, concatenate
            clone += String.fromCharCode((string.codePointAt(i)) + 1);
        }
    }
    return clone;
}

module.exports = caesar;