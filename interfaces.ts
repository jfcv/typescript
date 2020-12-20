interface ObjectInterface {
    label: string;
    name?: string; //? makes the property not required
    readonly secret: number;
}

function printLabelInterface(obj: ObjectInterface) {
    if(obj.name) console.log('Contiene un Name !!');
    
    console.log(obj.label);
}

function printLabel(obj: {label: string}) {
    console.log(obj.label);
}

//testing obj

const testObj = {secret: 1, size: 20, label: 'prueba', name: 'typy'};

// is missing the secret testObj declare as a var -> using let

printLabel(testObj);
printLabelInterface(testObj);