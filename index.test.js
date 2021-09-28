const stringLength = require('./index');

test('returns the length of the string', () => {
    expect(stringLength("Apple")).toBeGreaterThan(0);
    expect(stringLength("Apple")).toBeLessThan(11);
})