//Add together items in a list

function add(arr) {
    if (arr.length === 0) {
        return 0;
    }else {
       return  arr[0] + add(arr.slice(1));
    }
}
console.log(add([1, 2, 3, 4, 5]));

//Understanding Array.slice(), makes no change to the original array unlike Array.splice that cuts out from the original
//array.
let myArr = [1, 2, 3, 4, 5, 6, 7];
let newArr = myArr.slice(1, 5)
console.log(newArr);
console.log(myArr);


