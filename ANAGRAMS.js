//BUILD CHARACTER MAPS.
function anagram(string_a, string_b) {

    const charMap_strA = buildcharMap(string_a);
    const charMap_strB = buildcharMap(string_b);

    // if (Object.keys(charMap_strA).length !== Object.keys(charMap_strB).length)
    //     return false;

    if (charMap_strA.length !== charMap_strB.length)
        return false;

    for (let char in charMap_strA) {
        if (charMap_strA[char] != charMap_strB[char])
            return false;
    }
    return true;

}

function buildcharMap(str) {
    const charMap = {};
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
    for (let char of cleanedStr) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap
}


console.log('\n method 1 \n');
console.log(anagram('rail safety', 'fairy tales'));
console.log(anagram('RAIL#$ SAFETY', 'FAIRTY ALES'));

//using the sort method.
function anagram2(string_a, string_b) {
    var arr1 = string_a.replace(/[^\w]/g, '').toLowerCase().split('');
    var arr2 = string_b.replace(/[^\w]/g, '').toLowerCase().split('');
    var string1 = arr1.sort().join('');
    var string2 = arr2.sort().join('');
    return string1 === string2;
}

console.log('\n method 2 \n');
console.log(anagram2('rail safety', 'fairy taleis'));
console.log(anagram2('RAIL#$ SAFETY', 'FAIRTY ALES'));
