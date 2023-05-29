
export const verificarPalindromo = (string) => {

    let salida = string.split('')
                    .reverse()
                    .join('');

    if(string === salida){
        return true;
    }else {
        return false
    }

}

