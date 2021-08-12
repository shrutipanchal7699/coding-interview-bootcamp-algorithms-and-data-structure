
function fibonacci(n) {
    var arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = arr[i - 1];
        const b = arr[i - 2];
        arr.push(a + b);
    }
    return arr;
}

console.log('\n Iterative --> Method 1:\n');
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(9));

//recursive solution
function fibonacci2(n) {
    if (n <= 1)
        return n;
    return fibonacci2(n - 1) + fibonacci2(n - 2)
}

console.log('\n Recurssive --> Method 2:\n');
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(9));


function slow_fib(n) {
    if (n <= 1)
        return n;
    return slow_fib(n - 1) + slow_fib(n - 2);
}

function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (chache[args])
            return cache[args];

        const result = fn.apply(this, arg);
        chache[args] = result;
        return result;
    };
}
