//can use this technique for question types:
// --> most common character in string
// --> anagrams.
// --> repeated characters?

//count the number of chracters --> frequency of characters.
function maxChar(str) {
    const chars = {};
    var max = 0;
    var maxCharacter = '';

    //use 'of' in enhanced for loop, to iterate over a data type.
    for (let char of str) {
        if (!chars[char])
            chars[char] = 1;
        else
            chars[char]++;

    }

    console.log(chars);

    //use 'in' to iterate over object, or a map in this case.
    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char];
            maxCharacter = char;
        }
    }

    return maxCharacter;

}

console.log('\nMethod 1\n')
console.log('\n', maxChar("Hello Theree"));
console.log('\n', maxChar("YayA"));
