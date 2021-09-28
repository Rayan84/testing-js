const stringLength = require('./index');

test('returns the length of the string', () => {
    expect(stringLength("Apple")).toBe(5)
})