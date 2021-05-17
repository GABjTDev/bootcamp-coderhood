// Contador 2: La venganza del contador
// Sea una variable numerica entera y positiva 'limite':
// Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
// Se llega a limite
// La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
// anteriormente creada llamada final
// Al final del recorrido imprimir la cantidad de numeros multiplos de 3
// Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
// termine el recorrido


let limite = 15,
    cantidadPares = 0,
    CantidadTres = 0,
    sumaTotal = 0;

if (limite <= 0) {
    console.log('Número inválido');
} else {

    for (let i = 0; i <= limite; i++) {

        if (i % 2 === 0) {
            cantidadPares++;
        } else if (i % 3 === 0) {
            CantidadTres++;
        }

        sumaTotal += i;
    }
}

console.log(`Entre el número ${limite}`);
console.log(`Hay ${cantidadPares} números pares`);
console.log(`Hay ${CantidadTres} números multiplos de 3`);
console.log(`La suma de todos los números es ${sumaTotal}`);