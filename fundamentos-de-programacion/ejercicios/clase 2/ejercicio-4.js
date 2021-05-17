// La secuencia de Fibonacci
// En matemáticas, la sucesión o serie de Fibonacci es la
// siguiente sucesión infinita de números naturales:
// 0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21
// La sucesión comienza con los números 0 y 1,a partir de estos
// cada término es la suma de sus dos anteriores
// Sea una variable numerica entera y positiva 'limite':
// Recorrer desde 0 hasta limite
// Imprimir tantos terminos de la secuencia como repeticions de 0 hasta limite
// Ejemplo: si limite = 6, imprimir 0, 1, 1, 2, 3, 5

let limite = 21,
    value1 = 0,
    value2 = 1,
    value3 = 0;

if (limite <= 0) {
    console.log('Numero invalido');
} else {

    let string = `${value1}, ${value2}`;

    while (value3 < limite) {

        value3 = value1 + value2;
        value1 = value2;
        value2 = value3;

        if (value3 <= limite) {
            string += `, ${value3}`;
        }

    }

    console.log(string);

}