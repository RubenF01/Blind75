// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
  let initial = 0;
  let answer = 0;

  while (answer < target) {
    answer = nums[initial] + nums[initial + 1];
    initial++;
  }

  return [initial - 1, initial];
};
