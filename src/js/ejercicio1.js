export const tablaMultiplicar = (numero) => {

    console.log( `# Tabla del ${numero} #`);
    
    for (let i = 1; i <=10; i++ ){
        let resul = i * numero;
        console.log(`${i} x ${numero} = ${resul}`);
    }
}




