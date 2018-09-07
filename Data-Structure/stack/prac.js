

class Stack     {
    constructor()   {
        this.items = [];
    }

    //other methods

    push(value)  {
        this.items.push(value);
    }

    pop()   {
        return this.items.pop();
    }

    peek()  {
        return items[this.items.length - 1];
    }

    print() {
        console.log(this.items.toString());
    }

    size()  {
        return this.items.length;
    }

    isEmpty()   {
        return this.items.length === 0;
    }

    clear()    {
        return this.items = [];
    }
}

function convertToDecimal(decNumber) {
    let convertStack = new Stack();
    let remainder;
    let binaryString = "";

    while (decNumber > 0) {
        remainder = Math.floor(decNumber % 2);
        convertStack.push(remainder);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!convertStack.isEmpty()) {
        binaryString += convertStack.pop();
    }
    return binaryString;
}

console.log(convertToDecimal(255));
