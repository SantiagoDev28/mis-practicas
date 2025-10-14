// Crear una funcin que me permita encontrar el numero mayor en un array

function numeroMayor(numeros) { // -> Recibimos un array de numeros
    let primerNumero = numeros[0] // -> Guardamos el primer numero dentro del array 
    let numMayor = primerNumero // Definimos el numero mayor con ese primer numero
    for (let i = 0; i < numeros.length; i++) { 
        if (numeros[i] > numMayor) { // -> Recorremos el array y revisamos si el numero actual es mayor al numero mayor actual
            numMayor = numeros[i]; // -> Si lo es lo guardamos como el nuevo numero mayor
        }
    }
    console.log(`El numero mayor es ${numMayor}`)
}

numeroMayor([-1, -3, -5, 0]);
