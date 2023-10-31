var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
/*
Output is : {model:"Honda",color:"white",year:"2010",country:"UK"}
    The function declarations are hoisted similar to any variables. 
    So the placement for Vehicle function declaration doesn't make any difference.    
*/ 