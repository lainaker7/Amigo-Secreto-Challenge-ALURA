let listaDeAmigos =[];

function ingresaUnAmigo(){
    let nombres = document.getElementById('amigo').value;
    if(nombres===""){
    alert("Debes escribir un nombre");
    return;
}
    if(listaDeAmigos.includes(nombres)){
    alert("Este nombre ya fue ingresado, elija otro por favor");
    return;
    }
    listaDeAmigos.push(nombres);
   
    verLista();
    limpiarBanner();
   

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
    let valorCaja = document.querySelector('#amigo').value='';}

function sortearAmigo(){
    let sorteo=document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");
    let indiceAleatorio=Math.floor(Math.random()*listaDeAmigos.length);
    let nombreAleatorio= listaDeAmigos[indiceAleatorio];
    lista.innerHTML="";
    sorteo.textContent = (`El nombre del amigo secreto es : ${nombreAleatorio}`);
    listaDeAmigos.length = 0;
    
}    



