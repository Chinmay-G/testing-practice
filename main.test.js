const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./main');


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

describe('Analyzes the array', () => {
    it('test - 1', () => {
        expect(analyzeArray([1])).toEqual({ average: 1, min: 1, max: 1, length: 1 });
    })
    it('test - 2', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
    })
    it('test - 3', () => {
        expect(analyzeArray([1, 8, 1009, 3, 4, 2, 6, 8, 10, 506, 0])).toEqual({ average: 141.54545454545453, min: 0, max: 1009, length: 11 });
    })
})