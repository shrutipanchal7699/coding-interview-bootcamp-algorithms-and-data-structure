// create empty array of arrays called results
// creare a counter variable, starting at 1
// start_col <= end_col and start_row <= end_row
//     loop from start col to end col.
//         at result[start_row][i] = counter variable
//         counter++
//     incresement start_row
//     loop from start_row to end_row
//         result[i][end_col] = counter variable
//         counter++
//     endRow--

//     repeat for other two sides

function spiralMatrix(n) {
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startRow = 0, endRow = n - 1;
    let startCol = 0, endCol = n - 1;

    while (startRow <= endRow && startCol <= endCol) {

        //top row.
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        //right column.
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        //left column.
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return results;
}

console.log('\n Spiral Matrix \n')
console.log(spiralMatrix(3))