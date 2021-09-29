const { stringLength, reverseString} = require('./index');

test('Throws error if string length is not greater than 0', () => {
    expect(stringLength("Apple")).toBeGreaterThan(0);
    expect(stringLength("Apple")).toBeLessThan(11);
});

test('returns the string reversed', () => {
    expect(reverseString("Orange")).toBe("egnarO");
});