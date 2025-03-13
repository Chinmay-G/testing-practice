// const { default: test } = require('node:test');
// const { describe } = require('yargs');
// const { default: test, it } = require('node:test');
const { capitalize, reverseString, calculator, caesarCipher } = require('./main');
// const { describe } = require('yargs');

describe('capitalizes the first letter', () => {
    it('test - 1', () => {
        expect(capitalize('raven')).toBe('Raven');
    });
    it('test - 2', () => {
        expect(capitalize('karthik')).toBe('Karthik');
    });
    it('test - 3', () => {
        expect(capitalize('sumedha')).toBe('Sumedha');
    });
})

describe('Reverses the string', () => {
    it('test - 1', () => {
        expect(reverseString('abcd')).toMatch(/dcba/);
    })
    it('test - 2', () => {
        expect(reverseString('arya')).toMatch(/ayra/);
    })
    it('test - 2', () => {
        expect(reverseString('arya Khan')).toMatch(/nahK ayra/);
    })
})

describe('Calculator works', () => {
    it('add test - 1', () => {
        expect(calculator.add(2, 3)).toBe(5);
    })
    it('add test - 2', () => {
        expect(calculator.add(31, 369)).toBe(400);
    })
    it('add test - 3', () => {
        expect(calculator.add(31.2, 369.22)).toBeCloseTo(400.42);
    })

    it('subtract test - 1', () => {
        expect(calculator.subtract(31.2, 369.22)).toBeCloseTo(-338.02);
    })

    it('divide test - 1', () => {
        expect(calculator.divide(31.2, 369.22)).toBeCloseTo(0.08450246466);
    })
    it('multiply test - 1', () => {
        expect(calculator.multiply(31.2, 369.22)).toBeCloseTo(11519.664);
    })
})

describe('Caesar Ciphers the text', () => {
    it('test - 1', () => {
        expect(caesarCipher('abc', 3)).toMatch(/def/);
    })
    it('test - 2', () => {
        expect(caesarCipher('xyz', 3)).toMatch(/abc/);
    })
    it('test - 3', () => {
        expect(caesarCipher('HeLLo', 3)).toMatch(/KhOOr/);
    })
    it('test - 4', () => {
        expect(caesarCipher('Hello, World!', 3)).toMatch(/Khoor, Zruog!/);
    })
})