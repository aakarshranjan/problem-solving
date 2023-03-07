/**
    About ==(Abstract equality) and ===(Strict equality)
    According to the spec, both == and === does a type comparison first.
    Example:
        x===y
        if Type(x) is different from Type(y), return false
        otherwise continue with equality comparison as per the algo mentioned in the spec

        x==y
        Here also, we first check the types of x and y
        If they are same, we do x===y
        Otherwise coercion to string/number/toPrimitive is done and then equality check is done
*/

console.log("5 == '5'",5 == '5') //true
console.log("5 === 5",5 === 5) //true
console.log("5 === '5'",5 === '5') //false
console.log("null == undefined",null == undefined) //true
console.log("null === undefined",null === undefined) //false
console.log("null == ''",null == '') //false
console.log("null == 0",null == 0) //false
//Abstract equality for null and undefined returns true but Strict equality returns false as they
//are of different types. But according to the spec, for null and undefined types, we just
//check for that specific(null/undefined) datatype and no other coecion is done. So Abstract 
//equality of null/undefined with any other falsy values returns false

console.log("100 == [100]",100 == [100]) //true
//here, [100] is coerced to its primitive form which is '100'(as string)
//and then we do 100 == '100', '100' is again coerced to number
//and then we do 100 == 100, now we do the equality check

//JS usually prefers to coerce the values to number and then compare
//Example: 5 == '5'
//over here, '5'(string) will be coerced to Number

var arr = []
console.log("arr == true",arr == true) //false
console.log("arr == false",arr == false) //true

if(arr) { //true
    console.log('if(arr)')
}

/**
 * explanation:
 * inside the if condition, coercion to boolean using toBoolean is done
 * boolean of [] is true
 * when we do an equality check, then the arr is first converted to its primitive type which is
 * string
 * [] is converted to ""
 * now we have "" == true. Now both of them are converted to number
 * 0 == 1 , which is false
*/
