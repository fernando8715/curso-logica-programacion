
export const calcularPorcentaje = (numero, porcentaje) => {

    const resultado = (numero*porcentaje) / 100;
    
    return `El ${porcentaje}% de ${numero} es: ${resultado}`;
}
