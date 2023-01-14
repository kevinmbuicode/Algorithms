const numbers = [7, 2, 5, 6, 8, 1, 2, 4, 3];

function BubbleSort(nums) {
    const len = nums.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(nums[j] > nums[j + 1]){
                let tempVariable = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tempVariable;
            }
        }
    }
    return console.log(nums)
}

BubbleSort(numbers);