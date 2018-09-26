function add(arr) {
    let total = 0;
    if (arr.length === 0) {
        return 0;
    }else {
      total = arr[0] + add(arr.slice(1));
    }
    return total;
}
console.log(add([1, 2, 3, 4, 5]));
