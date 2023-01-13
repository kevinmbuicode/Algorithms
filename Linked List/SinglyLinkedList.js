// create a linked list in the following order
// 10-->5-->16

// A simple way to stop repetition in every method
// class Node {
//     constructor(value){
//         this.value = value,
//         this.next = null;
//     }
// }


class SinglLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const formattedList = [];
        let currentNode = this.head
        while(currentNode !== null){
            formattedList.push(currentNode.value)
          currentNode = currentNode.next;
        }
        // You can remove the console
        return console.log(formattedList);
    }

    insert(index, value) {
        // check params
        if(index >= this.length) {
            return this.append(value)
        }

        const newNode = {
            value: value,
            next: null
        };

        const beforeIndex = traverseToIndex(index - 1 );
        const pointedIndex = beforeIndex.next;
        beforeIndex.next = newNode;
        newNode.next = pointedIndex;
        this.length++;
        return this.printList()
    }
    // error occuring here, traverse can't tell what index value is
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    remove(index){
        // check params first
        const leader = this.traverseToIndex(index - 1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this.printList()
    }

    reverse() {
        if(!this.head.next){
          return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
          const temp = second.next;
          second.next = first;
          first = second;
          second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList()
      }

}



const myLinkedList = new SinglLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(22, 34)
// myLinkedList.remove(1)
// myLinkedList.printList()
// console.log(myLinkedList)