// const mixedArray = [1, NaN, 2, 12, 0, -1, undefined, 'jashim', true, 'NaN1', '1jashim'];
const mixedArray1 = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const mixedArray2 = ['1', { num: 2 }, NaN];
const mixedArray3 = [1, 2, -3];
const mixedArray4 = { num: [1, 2, 3] };

function deleteInvalids(arr){
    // console.log(typeof arr);
    if (Array.isArray(arr) !== true) {
        return `'Invalid Array'`;
    }
    const newarr = [];
    for (let index of arr) {
        // console.log(index);
        if (typeof index !== 'number' || isNaN(index) === true) {
            continue;
        }
        else {
            newarr.push(index);
        }
    }
    return newarr;
}

console.log(deleteInvalids(mixedArray3));