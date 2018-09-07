//Using ES6

//Takeaway

// 1. variables cannot be declared in the body of the class, it has to be done in the constructor
// 2. Reference can be made to the declared variable using this.declaredVariable.
// 3. The declared variable is public
// 4. ES6 classes are prototype based, thus saves memory and escalates better than function-based classes.
// 5. Doesn't allow the declaration of private properties(variables) or methods.

 class Stack {
    constructor() {
        this.items = [];
        
    }

    push(element)  {
        this.items.push(element)
    }

    pop()   {
        this.items.pop();
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

let overflow = new Stack();
overflow.push("foo");
overflow.push("bar");
console.log(overflow.peek());

console.log(overflow.size());

console.log(overflow.isEmpty());
overflow.print();

//overflow.pop();
//console.log(overflow.size());
