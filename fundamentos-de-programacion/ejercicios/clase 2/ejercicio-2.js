// Sea una variable numerica entera y positiva 'limite':
// Recorrer desde 0 hasta limite
// Imprimir al final del programa la cantidad de numeros impares
// Imprimir al final del programa la cantidad de numeros menores de limite / 2

let limite = 15,
    cantidadPar = 0,
    cantidadImpar = 0;

if (limite <= 0) {
    console.log('Número invalido');
} else {
    for (let i = 1; i <= limite; i++) {

        if (i % 2 === 0) {
            cantidadPar++;
        } else {
            cantidadImpar++;
        }
    }
}

console.log(`Entre el números ${limite}`);
console.log(`Hay ${cantidadPar} números pares`);
console.log(`Hay ${cantidadImpar} números impares`);