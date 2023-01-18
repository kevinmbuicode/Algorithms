// MergeSort has a time compelixity of O(n log(n)) and a space complexity of O(n)
// In this case, we use the divide and conquer method(expect recursion), to sort through the input.
// We divide/split the input in half, and then divide the halves into halves until they are single inputs and on their own.
// We then compare these single inputs against each other as they came, ie, this compare the single input from the other input it had before while still in half.
// And then place the input with lesser value infront of the the input with greater value as you return them into halves; until the whole array is united again in a sorted manner.
// You aren't really going to be asled this in interviews, it takes time and there are libraries to help you do this, they are just gonna ask you to explain how it is implemented.


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
    if(array.length === 1) {
        return array;
    }
    // Split  array into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    // console.log('left:', left);
    // console.log('right:', right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // console.log("left:", left, "right:", right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

mergeSort(numbers)
merge()