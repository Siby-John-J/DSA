
class MaxHeap {
    constructor() {
        this.data = []
    }
    
    insert(node) {
        this.data.push(node)

        if(this.data.length >= 2) {
            this._heapify_up(this.data.indexOf(node))
        }
    }

    remove(node) {
        // this.data.shift(node)
        // const lastNode = this.data.pop()
        // this.data.unshift(lastNode)

        if(this.data.length >= 2) {
            this._heapify_down()
        }
    }
    
    _heapify_up(ind) {
        let _ind = ind
        let index = Math.floor((_ind - 1) / 2)
        
        while(this.data[_ind] > this.data[index]) {
            let hold = this.data[_ind]
            this.data[_ind] = this.data[index]
            this.data[index] = hold

            _ind = index
            index = Math.floor((_ind - 1) / 2)
        }
    }

    _heapify_down() {
        let index = 0

        // while(true) {
        //     if(this.data[index] < this.leftChild[this.data[index]]) {
                
        //     }
        // }
    }

    leftChild(node) {
        const index = (2 *  this.data.indexOf(node) + 1)
        return this.data[index]
    }

    rightChild(node) {
        const index = (2 * this.data.indexOf(node) + 2)
        return this.data[index]
    }
}

const h = new MaxHeap()
h.insert(12)
h.insert(4)
h.insert(6)
h.insert(2)
h.insert(1)
h.insert(7)
h.insert(30)
h.insert(200)
h.insert(14)
h.insert(35)
h.insert(23)

h.remove(12)

console.log(h.data)
console.log(h.rightChild(35))
