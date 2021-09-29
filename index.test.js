const { stringLength, reverseString} = require('./index');

test('returns the length of the string', () => {
    expect(stringLength("Apple")).toBeGreaterThan(0);
    expect(stringLength("Apple")).toBeLessThan(11);
});

test('returns the string reversed', () => {
    expect(reverseString("Orange")).toBe("egnarO");
});