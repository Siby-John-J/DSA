
class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if(this.root === null) {
            this.root = newNode
        } else {
            let curr = this.root

            while(true) {
                if(curr.value > value) {
                    if(curr.left === null) {
                        curr.left = newNode
                        break
                    }
                    curr = curr.left
                } else if(curr.value < value) {
                    if(curr.right === null) {
                        curr.right = newNode
                        break
                    }
                    curr = curr.right
                }
            }
        }
    }

    BFS() {
        const queue = []
        const visited = []
        
        const caller = (node) => {
            if(!node || queue.length <= 0) return null

            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)

            visited.push(queue[0].value)
            queue.shift()
            
            caller(queue[0])
        }
        
        queue.unshift(this.root)
        caller(this.root)
        
        console.log(visited)
    }

    BFS2() {
        const queue = []
        const output = []
        
        const helper = (node) => {
            if(!node || queue.length <= 0) return nulledfg
            
            if(node.right) queue.push(node.right)
            if(node.left) queue.push(node.left)
            
            output.push(queue[0].value)
            queue.shift()
            
            helper(queue[0])
        }
        
        queue.push(this.root)
        helper(this.root)
        console.log(output)
    }

    DFS(type) {
        const results = []
        const caller = (node) => {
            if(!node) return null
            
            if(node.left) caller(node.left)
            results.push(node.value)
            if(node.right) caller(node.right)

        }
        caller(this.root)
        console.log(results)
    }

    _insert() {

    }

    invert() {
        const helper = node => {
            if(!node) return null

            if(node) {
                const hold = node.left
                node.left = node.right
                node.right = hold
            }

            helper(node.right)
            helper(node.left)
        }
        
        helper(this.root)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const b = new BinaryTree()
b.insert(10)
b.insert(8)
b.insert(20)
b.insert(15)
b.insert(1)
b.insert(9)
b.insert(25)

// console.log(JSON.stringify(b.root))
b.BFS()
b.BFS2()
