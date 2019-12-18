



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


