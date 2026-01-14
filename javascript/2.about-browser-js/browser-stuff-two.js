/*
=>  Print web page content:
    - window.print() opens the print dialog for the current page.
    - Printing blocks execution until dialog is closed.
    - Example:
        <input type="button" value="Print" onclick="window.print()" />

=>  uneval vs eval:
    - uneval() returns source code of an object/function.
    - eval() executes source code.
    - Example:
        var msg = uneval(function greeting() {
            return "Hello, Good morning";
        });
        var greeting = eval(msg);
        greeting(); // "Hello, Good morning"

=>  Anonymous function:
    - Function without a name.
    - Commonly used as variable assignment or callback.
    - Examples:
        const myFunction = function () {
            // do something
        };

        [1, 2, 3].map(function (element) {
            // do something
        });

=>  Anonymous function example:
        var x = function (a, b) {
            return a * b;
        };
        console.log(x(5, 10)); // 50

=>  Local vs global variable precedence:
    - Local variables override global variables with same name.
    - Example:
        var msg = "Good morning";
        function greeting() {
            msg = "Good Evening";
            console.log(msg);
        }
        greeting(); // Good Evening

=>  JavaScript accessors (getters & setters):
    - Introduced in ES5.
    - get → read property
    - set → update property
    - Example:
        var user = {
            language: "En",
            get lang() {
                return this.language;
            },
            set lang(l) {
                this.language = l;    
            }
        };
        console.log(user.lang);
        user.lang = "fr";

=>  Define property on object:
    - Object.defineProperty() adds or modifies properties.
    - Example:
        var newObj = {};
        Object.defineProperty(newObj, "newProp", {
            value: 100,
            writable: false
        });
        console.log(newObj.newProp);
        newObj.newProp = 200; // error in strict mode

=>  get vs defineProperty:
    - get defines property on prototype.
    - defineProperty defines property on object instance.

=>  Advantages of getters & setters:
    1) Cleaner syntax
    2) Computed properties
    3) Encapsulation
    4) Better data control
    5) Execute logic behind the scenes

=>  Getters & setters using defineProperty:
    - Example:
        var obj = { counter: 0 };

        Object.defineProperty(obj, "increment", {
            get: function () {
                return this.counter++;
            }
        });

        Object.defineProperty(obj, "decrement", {
            get: function () {
                return this.counter--;
            }
        });

        Object.defineProperty(obj, "add", {
            set: function (value) {
                this.counter += value;
            }
        });

        Object.defineProperty(obj, "subtract", {
            set: function (value) {
                this.counter -= value;
            }
        });

        obj.add = 10;
        obj.subtract = 9;
        console.log(obj.increment);
        console.log(obj.decrement);

=>  Switch-case purpose:
    - Used for decision making.
    - Cleaner than if-else in many cases.
    - Example:
        switch (choice) {
        case value1:
            break;
        case value2:
            break;
        default:
            // default
        }

=>  Switch-case conventions:
    1) Expression must be number or string
    2) No duplicate case values
    3) default is optional
    4) break stops execution
    5) Missing break causes fall-through

=>  Error object:
    - Built-in object providing error details.
    - Properties: name, message
    - Example:
        try {
            test("name");
        } catch (err) {
            console.log(err);
        }

=>  SyntaxError:
    - Occurs due to invalid JavaScript syntax.
    - Example:
        try {
            console.log('Name is");
        } catch (err) {
            console.log(err.name);
        }

=>  Error types:
    1) EvalError
    2) RangeError
    3) ReferenceError
    4) SyntaxError
    5) TypeError
    6) URIError

=>  Error handling statements:
    1) try
    2) catch
    3) throw
    4) finally

=>  Types of loops:
    1) Entry-controlled loops:
        - Condition checked before execution
        - for, while
    2) Exit-controlled loops:
        - Condition checked after execution
        - do-while
*/