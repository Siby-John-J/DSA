

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.data = []
    }

    insert(value, priority) {
        const newNode = new Node(value, priority)

        this.data.push(newNode)
        
        if(this.data.length >= 2) {
            this._correct(newNode)
        }
    }

    delete() {
        return this.data.shift()
    }

    _correct(node) {
        let index = this.data.indexOf(node)

        while(index !== 0 && this.data[index].priority < this.data[index - 1].priority) {
            let hold = this.data[index]
            this.data[index] = this.data[index - 1]
            this.data[index - 1] = hold

            index--
        }
    }
}

const q = new PriorityQueue()
q.insert('A', 4)
q.insert('B', 2)
q.insert('C', 3)
q.insert('D', 12)
q.insert('Z', 10)
q.insert('a1d', 7)
q.insert('ad1', 5)
q.insert('z+', 1)

q.delete()
q.delete()
q.delete()

console.log(q.data)