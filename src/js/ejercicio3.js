/*
    Dada una palabra, buscar en una frase y devolver cuantas veces aparece la frase.
    La frase y la palabra son parametros de la función
*/

export const buscarPalabra = (frase, palabra) => {

    let contador = 0;
    const regex = /(,|[.]|:|-)/gm;

    let entrada = frase.toLowerCase()
                        .replace(regex, '')
                        .split(' ');
    
    for(const buscar of entrada){
        if(palabra.toLowerCase() === buscar){
            contador++;
        }
    }
    
    if(contador>0){
        return `La palabra: ${palabra} se encontro ${contador} veces`
    }else{
        return `No se encontraron coincidencias de la palabra: ${palabra}`
    }   
}