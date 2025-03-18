function Car(model,color){
    this.model = model;
    this.color = color;
}

Car.prototype.getInfo = function(){
    return "Model of a car is: " + this.model + "and color or the car is: "+ this.color;
}

const car = new Car("2020","Black");
console.log("Car is: ",car.getInfo());