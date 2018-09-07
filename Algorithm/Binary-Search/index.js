function binary_search(list, item) {
    let low = 0;
    let high = list.length-1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
       // let guess = list[mid];
        if (list[mid] === item) {
            return list[mid];
        }
        if (list[mid] > item) {
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return false;
}

const arr = [1, 2, 3, 4, 5, 7, 9, 11, 43, 44, 50, 52, 76, 77, 88, 90, 98, 100, 102, 143, 150, 190, 200, 223, 300,  543];
console.time("binary");
console.log(binary_search(arr, 65450));
console.timeEnd("binary")
//console.log(binary_search(arr, 23));
//console.log(binary_search(arr, 77));
