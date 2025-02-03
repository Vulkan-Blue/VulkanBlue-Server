


function editText(){
    var texto = document.getElementById("textear").value;

 var parrafo = document.createElement("ul");
    sumando_2 = texto;
    sumando_1 =  sumando_2;
    parrafo.innerHTML = (sumando_1);
    
    if(texto.includes("hola ")){

        if(texto.includes("estas")){
        
        if(texto.includes("ahi")){
        
        var nuevoParrafo = document.createElement("p");
        
        nuevoParrafo.className=("respuesta")
        
        nuevoParrafo.innerHTML = sumando_2;
        
        var contenedor = document.getElementById("contenedor");
        
        contenedor.appendChild(nuevoParrafo);
        
        parrafo.textContent ="si claro que estoy aqui"
        
        }
        
        }
        
        }


      
        


    var contenedor = document.getElementById("contenedor"); 
contenedor.appendChild(parrafo); 
}
   





/*
function crearOraciones() {
var nuevoParrafo = document.createElement("p");

var contenido = "Esta es la primera oración.<br>Esta es la segunda oración.";

nuevoParrafo.innerHTML = contenido;


*/