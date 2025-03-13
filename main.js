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

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
}

function caesarCipher(word, shift) {
    const alphabetsL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetsU = alphabetsL.map(el => el.toUpperCase());
    const cipheredWord = word
        .split('')
        .map(letter => {
            if (!isAlphabet(letter) || letter === ' ')
                return letter;
            if (letter === letter.toUpperCase()) {
                return caesarCipherShifter(alphabetsU, letter, shift);
            }
            if (letter === letter.toLowerCase()) {
                return caesarCipherShifter(alphabetsL, letter, shift);
            }
            else return letter;
        })
        .join('');

    return cipheredWord;
}

function caesarCipherShifter(alphabets, letter, shift) {
    const index = alphabets.indexOf(letter);

    if (index + shift > alphabets.length - 1)
        return alphabets[(index - alphabets.length) + shift]
    return alphabets[index + shift];
}

function isAlphabet(str) {
    return /^[a-zA-Z()]+$/.test(str);
}

const arr = ['a', 'b', 'c'];
console.log(arr.indexOf('b'));

console.log(caesarCipher('abc', 3));

console.log(caesarCipher('Hello, World!', 3));

module.exports = { capitalize, reverseString, calculator, caesarCipher };