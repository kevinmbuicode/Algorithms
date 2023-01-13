class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return console.log(this.first); 
  }
  // Adding to the Queue
  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  // Removing from the Queue. FIFO First In First Out
  dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      this.last = null
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")
myQueue.dequeue()
myQueue.dequeue()
myQueue.peek()

//Joy
//Matt
//Pavel
//Samir