
//interfaces
interface Animal {
    name: string;
}

interface Tiger extends Animal {
    gender: string;
}

const tiger: Tiger = {
    name: 'leshvna',
    gender: 'femmale'
}

console.log(tiger);


//types HERE
type Animal2 = {
    name: string;
}

type Tiger2 = Animal2 & {
    gender: string;
}