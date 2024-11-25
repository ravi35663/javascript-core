console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false

/*
    Order of execution:
        1) 1 < 2 => 1 (true) < 3 => true
        2) 3 > 2 => 1 (true) > 1 => false

    The important point is that if the statement contains the same operators(e.g, < or >) then 
    it can be evaluated from left to right. The first statement follows the below order,
*/
