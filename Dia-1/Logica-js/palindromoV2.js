function esPalindromo(palabra){
    // Array en el que guardaremos cada letra de la palabra
    let letrasInvertidas = []

    // For para ir acumulando cada letra en el array y formar la nueva palabra
    for(i= palabra.length-1 ; i >= 0 ; i-- ){
        letrasInvertidas.push(palabra[i])
        console.log(letrasInvertidas)
    }

    // Convertimos el array en una cadena de texto
    const palabraFinal = letrasInvertidas.join('')

    // Hcemos la comparativa
    if (palabraFinal == palabra){
        return('Es palindromo')
    }else{
        return('No es palindromo')
    }
    
}

console.log(esPalindromo('arroz'))