// Find factorial of a given number iterative 
function findFactorialIterative(number) {
    let answer = 1;
    for(let i = 1; i <= number; i++){
        answer = answer * i
    }
    return console.log(answer)
}


// Find factorial of a given number Recursive
// For recursive we usually have 2 returns, base case and recursive
function findFactorialRecursive(number) {
    // Base case
    if(number === 2) {
        return 2;
    }

    return number * findFactorialRecursive(number - 1);
}

findFactorialIterative(5);
findFactorialRecursive(5);