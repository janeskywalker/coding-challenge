
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







