
class Graph {
    constructor() {
        this.data = []
        this.edges = []
        this.queue = []
    }
    
    insert(value) {
        const data = {
            [value]: []
        }
        this.data.push(data)
    }
    
    connect(node1, node2) {
        for (const node of this.data) {
            if(node[node1] !== undefined) {
                node[node1].push(node2)
            }
            if(node[node2] !== undefined) {
                node[node2].push(node1)
            }
        }
    }

    getnode(node) {
        for (const item of this.data) {
            if(item[node]) {
                return item
            }
        }
    }

    DFS_Rec() {
        const visited = {}
        const results = []

        const caller = node => {
            if(!node) return null

            const value = Object.keys(node)[0]
            results.push(value)
            visited[value] = true

            const newNode = this.getnode(value)

            for (const neibours of Object.values(newNode)[0]) {
                if(!visited[neibours]) {
                    caller(this.getnode(neibours))
                }
            }
        }

        caller(this.data[1])
        console.log(results)
    }

    DFS_Ite() {
        const visited = {}
        const results = []
        const stack = []
        let node = this.data[1]

        stack.push(node)

        while(true) {
            if(results.length >= 7) break

            node = stack.pop()

            let value = Object.keys(node)[0]

            if(!visited[value]) {
                results.push(value)
                visited[value] = true
                
                const newNode = this.getnode(value)
                
                for(const neibours of Object.values(newNode)[0]) {
                    stack.push(this.getnode(neibours))
                }
            }
        }
        
        console.log(results)
    }

    BFS() {
        const visited = {}
        const results = []
        const queue = []
        let node = null

        queue.push(this.data[0])

        while(true) {
            if(results.length >= 7) break

            node = queue.shift()
            const value = Object.keys(node)[0]

            if(!visited[value]) {
                visited[value] = true
                results.push(value)

                const newNode = this.getnode(value)

                for (let item of Object.values(newNode)[0]) {
                    queue.push(this.getnode(item))
                }
            }
            
        }

        console.log(results)
    }
}

//          A
//        /  \
//      B     C
//       \    \
//        D---E --- G
//        \  /
//         F

const g = new Graph()
g.insert('A')
g.insert('B')
g.insert('C')
g.insert('D')
g.insert('E')
g.insert('F')
g.insert('G')

g.connect('A', 'B')
g.connect('A', 'C')
g.connect('B', 'D')
g.connect('C', 'E')
g.connect('D', 'E')
g.connect('D', 'F')
g.connect('E', 'F')
g.connect('G', 'E')

// g.DFS_Ite()
// g.DFS_Rec()

g.BFS()

// console.log(g.data)
