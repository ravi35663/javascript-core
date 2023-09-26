function getInputValue(){
    const ele = document.getElementById('input')
    console.log("Element value is ",ele.value);
    // return ele.value;
}
function debounceMethod(getInputValue,delay){
    var timer;
    return function(){
        args = arguments;
        context = this;
        // console.log("Timer",timer);
        clearTimeout(timer);
        timer = setTimeout(()=>{
            getInputValue.apply(context,args);
        },delay)
        console.log("Timer is ",timer);
    }
}


// var betterFunction = ;
var  betterFunction= debounceMethod(getInputValue,500) 