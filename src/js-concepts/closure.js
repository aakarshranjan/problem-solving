/**
 * Gives different examples of Closures along with the explanation
 */
function runClosures(val) {
    //first example
    setTimeout(()=>{
        console.log(val)
    },1000)
    //second example
    {
        for(var i = 0; i < 3; i++) {
            setTimeout(function(){
                console.log(`i=${i}`)
            }, 1000);
        }
        //i=3
        //i=3
        //i=3
    }
    //third example
    {
        for(let j = 0; j < 3; j++) {
            setTimeout(function(){
                console.log(`j=${j}`)
            }, 1000);
        }
        //j=0
        //j=1
        //j=2
    }
}
runClosures(10);
/**
 * the above code snippet, the first setTimeout, we try to read val from the parent lexical scope
 * and it is able to access because of closure
 * Theoratically, the setTimeout gets invoked after the parent function exection gets over and
 * our val variable is defined in the parent function only. By the time the setTimeout method is
 * executed, the parent method is long executed, removed from the callstack and even garbage
 * collected. But still we are able to use the val variable(defined in the parent function)
 * inside our setTimeout. This is cuz of closure. The setTimeout fn gets closed over the variable
 * val
 * 
 * The first block gives the i=3 result for all 3 iterations.
 * Reason being, the setTimeout function is being closed over the variable i and not the value
 * of i at that instance.
 * Dry run: 
 *      We execute the method runClosures()
 *      variable i is declared and the loop starts
 *      setTimeout is registered and put to the callback queue
 *      Next loop iteration, again setTimeout is registered to the callback queue
 *      After loop is over, the APIs in callback queue is fired
 *      At that time the value of i is 3 and so the setTimeout uses that value only
 * 
 * The second block gives us 0,1,2 for the 3 iterations
 * Reason being, for each loop a new variable j is being created cuz of the let keyword
 * So, every loop iteration has its own version of the variable j
 * After the loop is completed and web APIs are ready to be executed, the setTimeout 
 * tries to access the variable j in its local scope and it finds the variable j which is
 * tied to its scope.
 * In the first block also, the setTimeout finds the variable i. Its just that since the function
 * is closed over variable and not value, we get the same result as by using var, the scope
 * remains same inside the function. But by using let, we get a new block scope. Meaning that
 * we get 3 instances of the variable j inside the loop with values 0,1,2. When the respective
 * setTimeout method of each loop runs and tries to access the variable j, it gets the specific
 * variable which got closed over that setTimeout method.
 * Think of it as setTimeout gets registered to the callback queue. What gets sent over with that
 * is the lexical scope variables/functions.
 * In the first block, variable i is sent with each of the setTimout, but since we are updating i
 * each time, what we get inside setTimeout is the final value of i
 * In the second block, variable j is sent with each of the setTimeout, but since we used let in
 * the loop, during each iteration, that specific j has its own block scope and that gets sent
 * Actually, since we use let in the loop, a new j gets created, meaning a new variable which 
 * points to a different memory location with the previous value copied
 */