const { stringLength, reverseString, capitalize} = require('./index');

test('Throws error if string length is not greater than 0', () => {
    expect(stringLength("Apple")).toBeGreaterThan(0);
    expect(stringLength("Apple")).toBeLessThan(11);
});

test('returns the string reversed', () => {
    expect(reverseString("Orange")).toBe("egnarO");
});

test('Checks if the string is returned capitalized', () => {
    expect(capitalize("tomato")).toBe("Tomato");
})