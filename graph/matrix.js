
class Graph {
    constructor() {
        this.matrix = []
        this.data = []
    }

    insert(node) {
        this.data.push(node)
        this.matrix.push([])
        
        for(let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < this.data.length; j++) {
                if(!this.matrix[i][j]) {
                    this.matrix[i][j] = 0
                }
            }
        }
    }

    connnect(node1, node2) {
        const index1 = this.data.indexOf(node1)
        const index2 = this.data.indexOf(node2)

        this.matrix[index1][index2] = 1
        this.matrix[index2][index1] = 1
    }

    print() {
        for(let i = 0; i < this.matrix.length; i++) {
            console.log(this.data[i], this.matrix[i])
        }
    }

    getNeibours(node) {
        const index = this.data.indexOf(node)
        const neibours = []

        for(let i = 0; i < this.matrix.length; i++) {
            if(this.matrix[index][i]) {
                neibours.push(this.data[i])
            }
        }

        return neibours
    }

    DFS(_node) {
        const visited = {}
        const output = []

        const helper = node => {
            if(!node) return null

            visited[node] = true
            output.push(node)
            const neibours = this.getNeibours(node)

            for(node of neibours) {
                if(!visited[node]) helper(node)
            }
        }

        helper(_node)
        console.log(output)
    }
}

const g = new Graph()
g.insert('A')
g.insert('B')
g.insert('C')

g.connnect('A', 'B')

g.insert('D')
g.connnect('A', 'D')
g.connnect('C', 'D')

g.getNeibours('A')
// g.DFS('A')

g.print()
// console.log(g.matrix);