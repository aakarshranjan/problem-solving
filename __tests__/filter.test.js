const customFilter = require('../src/js-polyfills/filter');

describe('filter tests', ()=>{
    it('filters out even items', () => {
        const arr = [0,1,3,2,4,5,3,7,8,8,0,9]
        const callback = (item, index, arr) => {
            if(item % 2 != 0)  return true;
        }
        expect(customFilter(arr, callback)).toEqual([1,3,5,3,7,9])
    })
    it('filters out even indexed items', ()=>{
        const arr = [1,12,0,23,4,5,2,9,3,10];
        const callback = (item, index, arr) => {
            if(index % 2 != 0) return true
        }
        expect(customFilter(arr, callback)).toEqual([12,23,5,9,10])
    })
    it('filters out odd indexed items', ()=>{
        const arr = [1,12,0,23,4,5,2,9,3,10];
        const callback = (item, index, arr) => {
            if(index % 2 == 0) return true
        }
        expect(customFilter(arr, callback)).toEqual([1,0,4,2,3])
    })
})