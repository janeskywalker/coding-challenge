/**
 * There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.

All costs are positive integers.

house1: r, g, b
house2: r, g, b
house3: r, g, b

 */

var minCost = function(costs) {
    if (!costs.length) return 0;

    var n = costs.length -1
    for(let i=1; i<costs.length; i++) {
        costs[i][0] += Math.min(costs[i-1][1], costs[i-1][2])
        costs[i][1] += Math.min(costs[i-1][0], costs[i-1][2])
        costs[i][2] += Math.min(costs[i-1][0], costs[i-1][1])
        console.log(costs[i][0])
        console.log(costs[i][1])
        console.log(costs[i][2])
    }
    return Math.min(costs[n][0], costs[n][1], costs[n][2])
}
// console.log(minCost([[17,2,17],[16,16,5],[14,3,19]])) // 10 (2+5+3)








/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 */


var rob = function(nums) {
    if(nums.length === 0) {
        return 0
    }
    if(nums.length === 1) {
        return nums[0]
    }

    let runningTotal = []
    runningTotal[0] = nums[0]
    runningTotal[1] = Math.max(nums[0], nums[1])
    for(let i=2; i<nums.length; i++) {
        runningTotal[i] = Math.max( runningTotal[i-2] + nums[i], runningTotal[i-1])
    }
    return runningTotal[nums.length -1]
};
// console.log(rob([1,2,3,1])) //4
// console.log(rob([2,7,9,3,1])) //12
// console.log(rob([2,1,1,2])) //12
