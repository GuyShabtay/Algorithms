/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let i,j;
  for(i=0;i<haystack.length;i++)
  {
      if (haystack[i]===needle[0])
      {
          let haystackIndex=i;
          for(j=0;j<needle.length;j++,haystackIndex++)
          {
              if(haystack[haystackIndex]!==needle[j])
                  break;
          }
          if (j===needle.length)
          return i;
      }
  }
  return -1;
};