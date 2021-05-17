// Emanuel quiere cocinar galletitas y quiere un programa que lo ayude a saber que debe
// comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las
// galletas. La receta pide los siguientes ingredientes
// 3 huevos
// 1 barra de chocolate
// 0.5 kilos de harina
// 5 cucharadas de azucar
// Los ingredientes que tiene Ema tienen que ser variables al inicio del programa que sean
// faciles de editar

let huevosNecesario = 3,
    chocolateNecesario = 1,
    harinaNecesaria = 0.5,
    azucarNecesaria = 5;

let huevos = 3,
    chocolate = 1,
    harina = 0.5,
    azucar = 5;

if (huevos >= huevosNecesario && chocolate >= chocolateNecesario >= harina >= harinaNecesaria && azucar >= azucarNecesaria) {
    console.log('Ema tiene lo necesario para empezar a cocinar galletitas');
} else {

    let string = 'Faltan estos ingredientes - ';

    if (huevos < huevosNecesario) {
        string += `huevos faltantes: ${huevosNecesario - huevos} `
    }

    if (chocolate < chocolateNecesario) {
        string += `chocolate faltantes: ${chocolateNecesario - chocolate} `
    }

    if (harina < harinaNecesaria) {
        string += `harina faltante: ${harinaNecesaria - harina} `
    }

    if (azucar < azucarNecesaria) {
        string += `cucharadas de azucar necesarias: ${azucarNecesaria - azucar} `
    }

    console.log(string);

}