// En una pizzeria requieren un programa que calcule cuanto cobraran neto los repartides al
// final del dia (Todos cobran igual)
// Se tienen los siguientes datos obligatorios
// repartidores (Cantidad de repartidores, puede ser cualquier numero entero)
// esFeriado (true si es Feriado, false si no)
// gananciaDelDia (Cuanto recaudo la pizzeria para distribuir a los empleados)
// porcentajeParaSueldos (Un porcentaje de gananciaDelDia)
// sueldoNetoDeRepartidor (Cuanto gana en bolsillo el repartidor)
// gananciaDelComercioFinal (Cuanto gana el comercio una vez pagados los sueldos y
// demas)
// Se sabe que:
// En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
// dias normales, es del 65%


let repartidores = 2,
    feriado = true,
    gananciaDelDia = 2000,
    porcentajeParaSueldos = 0,
    sueldoNetoDeRepartidor = 0,
    gananciaDelComercioFinal = 0;

if (feriado) {
    porcentajeParaSueldos = 2000 * 80 / 100;
} else {
    porcentajeParaSueldos = 2000 * 65 / 100;
}

sueldoNetoDeRepartidor = porcentajeParaSueldos / repartidores;
gananciaDelComercioFinal = gananciaDelDia - porcentajeParaSueldos;

console.log(`Los ${repartidores} repartidores ganaron: ${sueldoNetoDeRepartidor}`);
console.log(`El comercio gano ${gananciaDelComercioFinal}`)

