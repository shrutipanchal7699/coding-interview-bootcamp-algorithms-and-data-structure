
//turn str into an array

//call reverse on that array

//join the array back into a string

// return the result.

function reverse(str) {

    let arr = str.split('');
    arr = arr.reverse();
    let reveString = arr.join('');

    console.log('\n');

    return reveString;
}

console.log(reverse('Hello Shruti'));
console.log(reverse('Hurray Hurray'));
console.log(reverse('Jai Jawan Jai Kisaan'));
console.log(reverse('dhoom machao'));