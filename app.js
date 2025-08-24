let listaDeAmigos = [];
const MAXIMO_PARTICIPANTES = 10; // Puedes cambiar este número

function ingresaUnAmigo(){
    let nombres = document.getElementById('amigo').value;
    
    // Validar campo vacío
    if(nombres.trim() === ""){
        alert("Debes escribir un nombre");
        return;
    }
    
    // Validar máximo de participantes
    if(listaDeAmigos.length >= MAXIMO_PARTICIPANTES){
        alert(`¡Límite alcanzado! Máximo ${MAXIMO_PARTICIPANTES} participantes`);
        return;
    }
    
    // Validar solo letras y espacios
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;
    if(!regex.test(nombres)){
        alert("Solo se permiten letras y espacios. No números ni caracteres especiales");
        return;
    }
    
    // Validar duplicados
    if(listaDeAmigos.includes(nombres)){
        alert("Este nombre ya fue ingresado, elija otro por favor");
        return;
    }
    
    listaDeAmigos.push(nombres);
    verLista();
    limpiarBanner();
    actualizarContador(); // Nueva función para mostrar el contador
}

function verLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    listaDeAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

function limpiarBanner(){
    document.querySelector('#amigo').value = '';
}

// NUEVA FUNCIÓN: Mostrar contador de participantes
function actualizarContador(){
    let contador = document.getElementById("contadorParticipantes");
    if(contador){
        contador.textContent = `${listaDeAmigos.length}/${MAXIMO_PARTICIPANTES} participantes`;
        
        // Cambiar color cuando se acerca al límite
        if(listaDeAmigos.length >= MAXIMO_PARTICIPANTES){
            contador.style.color = "red";
        } else if(listaDeAmigos.length >= MAXIMO_PARTICIPANTES - 2){
            contador.style.color = "orange";
        } else {
            contador.style.color = "green";
        }
    }
}

function sortearAmigo(){
    // Validar mínimo de participantes
    if(listaDeAmigos.length < 2){
        alert("Se necesitan al menos 2 participantes para sortear");
        return;
    }
    
    let sorteo = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nombreAleatorio = listaDeAmigos[indiceAleatorio];
    
    lista.innerHTML = "";
    sorteo.textContent = `El nombre del amigo secreto es: ${nombreAleatorio}`;
    listaDeAmigos.length = 0;
    actualizarContador(); // Actualizar contador después del sorteo
}

// Llamar al contador al cargar la página
actualizarContador();



