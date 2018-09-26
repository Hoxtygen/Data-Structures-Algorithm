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

function isPalindrome(word) {
    // word = word.replace(/\W_/gi, "");
    
word = word.replace(/[^A-Za-z]/g, "").toLowerCase();
    //console.log(word);
    let paliStack = new Stack()
    for (let i = 0; i < word.length; i++) {
        paliStack.push(word[i])
    }
    let reverseWord = "";
    while (!paliStack.isEmpty()) {
        reverseWord += paliStack.pop();
    }
    //return reverseWord;
    if (reverseWord === word) {
        return `${word} is a palindrome`;
    } else {
        return  `${word} is not a palindrome`;
    }
}

console.log(isPalindrome("American"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("dad"));
console.log(isPalindrome("Dad"));

