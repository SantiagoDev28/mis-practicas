// Crear funcion que cuente las veces que aparece cada letra en una palabra

function contadorLetras(palabra) {

    // Constructor para el objeto letra
    function Letra(letra, conteo) {
        (this.letra = letra), (this.conteo = conteo);
    }

    // Array que guarda cada objetos (Cada letras con su conteo)
    let letras = [];

    // Primer for que recorre las letras de la palabra ingresada
    for (let i = 0; i < palabra.length; i++) {

        // Se guarda la letra actual recorrida
        let letraActual = palabra[i];

        // Se crea un estado que controlara la creacion de nuevas letras en el array
        let encontrada = false;

        // Segundo for que recorre el array de letras y busca coincidencias
        for (let l = 0; l < letras.length; l++) {
            if (letras[l].letra === letraActual) {
                letras[l].conteo++;
                encontrada = true;
                break;
            }
        }

        // Si el estado es falso osea que no se encontro ninguna letra creamos una nueva 
        // y la agregamos en el array
        if (!encontrada) {
            letras.push(new Letra(letraActual, 1));
        }
    }

    // Recorremos nuevamente el array para imprimir cada letra y su conteo
    letras.forEach((l) => {
        console.log( `Letra: ${l.letra} | Conteo: ${l.conteo}`)
    });
}

contadorLetras("palabra");
