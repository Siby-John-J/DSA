
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class AVL {
    constructor() {
        this.root = null
        this.conditions = [-1, 0, 1]
        this.left_subtree = 0
        this.right_subtree = 0
    }

    insert(value) {
        const newNode = new Node(value)

        if(!this.root) {
            this.root = newNode
        } else {
            let current = this.root

            while(true) {
                if(value > current.value) {
                    if(!current.right) {
                        current.right = newNode
                        this.right_subtree++
                        break
                    }
                    current = current.right
                } else if(value < current.value) {
                    if(!current.left) {
                        this.left_subtree++
                        current.left = newNode
                        break
                    }
                    current = current.left
                }
            }
        }

        // this._findHeight()
        const min_height = (this.left_subtree - this.right_subtree)
        console.log(min_height)
        
        if(!this.conditions.includes(min_height)) {
            this.L_Rotation()
        }
    }

    L_Rotation() {
        let holder = this.root
        let newHolder = this.root
        
        let root = holder.right
        newHolder.right = null
        root.right = root.right
        root.left = newHolder

        this.root = root
    }

    R_Rotation() {
        let holder = this.root
        let newHolder = this.root

        let root = holder.left
        newHolder.left = null
        root.left = root.left
        root.right = newHolder

        this.root = root
    }
}

const a = new AVL()
a.insert(10)
a.insert(9)
a.insert(8)
// a.insert(7)
// a.insert(6)
// a.insert(5)
// a.insert(4)
// a.insert(3)
// a.L_Rotation()
// a.L_Rotation()
// a.L_Rotation()
// a.L_Rotation()
a.R_Rotation()

console.log((a.root));

// console.log(a.left_subtree, a.right_subtree)