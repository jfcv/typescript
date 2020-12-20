enum Direccion {
    Arriba = 'UP',
    Abajo = 'DOWN',
    Derecha = 'RIGHT',
    Izquierda = 'LEFT',
}

interface Bola {
    size: number;
    initialPos: Direccion;
}

const bola: Bola = {
    size: 10,
    initialPos: Direccion.Arriba,
}