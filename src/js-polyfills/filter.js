function customFilter(arr, callback) {
    Array.prototype._filter = (cb) => {
        const newArr = [];
        for(let i = 0; i < arr.length; i++) {
            if(cb(arr[i], i, arr)) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    const newArr = arr._filter(callback)
    return newArr;
}

const arr = [0,1,2,3,4];
const callback = (item, index, list) => {
    if(index % 2 == 0) return true;
}
const newArr = customFilter(arr, callback);
console.log(newArr)

module.exports = customFilter