// Has a time compelexity of O(n) and a space complexity of O(1) because we are not really storing anything.
// We first loop over the array and if there is an item lesser than the first item, we move that item using the unshift method.
// Otherwise, we loop through the array, do an if statement see wherre the number should go, and then move that item in that spot using the splice method.


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function insertionSort(array){
    const length = array.length;
    for(let i = 0; i < length; i++) {
        if(array[i] < array[0]){
            // Move number to first position
            array.unshift(array.splice(i, 1)[0]);
        }else {
            // Find where number should go
            for(let j = 1; j < i; j++){
                if (array[i] > array[j - 1] && array[i] < array[j]){
                    // Move number to the right spot
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }
    }
}

insertionSort(numbers)