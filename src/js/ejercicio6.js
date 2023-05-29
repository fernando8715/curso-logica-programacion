

export const crearFigura = (numero) => {
    
    let palabra = '';

    for(let i=0; i<numero; i++){
        if(i===0 || i===numero-1){
            palabra += superior(numero);
            palabra += '\n';     
        }else{
            palabra += inferior(numero)
            palabra += '\n';
        }
    }
    
    return palabra
}


const superior = (numero) => {

    return '*'.repeat(numero);   
}

const inferior = (numero) => {

    let temp = '';

    for(let i=0; i<numero; i++){
        if(i===0 || i===(numero-1)){
            temp += '*';
        }else{
            temp += ' '
        }
    }

    return temp;

}
