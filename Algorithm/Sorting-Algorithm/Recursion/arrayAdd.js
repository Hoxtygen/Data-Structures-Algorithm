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

//Understanding Array.slice(), makes no change to the original array unlike Array.splice that cuts out from the original
//array.
let myArr = [1, 2, 3, 4, 5, 6, 7];
let newArr = myArr.slice(1, 5)
console.log(newArr);
console.log(myArr);


