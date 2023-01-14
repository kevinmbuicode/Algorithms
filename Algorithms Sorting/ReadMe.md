## The issue with Sort Method in Languages
If you try something like:  
`const numbers = [3, 7, 2, 5, 8, 37, 2, 1];`  
`numbers.sort();`
You will end up with something like this:
`[1, 2, 2, 3, 37, 5, 7, 8];`  
It is not really sorted, is it? That is because sort function converts the inputs to strings and their charCodeAt are different hence the unexpected output.  
You could use a funtion like this `numbers.sort(function(a, b) {return a - b})`, but well, the time and space complexity for sort cannot be guaranteed as it is implementation dependent. This is why we are going to implement our own.
