var array1 = new Array(3);
console.log(array1); 

var array2 = [];
array2[2] = 100;
console.log(array2); 

var array3 = [, , ,];
console.log(array3);

//[empty × 3], [empty × 2, 100], [empty × 3]
/*
    The latest chrome versions display sparse array(they are filled with holes) using this 
    empty x n notation. Whereas the older versions have undefined x n notation. 
    Note: The latest version of FF displays n empty slots notation.
*/