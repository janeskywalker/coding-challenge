console.log('hi')



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

console.log(isParenthesesMatch("))(("))
console.log(isParenthesesMatch("(())"))
console.log(isParenthesesMatch("))"))
console.log(isParenthesesMatch("((())"))
console.log(isParenthesesMatch("(()))"))
console.log(isParenthesesMatch("("))
console.log(isParenthesesMatch("()()(())(()())"))

// console.assert(isParenthesesMatch("I dont need (parentheses) at all(") === false, "1")
// console.assert(isParenthesesMatch(")I dont need (parentheses) at all") === false, '2')

// console.assert(isParenthesesMatch("I dont need (parentheses) at ( all") === false, '3')
// console.assert(isParenthesesMatch("I dont need (parentheses) at) all") === false, '4')
// console.assert(isParenthesesMatch("I dont need (parentheses) at all") === true, '5')

// console.assert(isParenthesesMatch("I dont need (parentheses) (at all") === false, '6')


console.log(isParenthesesMatch("I dont need (parentheses) at) all"))






const numArr = [2, 17, 8, 2, 1, 2, 18, 5, 19, 8];

// const strArr = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// Create a function that takes an array of numbers and returns an object that contains the number as a key and the number of occurances as the value



const numArr2 = [2, 17, 8, 2];

// const strArr = ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// Create a function that takes an array of numbers and returns an object that contains the number as a key and the number of occurances as the value

const obj = {}

for( element of numArr) {
  console.log(element)
  
  if(!obj.hasOwnProperty(element)) {
     obj[element] = 0
     }
  obj[element] = obj[element] + 1 
}

console.log(obj)






// Create  fcunction that takes 2 arrays as arguments and returns true if they contain one or more common items

const arr1 = ['x', 'a', 'c', 'y']
const arr2 = ['m', 'o', 'x', 'b']

function isCommonItem(arr1, arr2) {
  for(i of arr1) {
    if(arr2.includes(i)) {
      console.log(i)
      return true
     }
  }
  return false
}

console.log(isCommonItem(arr1, arr2))







/**

Balanced parens
()()()

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

console.log('one: ', calculate("(3 + 5)"));
console.log('two: ', calculate("(3 + 5) + 8"));
console.log('three: ', calculate("(2 * 3) + (5 - 2)"))
console.log('four: ', calculate("((3 + 4) * 3) + 70"))











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


const targetNode = tree.children[0].children[1]

console.log('targetNode: ', targetNode);

console.log(findPath(targetNode, tree))
console.log(findNode(targetNode, tree, copy));
    
    
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
    
    
console.log(reverse("I am Jane Hot"))



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

console.log(arrSum.length)








// You are in charge of the cake for your niece's birthday and have decided the cake wlil have one candel for each year of her total age. When she blows out the candles she'll only be able to blow out the tallest onemptieds. Your task is to find out how many candles she can successfully blow out

// For example, if your niece is turning 4 years onload, and the cake will have 4 candles, the height 3,3,1,2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 3 and there are such candles

// Create a function: birthdayCakeCandles. It must return an interger representing the number of candles she can blow out

// birthdayCakeCandles has the following parameters: arr - an array of interegers repressing candel heights.



let candles = [3,3,1,2,3,2,3];

const birthdayCakeCandles = (arr) => {
    let max = Math.max(...arr);
    return arr.filter(item => item === max).length
}
console.log(birthdayCakeCandles(candles));











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
    console.log(sortedArr = str.split('').map(char=>parseInt(char)).sort())

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

console.log(findLargest("00809040021389"))










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







// Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers.

function inserDash(num) {
    str = num.toString()
    newStr = ""
    for( let i=0; i<str.length; i++) {
        if(str[i] % 2 === 1 && str[i-1] %2 === 1) {
            console.log(str[i])
            str[i-1] = "-" + str[i]
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
console.log(removeSpace("The film   starts       at      midnight. "))
console.log(removeSpace(" Always look on    the bright   side of  life."))






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

    console.log({flightObj})

    const destinations = Object.values(flightObj)
    console.log({destinations})
    
    const departures = Object.keys(flightObj)
    console.log({departures})
    
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
    
    console.log({startingPoint})
    
    sortedArray.push(startingPoint)
    let dest = flightObj[startingPoint]
    
     // What about flightObj?
    
    while (dest !== undefined) {
        console.log({ dest })
        sortedArray.push(dest)
        dest = flightObj[dest]
    }
    
    return sortedArray
}
 
const flights = [ [ 'SFO', 'JFK' ], [ 'LAX', 'SFO' ], [ 'ATL', 'PHX' ], [ 'LAS', 'ATL' ], [ 'PHX', 'LAX' ] ]


console.log(orderFlights(flights))
















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

console.log(autoComplete('ap')) // ['app', 'apple', 'apricot']





// iterative 

function power(a, b) {
  let result = 1
  for(let i=0; i<b; i++) {
    console.log({i})
    result = result * a
    console.log({result})
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




console.log(power2(2,0))
console.log(power2(2,3))






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
        if(str[i] === "U") {
            up = up + 1
            altitude = altitude + 1
            if(altitude === 0 ) {
                valleyCount = valleyCount + 1
            }
        }
    }
    return valleyCount
}

console.log("vallyCount:", countingValleys(8, 'UDDDUDUU') )





