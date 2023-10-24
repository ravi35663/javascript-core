//What is an Intl object
/*
    The Intl object is the namespace for the ECMAScript Internationalization API, which provides language 
    sensitive string comparison, number formatting, and date and time formatting. It provides access to 
    several constructors and language sensitive functions.
*/

//How do you perform language specific date and time formatting
/*
    You can use the Intl.DateTimeFormat object which is a constructor for objects that enable language-sensitive 
    date and time formatting. Let's see this behavior with an example,
*/

var date = new Date(Date.UTC(2019,07,07,3,0,0))
console.log(new Intl.DateTimeFormat("en-GB").format(date));// 07/07/2019
console.log(new Intl.DateTimeFormat("en-AU").format(date));// 07/08/2019

//What is an Iterator
/*
    An iterator is an object which defines a sequence and a return value upon its termination. It implements 
    the Iterator protocol with a next() method which returns an object with two properties: 
    value (the next value in the sequence) and done (which is true if the last value in the sequence has 
    been consumed).
*/

//How does synchronous iteration works
/*
    Synchronous iteration was introduced in ES6 and it works with below set of components,
    Iterable: It is an object which can be iterated over via a method whose key is Symbol.iterator. 
    
    Iterator: It is an object returned by invoking [Symbol.iterator]() on an iterable. This iterator object 
    wraps each iterated element in an object and returns it via next() method one by one. 
    
    IteratorResult: It is an object returned by next() method. The object contains two properties; 
    the value property contains an iterated element and the done property determines whether the element is 
    the last element or not.
*/

//Let's demonstrate synchronous iteration with an array as below,
var iterable = ["one","two","three"];
var iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 'one', done: false }
console.log(iterator.next()); // { value: 'two', done: false }
console.log(iterator.next()); // { value: 'three', done: false }
console.log(iterator.next()); // { value: 'undefined, done: true }