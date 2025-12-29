const startTime  = new Date();
const user = require('./user');
const user_1 = user("Ravi",25,"ravikr845430@gmail.com")
console.log("User One is ",user_1);
const user_2 = user("Sumit",25,"sumit@getnada.com")
console.log("User two is ",user_2);

const sum = 10+30;
console.log("Sum is ",sum);
const endTime = new Date();
const timeDiff = endTime.getTime() - startTime.getTime();
console.log("Time difference is ",timeDiff);