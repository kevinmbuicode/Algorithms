// Implementing an array from scratch.

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        this.shiftItems(this.data[index])
    }

}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("Kev");
newArray.push("Mbui");
newArray.pop();
console.log(newArray)
