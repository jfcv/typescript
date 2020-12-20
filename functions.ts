//named functions

function function1(x: number, y: number): number {
    return x + y;
}

//anonym functions
let function2 = function(x: number, y: number): number {
    return x + y;
}

//arrow functions
const function3 = (x: number, y: number): number => {
    return x + y;
}

console.log(function1(1,2));
console.log(function2(1,2));
console.log(function3(1,2));