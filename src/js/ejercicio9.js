
/*
    recibir dos arreglos y devolver en uno nuevo los elementos comunes entre ambos;
*/

export const verificarComunes = (array1, array2) => {

    const comunes = array1.filter( elem => array2.includes(elem));

    return comunes;
}