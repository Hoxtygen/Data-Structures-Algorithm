//Decimal to binary conversion using Stack

class Stack {
    constructor() {
        this.items = [];
        
    }

    push(element)  {
        this.items.push(element)
    }

    pop()   {
       return this.items.pop();
    }

    peek()  {
        return this.items[this.items.length -1];
    }

    isEmpty()   {
        return this.items.length === 0;
    }

    size()  {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString())
    }

    clear() {
        return this.items = [];
    }
    
}

 function divideBy2(decNumber) {
    let remStack = new Stack();
    let rem;
    let binaryString = "";

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop();
    }
    //console.log(binaryString);
    
    return binaryString;
}

console.log(divideBy2(232)); 
