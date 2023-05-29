

export const buscarPalabra = (texto, buscar) => {

    const censurado = '[-CENSURADO-]';
    const regex = /hola/g
    let salida = '';

    
    if (!!texto && !!buscar){

        return salida = texto.replace(regex, censurado);
                 
    }if(!texto || !buscar){
        return `No es posible realizar la busqueda`;
    }

    return salida;
}
