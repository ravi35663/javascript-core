const startTime = new Date();
const user = require('./user')
user("ravi",25,"ravikr845430@gmail.com",(res)=>{
    console.log("Response is ",res);
})
user("sumit",25,"sumit845430@gmail.com",(res)=>{
    console.log("Response is ",res);
})
const sum = 20+90
console.log("Sum is ",sum);
const endTime = new Date();
const timeDiff = endTime.getTime()-startTime.getTime();
console.log("Time is ",timeDiff);