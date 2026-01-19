// ======================= ARRAY.slice() =======================
/*
1) Purpose of slice()
      - Returns a new array containing selected elements
      - Takes start index and optional end index
      - End index is not included
      - If end index is omitted, it selects till the end
      - Does NOT modify the original array (immutable)
*/

var arrayIntegers = [1, 2, 3, 4, 5];

var arrayIntegers1 = arrayIntegers.slice(0, 2); // [1, 2]
var arrayIntegers2 = arrayIntegers.slice(2, 3); // [3]
var arrayIntegers3 = arrayIntegers.slice(4);    // [5]

/*
Note:
      - slice() returns a new array
      - Original array remains unchanged
*/
// ======================= ARRAY.splice() =======================
/*
2) Purpose of splice()
      - Used to add or remove elements from an array
      - First argument: start index
      - Second argument (optional): number of elements to remove
      - Remaining arguments: elements to insert
      - Modifies the original array (mutable)
      - Returns the removed elements as an array
*/

var arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
var arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
var arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

var arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2);
// returns [1, 2]
// original array becomes [3, 4, 5]

var arrayIntegers2 = arrayIntegersOriginal2.splice(3);
// returns [4, 5]
// original array becomes [1, 2, 3]

var arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c");
// removes 1 element at index 3
// inserts "a", "b", "c"
// returns [4]
// original array becomes [1, 2, 3, "a", "b", "c", 5]
/*
Note:
      - splice() modifies the original array
      - Returns deleted elements
*/
// ======================= SLICE vs SPLICE =======================
/*
slice():
      - Does not modify original array
      - Returns subset of array
      - Used to extract elements

splice():
      - Modifies original array
      - Returns deleted elements
      - Used to insert or remove elements
*/
