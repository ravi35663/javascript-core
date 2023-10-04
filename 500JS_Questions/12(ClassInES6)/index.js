//What are classes in ES6
/**
 * In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s 
 * existing prototype-based inheritance. For example, the prototype based 
 * inheritance written in function expression as below,
*/
// This is used in earlier javascript (Before ES6)
function Bike(model,color){
    this.model = model;
    this.color = color;
}

Bike.prototype.getInfo = function (){
    return this.model+" bike has "+this.color+" color";
}

// Now in ES6 it described as
class Bike{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
    getInfo(){
        return this.model+" bike has "+this.color+" color";
    }
}
