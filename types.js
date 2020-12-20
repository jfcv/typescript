// Tipos
//booleans
var isDone = false;
//numbers
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// let big: bigint = 100n;
//strings
var fullName = "Bob Bobbington";
//arrays
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
//tuple 
var x = ['hello', 10];
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//unknown                               -> allows different types in one variable
var notSure = 4;
notSure = 'maybe a string';
var str = getValue('myString');
//void
function warnUser() {
    console.log('this is a warning message');
}
//null && undefined
var u = undefined;
var n = null;
create({ prop: 0 });
create(null);
//type assertions
var someValue = 'this is a string';
var strLength = someValue.length;
