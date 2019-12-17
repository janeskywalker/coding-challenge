

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










