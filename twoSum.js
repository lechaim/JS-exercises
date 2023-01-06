/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*//


var twoSum = function(nums, target) {
    // Iterate through each array element and the second second element of the first loop (a+1)
    for (let a = 0; a < nums.length; a++){
        for (let b = a+1; b < nums.length; b++){

            // if the sum of these numbers matches then return the positions of the elements
            if(nums[a] + nums[b] == target){
                return [a,b];
            }
        }
    }
};

console.log(twoSum([2,5,5,11], 10));
console.log(twoSum([3,2,4], 6));