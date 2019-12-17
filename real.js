


// iterative 
function power(a, b) {
    let result = 1
    for(let i=0; i<b; i++) {
      // console.log({i})
      result = result * a
      // console.log({result})
    }
    return result
  }
  
  
  
  // recursive
  
  function power2(a, b) {
    if(b===0) {
      return 1
    }
    
    return a*power2(a, b-1)
  }
  
  // time complexity
  // space complexity
  
  // console.log(power2(2,0))
  // console.log(power2(2,3))
  

  







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













/**
 * shortest substring
 * 
 * Given a string comprised of lower case letters in the range a-z, determine the length of the shorsest substring that contains all the letters present in the string. 
 */


// loop through all char to see if the string includes all of them 
function hasAllChar(str, charArr) {
    if(str.length < charArr.length) {
        return false
    } 
    for(let i=0; i<charArr.length; i++) {
            if(!str.includes(charArr[i])) {
                return false
            }
    }
    return true
}


function shortestSubStr(s) {

    // find out all charactors
    let charArr = []
    for(let i=0; i<s.length; i++) {
        if(!charArr.includes(s[i])) {
            charArr.push(s[i])
        }
    }
    console.log(charArr)

    let nextAnswer = ''
    let startingIndex = 0
    const potentialAnswerArray = [] 

    // run the loop from first char b
    function runLoop () {
        for(let i = startingIndex; i< s.length; i++) {
            nextAnswer = nextAnswer+s[i]
            console.log({nextAnswer})
            if(hasAllChar(nextAnswer, charArr)) {
                potentialAnswerArray.push(nextAnswer)
                nextAnswer = ''
                // exit for loop
                break;
            }
        }
        if(startingIndex<s.length){
            startingIndex = startingIndex + 1
            // run the loop from next char d
            runLoop()
        }
    }

    runLoop()

    potentialAnswerArray.sort((a, b)=>{
        if(a.length<b.length) {
            return -1
        } else {
            return 1
        }
    })
    console.log(potentialAnswerArray)
    return potentialAnswerArray[0].length
}

// console.log(shortestSubStr('babb'))
// console.log(shortestSubStr('bdbbcabcd'))








function shortestSubStr2(s) {
    const charArr = []
    for(let char of s) {
        // console.log(char)
        if(!charArr.includes(char)) {
            charArr.push(char)
        }
    }
    // console.log(charArr)

    const possibleSubstring = []
    let currentStr = ""
    let index = 0

    function runLoop() {
        for(let i = index; i<s.length; i++) {
            // console.log(s[i])
            // console.log(i)
            currentStr = currentStr + s[i]
            console.log({currentStr})
            if(hasAllChar(currentStr, charArr)) {
                possibleSubstring.push(currentStr)
                currentStr = ""
                break;
            } 
        }

        if(index < s.length - charArr.length){
            index ++
            runLoop()
        }
        console.log(possibleSubstring)
    }

    runLoop()
}










function hasAllChar2(subStr, allChar) {
    for(char of allChar) {
        if(!subStr.includes(char)) {
            return false
        }
    }
    return true
}

function shortestSubStr3(str){

    const allChar=[...new Set(str)]
    console.log({allChar})

    let possibleSubStrings=[]
    let subStr=''

    const allCharLen=allChar.length

    let startingIndex=0

    function runLoop() {
        for(let i=startingIndex; i<str.length; i++) {
            subStr=subStr+str[i]
            console.log('one: ', {subStr})
            if(subStr.length>=allCharLen) {
                if(hasAllChar2(subStr, allChar)){
                    // if(subStr.length===allCharLen) {
                    //     return subStr
                    // } else {
                        possibleSubStrings.push(subStr)
                    // }
                }
            }
        }

        if(startingIndex<str.length-allCharLen) {
            startingIndex++
            subStr=''
            return runLoop()
        } else {
            // sort and return
        }
    }

    return runLoop()

    console.log(possibleSubStrings)
}


// console.log('answer: ', shortestSubStr3('bacca'))
// console.log(shortestSubStr3('abcdbabbbcd'))











/**
 * longest subsequence
 * Given a string, determine the length of the longest subsequence that containes all the vowels in order, and no vowels out of order 
 */

 







const VOWELS = ['a', 'e', 'i', 'o', 'u']

function longestVowel(str) {
    // 1. Find first a
    // 2. Find next a or e (loop)
    let count = 1
    let cursor = 0 // Where we are in VOWLES
    let index = str.indexOf('a') // Where we are in str
    let currentVowel = 'a'
    
    // console.log(index)

    for(let i=index + 1; i<str.length; i++) {
        const nextChar = str[i]
        if(nextChar === VOWELS[cursor]) {
            count++
        }else if(nextChar ===VOWELS[cursor + 1]) {
            currentVowel = nextChar
            count++
            cursor++
        }
    }
    if(currentVowel === 'u') {
        return count
    } else {
        return 0
    }
    
}

//  console.log(longestVowelSubsequence("aeiaaioooaauuaeiu")) // 10
//  console.log(longestVowelSubsequence("aeiou")) // 5
//  console.log('numOfVowels:', longestVowel("eaoeioiua")) // 5
//  console.log('numOfVowels:', longestVowel("eaoeioia")) // 5





function longestVowel2(s) {

    let cursor = 0
    let count = 0
    let currentVowel = ''

    for(let i = 0; i<s.length; i++) {
        currentVowel = s[i]
        // console.log({currentVowel})
        if(s[i] === VOWELS[cursor]) {
            count++
        } else if(s[i] === VOWELS[cursor+1]){
            count++
            cursor++
        }
    }

    if(currentVowel === "u") {
        return count
    } else {
        return 0
    }   
}





function longestVowel3(str) {
    let startingIndex=0
    let vowelIndex=0
    let count=0
    let currentChar

    for(let i=0; i<str.length; i++) {
        if(str[i] === VOWELS[vowelIndex]) {
            currentChar=str[i]
            count++
        } else if(str[i] === VOWELS[vowelIndex+1]){
            currentChar=str[i]
            console.log(str[i])
            count++
            vowelIndex++
        }
    }
    if(currentChar==='u') {
        return count
    }
    return 0
}


//  console.log('numOfVowels:', longestVowel3("aoeiooi")) // 0
//   console.log('numOfVowels3:', longestVowel3("aeiaaioooaauuaeiu")) // 10
//   console.log('numOfVowels3:', longestVowel3("aaeaioou")) // 7











// all incoming dates will be valid dates, but only those in one of the following formates: YYYY/MM/DD, DD/MM/YYYY and MM-DD-YYYY should be included in the return list

function changeDateFormat(dateArr) {

    const changedArr = []

    function changeFormat(date) {
        if(date.indexOf('/') === 4) {
            const newDate = date.replace("/", "").replace("/", "")
            changedArr.push(newDate)
        }

        else if(date.indexOf('/') === 2) {
            const removedSlashDate = date.replace("/", "").replace("/", "")
            let newDate = ''
            newDate = newDate + removedSlashDate.substring(4) + removedSlashDate.substring(2, 4) + removedSlashDate.substring(0, 2)
            changedArr.push(newDate)
        }
        
        else if(date.indexOf('-') === 2) {
            const removedDashDate = date.replace(/-/gi, "")
            let newDate = ''
            newDate = newDate + removedDashDate.substring(4) + removedDashDate.substring(0, 4)
            changedArr.push(newDate)
        }
    }

    for(date of dateArr) {
        changeFormat(date)
    }

    return changedArr
}

// console.log(changeDateFormat(['2010/03/30', '15/12/2016', '11-15-2012', '20130721'])) 



