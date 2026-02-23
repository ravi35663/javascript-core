/*
==> Generator function:
    -> Generator function is special type of javascript function which is used to create iterators.
    -> Generator control the execution flow by yielding values once at a time.
    -> When generator function is called it does not executes immediately but instead returns a 
       generator object that can be used to control the execution function.
    -> Generator functions are useful for creating iterators & writing asynchronous code using async/await syntax.
*/ 

function* Generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = Generator();
console.log("Generator: ",generator.next());
console.log("Generator: ",generator.next());

// Fibonacci generator
function* FibonacciGenerator(){
    let current = 0;
    let next = 1;
    while(true){
        yield current
        temp = current;
        current = next;
        next = next+temp
    }
}

const fibonacci = FibonacciGenerator();
let fib_series = [];
for(let i=0; i<15; i++){
    fib_series.push(fibonacci.next().value);
}

console.log("Fibonacci series: <><<><>:",fib_series.join(' '));