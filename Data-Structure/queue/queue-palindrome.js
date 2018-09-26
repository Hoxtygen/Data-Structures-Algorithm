class Queue         {
    constructor(props) {
        this.items = [];
    }

    enqueue(element)   {
        this.items.push(element)
    }
    
    dequeue()   {
        this.items.shift();
    }

    unqueue()   {
        return this.items.pop()
    }

    print()     {
        console.log(this.items)
    }

    isEmpty()   {
        return this.items.length === 0;
    }

    front() {
        return this.items[0];
    }
    
}

function palindrome(str) {
    str = str.replace(/[^A-Za-z]/g, "").toLowerCase();
    let palQueue = new Queue();

    for (let i = 0; i < str.length; i++) {
        palQueue.enqueue(str[i])
    }
    let revStr = "";
    while (!palQueue.isEmpty()) {
        revStr += palQueue.unqueue()
    }
    revStr = revStr.split("").reverse().join("");   
     if (revStr === str) {
        return `${str} is a palindrome`;
    } else {
        return  `${str} is not a palindrome`;
    } 
}
console.log(palindrome("racecar"));
console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindrome("A ma09n, a pla1n, a can2al: Panama3"));


//return str = str.split("").reverse().join("");