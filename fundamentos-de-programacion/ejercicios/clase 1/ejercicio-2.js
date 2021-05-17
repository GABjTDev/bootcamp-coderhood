// Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus
// prendas, para eso se tienen los datos
// precioDePrenda(que ronda entre los 1500 y 3000 pesos)
// porcentajeDeAumento(que ronda entre el 25 - 100 % )
// precioFinal(precioDePrenda con el aumento agregado)
// Ademas, implementar las siguiente funcionalidades:
// El programa debe informar en pantalla el precio final
// El programa debe informar en pantalla 'Precio excedido' cuando el precio final supere los
// $4000

let prenda = 3000,
    aumento = prenda * 25 / 100,
    limite = 4000,
    precioFinal = prenda + aumento;

if (precioFinal >= 4000) {
    console.log('Precio excedido');
} else {
    console.log(`Compra permitida precio final: ${precioFinal}`);
}

