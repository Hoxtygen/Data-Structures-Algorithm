/* 
This is a data type that can be used within classes to keep property private, it can store key/value pair, 
where the key is an object and the value can be any data type.
*/


const items = new WeakMap();

class Stack {
    constructor() {
        items.set(this, []);
        
    }

    push(element)  {
        let s = items.get(this);
        s.push(element)
    }

    pop()   {
        let s = items.get(this);
        let r = s.pop();
        return r;
    }

    peek()  {
        let s = items.get(this)
        return s[s.length -1];
    }

    isEmpty()   {
        let s = items.get(this)
        return s.length === 0;
    }

    size()  {
        let s = items.get(this)
        return s.length;
    }

    print() {
        let s = items.get(this)
        console.log(s.toString())
    }

    clear() {
        let s = items.get(this)
        return items = [];
    }
    
}

let heyStack = new Stack()
heyStack.push("elementary");
heyStack.push("Taani");
heyStack.print();
console.log(heyStack.size());
console.log(heyStack.isEmpty());
console.log(heyStack.peek());
console.log(heyStack.pop());

//The items variable is now private within the class,declared outside the class but it can still be modified by 
//anyone. To stop this from happening We will wrap the Stack class with a closure (an outer function), so the 
//WeakMap has scope only inside the function;

let Stack = (function () {
        const items = new WeakMap();

        class Stack {
            constructor() {
                items.set(this, []);
                
            }

            push(element)  {
                let s = items.get(this);
                s.push(element)
            }

            pop()   {
                let s = items.get(this);
                let r = s.pop();
                return r;
            }

            peek()  {
                let s = items.get(this)
                return s[s.length -1];
            }

            isEmpty()   {
                let s = items.get(this)
                return s.length === 0;
            }

            size()  {
                let s = items.get(this)
                return s.length;
            }

            print() {
                let s = items.get(this)
                console.log(s.toString())
            }

            clear() {
                let s = items.get(this)
                return items = [];
            }
            
        }
    return Stack;
})();

//When the constructor of the Stack function is called, it will return an instance of the Stack class
/* 
Now the Stack class has a private property named items. It is still an ugly solution, but it
works regarding the privacy of the properties. However, with this approach, it is not
possible to inherit the private properties if we extend this class; we cannot have it all!

The truth is that although, ES6 introduced the class syntax, we still cannot declare private
properties or methods as it is possible in other programming languages. There are different
approaches with which we can achieve the same result, but each one has its pros and cons
regarding a simpler syntax or performance.
*/