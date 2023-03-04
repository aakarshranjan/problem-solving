const customReduce = require('../src/js-polyfills/reduce');

describe('reduce fn tests', () => {
    it('works fine without initial value', () => {
        const arr = [1,2,3,4,5];
        const callback = (acc, val) => {
            return acc+val
        }
        expect(customReduce(arr, callback)).toBe(15)
    })
    it('works fine with an initial value', () => {
        const arr = [1,2,3,4,5];
        const callback = (acc, val) => {
            return acc+val
        }
        const initialValue = 11
        expect(customReduce(arr, callback, initialValue)).toBe(26)
    })
    it('test to find the max value', () => {
        const arr = [null,5,50,20,null,100,80]
        const callback = (acc, val) => Math.max(acc, val)
        expect(customReduce(arr, callback)).toBe(100)
    })
    it('test to find the max value, also pass the initial value', () => {
        const arr = [5,'50',20,100,80,null]
        const callback = (acc, val) => Math.max(acc, val)
        expect(customReduce(arr, callback, 200)).toBe(200)
    })
})