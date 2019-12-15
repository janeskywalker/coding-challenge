
/**
 * 
 * Given a string, find the length of the longest substring without repeating characters.


 */


var lengthOfLongestSubstring = function(s) {
    let longestLen = 0
    let startingIndex = 0

    function findLen(s) {
        var set = new Set()
        let len = 0
        for(let i=startingIndex; i<s.length; i++) {
            if(!set.has(s[i])) {
                set.add(s[i])
                len++
            } else {
                break
            }
        }
            
        longestLen = Math.max(longestLen, len)

        startingIndex++
        if(startingIndex < s.length-len-1) {
            findLen(s)
        }  
    }

    findLen(s)

    return longestLen

}
console.log(lengthOfLongestSubstring("pwawkew")) //3