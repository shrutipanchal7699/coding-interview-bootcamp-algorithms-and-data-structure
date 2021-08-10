//make an empty array of words
//split the input string by spaces 
//for each word in the array
// --> uppercase the first letter of the word
// --> join the first letter with the rest of the string.
// --> push the result into words array
// join words into a string and return.

function capitalize(str) {
    const words = [];
    //str.split(' ');
    // words = str.split(' ')

    for (let word of str.split(' ')) {
        var currentWord = word[0].toUpperCase() + word.slice(1);
        words.push(currentWord);
    }
    return words.join(' ');
}

console.log('\n Method 1: \n');
console.log(capitalize('my name is shruti'));
console.log(capitalize('Hello hello'));


//create the result which is the first characters of the input string capitalized.
//for each character in string.
// --> if the character to the left is space.
//      --> capitalize it and add it to the result.
// -->else
//      --> add it to the result.

function capitalize2(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}

console.log('\n Method 2: \n');
console.log(capitalize('my name is shruti'));
console.log(capitalize('Hello hello'));