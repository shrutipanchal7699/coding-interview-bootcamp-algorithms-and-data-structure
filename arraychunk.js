
//create empty array to hold chunks
//for each elemtn in the original array
// --> retrieve the last element in chunked.
// --> if last element does not exist, or if the length is equal to chunk size
//      --> push a new chunk into chunked with current element
// --> else add the current element into the chunk. 

function chunk(array, size) {
    let chunked = [];
    let new_chunk = [];
    for (let element of array) {
        let last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
        console.log('elelemt: ', element, ' elelement[]: ', [element]);
        console.log('chunked: ', chunked);
        console.log('last: ', last);
        console.log('\n')
    }
    return chunked;
}

console.log('\n Method 1:\n');
//console.log(chunk([1, 2, 3, 4, 5], 3));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4], 6));


//create empty chunked array
//create index start at 0
//while index < array.length
// --> push a slice of length size from array into chunked.
// --> add size to index.

function chunk2(array, size) {
    const chunked = []
    let index = 0;

    while (index < array.length) {
        var currentSubstring = array.slice(index, index + size);
        chunked.push(currentSubstring);
        index += size;
    }
    return chunked;
}

console.log('\n Method 2:\n');
console.log(chunk2([1, 2, 3, 4, 5], 3));
console.log(chunk2([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4], 6));
