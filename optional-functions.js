//it's unnecessary, but useful! -> definning the return type as 'void'
function optionalFunction(x, y) {
    if (y === void 0) { y = 0; }
    console.log(x, y);
}
optionalFunction(1);
optionalFunction(1, 3);
