/*
3- Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

let texto
let carac 

const traer = () =>{
    texto = document.getElementById("texto").value
    carac = document.getElementById("caracter").value
    volverArreglo(texto, carac)
}

const volverArreglo = (texto, carac) => 
    (texto==="")
        ?window.alert("No ha ingresado la cadena")
        :(carac === "")
            ?window.alert("No ha ingresado el caracter")
            :document.getElementById("array").value = entregarArreglo(texto, carac)

const entregarArreglo = function(texto, caracterSep){
    
    return texto.split(caracterSep);
  
}

