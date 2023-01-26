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
        // const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }

}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("Kev");
newArray.push("Mbui");
newArray.push("Mushan");
newArray.push("Mushan2");
// newArray.pop();
newArray.delete(2);
console.log(newArray)
