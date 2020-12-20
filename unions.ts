type Person = {
    firstName: string;
    lastName: string;
}

type Client = {
    clientNumber: number;
}

type NewClient = Person & Client; 

const newClient: NewClient = {
    firstName: 'Paulo',
    lastName: 'Kurt',
    clientNumber: 1
};

console.log(newClient);
