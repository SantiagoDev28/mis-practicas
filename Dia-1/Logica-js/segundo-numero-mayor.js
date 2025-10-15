// Crear una funcion que me permita encontrar el segundo numero mayor dentro de un array de numeros

function segundoMayor(numeros) {
    let primerNum = numeros[0]
    let segundoNum = numeros[1]
    let numMayor = primerNum;
    let segNumMayor = segundoNum

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numMayor) {
            segNumMayor = numMayor
            numMayor = numeros[i];
        }
        if(numeros[i] < numMayor && numeros[i]> segNumMayor){
            segNumMayor = numeros[i]
        }
    }
    console.log(g
        `El numero mayor es ${numMayor} y es segundo mayor es ${segNumMayor}`
    );
}

segundoMayor([-4,-5, -1, 0, -10, -23, -7]);
