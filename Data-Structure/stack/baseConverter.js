//Base converter

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

function baseConverter(decNumber, base) {
    let converterStack = new Stack();
    let remainder;
    let baseString = "";
    let digits ="0123456789ABCDEF";

    while (decNumber > 0) {
        remainder = Math.floor(decNumber % base);
        converterStack.push(remainder);
        decNumber = Math.floor(decNumber / base);
    }

    while (!converterStack.isEmpty()) {
        baseString += digits[converterStack.pop()];
    }
    return baseString;
}

console.log(baseConverter(255, 2));
