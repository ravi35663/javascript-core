//What is the purpose of the array slice method
/**
 * The slice() method returns the selected elements in an array as a new 
 * array object. It selects the elements starting at the given start argument, 
 * and ends at the given optional end argument without including the last 
 * element. If you omit the second argument then it selects till the end.
*/
var arrayIntegers = [1, 2, 3, 4, 5];
var arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
var arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
var arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

/*
Note: Slice method won't mutate the original array but it returns the subset 
      as a new array.
*/


// What is the purpose of the array splice method
/**
 * The splice() method is used either adds/removes items to/from an array, 
 * and then returns the removed item. The first argument specifies the 
 * array position for insertion or devarion whereas the optional second 
 * argument indicates the number of elements to be devared. 
 * Each additional argument is added to the array.
*/
var arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
var arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
var arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

var arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2);
// returns [1, 2]; original array: [3, 4, 5]

var arrayIntegers2 = arrayIntegersOriginal2.splice(3);
// start removing from index 3 to end
// returns [4, 5]; original array: [1, 2, 3]
var arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); 
// remove element from index 3 but only 1. and the add 'a', 'b' and 'c' after 3rd index.
//returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

//Note: Splice method modifies the original array and returns the deleted array.

//What is the difference between slice and splice
/**
 * Slice[
 *    Doesn't modify the original array(immutable),
 *    Returns the subset of original array,
 *    Used to pick the elements from array
 * ]
 * Splice[
 * Modifies the original array(mutable),
 * Returns the deleted elements as array
 * Used to insert or delete elements to/from array
 * ]
*/

