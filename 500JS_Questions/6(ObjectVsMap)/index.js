/*
    How do you compare Object and Map
*/
/*
    Objects and maps are both dynamic collections of key-value pairs.
*/

// 1. The construction is of course different
// Object:
const gameObj = {
    1:"SUDOKU",
    2:"CHESS"
}
console.log(gameObj) // { '1': 'SUDOKU', '2': 'CHESS' }

// Map: Map are created using built-in Map constructor
const gamesMap = new Map([
    [1,'SUDOKU'],
    [2,'CHESS']
]);
console.log(gamesMap) //Map(2) { 1 => 'SUDOKU', 2 => 'CHESS' }


// 2. Keys on objects are strings, on maps keys are of any type
/* Object: If for example, we use a number as a key in an object literal, 
   that number is converted to a string and used as the key.
*/
console.log(gameObj[1],gameObj["1"]) // SUDOKU SUDOKU

/*
 Map: When using maps the key can be of any type so the 1 number key is different 
 from the '1' string key.
*/
console.log(gamesMap.get(1),gamesMap.get('1')); //SUDOKU undefined
/*
    Note: The key is unique in both cases. There cannot be two properties in an 
    object with the same key or two entries in a map with the same key.
*/ 


//3. Object maps inherit unwanted keys from the prototype
/*
--> Another difference is that objects created with the object literal have a set 
    of unexpected key-value pairs from the 'Object.prototype'.

--> When we print the Object.prototype you can see it has a few properties like 
    hasOwnProperty, isPrototypeOf, toLocaleString, toString.
    *'console.log(Object.prototype);// This can only be visible on client side'

--> An object created with the object’s literal syntax will have all these property 
    keys on it. So the empty object {} is not really empty. Check the code below.

    const object = {};
    console.log(object['toString']); // this can only be visible on client side of js
    ƒ toString() { [native code] }


--> A better option for creating object maps is to use the 'Object.create(null)' 
   utility.
    const mapObject = Object.create(null);
    console.log(mapObject['toString']); //undefined
    * Object.create(null) builds an object with no prototype.
    * {} an empty object with object prototype.
*/


// 4. Maps preserve the order of their keys, objects do not
/**
 -> The original order of key-value pairs is preserved in maps, while in objects 
    it is not.
    const gamesObj = {
                    2: 'Tzolkin',
                    1: 'Citadels',
                    };
    const keys = Object.keys(gamesObj);
    console.log(keys);
    //["1", "2"];
    const keyValuePairs = Object.entries(gamesObj);
    console.log(keyValuePairs);
    //["1", "Citadels"]
    //["2", "Tzolkin"]
 ->  keys in object always in sorted order (string based sort because keys are strings)

 -> Below is a similar collection built with the Map constructor. This time the 
    initial order is preserved.
    const gameMap = new Map([
        [2, 'Tzolkin'],
        [1, 'Citadels']
    ])
    gameMap.set(3,'HongKong');
    gameMap.set(4,'delhi');
    const keys = gameMap.keys();
    console.log(keys);
    //MapIterator {2, 1}
    const keyValuePairs = gameMap.entries();
    console.log(keyValuePairs);
    for (let element of keys){
        console.log("name is ",element) 
        2
        1
        3
        4
    }
    //MapIterator {2 => "Tzolkin", 1 => "Citadels"}
*/

// 5. Maps offer a nicer interface for accessing entries
/*Getting: (fetching from Object)
    gamesObj[1];
    //'Citadels'

    const anotherGamesObj = {
    id1: 'Citadels',
    id2: 'Tzolkin'  
    };
    console.log(anotherGamesObj.id1);
    //'Citadels'

 Getting: On maps, we can retrieve a value using the get(key) method. 
    gamesMap.get(1);
    //'Citadels'

Checking if a key exists: 
    gamesMap.has(1);
    //true // if key exists
    gamesMap.get(3);
    //false // if key does not exists

// On objects, we can use the hasOwnProperty(key) method to check keys exists or not
    gamesObj.hasOwnProperty(1);
    //true
    gamesObj.hasOwnProperty(3);
    //false

//  Adding(on Map):
    gamesMap.set(3,'Catan')     
    //{1=>'Citadels', 2=>'Tzolkin', 3=>'Catan'}

// Adding on Object:
    gamesObj[3] = 'Catan';
    //{ 1: 'Citadels', 2: 'Tzolkin', 3: 'Catan'};

//Deleting (On map): Map have delete(key) method to delete key
gamesMap.delete(1);

// Delete (On Object): On objects, we can use the delete operator.
delete gamesObj[1];

// Reading the size (Map):Maps keep their size updated so we can get the size 
    using the size property.
    console.log(gamesMap.size)

// Reading size of Object: Object have no property to read size;
    size = Object.entries(gamesObj).length;
*/

// 6. Objects require helpers functions for accessing the key-values pairs
/**
-> We can iterate over the entries in a map using the forEach method. 
    const gamesMap = new Map([
    [1, 'Citadels'],
    [2, 'Tzolkin']
    ]);
    gamesMap.forEach((value,key)=>{
        console.log(`${key} - ${value}`)
    })
    //1 - Citadels
    //2 - Tzolkin 

-> On objects, we can iterate using the Object.entries() helper function.
    const gamesObj = {
        1: 'Citadels',
        2: 'Tzolkin'  
    };
    Object.entries(gamesObj).forEach(([key, value])=>{
        console.log(`${key} - ${value}`)
    });
    //1 - Citadels
    //2 - Tzolkin
 */

// 7. JSON offers support for objects but not for maps
/*
-> JSON supports objects but not maps.
    const gamesObj = {
    1: 'Citadels',
    2: 'Tzolkin'  
    };
    const json = JSON.stringify(gamesObj);
    console.log(json);
    {"1":"Citadels","2":"Tzolkin"}

-> Maps do not work with JSON. Serializing results in an empty object.
    const gamesMap = new Map([
    [1, 'Citadels'],
    [2, 'Tzolkin']
    ]);
    const json = JSON.stringify(gamesMap);
    console.log(json);
    {}
*/

/**
 * 
Final Thoughts"
    Objects in JavaScript are what in other languages are called hash maps. Accessing 
    keys in the map object has an O(1) access time, meaning that it takes a constant 
    time to get the key, no matter the amount of data in the object map.

    No matter how these key-value collections are created using the Map constructor 
    or the object literal syntax they are mainly used for fast searching data. 
    Both of them perform in O(1) access time. Retrieving a key does not require 
    scanning through all of the data.

    Maps offer a nicer interface for managing the key-value pairs. In scenarios 
    that require adding and removing entries, Map is a better choice.
 * 
 * 
 * 
 * 
 * 
*/

//How do you check if a key exists in an object
/*Way-1
    if("key" in obj){
        console.log("Key exists in object");
    }
*/

/* Way-2
    obj.hasOwnProperty("key"); // true
    if(obj.hasOwnProperty("key")){
        console.log("Key exists")
    }
*/

/* Way-3
    if(obj.key_name !==undefined){
        console.log("Key exists in object");
    }
*/

//How do you loop through or enumerate javascript object
/*
    You can use the for-in loop to loop through javascript object. You can also make 
    sure that the key you get is an actual property of an object, and doesn't come 
    from the prototype using hasOwnProperty method.
    var object = {
        k1: "value1",
        k2: "value2",
        k3: "value3",
    };

    for(var key in object){
        if(object.hasOwnProperty(key)){
            console.log(`${key} exists`);
        }
    }
*/

//How do you test for an empty object
/*Way-1 (ES7)
    let obj = {};
    if(Object.entries(obj).length != 0){
        console.log("Object is not empty");
    }
*/
/*Way-2 (ES5)
    let obj = {};
    if(Object.keys(obj).length != 0){
        console.log("Object is not empty");
    }
*/
/*Way-3
    function isObjectEmpty(obj){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }
*/

//What is an arguments object
/*
    The arguments object is an Array-like object accessible inside functions that 
    contains the values of the arguments passed to that function. 
    For example, let's see how to use arguments object inside sum function,
    function sum(){
        let items = arguments
        let total = 0;
        * Note: You can't apply array methods on arguments object. But you can convert into a regular array as below.
        * var argsArray = Array.prototype.slice.call(arguments); // this become a regular array
        for(let i=0;i<items.length;i++){
            total += items[i];
        }
        return total;
    }
    console.log(sum(10,20,30,40)); // 100 

*/

