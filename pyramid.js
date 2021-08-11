
// from 0 to n through rows
//     create n empty String, level
//     from 0 to n through columns
//         if the column should have '#' then add 
//         else add a space
//     print the stair

function pyramid(n) {
    const mid_index = Math.floor((2 * n - 1) / 2);
    for (let i = 0; i < n; i++) {
        var level = '';
        for (let j = 0; j < ((2 * n) - 1); j++) {
            if (mid_index - i <= j && mid_index + i >= j)
                level += ' # ';
            else
                level += '   '
        }
        console.log(level, '\n');
    }
}

console.log('\n Iterative -- Method 1: \n')
console.log(pyramid(4), '\n')
console.log(pyramid(2), '\n')



function recursivePyramid(n, row = 0, level = '') {
    if (n === row)
        return;

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1, level);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row <= level.length) {
        add = '#';
    } else {
        add = ' '
    }
    pyramid(n, row, level + add);
}

console.log('\n Recursive -- Method 1: \n')
console.log(recursivePyramid(4), '\n')
console.log(recursivePyramid(2), '\n')
