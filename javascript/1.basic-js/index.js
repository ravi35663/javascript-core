/*
==> Javascript Data types:
    -> Number :-    Any positive , negative or rational number . 
    -> Boolean :-   (true or false)
    -> String :-    Any string (e.g. "john doe")
    -> null :       Intensional absence of the data.
    -> undefined:   Memory block is assigned but there is no value available.
*/
/*
==> Javascript variable declaration:
    ->  var: it is a global level variable. 
        ->  e.g. life of the variable is throughout of the program.
            var name = "Ravi"

    ->  let: it is a scope/block level variable 
        ->  e.g. memory deleted once the scope of the variable is ended.
            let name = "Ravi"

    ->  const: it is a scope/block level variable once it is assigned cannot be changed.
        const name = "Ravi"
*/
/*
==> Javascript Object :
    ->  An object is the key-value pair of the elements which is used to store some 
        values in key-value format. 
        e.g.
        let person = {
            name:"sumit kumar",
            age: 25,
            mobile_number: 989124882,
            occupation: "Software engineer"
        }
*/
/*
==> Operators:
    1) Arithmetic operators:
        Operator	    Name	        Example Code	    Output
            +	        Addition	        5 + 3	            8
            -	        Subtraction	        10 - 4	            6
            *	        Multiplication	    6 * 2	            12
            /	        Division	        20 / 5	            4
            %	        Modulus         	10 % 3	            1
            ++	        Increment	        let x = 5; x++;	    x = 6
            --	        Decrement	        let y = 7; y--;	    y = 6

    2) JS Comparison / Relational Operators: 
        Operator	Meaning	                                    Example Code	Result
        ==	        Equal (checks value only)	                5 == "5"	    true
        ===	        Strict Equal (checks value + type)	        5 === "5"	    false
        !==	        Strict Not Equal (checks value + type)	    5 !== 5	        false
        >	        Greater Than	                            10 > 6	        true
        >=	        Greater Than or Equal	                    10 >= 10	    true
        <	        Less Than	                                3 < 8	        true
        <=	        Less Than or Equal	                        5 <= 2	        false

    3) Logical Operators:
        -> '&&' (Logical AND) | '||' (Logical OR) | '!' (Logical NOT)

    4) JS Conditional Statements :-
        —> if (some condition){
                // Some codes	
            }
        —> if (some conditions){
                // Some codes
            }else {
                //Some code that will run when if conditions are getting failed
            }
        —> if (condition-1){
                // Some code
            }else if (condition-2){
                // Some code 
            }else if (condition-n){
                // Some code
            }else {
                // This else block is optional in case of else if ladder 
            }
        -> Ternary Operator : - (condition1 ? if-statement : else-statement)
        —> Switch Case : -
            switch (expression){
                case x:
                    //some code;
                    // To avoid break, you can use return instead, if switch-case is used within a function 
                    break;
                case y: 
                    //Some code
                    break;
                default : 
                    //some code 
            }

    5) Iterations (Loops) : - 
        —> for(let i = 0 ; i < 10 ; i++){
                //Some code which will repeat 10 times (in this case)
            }

        —> while(condition){
                // Some codes
            }

        —> do{
                // Do-while loops run at least one time
            } while(some conditions);
    
    6) Bitwise Operator : -
        -> Bitwise operator works on 32 bits numbers
        -> Bitwise operator compares elements on each binary bit . 
        ->  & => (1 & 1 -> 1 , 1 & 0 -> 0 , 0 & 0 -> 0)
        ->  | => ( 1 | 1 -> 1 , 0 | 1 -> 1 , 0 | 0 -> 0 , 3 | 2 -> 3)
        ->  ^ => ( same bit return zero while different bit returns 1 (only 0 and 1) )
        ->  ~ => (Not ~n = -(n+1))
        -> << =>  (Add zeros in the right side and discard elements in left side e.g. 5 << 1 ; 
            ->   0101 << 1 ; -> 1010   ) 
        ->  >> (Discard the elements from left side 5 >> 1 ; -> 0101 >>  1 ; -> 0010 ) 
            (This is signed shift operator ) 
        -> >> (Signed shift operator e.g. -8 >> 2 = -2) 
        -> >>> (Unsigned shift operator -8 >>> 2 = 1073741822)
        -> >>> (fill zeros on the right side and remove the leftmost bits  by discarding left most elements .
            e.g. 5>>>1 -> 0101>>>1 = 0010)
*/
/*
==> Notes : -
    ->  You can check primitive data types with 'typeof' but you cannot check object types 
        with typeof.
    ->  'typeof' only returns number, string, null, boolean, undefined, object and functions.
    ->  To check any data types you can use: 'variable.constructor === Data_type'
    ->  e.g.    ([1]).constructor       => Array  
                ("name").constructor    => String
                (10).constructor        => Number
    ->  In Javascript, function is like a variable that takes the place in the memory.
    —>  Number, String and Boolean are primitive data types in JS
    —>  null and undefined are trivial(less to primitive, less important) data types.
    —>  Objects and array are composite data types
    —>  In JS switch-case you can take string, boolean and integer or you can use primary 
        datatypes.
    —>  To delete any value from an object use the below method .
            car = {name:"tata tigor", "price": 123, model: "s3"}
            delete car.name ===> It will delete the "name" key and value from the car object
    —>  Everything in Javascript is an object. Boolean, Number, String, Dates, Maths, 
        RE are always an object.
    ->  function vs Method: if you write any function inside any Class or object it is 
        called method otherwise it is called function.
    ->  To find datatype of the variable use "typeof()".
            let name = "sumit";    --> typeof(name) --> str
*/
/*
=> Mutation : - 
    ->  Mutation means manipulating data type (or values) with its original values.
    —>  Immutable values means once created cannot be changed. (Primitive data type )
    —>  let person = {
            name:”sumit”,
            age:25
        }
	    person.age = 30;
    -> string is immutable in javascript
    -> *Primitive data types are immutables.
Note : - Here we can change the value of the object hence it is mutable .
*/
/*
=> Deep Cloning : -
    ->  If we create an object (any object like array or composite data type) and assign 
        each attribute of the previous object to a newly created object then changes made 
        in any of the objects won’t affect any other object. That is known as deep cloning .
        e.g. 
        let  original ={
            name:"Sumit",
            age:25
        }
    -> let duplicate = original //This is reference assignment (also called shared reference).
        Here both “original” and “duplicate” objects have the same address.
        And in this case if we make any changes to any of the objects either 'original' 
        or 'duplicate', it affects other objects ('original' or 'duplicate') as well.

    -> Deep cloning or copying  
        # Method-1
        let duplicate = {...original} 
        -> this is known as shallow copying this is the first level of cloning.
        
        #Method - 2:
        let duplicate_1 = Object.assign({},original) // this is also shallow cloning this is 
        also the first level of cloning.
    
        #Method - 3:
        let duplicate_2 = JSON.parse(JSON.stringify(original)); // this is perfect deep cloning.
        Here if we change a duplicate object’s attributes it won’t affect the original object.
*/