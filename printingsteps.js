//from 0 to n
//     --> create an empty string stair
//     --> from 0 to n;
//        -->if the current colum is equal to or less than current row
//          --> add a '#' to stair
//        --> else
//          --> add a space to stair
//     print stair.

function steps(n) {

    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let col = 0; col < n; col++) {
            if (col <= row)
                stair += '#';
            else
                stair += ' '
        }
        console.log(stair);
    }


}
console.log('\n Iterative -- Method 1: \n')
console.log(steps(4), '\n')
console.log(steps(2), '\n')




//if (row == n) then we have hot the end of our problem.
// if the stair string has a length ===n then we are at the end of row.
// if the length of stair string is less than or equal to row, we are working on, we add a '#', otherwise add a space.
function recursiveStep(n, row = 0, stair = '') {
    if (n === row)
        return;
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1, level);
    }
    if (stair.length <= row)
        stair += '#';
    else
        stair += ' ';
    steps(n, row, stair);
}

console.log('\n Recursive -- Method 2: \n')
console.log(recursiveStep(4), '\n')
console.log(recursiveStep(2), '\n')