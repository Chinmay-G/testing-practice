// module.exports = {}

function capitalize(str) {
    const FirstLetter = str.slice(0, 1).toUpperCase();
    return FirstLetter + str.slice(1);
}

function reverseString(str) {
    const arr = [];
    str
        .split('')
        .forEach(letter => arr.unshift(letter))
    return arr.join('');
}
console.log(reverseString('arya Khan'));
// exports.reverseString = reverseString;
// exports.capitalize = capitalize;
module.exports = { capitalize, reverseString };