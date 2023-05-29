// Dado un numero entero, inviertelo y devuelve el nuevo numero.

export const invertir = (num) => {

    let invertido;
   
    if(num > 9){
        
        invertido = parseInt(num.toString()
                    .split('')
                    .reverse()
                    .join(''));
    } else {
        return `El numero tiene un solo digito`
    }

    return `El ${num} invertido es: ${invertido}`;
}


