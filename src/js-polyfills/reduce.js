function customReduce(arr, callback, initialValue) {

    Array.prototype._reduce = (cb, initialValue) => {
        var finalVal = initialValue || null;
        for(let i = 0 ; i < arr.length; i++) {
            finalVal = cb(arr[i], finalVal)
        }
        return finalVal
    }
    const v = arr._reduce(callback, initialValue)
    return v;
}


const arr = [1,2,3]
const callback = (accumulator, currentValue) => accumulator + currentValue
const v = customReduce(arr, callback, 11)
console.log(v)

module.exports = customReduce
