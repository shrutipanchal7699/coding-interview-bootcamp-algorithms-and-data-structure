function palindrome_function1(str) {
    var reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log('Method 1\n')
console.log(palindrome_function1('Helloolleh'));
console.log(palindrome_function1('abba'));
console.log(palindrome_function1('malayalam'));
console.log(palindrome_function1('oh terri'));

// using the every() function.

//first and last element comparison.
function palindrome_function2(str) {
    var arr = str.split('');
    return arr.every((char, i) => {
        return char === arr[str.length - i - 1];
    });

}

console.log('\nMethod 2\n')
console.log(palindrome_function2('Helloolleh'));
console.log(palindrome_function2('abba'));
console.log(palindrome_function2('malayalam'));
console.log(palindrome_function2('oh terri'));
