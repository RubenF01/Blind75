// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const arr1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const arr2 = [1, 2, 3, 1];
const arr3 = [1, 2, 3, 4, 4];

const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && j !== i) return true;
    }
  }
  return false;
};
