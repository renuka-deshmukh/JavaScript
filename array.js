function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));


function secondLargest(arr) {
    let max = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num !== max) {
            second = num;
        }
    }
    return second;
}
console.log(secondLargest([1, 3, 2, 5, 4]));


function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeUnique([1, 2, 3], [2, 3, 4]));


function frequencyCount(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log(frequencyCount([1, 2, 2, 3, 3, 3]));


function includesManual(arr, target) {
    for (let item of arr) {
        if (item === target) return true;
    }
    return false;
}
console.log(includesManual([1, 2, 3], 2));


function shiftLeft(arr) {
    if (arr.length === 0) return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(shiftLeft([1, 2, 3, 4]));


function rotateRight(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateRight([1, 2, 3, 4, 5], 2));


function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));


function multiplicationTable() {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
console.table(multiplicationTable());



function intersection(arr1, arr2) {
    let set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));