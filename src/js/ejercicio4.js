/*
    Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres sin
    usar métodos del lenguaje, solo estructuras de control.
*/

export const invertirPalabra = (string) => {

    let invertida = ''
    
    for(let i=string.length-1; i>=0; i--){
        invertida += string[i];
    }

    return invertida;
}