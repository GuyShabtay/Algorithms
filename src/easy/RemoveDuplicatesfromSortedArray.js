/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const uniqueNumbers = Array.from(new Set(nums));
  let subArrays=[],currentSubArray = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          currentSubArray.push(nums[i]);
      } else {
          subArrays.push(currentSubArray);
          currentSubArray = [nums[i]];
      }
  }
  subArrays.push(currentSubArray);
  nums.splice(0, nums.length, ...uniqueNumbers);
  return subArrays.length;
};

