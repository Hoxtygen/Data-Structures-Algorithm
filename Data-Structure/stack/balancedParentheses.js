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

function balancedParentheses(str) {
  const container = new Stack();
  let temp;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === '{' || str[i] === '[' ||str[i] === '(') {
          container.push(str[i])
      }
      if (str[i] === '}' || str[i] === ']' ||str[i] === ')') {
          if (container.isEmpty()) {
              return false;
          }
          temp = container.pop();
          if (temp === '{' && str[i] !== '}') {
              return false;
          } else if (temp === '[' && str[i] !== ']') {
              return false
          } else if (temp === '(' && str[i] !== ')') {
              return false;
          }
      } 
  }
  if (container.isEmpty()) {
      return true
  } else {
      return false;
  }
}

console.log(balancedParentheses('[{}]'));
console.log(balancedParentheses('[{}{}{}{]'));
console.log(balancedParentheses('({[]}){}[][({})]'));
