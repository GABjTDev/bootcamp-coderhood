// Sea una variable numerica entera y positiva 'limite':
// - Recorrer desde 0 hasta `limite`
// - Imprimir en pantalla los numeros pares (No la cantidad de numeros)

let limite = 15;

if (limite <= 0) {
    console.log('El numero es invalido');
} else {
    for (let i = 1; i <= 15; i++) {

        if (i % 2 === 0) {
            console.log(`${i} es número par`);
        }

    }
}
