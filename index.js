let stringLength = (string) => {
    return(string.length);
}

let reverseString = (string) => {
    return (string.split("").reverse().join(""));
}

module.exports = {
    stringLength,
    reverseString
}