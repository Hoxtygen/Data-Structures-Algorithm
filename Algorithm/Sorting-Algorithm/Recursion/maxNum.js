//Find the maximum number in a list

function maxNum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }else if(arr[0] < arr[1]) {
        return maxNum(arr.slice(1))
    } else{
        return maxNum([arr[0]].concat(arr.slice(2)))
    }
}

console.log(maxNum([2, 87, 64, 9, 5, 2]));
