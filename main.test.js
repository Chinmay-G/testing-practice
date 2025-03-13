// const { default: test } = require('node:test');
// const { describe } = require('yargs');
const { capitalize, reverseString } = require('./main');
// import { capitalize } from './main.js';

// const capitalize = require('./main');
// // const reverseString = require('./main');

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

// test('capitalizes the first letter', () => {
//     expect(capitalize(3).toBe(4));
// })