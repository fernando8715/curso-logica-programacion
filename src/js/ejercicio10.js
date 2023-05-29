
export const escalera = (escalones) => {

    let escalera = '';
    
    for(let i = 1; i<= escalones; i++){
        const escalon = '[-]';
        escalera += escalon.repeat(i) + '\n';  
    }
    return escalera;
}

