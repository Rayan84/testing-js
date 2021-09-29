const Calculator = require('./calculator.js');

describe('Calulator summation', () => {
    const calc = new Calculator();

    it('Tests summation 3 and 3, expectes 6', () => {
        expect(calc.add(3, 3)).toEqual(6);  
    })
    it('Tests summation 34 and 12, expectes 46', () => {
        expect(calc.add(34, 12)).toEqual(46);  
    })
    it('Tests summation 14 and 2, expectes 16', () => {
        expect(calc.add(14, 2)).toEqual(16);  
    })
})


describe('Calulator subtraction', () => {
    const calc = new Calculator();

    it('Tests subtracting 9 from 11 , expectes 2', () => {
        expect(calc.subtract(11, 9)).toEqual(2);  
    })
    it('Tests subtracting 14 from 23 , expectes 9', () => {
        expect(calc.subtract(23, 14)).toEqual(9);  
    })
    it('Tests subtracting 33 from 105, expectes 72', () => {
        expect(calc.add(14, 2)).toEqual(16);  
    })
})


describe('Calulator division', () => {
    const calc = new Calculator();

    it('Tests dividing 99 by 11 , expectes 9', () => {
        expect(calc.divide(99, 11)).toEqual(9);  
    })
    it('Tests dividing 60 by 12 , expectes 5', () => {
        expect(calc.divide(60, 12)).toEqual(5);  
    })
    it('Tests dividing 124 by 31, expectes 4', () => {
        expect(calc.divide(124, 31)).toEqual(4);  
    })
})

describe('Calulator mutliplication', () => {
    const calc = new Calculator();

    it('Tests multiplying 15 by 15 , expectes 225', () => {
        expect(calc.multiply(15, 15)).toEqual(225);  
    })
    it('Tests mutliplying 60 by 12 , expectes 720', () => {
        expect(calc.multiply(60, 12)).toEqual(720);  
    })
    it('Tests multiplying 124 by 31, expectes 4', () => {
        expect(calc.multiply(124, 31)).toEqual(3844);  
    })
})