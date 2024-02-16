/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs)
 {
    let prefix='';
    let min=0;
       for (let k=0;k<strs.length;k++) 
       {
           if ((strs[k]).length<(strs[min]).length)
                min=k;
       }
       console.log(min);
        for (let i=0;i<strs[min].length;i++) 
       {
           letter=(strs[0])[i];
             for (let j=0;j<strs.length;j++) 
            {
                 if (letter!==(strs[j])[i])
                    return prefix;
            }
            prefix+=letter
       }
       return prefix;
};

