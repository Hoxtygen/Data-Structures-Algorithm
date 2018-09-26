function countDown(val) {
    console.log(val);
    
    if (val <= 1) {//Base case
        return 1;
    } else {
     countDown(val - 1);//Recursive case
    }
}

console.log(countDown(10));
