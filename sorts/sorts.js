
const ar = [2,4,1,6,7,5,9]

const selectionSort = (arr) => {
    pos = 0
    min = null
    
    for(let i = 0; i < arr.length; i++) {
        min = arr[i]
        
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j]
                pos = j
            }
        }
    
        hold = arr[i]
        arr[i] = min
        arr[pos] = hold
    }

    console.log(arr)
}

const merge = (arr1, arr2) => {
    const out = []
    let j = 0
    let i = 0

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            out.push(arr1[i])
            i++
        } else {
            out.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) {
        out.push(arr1[i])
        i++
    }

    while(j < arr2.length) {
        out.push(arr2[j])
        j++
    }

    return out
}

const mergeSort = (array) => {
    if(array.length <= 1) return array
    
    const len = Math.floor(array.length / 2)
    let _second = array.slice(len)
    let _first = array.slice(0, len)

    let left = mergeSort(_first)
    let right = mergeSort(_second)

    return merge(left, right)
}

const res = mergeSort([1,10,50,2,14,99,12,19])
