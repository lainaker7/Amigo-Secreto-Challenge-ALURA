// primero definimos las variables para el juego del amigo secreto

let amigos = [];
let listaDeParticipantes = document.querySelector('participantes');
let listaDeAgregados = document.querySelector('result-list');
let maximoDeIntegrantes = 10;

//console.log(listaDeParticipantes);

// definimos la funciones que estan en los botones de las etiquetas del HTML

//Función para agregar un amigo al arreglo
function agregarAmigo() {
    //Hacemos uso de la caja de texto del input con el id amigo
    let inputAmigo = document.getElementById("amigo");

    // Guardar el valor escrito y eliminar espacios al inicio y final
    let nombre = inputAmigo.value.trim();

    // Comparamos que la caja de texto no este vacia
    if (nombre === "") {
        alert("Ingresa un nombre, no puede ir vacio");
        return; // Si está vacío, no continuamos
    }

    //Guardamos el nombre en el arreglo 
    listaDeAmigos.push(nombre);

    //mandamos a llamar la funcion de lista que actualiza el html para mostrar la lista
    mostrarLista();

    // Limpiar el campo de texto para el siguiente nombre
    inputAmigo.value = "";
}



