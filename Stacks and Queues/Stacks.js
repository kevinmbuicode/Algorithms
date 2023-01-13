// STACKS WITH LINKED LISTS

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    const lastNode = this.top;
    return console.log(lastNode);
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return console.log(this);
  }
  // Removing from the Stack. LIFO. Last In First Out
  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return console.log(this);
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push(20);
myStack.push(20);
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

//  < --------------------------------------------- >  //
// STACKS WITH ARRAYS
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack2 {
  constructor() {
    this.array = [];
  }

  peek() {
    const lastNode = this.array[this.array.length - 1];
    return console.log(lastNode);
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    this.array.pop();
    return this;
  }
  //isEmpty
}

const myStack2 = new Stack2();
myStack2.push(20);
myStack2.push(20);
myStack2.peek();
myStack2.pop();
myStack2.pop();
myStack2.pop();
