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

 function converter(decNumber) {
    let decimalConverter = new Stack();
    let remainder;
    let binaryString = "";

    while (decNumber > 0) {
        remainder = Math.floor(decNumber % 2);
        decimalConverter.push(remainder);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!decimalConverter.isEmpty()) {
        binaryString += decimalConverter.pop();
    }
    return binaryString;
}

console.log(converter(255)); 
