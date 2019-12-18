
// tree problems overlaps DFS and BFS


/**
 * DFS
 * In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.
 */

var orangesRotting = function(grid) {
    // queue is to store rotten oranges indices of row and column
    let queue = []
    let fresh = 0
    let minutes = 0

    // scan to find rotten orange indices and fresh orange count
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] === 1) {
                fresh++
            } else if(grid[i][j] === 2) {
                queue.push([i,j])
            }
        }
    }
    // classic bfs
    // keep checking till queue is empty, meaning no more rotten one to begin with, or no fresh ones left
    while(queue.length !== 0 && fresh) {
        let dR = [0, -1, 0, 1]
        let dC = [-1, 0, 1, 0]
        let next = []
        // you dont add minues till one layer is finished, finish one depth first
        // this queue is a different queue
        while(queue.length !== 0) {
            // pop one rotten orange out
            let curRotten = queue.shift()
            // check this rotten orange's 4 directions 
            for(let i=0; i<dR.length; i++) {
                let nR = curRotten[0] + dR[i]
                let nC = curRotten[1] + dC[i]
                if( nR >= 0 && nC >=0 && nR < grid.length && nC < grid[0].length ) {
                    if(grid[nR][nC] === 1) {
                        grid[nR][nC] = 2
                        fresh--
                        next.push([nR, nC])
                    }
                }
            }
        }

        // after checking all 4 directions, increment minutes
        minutes++
        queue = next
    }
    return fresh === 0 ? minutes : -1
}
// console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])) //4
// console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])) //-1
// console.log(orangesRotting([[0,2]])) //0











 /**
  * DFS
  * 
  * same solution with: 200, 547, 695
  * 
  * An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.
  */



 var floodFill = function(image, sr, sc, newColor) {
    // check if anywork to do
    const startingColor = image[sr][sc]
    if(startingColor === newColor) {
        return image
    }

    // a helper function to be called recursivelly
    // fill itself and 4 directions
    const floodFillHelper = (image, sr, sc, newColor, startingColor) => {
        // instead of writing a condition of execution, writing the opposite, if the conditions satisfy, exit and dont do anything
        if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== startingColor ) {
            return 
        }

            image[sr][sc] = newColor
            floodFillHelper(image, sr-1, sc, newColor, startingColor)
            floodFillHelper(image, sr+1, sc, newColor, startingColor)
            floodFillHelper(image, sr, sc+1, newColor, startingColor)
            floodFillHelper(image, sr, sc-1, newColor, startingColor)
    }
    floodFillHelper(image, sr, sc, newColor, startingColor)

    // return image here
    return image
}
// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)) // [[2,2,2],[2,2,0],[2,0,1]]



















 /**
  * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
  */

 var letterCombinations = function(digits) {

    if (digits.length === 0) return [];
    
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    let res = []

    function letterComboHelper(i, str) {

        console.log({i, str})  

        // all digits are filled 
        if (i === digits.length) {
        // if (map[digits[i]] === undefined) {
            res.push(str)
            return
        }
  
        for (let char of map[digits[i]]) {
            console.log({char})
            letterComboHelper(i + 1, str + char)
        }
    }
  
    letterComboHelper(0, '')

    return res
    
}



// var letterCombinations = function(digits) {
//     if(digits.length === 0) return []
//     let hash = {
//         "2": "abc",
//         "3": "def",
//         "4": "ghi",
//         "5": "jkl",
//         "6": "mno",
//         "7": "pqrs",
//         "8": "tuv",
//         "9": "wxyz"
//     }
//     let result = []
//     letterComboHelper(result, digits, hash, 0, "")
//     return result
    
// };

// function letterComboHelper(result,digits,hash, idx, combo){
//     if(combo.length === digits.length){
//         result.push(combo)
//         return
//     }
//     let letters = hash[digits[idx]]
//     for(let i = 0; i < letters.length; i++){
//         let currentLetter = letters[i]
//         letterComboHelper(result,digits,hash, idx + 1, combo + currentLetter )
//     }
// }

console.log(letterCombinations('23')) // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] 


