// Symbol is immutable, and can be used as an object property
//The essence of this code here is to simulate private property using Symbol
/* 
This approach provides a false class private property, because the method
Object.getOwnPropertySymbols was also introduced in ES6, and it can be used to
retrieve all the property Symbols declared in the class

*/

let _items = Symbol()

class Stack {
    constructor() {
        this[_items] = [];
    }

    push(element)  {
        this[_items].push(element)
    }

    pop()   {
       return this[_items].pop();
    }

    peek()  {
        return this[_items][this[_items].length -1];
    }

    isEmpty()   {
        return this[_items].length === 0;
    }

    size()  {
        return this[_items].length;
    }

    print() {
        console.log(this[_items].toString())
    }

    clear() {
        return this[_items] = [];
    }
    
}

let overFlow = new Stack();
overFlow.push("Armageddon");
overFlow.push("foo");
overFlow.push("bar");
overFlow.push("bas");

//console.log(overFlow.size());
//overFlow.print()
//console.log(overFlow);
console.log(overFlow instanceof(Stack));


let objectSymbols = Object.getOwnPropertySymbols(overFlow);
//console.log(objectSymbols.length);
//console.log(objectSymbols);
overFlow[objectSymbols[0]].push("Marigold");
//objectSymbols[0].push("Marigold");
console.log(objectSymbols[0]); 

overFlow.print()

/* 
It is possible to retrieve the _items Symbol by accessing stack[objectSymbols[0]]. And, as the _items property is an array, 
we can do any array operation such as removing or adding an element to the middle of the array. But this is not what we want 
as we are working with a stack.

*/


