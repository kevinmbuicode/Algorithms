// Implementing an array from scratch.

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    };

    get(index) {
        return this.data[index];
    }
}
