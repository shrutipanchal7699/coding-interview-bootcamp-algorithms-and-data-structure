function fizzBuzz(n) {

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0)
            console.log('fizzbuzz');
        else if (i % 3 == 0)
            console.log('fizz');
        else if (i % 5 == 0)
            console.log('buzz');
        else
            console.log(i);

    }

}

console.log('\nMethod 1\n')
console.log(fizzBuzz(6));
console.log(fizzBuzz(15));
