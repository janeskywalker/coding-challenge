





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
 * Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
1(square) + 9(sqare) = 82
8(square)+ 2(square) = 68
6(square) + 8(square) = 100
12 + 0(square) + 0(square) = 1
 */

 // recursion w/ try/catch statement
var isHappy2 = function(n) {
    let str = n.toString()
    let sum = 0
    for(let char of str) {
        let digit = Number(char)
        sum += Math.pow(digit, 2)
    }

    if(sum === 1) {
        return true
    }

    //the return false statement is only executed after a TLE error. But demonstrating one way of solving this in case you weren't able to immediately come up with the optimal approach.
    try {
        return isHappy2(sum);
    } catch(e) {
        return false;
    }
}








// iterative 
// var isHappy = function(n) {
//     const set = new Set

//     while(n !== 1) {
//         let current = n
//         let sum = 0
//         while(current !== 0) {
//             sum += (current % 10) * (current % 10)
//             current = Math.floor(current/10)
//         }

//         if(set.has(sum)) {
//             return false
//         } 

//         set.add(sum)
//         n = sum
//     }

//         return true
// };





// recursion with set to keep track on sum
var isHappy = function(n) {
    let set = new Set

    const check = (n) => {
        let sum = 0
        let current = n
        while(current !== 0) {
            sum += (current % 10) * (current % 10)
            current = Math.floor(current/10)
        }

        if(sum === 1) {
            return true
        } else {
            if(set.has(sum)) {
                return false
            }
            set.add(sum)
            return check(sum)
        }
    }

    return check(n)
}



// console.log(isHappy(19)) //true
// console.log(isHappy(116)) //false
// console.log(isHappy(7)) //true







/**
 * magic squares in grid -- skipped
 */











/**
 * 
 * Min stack
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * 
 * 
 * example:
 * MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */


class MinStack {
    constructor(stack) {
        this.stack = []
    }

    push(x) {
        this.stack.unshift(x)
    }

    pop() {
        this.stack.shift()
    }

    top() {
        return this.stack[0]
    }

    getMin() {
        return Math.min(...this.stack)
    }
}

// const obj = new MinStack()


// obj.push(2)
// obj.push(1)
// obj.push(3)
// console.log(obj)
// // obj.pop()
// // let top = obj.top()
// // console.log(top)

// let getMin = obj.getMin()
// console.log(getMin)









/**
 * 
 * Max stack
 * 
 * 
 * Design a max stack that supports push, pop, top, peekMax and popMax.

push(x) -- Push element x onto stack.
pop() -- Remove the element on top of the stack and return it.
top() -- Get the element on the top.
peekMax() -- Retrieve the maximum element in the stack.
popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.

 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()

examples: 
MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5
 */


class MaxStack {
    constructor() {
        this.stack = []
    }

    push(x) {
        this.stack.unshift(x)
    }

    pop() {
        this.stack.shift()
    }

    top() {
        return this.stack[0]
    }

    peekMax() {
        return Math.max(...this.stack)
    }

    popMax() {
        let max = Math.max(...this.stack)
        return this.stack.splice(this.stack.lastIndexOf(max), 1)
    }
}

const obj = new MaxStack()

obj.push(5)
obj.push(1)
obj.push(5)


// let top = obj.top()
// console.log(top)

// // let peekMax = obj.peekMax()
// // console.log(peekMax)

// let popMax = obj.popMax()


// let top1 = obj.top()
// console.log(top1)

// const peekMax = obj.peekMax()
// console.log(peekMax)














/**
 * Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.


 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 


MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 
 */


class MyHashMap {
    constructor() {
        this.map = {}

    }

    put(key, value) {
        // if(!this.map[key]) {
        //     this.map[key] = value
        // } else {
            this.map[key] = value
        // }
    }

    get(key) {
        if(this.map[key] === undefined) {
            return -1
        }
        return this.map[key]
    }

    remove(key) {
        if(this.map.hasOwnProperty(key)) {
            delete(this.map[key])
        }
    }
    
}

// const hashMap = new MyHashMap()
// hashMap.put(1, 2)
// hashMap.put(1, 1)
// hashMap.put(2, 2)
// console.log(hashMap)

// const get = hashMap.get(3)
// hashMap.put(2, 1)
// console.log(get)

// hashMap.remove(1)
// console.log(hashMap)











/**
 * merger sorted array (two pointers)
 * 
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 */

var merge = function(nums1, m, nums2, n) {
    let insert = m + n - 1
    var endNums1 = m-1 
    var endNums2 = n-1


    while(endNums1 >= 0 && endNums2 >= 0) {
        console.log('here')
        if(nums1[endNums1] < nums2[endNums2]) {
            nums1[insert] = nums2[endNums2]
            insert--
            endNums2--
        } 

        // these two can be merged to save run time
        else if (nums1[endNums1] > nums2[endNums2]) {
            nums1[insert] = nums1[endNums1]
            insert--
            endNums1--
        } else if (nums1[endNums1] = nums2[endNums2]) {
            nums1[insert] = nums1[endNums1]
            insert--
            endNums1--
        } 
    }

    // if not all nums2 element are merged into nums1
    while (endNums2 >= 0) {
        nums1[insert] = nums2[endNums2]
        insert--
        endNums2--
    }
    console.log(nums1)
}
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) // [1,2,2,3,5,6]
// console.log(merge([0], 0, [1], 1)) // [1]
console.log(merge([2,0], 1, [1], 1)) // [1, 2]


