/**
 * Below function is a polyfill for the js builtin map function
 */
//TODO: check how the array is available in the prototype method _map
        //It does make sense that since we are calling the method _map on top of arr[], arr[] will
        //be available in the prototype method.
        //But still check

function customMap(arr, callback) {
    Array.prototype._map = function (cb) {
        var newArr = [];
        for(let i = 0; i < arr.length; i++) {
            var newItem = cb(arr[i], i, arr);
            newArr.push(newItem)
        }
        return newArr;
    }
    const newArr = arr._map(callback);
    // console.log(newArr);
    return newArr;
}

const arr = [1,2,3];
const callback = (item, index, list) => {
    return item * 2;
}
customMap(arr, callback);

module.exports = customMap