

// matching parentheses
function isParenthesesMatch(str) {
    const arr = []
    if(str.startsWith(")") || str.endsWith('(')) {
        return false
    }
    else {

        for(let i=0; i<str.length; i++) {

            if (str[i] === ')' && arr.length === 0) {
                return false 
            } 
            if (str[i] === '(') {
                arr.push(str[i])
            } 
            if (str[i] === ')') {
                arr.pop()
            } 
        }

        if (arr.length !== 0) {
            return false
        }
        return true
    }
    
}

// console.log(isParenthesesMatch("))(("))
// console.log(isParenthesesMatch("(())"))
// console.log(isParenthesesMatch("))"))
// console.log(isParenthesesMatch("((())"))
// console.log(isParenthesesMatch("(()))"))
// console.log(isParenthesesMatch("("))
// console.log(isParenthesesMatch("()()(())(()())"))






// Create a function that takes an array of numbers and returns an object that contains the number as a key and the number of occurances as the value

const numArr = [2, 17, 8, 2, 1, 2, 18, 5, 19, 8];

// const strArr = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

const numArr2 = [2, 17, 8, 2];

const obj = {}

for( element of numArr) {
//   console.log(element)
  
  if(!obj.hasOwnProperty(element)) {
     obj[element] = 0
     }
  obj[element] = obj[element] + 1 
}

// console.log(obj)






// Create  fcunction that takes 2 arrays as arguments and returns true if they contain one or more common items

const arr1 = ['x', 'a', 'c', 'y']
const arr2 = ['m', 'o', 'x', 'b']

function isCommonItem(arr1, arr2) {
  for(i of arr1) {
    if(arr2.includes(i)) {
    //   console.log(i)
      return true
     }
  }
  return false
}

// console.log(isCommonItem(arr1, arr2))







/**

create function calculate
This challenge is a variation of matching parenthese

calculate("(3 + 4) * 5") returns 35
calculate("(2 * 3) + (5 - 2)") returns 9
calculate("((3 + 4) * 3) + 70") returns 91

 */
 
function isNumeric(char) {
    return char >= '0' && char <= '9'
}

function isOperator(char) {
    if(char === "+" || char === "-" || char === "*" || char === "/") {
        return true
    }
    return false
}

function add(a, b) {
    return a+b
}

 function subtract(a, b) {
    return a-b
}

 function multiply(a, b) {
    return a*b
}

 function divide(a, b) {
    return a/b
}

// conttruct custom data structure - hash map 
const opMap = {
    "+": add,
    "-": subtract,
    '*': multiply,
    '/': divide
}

function calculate(str) {
    const numArr = []
    const opArr = []
    const parenArr = []
    let curNum = null
    
    for(let i=0; i<str.length; i++) {
        const char = str[i]

        // save current number to a variable curNum
        // dealing with single digits now, and multi-digits later
        if (isNumeric(char)) {
            if(curNum === null) {
                curNum = char
            } else {
                curNum = curNum + char
            }
           //  numArr.push(parseInt(char))
        } else if (curNum !== null){
            // char is not numeric it's okay to push
            numArr.push(parseInt(curNum))
            curNum = null
        }
        
        // keep track of parents in an array
        if(char === '(') {
            parenArr.push(char)
        }
        
        if(char === ')'){
            // do math
            // chech paren balance later
            
            const op = opArr.pop()
            const a = numArr.pop()
            const b = numArr.pop()
            numArr.push(op(b, a))
        }
        
        // keep track of operators in an array
        if(isOperator(char)) {
            opArr.push(opMap[char])
        }
    }
    
    if (curNum !== null) {
         numArr.push(parseInt(curNum))
    }
    
    // check if all maths are done 
    if(numArr.length === 2 && opArr.length === 1) {
         const op = opArr.pop()
         const a = numArr.pop()
         const b = numArr.pop()
         numArr.push(op(b, a))
         
    } else if (numArr.length > 1 || opArr.length > 0) {
         throw new Error("Invalid input")
    }
    
    return numArr[0]
}

// console.log('one: ', calculate("(3 + 5)"));
// console.log('two: ', calculate("(3 + 5) + 8"));
// console.log('three: ', calculate("(2 * 3) + (5 - 2)"))
// console.log('four: ', calculate("((3 + 4) * 3) + 70"))











/**
 * OOP
 * 
 * EventEmitter
 * 
 * add(name, callback)
 * - returns function to remove event
 * 
 * // trigger, fire
 * emit(name, data)
 * - callback receives data given to emit
 * 
 */
 
 
class EventEmitter {
    constructor() {
        this.eventHandlers = {}
    }
     
    add(name, callback) {
        if(this.eventHandlers.hasOwnProperty(name)) {
            this.eventHandlers[name].push(callback)
        } 
        else {
            this.eventHandlers[name] = [callback]
        }
         
        console.log(this.eventHandlers[name])
        
        return () => {
            this.eventHandlers[name] = this.eventHandlers[name].filter((next) => {
                return next !== callback
            })
            console.log(this.eventHandlers[name])
        }
    }
    
    emit(name, data) {
        if(this.eventHandlers.hasOwnProperty(name)) {
            this.eventHandlers[name].forEach((callback) => {
                callback(data)
            })
        } 
    }    
}
 
const ee = new EventEmitter()
let count = 0
const remove = ee.add('click', (arg) => {
    count++
    console.assert(arg === 2)
})
ee.add('click', (arg) => {
    count++
    console.assert(arg === 2)
})

console.assert(ee.eventHandlers['click'].length === 2)

// remove()

ee.emit('click', 2)
console.assert(count === 2)

remove()

console.assert(ee.eventHandlers['click'].length === 1)










// modified to make event an object instead of array

         /**
 * 
 * EventEmitter
 * 
 * add(name, callback)
 * - returns function to remove event
 * 
 * // trigger, fire
 * emit(name, data)
 * - callback receives data given to emit
 * 
 */
 
 
class EventEmitter2 {
    constructor() {
        this.eventHandlers = {}
        this.currentId = 0
    }
     
    add(name, callback) {
        
        const currentId = this.currentId
        this.currentId ++
        
        if(this.eventHandlers.hasOwnProperty(name)) {
            this.eventHandlers[name][currentId] = callback
        } 
        else {
            this.eventHandlers[name] = {[currentId]:callback}
        }
        
        console.log(this.eventHandlers[name])
        
        return () => {
            delete this.eventHandlers[name][currentId]
            console.log(this.eventHandlers[name])
        }
    }
    
    emit(name, data) {
        if(this.eventHandlers.hasOwnProperty(name)) {
            // this.eventHandlers[name].forEach((callback) => {
            //     callback(data)
            // })
            
            const callbackArr = Object.values(this.eventHandlers[name])
            callbackArr.forEach((callback) => {
                callback(data)
            })
        } 
        
        
    }
     
}
 
const ee2 = new EventEmitter2()
let count2 = 0
const remove2 = ee.add('click', (arg) => {
    count2++
    console.assert(arg === 2, 'one')
})
ee.add('click', (arg) => {
    count2++
    console.assert(arg === 2, 'two')
})

// console.assert(ee.eventHandlers['click'].length === 2, 'three')

// remove()

ee.emit('click', 2)
console.assert(count2 === 2, 'four')


remove2()

// console.assert(ee.eventHandlers['click'].length === 1, 'five')










// find node on a copy tree 

// check if tree is targetNode
// get tree's children
// recursion till find target 
// 


const tree = {
    name: 'one',
    children: [
        {
            name: 'two',
            children: [
                {
                    name: 'three',
                    children: []
                },
                {
                    
                    name: 'six',
                    children: []
                }
            ]
        },
        
        {
            name: 'five',
            children: [
                {
                    name: 'eight',
                    children: []
                }
            ]
        }
    ]
};

const copy = {
    name: 'one-1',
    children: [
        {
            name: 'two-1',
            children: [
                {
                    name: 'three-1',
                    children: []
                },
                {
                    
                    name: 'six-1',
                    children: []
                }
            ]
        },
        
        {
            name: 'five-1',
            children: [
                {
                    name: 'eight-1',
                    children: []
                }
            ]
        }
    ]
};
    
// review
function findPath2(targetNode, tree) {
    function path(targetNode, tree, pathIndexArray) {
        console.log({tree, pathIndexArray})
        if(tree === targetNode) {
            return pathIndexArray
        }

        else if(tree.children.length === 0) {
            return null
        }

        else{
            for(let i=0; i<tree.children.length; i++) {
                let pathIndexArrayCopy = [...pathIndexArray, i]
                if (path(targetNode, tree.children[i], pathIndexArrayCopy) ){
                    return path(targetNode, tree.children[i], pathIndexArrayCopy)
                }
            }
        }

    }
    return path(targetNode, tree, [])
}
const targetNode = tree.children[0].children[1]
console.log(findPath2(targetNode, tree))




    


// solution:
function findNode(targetNode, tree, copyTree) {
    const path = findPath(targetNode, tree);
    const copyNode = findCopy(path, copyTree);
    return copyNode;
}


function findPath(targetNode, tree) {
    
    function path(targetNode, tree, pathIndexArray) {
        if(tree === targetNode) {
            return pathIndexArray // path 
        }
        
        else if(tree.children.length === 0 ) {
            return null
        }
    
        else{
            const childArray = tree.children // 2 , 5
            for(let i = 0; i<childArray.length; i++) {
                const pathIndexArrayCopy = [ ...pathIndexArray, i]
                console.log('path: ', pathIndexArrayCopy)
                const thisPath = path(targetNode, childArray[i], pathIndexArrayCopy);
                if (thisPath !== null) {
                    return thisPath
                }
            }
           
            return null
        }
    }
    return path(targetNode, tree, [])
}


// const targetNode = tree.children[0].children[1]
// console.log(findPath(targetNode, tree))
// console.log(findNode(targetNode, tree, copy));
    
    
function findCopy(path, copyTree) {
    for(let i=0; i<path.length; i++) {
         copyTree = copyTree.children[path[i]]
    }
    return copyTree
}
    
    
    
    
    
    
    
    

    
    
    
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







// Fibonacci

// iterative solution

// function fibonacci(num) {

//     if( num === 0 || num === 1) {
//         return num 
//     }

//     let currentNum = 0
//     let num1 = 0
//     let num2 = 1

//     for(let i=2; i<=num; i++) {
//         currentNum = num1 + num2 
//         num1 = num2
//         num2 = currentNum
//     }

//     return currentNum
// }
    

// recursive solution 
function fibonacci(num) {
    if(num < 2) {
        return num 
    }
        
    return fibonacci(num - 1) + fibonacci(num - 2)
}





// console.log('fibonacci 0:', fibonacci(0))
// console.log('fibonacci 1:', fibonacci(1))
// console.log('fibonacci 2:', fibonacci(2))
// console.log('fibonacci 3:', fibonacci(3))
// console.log('fibonacci 4:', fibonacci(4))
// console.log('fibonacci 5:', fibonacci(5))
// console.log('fibonacci 6:', fibonacci(6))
// console.log('fibonacci 7:', fibonacci(7))
// console.log('fibonacci 8:', fibonacci(8))
// console.log('fibonacci 9:', fibonacci(9))
// console.log('fibonacci 10:', fibonacci(10))
// console.assert(fibonacci(3) === 2)
    








// Write a function that will add two numbers without the (+) operator

let num1 = 2
let num2 = 56



const arrSum1 = Array(num1)
const arrSum2 = Array(num2)

const arrSum = [ ...arrSum1, ...arrSum2]

// console.log(arrSum.length)








// You are in charge of the cake for your niece's birthday and have decided the cake wlil have one candel for each year of her total age. When she blows out the candles she'll only be able to blow out the tallest onemptieds. Your task is to find out how many candles she can successfully blow out

// For example, if your niece is turning 4 years onload, and the cake will have 4 candles, the height 3,3,1,2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 3 and there are such candles

// Create a function: birthdayCakeCandles. It must return an interger representing the number of candles she can blow out

// birthdayCakeCandles has the following parameters: arr - an array of interegers repressing candel heights.



let candles = [3,3,1,2,3,2,3];

const birthdayCakeCandles = (arr) => {
    let max = Math.max(...arr);
    return arr.filter(item => item === max).length
}
// console.log(birthdayCakeCandles(candles));











// remove duplicate in an array 

var sandwiches = ['turkey', 'ham', 'turkey', 'tuna', 'pb&j', 'ham', 'turkey', 'tuna'];

var deduped = sandwiches.filter(function (sandwich, index) {
	return sandwiches.indexOf(sandwich) === index;
});

// Logs ["turkey", "ham", "tuna", "pb&j"]
// console.log(deduped);









// Sum range recursion 
// Prompt
// Input = 5
// Output = 15


// Recursion Challenge
// With recursion find the factorial 







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










function fibonacciSequence() {
	let array = [0, 1]
	
	for(let i=0; i<array.length; i++) {
        length = array.length //2
        addNum = array[length-2] + array[length-1]
        array.push(addNum)

        if(addNum >= 225) {
            return array
        }
	}
}

// console.log(fibonacciSequence())





// string parsing

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







/**
 * const flights = [ [ 'SFO', 'JFK' ], [ 'LAX', 'SFO' ], [ 'ATL', 'PHX' ], [ 'LAS', 'ATL' ], [ 'PHX', 'LAX' ] ]
 * 
 * orderFlights(flights)
 * 
 * return [ 'LAS', 'ATL', 'PHX', 'LAX', 'SFO', 'JFK' ]
 * 
 */ 
 
function orderFlights(flightArr) {
    let sortedArray = []
    const flightObj = {}
    
    for(let i=0; i<flightArr.length; i++) {
        flightObj[flightArr[i][0]]=flightArr[i][1]
    }

    // console.log({flightObj})

    const destinations = Object.values(flightObj)
    // console.log({destinations})
    
    const departures = Object.keys(flightObj)
    // console.log({departures})
    
    let startingPoint = null
    
    for(const i of departures) {
        if(!destinations.includes(i)) {
            if(startingPoint !== null) {
                throw new Error("invalid input - multiple startingPoint");
            }
            startingPoint = i
            break
        }
    }
    
    // console.log({startingPoint})
    
    sortedArray.push(startingPoint)
    let dest = flightObj[startingPoint]
        
    while (dest !== undefined) {
        console.log({ dest })
        sortedArray.push(dest)
        dest = flightObj[dest]
    }
    
    return sortedArray
}
 
const flights = [ [ 'SFO', 'JFK' ], [ 'LAX', 'SFO' ], [ 'ATL', 'PHX' ], [ 'LAS', 'ATL' ], [ 'PHX', 'LAX' ] ]


// console.log(orderFlights(flights))
















/**
 * Auto complete
 */
 
const words = [
    'app',
    'apple',
    'apricot',
    'animal',
    'baby',
    'beef',
    'bear',
    'bean',
    'cub',
    'cup',
    'clean',
    'cleaver',
    'closet',
    'den',
    'dinner',
    'dine',
    'elephant',
    'elevator',
    'meat',
    'mean',
    'naked',
    'near',
    'far',
    'zebra',
    'zoo',
    'soft',
    'hard',
    'soap',
    'seed',
    'tree',
    'trip',
    'tripe',
    'train',
    'odd',
    'pop',
    'pencile',
]

// this is an object with other objects inside of it
const wordObj = {}

function addWordToObj(word, wordObj) {
    if(word.length > 0) {
            
        // console.log('word: ', word);
        let char = word[0]
        if(wordObj[char] === undefined) {
            wordObj[char] = {
                words: [],
            }
        }
    
        const partialWord = word.substring(1)
        wordObj = wordObj[char]
    
        addWordToObj(partialWord, wordObj)
    }
}

for(let i=0; i<words.length; i++) {
    addWordToObj(words[i], wordObj)
}

// console.log(JSON.stringify(wordObj, null, 2))

// {
//     p: {
//       e: {
//           n: {
//               c: {
//                   i: {
//                       l: {
//                           e: {}
//                       }
//                   }
//               }
//           }
//       },
//       o: {
//           p: {}
//       }
//     }
// }

// key 'a' is another object that has key 'p'
// wordObj['a']['p'] 
// ['app', 'apple', 'apricot']

// function wordsForObj(prefix, obj) {
//     console.log('prefix: ', prefix)
//     console.log('obj: ', obj);
// }

function autoComplete(str) {
    const parts = str.split('');
    // return wordsForObj(str, wordObj['a']['p'])
}

// console.log(autoComplete('ap')) // ['app', 'apple', 'apricot']











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

Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.
Function Description
Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
countingValleys has the following parameter(s):
n: the number of steps Gary takes
s: a string describing his path
Input Format
The first line contains an integer , the number of steps in Gary's hike. 
The second line contains a single string , of  characters that describe his path.
Constraints


Output Format
Print a single integer that denotes the number of valleys Gary walked through during his hike.
Sample Input
8
UDDDUDUU
Sample Output
1
Explanation
If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:
_/\      _
   \    /
    \/\/
He enters and leaves one valley.


**/



function countingValleys(n, str) {
    let valleyCount = 0
    let altitude = 0
    let up = 0
    let down = 0

    for(let i=0; i<n; i++) {
        if(str[i] === "D") {
            down = down + 1
            altitude = altitude - 1
        }
        else if(str[i] === "U") {
            up = up + 1
            altitude = altitude + 1
            if(altitude === 0 ) {
                valleyCount = valleyCount + 1
            }
        }
    }
    return valleyCount
}

// console.log("vallyCount:", countingValleys(8, 'UDDDUDUU') )








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

largest hourglass sum 

Given a  2D Array, :
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:
a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.
For example, given the 2D array:
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following  hourglass values:
-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is  from the hourglass:
0 4 3
  1
8 6 6
Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.
Function Description
Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.
hourglassSum has the following parameter(s):
arr: an array of integers
Input Format
Each of the  lines of inputs  contains  space-separated integers .
Constraints


Output Format
Print the largest (maximum) hourglass sum found in .
Sample Input
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output
19
Explanation
 contains the following hourglasses:
image
The hourglass with the maximum sum () is:
2 4 4
  2
1 2 4
**/







const sample = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0],
]

// jane
function hourglass2(twoDArray) {
    const sumArray = []
    for(let i=0; i<twoDArray.length - 2; i++) {
        for(let j=0; j<twoDArray.length - 2; j++) {
            const sum = twoDArray[i][j] + twoDArray[i][j+1] + twoDArray[i][j+2] 
                                        + twoDArray[i+1][j+1]
                        +twoDArray[i+2][j] + twoDArray[i+2][j+1] + twoDArray[i+2][j+2]
            sumArray.push(sum)
        }
    }
    const maxSum = Math.max(...sumArray)
    return maxSum
}

// console.log('maxSum:', hourglass2(sample))





// james
function hourglass (arr) {
    let value = 0;
    let hourglasses = []
    // let value = arr[0][0] + arr[0][1] + arr[0][2] + 
    //                         arr[1][1] + 
    //             arr[2][0] + arr[2][1] + arr[2][2];
    for (i = 0; i < arr.length-2; i++) {
        for (j = 0; j < arr.length-2; j++) {
            value = arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
                                arr[i+1][j+1] + 
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            hourglasses.push(value);
        }
    }
    console.log(value);
    console.log(hourglasses);
    console.log(Math.max.apply(Math, hourglasses));
    return Math.max.apply(Math, hourglasses)
    // return value
}
// hourglass(sample)







/*
Mix Potions  

Write a function mixPotions that accepts one argument, an array of potion objects, and returns the potion that is produced when they are mixed. 

A potion is represented in the following format:  { volume: x, ingredients: { ingredient1: a, ingredient2: b, ingredientA: c } }

Where x is a positive number representing the volume of the potion and a, b, and c are positive numbers representing the concentrations of the corresponding ingredients in the potion.  In the above example, the potion has three different ingredients, but a potion can have any number of different ingredients. The function should accept any positive number of potions. Each potion can have any non-negative number of different ingredients.  After mixing, the resulting potion should have a volume equal to the sum of the volumes of the input potions. Also, the resulting potion should have volume-weighted concentrations of each ingredient in the input potions.  

Example: mixPotions([ {volume: 100, ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }}, {volume: 300, ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }}, ])  

The above should return: { volume: 400, ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350, ingredientB: 712.5 } }  

The result's volume is 400 because 100 + 300 = 400. 

The result's concentration of ingredient1 is 125. We can determine this because first potion has 50 units of concentration in 100 units of volume and the second potion has 125 units of concentration in 300 units of volume, and (50*100 + 150*300)/(100 + 300) = 125.  

Only one of the potions has any of ingredient2, Using the same math, but with 0 for the concentration of ingredient2 in the second potion, we get (20*100 + 0*300)/(100 + 300) = 5.
**/





/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
**/





var hammingDistance = function(x, y) {

    console.log('hi')

    const xBiteArray = printBites(x)
    const yBiteArray = printBites(y)

    console.log({xBiteArray})
    console.log({yBiteArray})
    
    diffCount = 0
    
    for(let i=0; i<xBiteArray.length; i++) {
        if(xBiteArray[i] !== yBiteArray[i]) {
            diffCount ++
        }
    }
 
    return diffCount
};


// console.log(hammingDistance(1, 5))










function printBites(octet) {
    let bitesArray = []
    let count = Math.pow(2, 31);
    while (Number.isInteger(count) && count > 0) {
        console.log("count 1:", count)
        console.log("octet 1:", octet)

        if (octet < count )
            {
                count = count / 2;
                bitesArray.push(0)
            }
        else if (octet >= count)
            {
                octet = octet - count;
                count = count / 2;
                bitesArray.push(1)
            }

    }
    return bitesArray
} 

// console.log('bitesArray:', printBites(511))







/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
For example, kangaroo  starts at  with a jump distance  and kangaroo  starts at  with a jump distance of . After one jump, they are both at , (, ), so our answer is YES.

Function Description
Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):
x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2

Input Format
A single line of four space-separated integers denoting the respective values of , , , and .

Constraints

Output Format
Print YES if they can land on the same location at the same time; otherwise, print NO.
Note: The two kangaroos must land at the same location after making the same number of jumps.
*/



function landingLocation(x1, v1, x2, v2) {

    const yes = "YES"
    const no = "NO"

    // let landingLocation1 = x1
    // let landingLocation2 = x2

    // for(let i=0; i<10000; i++) {
    //     landingLocation1 = landingLocation1 + v1
    //     landingLocation2 = landingLocation2 + v2
    //     if(landingLocation1 === landingLocation2) {
    //         return yes
    //     }
    // }
    // return no


    for(let i=0; i<10000; i++) {
        x1 = x1+ v1
        x2 = x2+ v2

        if(x1===x2) {
            return yes
        }
    }
    return no

}


// console.log(landingLocation(2081, 8403, 9107, 8400))








function climbingLeaderboard(score, alice) {
    let ranking = []
    for(let i=0; i<alice.length; i++) {
        console.log({score})
        let newScore = score
        newScore.push(alice[i])
        newScore.sort((a,b)=>b-a)
        const rank = newScore.indexOf(alice[i])
        console.log({rank})
    }
}



// console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])) // [6, 4, 2, 1]
// console.log(climbingLeaderboard([], [])) // [6, 5, 4, 2, 1]





function scoreboard(scores, alice) {
    let m = alice.length
    let results = []
    console.log(scores);
    for (i = 0; i < m; i++) {
        for (j = 0; j < scores.length; j++) {
            console.log(`scores`, scores[j])
            console.log(`alice`, alice[i])
            if (alice[i] >= scores[j]) {
                console.log(`scoresinside`, scores[j])
                console.log(`aliceinsde`, alice[i])
                results.push(j+1)
                console.log({results})
                break
            }
            else if(alice[i] < scores[scores.length-1]){
                results.push(scores.length + 1)
                console.log({results})
                break
            }
        }
    }
    // console.log({results})
    return results
}
let scores = [100, 90, 90, 80, 75, 60]
let alice = [77, 50] // 4, 6
// let alice = [50,65,77,90,102]
// scoreboard(scores, alice);

// console.log(scoreboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))








/*
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints.

Note: A square integer is an integer which is the square of an integer, e.g 1, 4, 9, 16, 25
For example, the range is  and , inclusive. There are three square integers in the range:  and .
Function Description
Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from  to .
squares has the following parameter(s):
a: an integer, the lower range boundary
b: an integer, the uppere range boundary
Input Format
The first line contains , the number of test cases. 
Each of the next  lines contains two space-separated integers denoting  and , the starting and ending integers in the ranges.
Constraints
 

Output Format
For each test case, print the number of square integers in the range on a new line.
Sample Input
2
3 9
17 24
Sample Output
2
0
Explanation
Test Case #00: In range ,  and  are the two square integers. 
Test Case #01: In range , there are no square integers.
**/


function countSquareInteger(a, b) {
    let count = 0
    for(let i=a; i<=b; i++) {
        let squareRoot = Math.sqrt(i)
        if(i>1 && Number.isInteger(squareRoot)){
            count = count+1
        }
    }
    return count
}

// console.log(countSquareInteger(2793360, 318714114))




/**
 * Find the number of ways that a given integer, , can be expressed as the sum of the  powers of unique, natural numbers.
For example, if  and , we have to find all combinations of unique squares adding up to . The only solution is  .
Function Description
Complete the powerSum function in the editor below. It should return an integer that represents the number of possible combinations.
powerSum has the following parameter(s):
X: the integer to sum to
N: the integer power to raise numbers to
 */




/*

You wish to buy video games from the famous online video game store Mist.
Usually, all games are sold at the same price,  dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game you buy during the sale will be sold at  dollars, but every subsequent game you buy will be sold at exactly  dollars less than the cost of the previous one you bought. This will continue until the cost becomes less than or equal to  dollars, after which every game you buy will cost  dollars each.
For example, if ,  and , then the following are the costs of the first  games you buy, in order:

You have  dollars in your Mist wallet. How many games can you buy during the Halloween Sale?



Sample Input 0
20 3 6 80
Sample Output 0
6
Explanation 0
We have ,  and , the same as in the problem statement. We also have  dollars. We can buy  games since they cost  dollars. However, we cannot buy a th game. Thus, the answer is .



Sample Input 1
20 3 6 85
Sample Output 1
7
Explanation 1
This is the same as the previous case, except this time we have  dollars. This time, we can buy  games since they cost  dollars. However, we cannot buy an th game. Thus, the answer is .


*/


function gameCount(p, d, m, s) {

    let totalExpense = p
    let count = 1

    if(s-p<0) {
        return 0
    }

    while( s-totalExpense>=m) {
        if(totalExpense+p<=s) {
            if(p-d>=m) {
                p = p-d
            }
            else {
                p = m
            }
            totalExpense = totalExpense + p
            count++
        }
        else{
            return count
        }

    }
    return count
}


// console.log("gameCount",gameCount(20, 3, 6, 85)) //7
// console.log("gameCount",gameCount(20, 3, 6, 80)) //6
// console.log("gameCount",gameCount(16, 2, 1, 9981)) // 9917
// console.log("gameCount",gameCount(100, 1, 1, 99)) // 0
// console.log("gameCount",gameCount(100, 19, 1, 180)) // 0




/**
 * Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
 * 
Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

Input Format
There are  lines of numeric input: 
The first line has a double,  (the cost of the meal before tax and tip). 
The second line has an integer,  (the percentage of  being added as tip). 
The third line has an integer,  (the percentage of  being added as tax).


Sample Input
12.00
20
8
Sample Output
15
 */

 function totalMealCost(meal, tip, tax) {
    const totalMealCost = Math.round(meal + meal*tip/100 + meal*tax/100)
    return totalMealCost
 }

//  console.log(totalMealCost(15.50, 15, 10))








 /**
  * Given an integer, , perform the following conditional actions:
If  is odd, print Weird
If  is even and in the inclusive range of 2-5, print Not Weird
If  is even and in the inclusive range of 6-20, print Weird
If  is even and greater than 20, print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.
  */


  function printWeird(integer) {
    if(integer % 2 === 1 ) {
        console.log('Werid')
    }
    if(integer %2 === 0 && 2<= integer && integer <= 5) {
        console.log('Not Werid')
    }
    if(integer %2 === 0 && 6<= integer && integer <= 20) {
        console.log('Werid')
    }
    if(integer %2 === 0 && 20<integer) {
        console.log('Not Werid')
    }
  }

//   printWeird(24)






  /**
   * Connect to comics API , render it on home page and search page. In home page you only show one comics. In search page creat search bar and filter all the data based on numbers only upon click button
 
and className he gave me classNames to name them and asked me follow it carefully
   */









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










/**
 * 
A left rotation operation on an array shifts each of the array's elements unit to the left. For example, if  left rotations are performed on array , then the array would become .
Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
 */

   function leftRotation(arr, d){
    const newArray = arr.slice(0, d)
    const oldArray = arr.slice(d)
    console.log(newArray, oldArray)
    const result = oldArray.concat(newArray)
    console.log(result )
    return result

   }

//    console.log(leftRotation([1, 2, 3, 4, 5, 6], 3))





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
 * Write a factorial function that takes a positive integer, N as a parameter and prints the result of N! ( factorial).
 * 
 */

 function recursiveFactorial(n) {
     if(n===1) {
        return 1
     }
     while(n>=2) {
        return n*recursiveFactorial(n-1)
     }
 }

// console.log("result:", recursiveFactorial(11))










function recursiveDecrement(num) {
    if(num>0){
        console.log(num)
        return recursiveDecrement(num-1)
    }
    return num
}

// console.log('recursiveDecrement', recursiveDecrement(4))







// Sum range recursion 
// Prompt
// Input = 5
// Output = 15

function recursiveSum(num) {
    if(num===1) {
        return 1
    }
    return num + recursiveSum(num-1)
}

// console.log(recursiveSum(5))









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


console.log('answer: ', shortestSubStr3('bacca'))
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
//  console.log(SherlockValidString('qcfbdopdgvjanhdhijcgkchzqfbvwlxpncsqthvzefztoebypdgahnzzucutnsiawctplooqtqjkumikspmbelbzpvscncekexbroqjjgvtahemzvybzleaazsepwjbcicuysdiaaddihpjeomebqgcsbghxriccmwahbihcmmmvcxaskgtcmxungdnxnpzancjokssyfgwhewboewsqupgastzgkzixdrnpjgqommxqkagoxzgtootihsqttyqwremdmetaqttatzqsawlqlezuzrqusgrjmfoyjibbbudwttpwramchnzghpazxtikaxklhlmifrebkvxcwlgfbhliwnhwjrglqsxxglhldompjlrhxamahzigpreakmlbekakyiydymsjymrxmfxvfhdwahwktjlaumkswivwvpfvbysperllaqjayhktqwtkkgeiobglrniumakstxftnotnxehncaaoggyxiekbrtvfvfxpeeksuefrkoforhexncwvihybcuhxbgmglzahfhzpwgfnnjmcnlaxsyywuftwmiezhegmnfdjnkycvlfiwffqddmylhwxpcwwgektknfzzfcuqhcoojgrpuracpztrxszbcvnsanrfpmyyqomcxfrrzrvospiphhqlcgdetxmklmkbaydxdwrepmthdbwmkpypvdtqafalrmpukutnrksiznqeqoradppyulovsqikczgmwzcpmwxnjnrbekdhbviwgytypdktdsibumqginvtdouhzzqauyycxrdovpjairbcdrkngfglvcsucjxwjxbgpewmtgobxpfdipqqwxcsbwmdhlcrjdzajymcecgdtlgbbztxwxrzugddrhucmwcvuqxasddlpkosjirhfjibplfiublgznbtgztyexmvjanukhdsqlthzaptcaabqbxwcqwhpicalqwvxznpnjwmjnflqfpijmelecswnxwyptvmujdhubtdobrgiioruufaxxwkwtklofziqcq'))



/**
 * stock max profit:
 * can not buy and sell at the same time
 * if no profit, return -1
 */

 // 0(n^2), two passes, nested for loop
function calculateMaxProfit(arr) {
    let buyPrice = 0
    let sellPrice = 0
    let maxProfit = 0
    let profit
    for(let i=0; i<arr.length-1; i++) {
        for( let j=1; j<arr.length; j++) {
            buyPrice = arr[i]
            sellPrice = arr[j]
            profit = sellPrice-buyPrice
            if (maxProfit<profit) {
                maxProfit = profit
            } 
        }
    }
    return maxProfit
 }

 // 0(n), one pass, one loop
 function calculateMaxProfit2(arr) {
    // let buyPrice = null
    // let sellPrice = null
    // let maxProfit = 0
    // let profit
    // for(let i=0; i<arr.length-1; i++) {
    //     if (buyPrice === null) {
    //         buyPrice = arr[i]
    //     }

    //     if(sellPrice && arr[i] > sellPrice) {
    //         sellPrice = arr[i]
    //     }

    //     if(arr[i] < arr[i+1]) {
    //         buyPrice = arr[i]
    //         sellPrice = arr[i+1]
    //     }

    //     maxProfit = sellPrice - buyPrice

        // arr[i] < buyPrice
        // arr[i] > sellPrice
    // }

    // return maxProfit
 }

//  console.log(calculateMaxProfit2([45, 24, 35, 31, 40, 38, 11])) //16
//  console.log(calculateMaxProfit2([45, 24, 35, 31, 40, 38, 11])) //16







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
 * pascal's triangle
 */


 function generateArray(num, previousArr) {
    array=[]
    for(let i=0; i<=num; i++) {
        // console.log(i)
        if(i===0 || i===num) {
            array.push(1)
        }
        else {
            array.push(previousArr[i-1]+previousArr[i])
        }
    }
    return array
 }


//  console.log(generateArray(5, [ 1, 4, 6, 4, 1 ]))

var generate = function(numRows) {

    let triangle=[]

    for(let i=0; i<numRows; i++) {
        if(i===0) {
           triangle.push([1])
        }
        
        else if(i===1) {
            triangle.push([1,1])
        }
        
        else if(i===2) {
            array=[1,triangle[i-1][0] + triangle[i-1][1] ,1]
            triangle.push(array)
        }

        else{
            array = generateArray(i, triangle[i-1])
            triangle.push(array)
        }
    }

    return triangle
};

// console.log(generate(5))






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



  






/**
 * univalued binary tree
 * a binary tree is univalued is every node in the tree has the same value
 */




 // answer 1: recursive soluction 
class Tree {
    constructor(val) {
        this.val = val
        this.size = 0
        this.left = null
        this.right = null
    }

    addNode(val){
        this.size += 1;
        if(this.left === null) {
            this.left = new Tree(val)
        } else if(this.right === null) {
            this.right = new Tree(val)
        } else if (this.left.size <= this.right.size) {
            this.left.addNode(val)
        } else {
            this.right.addNode(val)
        }
    }
}

const root = new Tree(2)

root.addNode(2)
root.addNode(2)
root.addNode(2)
root.addNode(2)



function isLeftSame(node, nodeValue) {
    if(node.left === null || node.left.val=== nodeValue) {
        return true
    }
    return false
}

function isRightSame(node, nodeValue) {
    if(node.right === null || node.right.val === nodeValue) {
        return true
    }
    return false
}

const isUnivalTree = function(node, nodeVal) {

    if(node===null) {
        return true
    }

    nodeVal = nodeVal || node.val

    if ( isLeftSame(node, nodeVal) && isRightSame(node, nodeVal)){
        return isUnivalTree(node.left, nodeVal) && isUnivalTree(node.right, nodeVal)
    }
    return false
}

// console.log(isUnivalTree(root)) // true 
//    console.log(isUnivalTree([1,1,1,1,1,null,1])) // true 
//    console.log(isUnivalTree([2,2,2,5,2])) // false 



// anwser 2: recursive review
class Tree2 {
    constructor(val) {
        this.val = val
        this.childSize = 0
        this.left = null
        this.right = null
    }

    addNode(val){
        // add to the left child
        if( this.left === null ) {
            this.left = new Tree2(val)
            this.childSize++
        // add to the right child
        } else if( this.right === null){
            this.right = new Tree2(val)
            this.childSize++
        } 
        // add to the left child's child
        else if(this.left.childSize <= this.right.childSize) {
            this.left.addNode(val)
        // add to the right child's child
        } else if(this.left.childSize > this.right.childSize) {
            this.right.addNode(val)
        }
    }
}


const root2 = new Tree2(2)
root2.addNode(2)
root2.addNode(2)
root2.addNode(5)
root2.addNode(5)

// console.log(root2)

function isLeftSame2(node, nodeVal) {
    
        if(node.left === null || node.left.val === nodeVal) {
            console.log('checking left child')
            return true
        }
        return false

}

function isRightSame2(node, nodeVal) {
    
    if(node.right === null || node.right.val === nodeVal) {
        console.log('checking right child')
        return true
    }
    return false
}


function isUnivalTree2(node) {

    // is left child same
    // is right child same
    // recursive call 

        if(node === null) {
            return true 
        }

        if( isLeftSame2(node, node.val) && isRightSame2(node, node.val)) {
            console.log('child same')
            return isUnivalTree2(node.left, node.val) && isUnivalTree2(node.right, node.val)
        } else {
            return false
        }

}

// console.log(isUnivalTree2(root2))




// iterative solution -- while loop

function isUnivalTree3(node) {

}

// console.log(isUnivalTree3(root2))






/**
 * merge two binary trees
 */



 const t1 = {
     value: 1,
     size: 2,
     left: {
         value: 3,
         size: 1, 
         left: {
             value: 5,
             size: 0,
             left: null,
             right: null
         },
         right: null
     },
     right: {
         value: 2,
         size: 0,
         left: null,
         right: null
     }
 }

 const t2 = {
    value: 2,
    size: 2,
    left: {
        value: 1,
        size: 1, 
        left: null,
        right: {
            value: 4,
            size: 0,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        size: 1,
        left: null,
        right: {
            value: 7,
            size: 0,
            left: null,
            right: null
        }
    }
}


function mergeTrees(t1, t2) {
    // root
    // console.log('root:')
    // console.log(t1, t2)

    if (t1 === null) {
        return t2
    }

    if (t2 === null) {
        return t1
    }

    // root sum
    t1.value = t1.value + t2.value

    // Going down tree

    // left
    t1.left = mergeTrees(t1.left, t2.left)
    // console.log("root.left", t1.left)

    // right
    t1.right = mergeTrees(t1.right, t2.right)

    // Going back up tree

    // console.log('result:', t1)
    return t1
}
// console.log('result: ', mergeTrees(t1, t2))




/**
 * max depth of a tree
 */

const t3 = {
    val: 3,
    size: 2,
    left: {
        val: 9,
        size: 0, 
        left: null,
        right: null
    },
    // left: null,
    right: {
        val: 20,
        size: 0,
        left: {
            val: 15,
            size: 0, 
            left: null,
            right: null
        },
        right: {
            val: 7,
            size: 0,
            left: null,
            right: null
        }
        // right: null
    }
}



// failed try "top-down"

// function maxDepth(root) {

//     function countDepth(root, count) {
//         console.log({root, count})

//         if(root.size === 0) {
//             return count
//         }

//         if(root.left !== null && root.right === null) {
//             console.log('going left')
//             count ++
//             return countDepth(root.left, count)
//         }

//         if(root.right !== null) {
//             console.log('going right')
//             count ++
//             console.log({count})
//             return countDepth(root.right, count)
//         }

//     }

//     return countDepth(root, 1)

// }
// console.log("result:", maxDepth(t3))






// "top-down solution"
let answer = 0
function maxDepth(root, depth) {

    // root is null
    if(root === null) {
        return answer
    }

    // root has no child
    if(root.left === null && root.right === null) {
        // compare answer and depth
        answer = Math.max(answer, depth)
    }

    // root has child 
    maxDepth(root.left, depth+1) 

    maxDepth(root.right, depth+1)

    return answer

}


// console.log("result:", maxDepth(t3, 1))




// top-down solution:
var maxDepth = function(root) {    
    let maxNodes = (node, sum) => {
        if (node === null) {
            return sum;
        }
        
        return Math.max(maxNodes(node.left, sum + 1), maxNodes(node.right, sum + 1));
    }
    return maxNodes(root, 0);
};




// "bottom-up" solution 
// function maxDepth(root) {
//     if(root === null) {
//         return 0
//     }
//     else {
//         let leftDepth = maxDepth(root.left)
//         let rightDepth = maxDepth(root.right)
//         let biggerDepth = Math.max(leftDepth, rightDepth)
//         return biggerDepth + 1
//     }
// }
// console.log("result:", maxDepth(t3))





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
  * subarray sum equals k
  */

  // brute force solution, for loop inside of a  while loop (leetcode not accepted)

// const sum = (arr) => {
//     const sum = arr.reduce((cur, acc)=> cur + acc)
//     return sum
// }

// function subarraySum(nums, k) {
//     let startingIndice = 0 
//     let countEqualsK = 0
    
//     while(startingIndice < nums.length) {
//         for(let i = startingIndice; i<nums.length; i++) {
//             let subArray = nums.slice(startingIndice, i + 1)
//             if(sum(subArray) === k) {
//                 countEqualsK++
//             }
//         }
//         startingIndice++
//     }
//     return countEqualsK
// }


// refactor brute force solution (leetcode accepted)
function subarraySum(nums, k) {
    let startingIndice = 0 
    let countEqualsK = 0
    
    while(startingIndice < nums.length) {
        let sum = 0
        for(let i = startingIndice; i<nums.length; i++) {
            sum = sum + nums[i]
            if(sum === k) {
                countEqualsK++
            }
        }
        startingIndice++
    }
    return countEqualsK
}



// hashmap solution failed
// function subarraySum(nums, k) {
//     let map = {}
//     let sum = 0
//     let count = 0;

//     for(let i = 0; i < nums.length; i++) {
//         // calculate sum
//         sum += nums[i]
//         // enter new sum to map
//         if(!map.hasOwnProperty(sum)) {
//             map[sum] = 1
//         } else {
//             map[sum]++
//         }

//         // if sum  === k, increment count 
//         if(sum === k) {
//             count++
//         }

//         // if sum - k === any previously stored sum, increase count 
//         if(map.hasOwnProperty(sum-k)) {
//             count++
//         }

//         console.log(count)
        
//     }
//     console.log(map)
//     return count
// }

// successful hashmap solution
// function subarraySum(nums, k){
//     // key = sum, value = number of occurances
//     let map = new Map
//     let sum = 0
//     let count = 0
//     map.set(0, 1)

//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         console.log('sum: ', sum)
//         // when sum === k, count++ because {0:1}
//         if(map.has(sum-k)) {
//             count = count + map.get(sum-k)
//             console.log('count: ', count);
//         }
//         if(map.has(sum)) {
//             map.set(sum, map.get(sum) + 1)

//         } else {
//             map.set(sum, 1)
//         }
//     }

//     console.log('map: ', map.entries());
//     return count 
// }


// console.log(subarraySum([1, 2, 3, 1, -1], 3)) //
// console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)) //4
// console.log(subarraySum([1], 0)) // 0
// console.log(subarraySum([1, 1, 1], 2)) // 2
// console.log(subarraySum([-1, -1, 1], 0)) // 1
// console.log(subarraySum([1, 2, 3], 3)) // 2



/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 */

// nested for loop, log n square
// var twoSum = function(nums, target) {
//     let ans = []
//     for(let i = 0; i<nums.length; i++) {
//         for(let j = i; j<nums.length; j++) {
//             if(nums[i] + nums[j] === target && i!==j) {
//                 ans.push(i, j)
//             }
//         }
//     }
//     return ans
// };

// one pass, o(n)
var twoSum = function(nums, target) {
    let map = new Map 
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(map.has(complement)) {
            return ans = [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}

// console.log(twoSum([1, 2, 7, 11, 15], 3))
// console.log(twoSum([3, 2, 3], 6))

/**
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 
 * Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

 * 
  */

 //solution: 
 var romanToInt = function(s) {
    s.split('')
    let result = 0;
    
    for(let i=0;i<s.length;i++){
        switch(s[i]){
            case 'I':
                if(s[i+1] === 'V' || s[i+1]==='X'){
                    result --;
                }else{
                    result ++;
                }
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                if(s[i+1] === 'L' || s[i+1]==='C'){
                    result -= 10;
                }else{
                    result += 10;
                }
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                if(s[i+1] === 'D' || s[i+1]==='M'){
                    result -= 100;
                }else{
                    result += 100;
                }
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
            default:
                console.log("something wrong")
                break;
        }
    }
    
    return result;
};

var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currVal = roman[s[i]]
        const nextVal = roman[s[i+1]]
        
        if (currVal < nextVal) {
            sum += nextVal - currVal
            i++
        } else {
            sum += currVal
        }
    }
    
    return sum
};


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