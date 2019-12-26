/* 

=========================Available Methods====================================

push(element(s)): This adds a new item (or several items) to the top of the
stack.

pop(): This removes the top item from the stack. It also returns the removed
element

peek(): This returns the top element from the stack. The stack is not modified (it
does not remove the element; it only returns the element for information
purposes). If we would like toknow what the last item added to our stack was, we can use the peek method. 
This method will return the item from the top of the stack:

isEmpty(): This returns true if the stack does not contain any elements, and false
if the size of the stack is bigger than 0.

clear(): This removes all the elements of the stack.

size(): This returns the number of elements that the stack contains. It is similar
to the length property of an array


*/



let items = [];

function Stack() {
    this.push = function(element)  {
        return items.push(element)
    }

    this.pop = function () {
        return items.pop();
     }

     this.peek = function () {
         return items[items.length -1];
     }

     this.isEmpty = function () {
         return items.length === 0;
     }

     this.size = function () {
         return items.length;
     }

     this.clear = function () {
         return items = [];
     }

     this.print = function () {
         console.log(items.toString());
     }
    
}

 let myStack = new Stack();
 console.log(myStack.isEmpty());
 myStack.push("Agnostic");
 myStack.push("fundamental");
 myStack.push("Influential");
 console.log(myStack.size())
 console.log(myStack.peek());
 console.log(myStack.isEmpty());
 myStack.pop();
 console.log(myStack.size())

 