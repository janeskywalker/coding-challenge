/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 */

var reverse = function(x) {

    const max = Math.pow(2, 31)
    let str = x.toString()
    // alternative: let str = x.toString().split("").reverse().join("")

    let reversed = ''
    for(let char of str) {
        reversed = char+reversed
    }

    if(reversed[reversed.length -1] === '-' ) {
        reversed = "-" + reversed.substring(0, reversed.length - 1)
    }

    const result = Number(reversed)
    return result < -max || result > max ? 0 : result
}
// console.log(reverse(123)) //321
// console.log(reverse(-123)) //-321
// console.log(reverse(1200)) //21
// console.log(reverse(1534236469)) //21










 /**
  * write a function that takes a string and an array, return true if the string can be built with elements from the array, otherwise return false
  * 
  * what about when str=''
  */

 function canBuild(str, arr) {
    let subStr = ''
    for(let i=0; i<str.length; i++) {
        subStr=subStr+str[i]
        // console.log({subStr})
        if(arr.includes(subStr)){
            subStr=''
        } 
    }

    console.log({subStr})
    if(subStr==='') {
        return true
    } else {
        false
    }
    
}

//   console.assert(canBuild(('abcefg'), ['abc', 'dt', 'efg']) === true)
 











/**
 * Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

Function Description
Complete the isValid function in the editor below. It should return either the string YES or the string NO.
isValid has the following parameter(s):
s: a string


Sample Input 0
aabbcd
Sample Output 0
NO



Sample Input 1
aabbccddeefghi
Sample Output 1
NO


Sample Input 2
abcdefghhgfedecba
Sample Output 2
YES

 */



function SherlockValidString(s) {
    const Yes='YES'
    const No='NO'
   const charHash = {}
   for(char of s) {
       if(!charHash.hasOwnProperty(char)){
           charHash[char] = 1
       } else{
           charHash[char] ++
       }
   }

   const values = Object.values(charHash)
   
   values.sort((a, b)=>a-b)
   
   if(values[values.length-1] - values[0]>1) {
       return No
   }

   const newValues = values.map(value=>value-values[0])

   let count1 = 0
   newValues.map((value)=>{
       if(value>0) {
           count1++
       }
   })

   if(count1 > 1) {
       return No
   }

   return Yes 
   

}

//  console.log(SherlockValidString('aabbcd'))
//  console.log(SherlockValidString('aaabbcd'))
//  console.log(SherlockValidString('abcdefghhgfedecba'))
//  console.log(SherlockValidString('aabbccddeefghi'))











   /**
    * Function Description
Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.
repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider
Input Format
The first line contains a single string, . 
The second line contains an integer, .

Sample Input 0
aba
10
Sample Output 0
7
Explanation 0 
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.
Sample Input 1
a
1000000000000
Sample Output 1
1000000000000
Explanation 1 
Because all of the first  letters of the infinite string are a, we print  on a new line.
    */



   function countA(str, n) {
    let count = 0

    if(n <= str.length) {
        for(let i=0; i<n; i++) {
            if(str[i] === "a") {
                count ++
            }
        }
        return count

    } else {
        let numInOneBlock = 0 
        for(let i=0; i<str.length; i++) {
            if(str[i] === "a") {
                numInOneBlock ++
            }
        }

        const numOfBlocks = Math.floor(n/str.length)

        const remainder = n % str.length

        let count = 0 

        for(let i=0; i<remainder; i++) {
            if(str[i] === "a") {
                count ++
            }
        }

        let result
        result = numOfBlocks * numInOneBlock + count

        return result

    }
}

// console.log(countA('abcdfaaf', 3))













   /**
    * 
    * u are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
Your task is to find the minimum number of required deletions.
For example, given the string , remove an  at positions and  to make  in  deletions.
    */

   function minimalDeletion (str) {
    let count = 0
    for(let i=0; i<str.length; i++) {
        if(str[i] === str[i+1]) {
            count++
        }
    }
    return count
   }



//    console.log(minimalDeletion('AAAA'))
//    console.log(minimalDeletion('BBBBB'))
//    console.log(minimalDeletion('ABABABAB'))
//    console.log(minimalDeletion('BABABABA'))
//    console.log(minimalDeletion('AAABBB'))






/*
You just bought a delicious, yet odorless, cheese for your pet mice. Unfortunately some of them are blind, so they start walking away from this otherwise-irresistible treat!  Write a function blindMice() that will find out how many of your mice are blind. This function should accept a single argument, a string representing the mice and the cheese, and returns the number of mice that are blind. We can assume that all mice walking away from the cheese are blind, while those walking towards it are not.   Cheese: 'C'  Mice walking right: '~M'  Mice walking left: 'M~'  (The '~' is the tail)  Example inputs and correct return values:  "M~~M ~MM~C~MM~M~" à return the number 3 "~M~M~MC M~~M" à return the number 1 "~M CM~~M~M" à return the number 2

**/


// Parsing string into tokens
// State machine
function countBlindMice(strM) {
    let hasSeenC = false
    let blind = 0
    for(let i=0; i<strM.length; i++) {
        const char = strM[i]
        switch(char) {
            case "M":
                if(strM[i+1] === "~") {
                    if(hasSeenC === false) {
                        blind = blind+1
                    }
                    
                    i = i+1
                }
                else {
                    throw new Error('invalid input')
                }
            break;
            case "~":
                if(strM[i+1] === "M") {
                    if(hasSeenC) {
                        blind = blind+1
                    }
                    i = i+1
                }
                else {
                    throw new Error('invalid input')
                }
            break;
            case "C":
                hasSeenC = true
        }
    }
    return blind
}

// console.log("blind:", countBlindMice("M~~M ~MM~C~MM~M~")) //3
// console.log(countBlindMice("~M~M~MC M~~M")) //1
// console.log(countBlindMice("~M CM~~M~M")) //2









// Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers.

function inserDash(num) {
    str = num.toString()
    newStr = ""
    for( let i=0; i<str.length; i++) {
        if(str[i] % 2 === 1 && str[i-1] %2 === 1) {
            // console.log(str[i])
            // str[i-1] = "-" + str[i]
            newStr = newStr + "-" + str[i]
        }

        else {newStr = newStr + str[i]}
    }
    return newStr
}

// console.log(inserDash(4335767999))











// Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence

// correctSpacing("The film   starts       at      midnight. ")
// ➞ "The film starts at midnight."

// correctSpacing("The     waves were crashing  on the     shore.   ")
// ➞ "The waves were crashing on the shore."

// correctSpacing(" Always look on    the bright   side of  life.")
// ➞ "Always look on the bright side of life."

function removeSpace(sentence) {
    return sentence = sentence.replace(/\s+/g, " ").trim()
}
// console.log(removeSpace("The film   starts       at      midnight. "))
// console.log(removeSpace(" Always look on    the bright   side of  life."))












// given a string a digits, return the largest 3-digit number that can be found as a substring of the given string

// '12345" => 345
// "98734" => 987
// "4359768" => 976
// "43578" => 976
// "43587" => 976

// find the largest num, 
// if largest num is the last or second last, find the second largest number
// if the scond largest is the last or second last, find the third lagest


function findLargest(str) {
    // console.log(sortedArr = str.split('').map(char=>parseInt(char)).sort())

    const length = str.length // 5

    const largestNum = sortedArr[length - 1] 
    const secondLarge = sortedArr[length - 2]
    const thirdLarge = sortedArr[length - 3]
    
    const largestIndex = str.indexOf(largestNum) // 
    const secondIndex = str.indexOf(secondLarge) // 
    const thirdIndex = str.indexOf(thirdLarge) // 

    if (largestIndex < str.length - 2) {
        return str.substring(largestIndex, largestIndex + 3)
    }
        
    if (secondIndex < str.length - 2) {
        return str.substring(secondIndex, secondIndex + 3)
    }

    return str.substring(thirdIndex, thirdIndex + 3)

}

// console.log(findLargest("00809040021389"))








// leetcode easy green

/**
 * reverse words in a string
 */

function reverseWords(s) {
    let temp = ""
    let reversed = ""
    for(let i=0; i<s.length; i++) {
        if(s[i]===" ") {
            reversed = reversed + temp + " "
            temp = ""
        } 

        else if(i===s.length-1) {
            temp = s[i] + temp
            reversed = reversed + temp
        } 
        else {
            temp = s[i] + temp
        }
    }
    return reversed
 }


//  console.log(reverseWords(["h","e","l","l","o"]))
//  console.log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
 
 







//  function reverseWords2(s) {
//     let reversed
//     reversed = s.trim().replace( /\s\s+/g, ' ' ).split(' ').reverse().join(' ')
//     return reversed
//  }
 
 
function reverseWords2(s) {
    let trimed = s.trim().replace(/\s\s+/g, ' ')
    let temp = ""
    let reversed = ""

    for(let i=0; i<trimed.length; i++) {

        if(trimed[i] === " ") {
            reversed = " " + temp + reversed
            temp = ""
        } else if(i===trimed.length-1) {
            temp = temp + trimed[i]
            reversed = temp + reversed
        } else {
            temp = temp + trimed[i]
        }
    }

    // console.log({reversed})
}


//   console.log(reverseWords2("the sky is blue"))
//   console.log(reverseWords2("  hello world!  ")) //"world! hello"
//   console.log(reverseWords2("a good   example")) // "example good a"



  












    
// reverseWordOrder v2

// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

function reverse(str) {

    let currentWord = ""
    let reversedStr = ""

    for(let i=0; i<str.length + 1; i++) {
        if(str[i] === " " || i === str.length) {
            reversedStr = currentWord + ' ' + reversedStr
            currentWord = ""
        } 
        
        else {
            currentWord = currentWord + str[i]
        }
        
        // console.log({currentWord})
        // console.log({reversedStr})
    }
}
    
// console.log(reverse("I am Jane"))







/**
 * longest palindrome
 */

function longestPalindrome(s) {
    let map = {}
    let pairs = 0

    for(char of s) {
        if(!map.hasOwnProperty(char)) {
            map[char] = 1
        } else {
            delete map[char]
            pairs++
        }
    }
    let single = Object.keys(map).length >= 1 ? 1 : 0
    const answer = pairs * 2 + single
    return answer
}
// console.log(longestPalindrome("abccccdd"))













/**
 * longest word in dictionary
 */
function longestWord(words) {
    words.sort()
    let set = new Set()
    let ans = ""

    for(word of words) {
        if (word.length === 1 || set.has(word.slice(0, -1))) {
            set.add(word);
            if (word.length > ans.length) {
              ans = word;
            }
        // console.log(ans)
        }
    }
    return ans
 }



//  console.log(longestWord(["w","wo","wor","worl", "world"])) // world
//  console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])) // apple
//  console.log(longestWord(["b","br","bre","brea","break","breakf","breakfa","breakfas","breakfast","l","lu","lun","lunc","lunch","d","di","din","dinn","dinne","dinner"])) // apple














/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
 */

var isValid = function(s) {
    let map = new Map
    map.set('[', ']')
    map.set('{', '}')
    map.set('(', ')')

    const openParents = []

    for(parent of s) {
        console.log({parent})
        if(map.has(parent)) {
            openParents.push(parent)
            console.log({openParents})
        } else {
            lastParent = openParents.pop()
            console.log({lastParent})
            if(parent !== map.get(lastParent)) {
                return false
            }
        }
    }
    
    if(openParents.length > 0) {
        return false
    }
    return true
}
// console.log(isValid("()[]{}"))
// console.log(isValid("([)]"))
// console.log(isValid("("))











/**
 * 
 *Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */

var longestCommonPrefix = function(strs) {
    let res = ""
    if(strs.length === 0) {
        return res
    }
    let str1 = strs[0]
    for(i=0; i<str1.length; i++) {
        for(j=1; j<strs.length; j++){
            if(strs[j][i] !== str1[i]) {
                return res
            }
        }
        res = res+str1[i]
    }
    return res
};


// console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
// console.log(longestCommonPrefix(["a"])) // "a"
// console.log(longestCommonPrefix(["", ""])) // ""
// console.log(longestCommonPrefix(["c", "c"])) // "c"
// console.log(longestCommonPrefix(["aa", "aa"])) // "aa"
// console.log(longestCommonPrefix(["caa","","a","acb"])) // ""
// console.log(longestCommonPrefix([])) // ""













/**
 * first unique char of a string
 */

var firstUniqChar = function(s) {
    if(s.length === 0) {
        return -1
    }
    for(char of s) {
        if(s.indexOf(char) === s.lastIndexOf(char)) {
            return s.indexOf(char)
        }
    }
    return -1
}
// console.log(firstUniqChar("leetcode")) // 0
// console.log(firstUniqChar("loveleetcode")) // 2
// console.log(firstUniqChar("")) // -1

















/**
 * Valid palindrome
 * 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.
 */



var isPalindrome = function(s) {
    // remove all non-alphanumeric charactors and spaces
    s = s.replace(/[^a-zA-Z0-9+]/g, "").replace(/\s/g, "").toLowerCase()

    if(s.length === 0 || s.length === 1) {
        return true
    }

    const midIndex = s.length % 2 === 0 ? s.length : s.length -1
    const lastIndex = midIndex/2 -1

    for(let i=0; i<= lastIndex; i++) {
        if(s[i] !== s[s.length - 1 - i]) {
            return false
        }
    } return true

};


// var isPalindrome = function(s) {
//     s = s.replace(/[^a-zA-Z0-9+]/g, "").replace(/\s/g, "").toLowerCase()

//     let reversed = ""
//     for(let i=0; i<s.length; i++) {
//         reversed = s[i] + reversed
//     } 
//     return reversed === s
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
// console.log(isPalindrome("race a car")) // false
// console.log(isPalindrome("")) // true
// console.log(isPalindrome("c#dc")) // true











/**
 * Valid Palidrome II
 * 
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
 *  */

var isPalindrom = function(s) {
    let reversed = ""
    for(let i=0; i<s.length; i++) {
        reversed = s[i] + reversed
    } 
    return reversed === s
};


var validPalindrome = function(s) {
    let l = 0
    let r = s.length -1

    // this keep looping
    while(l<r) {
        if(s[l] === s[r]) {
            l++
            r--
        } else {
            // this is to delete one char: 
            return isPalindrom(s.substring(l, r)) || isPalindrom(s.substring(l+1, r+1))
        }
    }
    return true

};


// alternative solution:
// var validPalindrome = function(s) {
//     var l = 0;
//     var r = s.length - 1;
    
//     while (l <= r) {
//         if (s[l] === s[r]) {
//             l ++;
//             r --;
//         } else return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1);
//     }
//     return true;
// };

// var isPalindrome = function(str, l, r) {
//     while (l <= r) {
//         if (str[l] === str[r]) {
//             l ++;
//             r --;
//         } else return false;
//     }
//     return true;
// }


// console.log(validPalindrome('aba')) // true
// console.log(validPalindrome('abca')) // true
// console.log(validPalindrome('cbatac')) // true
// console.log(validPalindrome('cbddab')) // true




















/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 */

var isPalindromeNum = function(x) {
    if( x < 0 ) {
        return false
    }

    let str = x.toString().split('').reverse().join('')
    let reversed = Number(str)
    
    return reversed === x
}
// console.log(isPalindromeNum(121)) // true
// console.log(isPalindromeNum(-121)) // false
// console.log(isPalindromeNum(10)) // false





















/**
 * In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.
 */


var isAlienSorted = function(words, order) {
    for(let i=0; i<words.length -1; i++) {
        let currentWord = words[i]
        let nextWord = words[i+1]
        console.log(currentWord, nextWord)
        for(let j=0; j<currentWord.length; j++) {
            let charA = currentWord.charAt(j)
            let charB = nextWord.charAt(j)

            console.log(charA, charB)
            console.log(order.indexOf(charA))
            console.log(order.indexOf(charB))

            if(order.indexOf(charA)<order.indexOf(charB)) {
                break
            } else {
                if(order.indexOf(charA)>order.indexOf(charB)){
                    return false
                }

            }
        }
    }
    return true
}
// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")) // true
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")) // false
// console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")) // false















 /**
  * You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

  */

 var removeId = (log) => {
    log = log.slice(log.indexOf(' ') + 1)
    return log
}

var isNum = (char) => {
    return /\d/.test(char)
}


 var reorderLogFiles = function(logs) {
     let digArr = []
     let letArr = []
     for(log of logs) {
        const newlog = removeId(log)
        if(isNum(newlog[0])) {
            digArr.push(log)
        } else {
            letArr.push(log)
        }
     }

     console.log(letArr)
     // comparing function for 2 strings,
     function compare(a, b) {
        console.log({a, b})

        // localeCompare does the comparison 
        const res = removeId(a).localeCompare(removeId(b))
        console.log({res})

        // if they're equal then compares identifiers
        if(res === 0) {
            return a.slice(0, a.indexOf(" ")).localeCompare(b.sclice(0, b.indexOf(" ")))
        }
        return res
     }
     console.log("before sorting", letArr)

     letArr.sort(compare)
     return [...letArr, ...digArr]
}
// console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])) //["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

















/**
 * string sorting problems
 */
const strs = ['c', 'bd', 'd', 'a']

// const nums = [ 24, 3, 1 ]

// strs.sort()

strs.sort((a,b) => {
    if( a > b ) {
        return 1
    } 
    
    if ( a < b) {
        return -1
    } 
    
    if ( a === b ) {
        return 0
    }
})

// nums.sort()

// nums.sort((a,b) => {
//     if( a > b ) {
//         return 1
//     } 
    
//     if ( a < b) {
//         return -1
//     } 
    
//     if ( a === b ) {
//         return 0
//     }
// })



// console.log(nums)
// console.log(strs)















/**
 * Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.
 */

var mostCommonWord = function(paragraph, banned) {
    let map = new Map
    paragraph = paragraph.toLowerCase().split(/\W+/)
    // paragraph = paragraph.replace(/[!?',;.]/g, "").toLowerCase().split(" ");

    for(word of paragraph) {
        if(!map.has(word)) {
            map.set(word, 0)
        }
        map.set(word, map.get(word) + 1)
    }

    const temps = map.keys()

    max = ''
    count = 0

    for(temp of temps) {
        if(banned.indexOf(temp) === -1 && map.get(temp) > count) {
            max = temp
            count = map.get(temp)
        }
    }
    return max    
};
// console.log(mostCommonWord("Bob hit a ball, hit BALL it was hit.", ["hit"])) // "ball"
// console.log(mostCommonWord("Bob!", [])) // "bob"














/**
 * add strings
 * 
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 * 

    The length of both num1 and num2 is < 5100.
    Both num1 and num2 contains only digits 0-9.
    Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.

 */

const addStr = (num1, num2) => {
    let sum = ""
    let carryOver = 0
    let i = num1.length - 1
    let j = num2.length - 1

    while( i >= 0 || j>=0) {

        let n1 = Number(num1[i])
        let n2 = Number(num2[j])
        
        if (i < 0) {
            n1 = 0;
        }
        if (j < 0) {
            n2 = 0;
        }

        currentSum = n1 + n2 + carryOver
        carryOver = 0 

        if(currentSum > 9) {
            carryOver = 1 
            currentSum = currentSum % 10 
            sum = currentSum.toString() + sum 
            
        } else {
            sum = currentSum.toString() + sum
        }

        i--
        j-- 
    }

    if(carryOver === 1) {
        sum = "1" + sum
    }

    return sum
 }
//  console.log(addStr("123", "45")) // 168
//  console.log(addStr("10", "45")) // 55
//  console.log(addStr("5", "47")) // 52
//  console.log(addStr("55", "45")) // 100
//  console.log(addStr("1000", "4")) // 1004
//  console.log(addStr("1000", "90")) // 1090
//  console.log(addStr("0", "0")) // 0














 /**
  * 
  Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.
  */

  var compress = function(chars) {
    let count = 1
    chars.push('end')

    for(i=0; i<chars.indexOf("end"); i++) {
        if(chars[i] === chars[i + 1] ) {
            count ++
        }
        else {
            chars.push(chars[i])
            if(count > 1) {
                chars.push(...count.toString().split(''))
            }
            console.log(chars)
            count = 1
        }
    }
    return chars.splice(chars.indexOf("end") + 1)
  }

//   console.log(compress(["a","a","b","b","c","c","c"])) // 6, ["a","2","b","2","c","3"]
//   console.log(compress(["a"])) // 1, ["a"]
//   console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])) // 4, ["a","b","1","2"].


// another solution using shift 
var compress = function(chars) {
    var cache = chars.shift(), count = 1;
    chars.push("End");
    for (let i = 0, len = chars.length; i < len; i++) {
        var tmp = chars.shift();
        if (cache == tmp) {
            count++;
        } else {
            chars.push(cache);
            if (count > 1) {
                Array.prototype.push.apply(chars, String(count).split(""));
            }
            cache = tmp;
            count = 1;
        }
    }
    return chars.length;
};
















// leetcode medium green
/**
 * 
 * Given a string, find the length of the longest substring without repeating characters.


 */


// brute force, naive solution, O(N 3)
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
                // exit the for loop
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

// console.log(lengthOfLongestSubstring("pwwkew")) //3



// sliding window solution (two pointers and map)
/** 
 * https://www.youtube.com/watch?v=dH5t6rWmob0

https://leetcode.com/problems/minimum-window-substring/discuss/26808/here-is-a-10-line-template-that-can-solve-most-substring-problems
*/


var lengthOfLongestSubstring2 = function(s) {
    if(s === null || s.length === 0) {
        return 0
    }

    let begin = 0
    let end = 0
    let repeat = 0
    let res = 0
    let map = {}

    while( end < s.length ) {
 
        // scan and record in hashmap
        if(!map.hasOwnProperty(s[end])) {
            map[s[end]] = 1
            end++
        } else if(map.hasOwnProperty(s[end])){
            map[s[end]]++
            repeat++
            end++
        }
    
        // slide window to remove deplicate, keeeping the window only contain unique char
        while(repeat > 0 ) {
            if(map[s[begin]] > 1) {
                map[s[begin]]--
                repeat--
                begin++
            } else {
                delete map[s[begin]]
                begin++
            }
        }
        res = Math.max(res, end-begin)
    }
    return res 
}





// liding window solution: two pointers and set 
var lengthOfLongestSubstring3 = function(str) {
    let low = 0;
    let high = 0;
    const charSet = new Set();
    let longest = 0;

    while (high < str.length) {
        const char = str[high];
        
        // keep moving low to the right till the dupicate is deleted in the set
        while (charSet.has(char)) {
            charSet.delete(str[low]);
            low += 1;
        }
        
        charSet.add(char);
        longest = Math.max(longest, charSet.size)
        
        high += 1;
    }
    return longest;
}



// console.log(lengthOfLongestSubstring2("pwwke")) //3
// console.log(lengthOfLongestSubstring2("abcabcbb")) //3
// console.log(lengthOfLongestSubstring3("tmmzuxt")) //5












/**
 * Longest Palindromic Substring
 * 
 * Given a string s, find the longest palindromic substring in s. 
 */

 // brute force - TLE 0(N^3)
var isPalindromeHelper = function(s) {
    let reversed = ''
    for(char of s) {
        reversed = char + reversed
    }
    return reversed === s
} 

var longestPalindrome = function(s) {
    if(s.length <= 1) {
        return s
    }

    let startingIndex = 0
    let longgestSub = ""

    function runLoop(s) {
        let substring = ''
        for(let i = startingIndex; i<s.length; i++) {
            substring = substring + s[i]
            if(isPalindromeHelper(substring)) {
                if(substring.length > longgestSub.length) {
                    longgestSub = substring
                }
            }
        }

        while(startingIndex < s.length) {
            startingIndex++
            runLoop(s)
        }
       
    }

    runLoop(s)
    return longgestSub

}

// console.log(longestPalindrome("babad")) //"bab"
// console.log(longestPalindrome("cbbd")) //"bb"








// DP matrix solution
// 2D DP
var longestPalindrome2 = function(s) {
    
	if(s.length <= 1) return s;
	
	// construct a 2D array, default to false 
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
    
    let lps = '';
    
	// base case for one character
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }
    
	// base case for two characters
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
            dp[i][i+1] = true;
        }
        if(dp[i][i+1]) {
            // substring second argument exclusive 
            lps = s.substring(i, i + 2);
        }
    }

    // expand to three or more characters
    // decrement i, increment j. because need to check if lower left is T or F.
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            // this is a palidrome if i === j and everything inside (lower left) is a palindrome
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) {
                // +1 because we are dealing with indices 
                lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
            }
        }
    }
    
    return lps;
}


// console.log(longestPalindrome2("cbbd")) //"bb"
// console.log(longestPalindrome2("babad")) //"bab"








