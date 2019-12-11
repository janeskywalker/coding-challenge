




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
// console.log(findPath2(targetNode, tree))




    


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
// console.log(isUnivalTree([1,1,1,1,1,null,1])) // true 
// console.log(isUnivalTree([2,2,2,5,2])) // false 




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
 * 
 * Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
 * 
 * 
 * Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
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
 * 
 *  Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
 * 
 *  3
   / \
  9  20
    /  \
   15   7

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
// bad practice - global variable
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
 * diameter of a binary tree
 *  
 * DFS
 * 
 * related questions: 687
 * 
 * Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * 
 *        1
         / \
        2   3
       / \     
      4   5  



 */

const tree2 = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null

        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
}


var diameterOfBinaryTree = function(root) {
    let diameter = 0

    // helper function
    const dfs = (node) => {
        // if no root , return 0
        if(!node) {
            return 0
        }

        // if it has children
        let left = dfs(node.left)
        let right = dfs(node.right)

        // update diameter at every node, if path is longer than diameter 
        diameter = Math.max(diameter, left + right)

        // update the largest number of edge so far, return the length of the longest parth
        // return to parent node, tell him my longest path is how many edges
        return Math.max(left+1, right+1)
    }

    dfs(root)
    return diameter
}

// console.log(diameterOfBinaryTree(tree2))









/**
 * 100.same tree
 * Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

 */

 sameTree1 = {
     val: 1,
     left: {
        val: 2,
        left: null,
        right: null
     },
     right: {
        val: 3,
        left: null,
        right: null
     },
 }


 sameTree2 = {
    val: 1,
    left: {
       val: 2,
       left: null,
       right: null
    },
    right: {
       val: 3,
       left: null,
       right: null
    },
},



sameTree3 = {
    val: 1,
    left: {
       val: 2,
       left: null,
       right: null
    },
    right: null
}

sameTree4 = {
    val: 1,
    left: null,
    right: {
       val: 2,
       left: null,
       right: null
    },
}



var isSameTree = function(p, q) {

        if( p === null && q === null) {
            return true
        }

        // if( p === null || q === null) {
        //     return false
        // }

        if( p !== null && q === null) {
            return false
        }

        if( p === null && q !== null) {
            return false
        }

        if(p.val !== q.val) {
            return false
        } 

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

}

// console.log(isSameTree(sameTree1, sameTree2))
// console.log(isSameTree(sameTree3, sameTree4))

















/**
 * 572.subtree of another tree
 * 
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
 * 
 * 

     3
    / \
   4   5
  / \
 1   2


    4 
  / \
 1   2

(true)



 

     3
    / \
   4   5
  / \
 1   2
    /
   0


   4
  / \
 1   2

(false)

 */

 tree4 = {
     val:3,
     left:{
         val: 4,
         left: {
             val: 1,
             left: null,
             right: null

         },
         right: {
             val: 2,
             left: null,
             right: null
         }

     },
     right: {
         val: 5,
         left: null,
         right: null

     }
 }

 tree5 = {
     val: 4,
     left: {
         val: 1,
         left: null,
         right: null
     },
     right: {
        val: 2,
        left: null,
        right: null
     }
 }


var isSubtree = function(s, t) {
    console.log({s, t})
    // no need to check t - null is always a subtree of another tree
    if(s === null) {
        return false
    }
    
    // if identical tree is a subtree of itself 
    if(isSameTree(s, t)) {
        return true
    }
    
    // it is ok if there is false because this is or ||
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};
console.log(isSubtree(tree4, tree5))
