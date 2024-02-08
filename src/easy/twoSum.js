/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let array;
  for (let i=0; i<nums.length;i++)
  {
       for (let j=0; j<nums.length;j++)
       {
           if (i!==j){
               if (nums[i]+nums[j]===target)
               {
               console.log(`[${i},${j}]`);
               array=[i,j];
               return(array);
               }

           }
       }
  }
};