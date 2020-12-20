function printLabelInterface(obj) {
    if (obj.name)
        console.log('Contiene un Name !!');
    console.log(obj.label);
}
function printLabel(obj) {
    console.log(obj.label);
}
//testing obj
var testObj = { secret: 1, size: 20, label: 'prueba', name: 'typy' };
printLabel(testObj);
printLabelInterface(testObj);
