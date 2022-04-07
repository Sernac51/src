const btnActivar = document.getElementById("btnActivar");
const texto = document.getElementById("texto");


function cambiarColor(){
    document.getElementById("btnActivar").style.backgroundColor = "pink";
    
}
function quitarColor(){
    document.getElementById("btnActivar").style.backgroundColor = "";
    
}
function ocultar(){
    document.getElementById("texto").style.display = "none";
    if(btnActivar.textContent ==  "Ocultar")
    {
        btnActivar.textContent = "Mostrar";
    }
}
function mostrar(){
    document.getElementById("texto").style.display = "block";
    if(btnActivar.textContent ==  "Mostrar")
    {
        btnActivar.textContent = "Ocultar";
    }

}
function mostrarOcultar(){
    if(btnActivar.textContent == "Mostrar"){
        mostrar();
    }
    else{
        ocultar();
    }
}

btnActivar.addEventListener("click", mostrarOcultar);
btnActivar.addEventListener("mouseover", cambiarColor);
btnActivar.addEventListener("mouseout", quitarColor);
