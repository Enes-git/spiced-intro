const countries = require('./countries');

// testing empty string
test('find returns [] when passed empty string', () => {
    const result = countries.find('');
    expect(result).toEqual([]);
});

// testing 4 match treshold
test('find returns an [] of up to 4 matches when passed a valid string', () => {
    const result = countries.find('T');
    expect(result.length).toBeLessThan(5);
});

// testing case sensitivity
test('find returns the an [] of results when passed a string with upper/lowercase', () => {
    const result = countries.find('tuRKey');
    expect(result).toEqual(['Turkey']);
});

// testing no match
test('find returns [] when passed a string that has no match', () => {
    const result = countries.find('aslşkhorı4uhg');
    expect(result).toEqual([]);
});
