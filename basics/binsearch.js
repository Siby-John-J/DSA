

const array = [1,2,4,6,13,15,18,24,36,48,76,85,131]

function BinarySearch(ar, num) {
    let left = 0
    let right = array.length - 1
    let middle = Math.floor((left + right) / 2)


    while(true) {
        if(num > ar[middle]) {
            middle = Math.floor((left + right) / 2)
            left = middle
        } else if(num < ar[middle]) {
            middle = Math.floor((left + right) / 2)
            right = middle
        } else if(num === ar[middle]) {
            return [middle, ar[middle]]
        }
    }
}

const ans = BinarySearch(array, 76)
console.log(ans);
