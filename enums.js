var Direccion;
(function (Direccion) {
    Direccion["Arriba"] = "UP";
    Direccion["Abajo"] = "DOWN";
    Direccion["Derecha"] = "RIGHT";
    Direccion["Izquierda"] = "LEFT";
})(Direccion || (Direccion = {}));
var bola = {
    size: 10,
    initialPos: Direccion.Arriba
};
