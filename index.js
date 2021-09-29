let stringLength = (string) => {
    return(string.length);
}

let reverseString = (string) => {
    return (string.split("").reverse().join(""));
}

let capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    stringLength,
    reverseString,
    capitalize
}