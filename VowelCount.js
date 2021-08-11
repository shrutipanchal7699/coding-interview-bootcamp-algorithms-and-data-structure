
function vowel(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (isVowel(char))
            count++;
    }
    return count;

}

function isVowel(char) {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

console.log('\n Method 1: \n');
console.log(vowel('mynameisshrutII'));
console.log(vowel('Apple'));
console.log(vowel(''))


function vowel1(str) {
    let count = 0;
    const checker = 'aeiou';

    for (let char of str.toLowerCase()) {
        if (checker.includes(char))
            count++;
    }
    return count;
}

console.log('\n Method 2: \n');
console.log(vowel1('mynameisshrutII'));
console.log(vowel1('Apple'));
console.log(vowel1(''))



//using regex --- regular expression.
function vowel2(str) {
    const matches = str.match(/[aeiou]/gi)//g - if multiple occurences, i - case insensitive.
    matches ? matches.length : 0;
    return matches;
}

console.log('\n Method 3: \n');
console.log(vowel1('mynameisshrutII'));
console.log(vowel1('Apple'));
console.log(vowel1(''))