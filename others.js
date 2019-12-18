





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










