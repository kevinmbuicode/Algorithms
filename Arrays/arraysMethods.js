// Here are some examples of common array methods in JavaScript and their associated time complexity (big O notation):

// 1. push(): This method adds an element to the end of an array. Time complexity: O(1)

// 2. pop(): This method removes the last element of an array. Time complexity: O(1)

// 3. shift(): This method removes the first element of an array. Time complexity: O(n)
// Eg:
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

// 4. unshift(): This method adds an element to the beginning of an array. Time complexity: O(n)

// 5. slice(): This method returns a new array with a selected portion of an array. Time complexity: O(n)
// Eg:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// 6. splice(): This method modifies an array by adding or removing elements. Time complexity: O(n)
// Eg:
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// 7. sort(): This method sorts the elements of an array. Time complexity: O(n log n)

// 8. filter(): This method returns a new array with elements that pass a given test in a function. Time complexity: O(n)
// Eg:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// 9. map(): This method creates a new array with the results of calling a provided function on every element in the calling array. Time complexity: O(n)

// 10. forEach(): This method calls a provided function once for each element in an array. Time complexity: O(n)
const array2 = ['a', 'b', 'c'];

array2.forEach(element => console.log(element));

// 11. concat(): This method returns a new array that consists of the elements in the original array, followed by the elements in the specified array(s) or value(s). Time complexity: O(n)

// 12. join(): This method joins all elements of an array into a string. Time complexity: O(n)

// 13. reduce(): This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. Time complexity: O(n)

// 14. find(): This method returns the value of the first element in the array that satisfies the provided testing function. Time complexity: O(n)

// 15. findIndex(): This method returns the index of the first element in the array that satisfies the provided testing function. Time complexity: O(n)

// 16. some(): This method tests whether at least one element in the array passes the test implemented by the provided function. Time complexity: O(n)

// 17. every(): This method tests whether all elements in the array pass the test implemented by the provided function. Time complexity: O(n)

// 18. indexOf(): This method returns the first index at which a given element can be found in the array, or -1 if it is not present. Time complexity: O(n)

// 19. lastIndexOf(): This method returns the last index at which a given element can be found in the array, or -1 if it is not present. Time complexity: O(n)

// 20. includes(): This method determines whether an array includes a certain value among its entries, returning true or false as appropriate. Time complexity: O(n)
