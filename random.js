









    
    



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
    
















// Sum range recursion 
// Prompt
// Input = 5
// Output = 15


// Recursion Challenge
// With recursion find the factorial 












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





























