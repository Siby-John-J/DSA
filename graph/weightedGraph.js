
class PriorityQueue {
    constructor() {
        this.data = []
    }

    insert(value, priority) {
        let match = false
        const node = {
            value,
            priority
        }
        
        if(!match) {
            this.data.push(node)
            this._fix(node)
        }

    }

    _fix(node) {
        let index = this.data.indexOf(node)

        while(index !== 0 && this.data[index].priority < this.data[index - 1].priority) {
            let hold = this.data[index]
            this.data[index] = this.data[index - 1]
            this.data[index - 1] = hold
            index--
        }
    }

    delete() {
        return this.data.shift()
    }
}

class WeightedGraph {
    constructor() {
        this.data = {}
    }

    insert(value) {
        this.data[value] = []
    }

    addEdge(node1, node2, weight) {
        this.data[node1].push({ node: node2, weight })
        this.data[node2].push({ node: node1, weight })
    }

    dijkstras(node1, node2) {
        const nodes = new PriorityQueue()
        const visited = []
        const previous = {}
        const table = {}
        let smallest;
        
        for(let vertex in this.data) {
            if(vertex === node1) {
                table[vertex] = 0
                nodes.insert(vertex, 0)
            } else {
                table[vertex] = Infinity
                nodes.insert(vertex, Infinity)
            }
            previous[vertex] = null
        }

        while(nodes.data.length) {
            smallest = nodes.delete()
            if(smallest.value === node2) {
                for(let i in table) {

                }
                console.log(previous)
                break
                // return visited
            }
                for(let vertex of this.data[smallest.value]) {
                    const calculate = table[smallest.value] + vertex.weight
                    if(calculate < table[vertex.node]) {
                        table[vertex.node] = calculate
                        previous[vertex.node] = smallest.value
                        nodes.insert(vertex.node, calculate)
                    }
                }
            // }
            // break
        }
        console.log(visited)
    }
}

const w = new WeightedGraph()
w.insert('A')
w.insert('B')
w.insert('C')
w.insert('D')
w.insert('E')

w.addEdge('A', 'B', 9)
w.addEdge('A', 'E', 3)
w.addEdge('C', 'D', 8)
w.addEdge('D', 'E', 0)
w.addEdge('B', 'D', 5)
w.addEdge('C', 'B', 12)

w.dijkstras('A', 'B')

// const p = new PriorityQueue()
// p.insert('mgk', 100)
// p.insert('eminem', 5)
// p.insert('cadi', 140)
// p.insert('2pac', 1)

// p.insert('mgk', 3)
// p.insert('sus', 40)
// p.insert('cadi', 14)

// console.log(p.data)
