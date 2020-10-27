const { test, expect } = require('@jest/globals');
const adding = require('./index');
const Calculate = require('./myClass')

/* describe('Calculating', () =>{
    test('addition 1 + 2 is equal a 3', () => {
        expect(adding(1,2) ).toBe(3);
    });
    
    
    test('addition dos + 2 is equal a input values are not numeric', () => {
        expect(adding("dos",2)).toBe("input values are not numeric");
    });
})
 */

describe('Calculating', () =>{
    
    test('addition 1 + 2 is equal a 3', () => {
        const calculate = new Calculate();
        expect(calculate.adding(1,2) ).toBe(3);
    });
    
    
    test('addition "two" + 2 return 0', () => {
        const calculate = new Calculate();
        expect(calculate.adding("two",2)).toBe(0);
    });

    test('substration 4 - 2 return 2', () => {
        const calculate = new Calculate();
        expect(calculate.substrating(10,4,3)).toBe(3);
    });


    test('substration "four" - 2 return 2', () => {
        const calculate = new Calculate();
        expect(calculate.substrating("four",2)).toBe(0);
    });
})
