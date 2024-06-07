

function Radix(array) {
    const length = largest(array)
    const obj = {}
    let output = []

    for(let i = 0; i <= 9; i++) {
        obj[i] = []
    }

    for(let i = 0; i < length; i++) {
        for(let value of array) {
            const res = getIndex(i, value)
            
            obj[res].push(value)
            // break
        }
        for(let values in obj) {
            if(obj[values].length !== 0) {
                output.push(obj[values].reverse())
            }
            // console.log(output)
        }
        break
    }

    return output.flat()
}

function getIndex(index, number) {
    return Math.floor(Math.abs(number) / Math.pow(10, index) % 10)
}

function largest(array) {
    let largest = 0
    
    for(let i of array) {
        if(largest < maxLength(i)) largest = maxLength(i)
    }

    return largest
}

function maxLength(number) {
    return Math.floor(Math.log10(number) + 1)
}

const res = Radix([3, 22, 13, 3213, 8478, 2321 ,32393, 4, 23, 121, 4324])
console.log(res);