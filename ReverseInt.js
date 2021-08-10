function reverseInt(n) {
    var reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

console.log('\nMethod 1\n')
console.log(reverseInt(200));
console.log(reverseInt(-51));
console.log(reverseInt(9889));
console.log(reverseInt(567420));