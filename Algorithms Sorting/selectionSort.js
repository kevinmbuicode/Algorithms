// In this case, we select the first index to be the smallest and then progress through the array to and if
// there is a smaller number than the index, we make this new number the index;

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let minNum = i;
    let tempValue = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minNum]) {
        //update minimum if current is lower that what we had previously
        minNum = j;
      }
    }
    array[i] = array[minNum];
    array[minNum] = tempValue;
  }
  return console.log(array);
}

selectionSort(numbers);

