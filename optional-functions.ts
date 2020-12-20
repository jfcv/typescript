//it's unnecessary, but useful! -> definning the return type as 'void'

function optionalFunction(x: number,y: number = 0): void { 
    console.log(x, y);
}

optionalFunction(1);
optionalFunction(1,3);