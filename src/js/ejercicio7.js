

/* 
    Dado dos numeros, devolver cuantos numeros impares hay entre ellos.
    Ejemplo: (1,100)  // Devuelve 49.
*/

export const verificarImpares = (inicio, termino) => {

    let impar = 0;

    for(let i=inicio; i<=termino; i++){
        if( i % 2 !==0 ){
            console.log(i);
            impar++
        }
    }
    return `entre el ${inicio} y el ${termino} hay ${impar} numeros impares`;
}


