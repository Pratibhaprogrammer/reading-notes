# comparison operators: evaluating conditions
- you can evaluate a situation by comparing one value in the script to what you expect it might be.  The result will be a Boolean: true or false

- == means "is equal to"  this compares two values (numbers, strings, or booleans) to see if they're the same.  ex. 'hello' == 'hello' returns true
-!= means "is not equal to" 'hello' != 'goodbye' returns true
- === meand "strict equal to" this is for comparing two values to check that the data type and value are the same ex. '3' === 3 returns false, '3' ==='3' returns true
- !== "strict not equal to" '3' !== 3 returns true
- > "greater than" 4 > 3 returns true
- < "less than" 4 < 3 returns false
- >= greater than or equal to
- <= less than or equal to

# logical operators
- Comparison operators usually return single values of true or false.  Logical operators allow you to compare the results of more than one comparison operator.  
- (&&)  "logical and" this tests more than one condition ((5 < 2) && (2 >= 3)) would return false
- || "logical or" this texts at least one condition ((2 < 5>) || (2 < 1)) returns true because at least one is true.  if they were both false then it would return false
- ! "logical not" this takes a single boolean value and inverts it !(2 < 1) returns true

# loops
- loops check a  ondition.  if it returns true then the code block will run.  The condition will run again and if it still returns true, the code block will rumn again.  it repeats until the condition returns false.  
- FOR this is for running a code a specific number of times.  the condition is usually a counter 
- WHILE if you don't know how many times the code should run, you can use a while loop.  Here the condition can be something other than a counter, and the code will continue to loop for as long as the condition is true.  
- DO WHILE similar to the while loop, but it will always run the statements inside the curly braces at least once, even if the condition is false. 
## loop counters 
- initialization- ex of for loop. for (let i = 0; i < 10; i++)
- a console.log() will give you a sort of breakdown of your loop in your console ex. for (let i = 0; i < 10; i++){
    console.log(i);
}
