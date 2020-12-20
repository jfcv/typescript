
//ES6 Classes
class Hello {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    saludos() {
        return 'saludos ' + this.message;
    }

}

let hola = new Hello('Typescript');

console.log(hola.saludos());
