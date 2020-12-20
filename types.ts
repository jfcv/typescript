// Tipos

//booleans
let isDone: boolean = false;

//numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;

//strings
let fullName: string = `Bob Bobbington`;

//arrays
let list1: Array<number> = [1,2,3];
let list2: number[] = [4,5,6];

//tuple 
let x: [string, number] = ['hello', 10];

//enums
enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Green;

//unknown                               -> allows different types in one variable
let notSure: unknown = 4;
notSure = 'maybe a string';

//any
declare function getValue(key: string): any; //it doesn't check the returned value from the function

const str: string = getValue('myString');

//void
function warnUser(): void { // when you don't want to return a value
    console.log('this is a warning message');
}

//null && undefined
let u: undefined = undefined;
let n: null = null;

//never : ?

//object
declare function create(o: object | null): void;

create({prop: 0});
create(null);

//type assertions
let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length;