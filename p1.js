function fun(a,b,c){
    a = 10*a
    b.item = 'change';
    c = {item:'change'}
}

var num = 10;
var obj1 = {item:'unchanged'}
var obj2 = {item:"unchanged"}
fun(num,obj1,obj2);
console.log("Line 11",num); // 100
console.log('lin 12 ',obj1.item); // changed
console.log('line 13',obj2.item); // changed