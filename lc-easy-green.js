



/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 */

// nested for loop, O of n square
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
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

 */

 // two pointers, one pass
const twoSum2 = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {
      const sum = numbers[start] + numbers[end];
      if (sum === target) {
        return [start + 1, end + 1];
      }
      else if (sum < target) {
        start++
      }
      else if (sum > target){
        end--
      }
    }
    return [-1, -1]
}
// console.log(twoSum2([1, 2, 7, 11, 15], 26))
// console.log(twoSum2([2, 7, 11, 15], 9))












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
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */

 // one-pass, O(N)
function maxSubArray(nums) {
    let sum = nums[0]
    let max = nums[0]
    for(let i=0; i <nums.length; i++) {
        sum = Math.max( sum + nums[i], nums[i])
        max = Math.max( sum, max)
        console.log({sum, max})
    }
}

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //6
// console.log(maxSubArray([-1, 2, 3, -2, -1])) //5










/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
 */

var maxProfit = function(prices) {
    let buyPrice = prices[0]
    let profit = 0

    for(i=1; i<prices.length; i++) {
        if(prices[i] < buyPrice) {
            buyPrice = prices[i]
        } 
        profit = Math.max(prices[i]-buyPrice, profit)
    }
    return profit
}

// console.log(maxProfit([7,1,5,3,6,4])) //5
// console.log(maxProfit([7,6,4,3,1])) //0












/**
 * Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
 */

 // one hashmap, two passes
// var findShortestSubArray = function(nums) {
//     const map = new Map
//     let degree = 0
    
//     for(let i =0; i<nums.length; i++) {
//         const n = nums[i]
//         if(!map.has(n)) {
//             map.set(n, [])
//         } 
//         map.get(n).push(i)
//         degree = Math.max(map.get(n).length, degree)

//     }

//     let shortest = nums.length
//     for(let i=0; i<nums.length; i++) {
//         const n = nums[i]
//         if(map.get(n).length === degree) {
//             const left = map.get(n)[0]
//             const right = map.get(n)[degree-1]
//             const length = right - left 
//             shortest = Math.min(shortest, length+1)
//         }
//     }
//     return shortest
// }
// console.log(findShortestSubArray([1, 2, 2, 3, 1])) //2
// console.log(findShortestSubArray([1,2,2,3,1,4,2])) //6



// three hashmaps, one pass solution: working in progress
var findShortestSubArray = function(nums) {
    const firstIndex = {}
    const lastIndex = {}
    const numCount = {}
    let max = 0
    let maxNum = 0

    for(let i=0; i<nums.length; i++) {
        let n = nums[i]
        if(!firstIndex.hasOwnProperty(n)) {
        firstIndex[n] = i
        }

        lastIndex[n] = i

        if(!numCount[n]) {
            numCount[n] = 0
        }
        numCount[n]++

        if(max < numCount[n]) {
            max = numCount[n]
            maxNum = numCount[n]
        }        
    }

    console.log({firstIndex})
    console.log({lastIndex})
    console.log({numCount})
    console.log(max)
    console.log(maxNum)
};
// console.log(findShortestSubArray([1, 2, 2, 3, 1])) //2


// leetcode solution:
// var findShortestSubArray = function(nums) {
//     var firstIndex = Object.create(null);
//     var lastIndex = Object.create(null);
//     var numCount = Object.create(null);
//     var max = 0;
//     var maxNum;
//     for (var i = 0; i < nums.length; i++) {
//         if (firstIndex[nums[i]] === undefined) {
//             firstIndex[nums[i]] = i;
//             numCount[nums[i]] = 1;
//         } else {
//             numCount[nums[i]]++;
//         }
        
//         lastIndex[nums[i]] = i;
//         if (max < numCount[nums[i]]) {
//             max = numCount[nums[i]];
//             maxNum = nums[i];
//         } else if (max === numCount[nums[i]] && (lastIndex[nums[i]] - firstIndex[nums[i]]) < (lastIndex[maxNum] - firstIndex[maxNum])) {
//             maxNum = nums[i];
//         }
//     }
    
//     return 1 + lastIndex[maxNum] - firstIndex[maxNum];
// };










/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

var moveZeroes = function(nums) {
    let zeroCount = 0
    let j = 1
    let len = nums.length

    for(let i=0; i<len ; i++) {
        let shift = nums.shift()
        console.log({shift})
        if(shift === 0) {
            zeroCount++
        } else {
            nums.push(shift)
        }
        console.log({nums, zeroCount})
    }
    while(j<=zeroCount) {
        nums.push(0)
        j++
    }
   
    return nums
};
// console.log(moveZeroes([0,1,0,3,12])) //[1,3,12,0,0]
// console.log(moveZeroes([0,0,1])) //[1,3,12,0,0]













/**
 * Given two arrays, write a function to compute their intersection.
 */

// use set to optimize the solution, instead of O(N*M), it is 0(N)
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const intersection = []

    for(char of set1) {
        if(set2.has(char)) {
            intersection.push(char)
        }
    }
    return intersection
};
// console.log(intersection([1,2,2,1], [2,2])) // [2]
// console.log(intersection([4,9,5], [9,4,9,8,4])) // [4, 9]


















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


