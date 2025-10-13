// Crear una funcion que me permita detectar si una palabra es un palindromo

// Funcion es palindromo
function esPalindromo(palabra){
    // Definimos la palabra inicial que trataremos
    let palabraInicial = palabra

    // La modificamos para que se mantenga en miniscula siempre
    palabraInicial.toLowerCase()

    // Separamos letra por letra para reordenar la palabra
    let arreglo = palabraInicial.split('')

    // Volteamos el orden de las letras
    arreglo.reverse()
    
    // Acomodamos la nuevo palabra 
    let palabraFinal = arreglo.join('')

    // Aqui preguntamos si la palabra del inicio y la del final son iguales o no
    if (palabraFinal === palabraInicial){
        return(`La palabra ${palabra} es un palindromo`)
    }else{
        return(`La palabra ${palabra} no es un palindromo`)
    }
}

// Imprimimos la respuesta
console.log (esPalindromo('arroz'))