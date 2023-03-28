function twoSum(nums, target) {

  for (let i = 1; i < nums.length; i++) {
    const add = target - nums[i];
    const index = nums.indexOf(add);
    if (index >= 0 && index !== i) return [i, index].sort((a,b) => a-b);
  }
  return [];
};

console.log(twoSum([2,5,5,11], 10));
