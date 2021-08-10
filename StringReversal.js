
//turn str into an array

//call reverse on that array

//join the array back into a string

// return the result.

function reverse(str) {

    let arr = str.split('');
    arr = arr.reverse();
    let reveString = arr.join('');

    //  console.log('\n');

    return reveString;
}


console.log("Using Alternative # 1")
console.log(reverse('Hello Shruti'));
console.log(reverse('Hurray Hurray'));
console.log(reverse('Jai Jawan Jai Kisaan'));
console.log(reverse('dhoom machao'));
console.log('\n');


function reverse_function2(str) {

    //  console.log('\n');

    return str
        .split('')
        .reverse()
        .join('');
}

console.log("Using Alternative # 2")
console.log(reverse_function2('Hello Shruti'));
console.log(reverse_function2('Hurray Hurray'));
console.log(reverse_function2('Jai Jawan Jai Kisaan'));
console.log(reverse_function2('dhoom machao'));
console.log('\n');


//create an empty string

//for each character in the str, take the character and add it to start of reversed.

// return reversed.

function reverse_function3(str) {

    // console.log('\n');

    let reversed = ''
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

console.log("Using Alternative # 3")
console.log(reverse_function3('learning javascript'));
console.log(reverse_function3('getting a job'));
console.log(reverse_function3('get into a good headspace'));
console.log(reverse_function3('be happy'));
console.log('\n');


function reverse_function4(str) {

    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    })
}

console.log('\n');
console.log("Using Alternative # 4\n")
console.log(reverse_function4('learning javascript'));
console.log(reverse_function4('getting a job'));
console.log(reverse_function4('get into a good headspace'));
console.log(reverse_function4('be happy'));
console.log('\n');






