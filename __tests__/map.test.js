const customMap = require('../src/js-polyfills/map');

describe('map testing', ()=>{
    it('map doubles all elements in the array', ()=>{
        var arr = [2,4,6]
        const callback = (item, index, list) => {
            return item*2;
        }
        expect(customMap(arr, callback)).toEqual([4,8,12])
    })
    it('works with null and undefined', ()=>{
        var arr = [null, null, undefined, null,2,10];
        const callback = (item, index, list) => {
            return item*2;
        }
        expect(customMap(arr, callback)).toEqual([0, 0, NaN, 0,4,20])
    })
    it('add index value to the item', ()=>{
        var arr = [1,2,3,4,0,null,undefined];
        const callback = (item, index, list) => {
            return item+index;
        }
        //null+1 = 1
        //undefined+1 = NaN
        expect(customMap(arr, callback)).toEqual([1,3,5,7,4,5,NaN])
    })
})