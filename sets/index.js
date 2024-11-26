/*
==> Sets:
    —> Set is a collection of elements which are unique .
    —> In ES-6 (Set are ordered) 
    —> Set can be iterated in insertion order.
    —> Set can store any kind of data types (primitive | object | composite data types)
*/

/* Operations in sets: */
let s = new Set();
s.add(10).add(20).add(30).add({name:"Ravi"}).add(true).add([..."1234"]).add("SDE").add(null).add(false).add(10);
console.log("Set is: ",s);

console.log("Size of the set is: ",s.size); // 9
s.delete(10) // Remove the specific value from the set
console.log("Updated set is: ",s)// 10 is being removed from the set;

// s.clear(); // Clear all elements of the set

// Everything below is an [Set Iterator]:
console.log("Values: ",s.values()) 
console.log("Keys: ", s.keys())
console.log("Entries : ",s.entries())

/*
==> Note:
You can do set operations like 
	—> Intersection of two set
	—> sub-set of two set
	—> Union
	—> Difference of set (Set(A)-Set(B)==> setA.difference(setB))
*/