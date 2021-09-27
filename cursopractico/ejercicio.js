// PRIMER EJERCICIO

/* var nombre = "David";
var apellido = "Jimenez";
var nombrePlatzi = "Davidji77";
var edad = 20;
var correo = "davidjv312@gmail.com";
var mayorDeEdad = true;
var dineroahorrado = 1000;
var deudas = 0;

console.log("Hola mi nombre es " + nombre +" "+ apellido);
console.log(dineroahorrado - deudas);

function usuario(nombre, apellido, nombrePlatzi ){
    var nombreCompleto = nombre + apellido;
    console.log("Mi nombre es "+ nombreCompleto + " pero prefiero que me digas " + nombrePlatzi );
}

usuario("david", "jimenez", "davidrmo");
 */


/*  EJERCICIO DE CONDICIONALES*/
/* 
const tipoDeSuscripcion = "basic";

if (tipoDeSuscripcion === "free"){
    console.log("Solo puedes tomar los cursos gratis");
}

else if(tipoDeSuscripcion === "basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

else if(tipoDeSuscripcion === "expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

else if(tipoDeSuscripcion === "expertplus"){
    console.log("tu y alguien mas Pueden tomar todos los cursos de Platzi durante un año");
}
 */

// EJERCICIO solo con if

/* const tipoDeSuscripcion = "expert";

if (tipoDeSuscripcion === "free")
{
    console.log("Solo puedes tomar los cursos gratis");
}
else{
    if(tipoDeSuscripcion === "basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else{
        if (tipoDeSuscripcion=== "expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
        else{
            if (tipoDeSuscripcion === "expertplus"){
                console.log("tu y alguien mas Pueden tomar todos los cursos de Platzi durante un año");
            }
        }
    }
}
 */

// TERCER EJERCICIO CON WHILE

/* 
let i = 0;
while (i <5){
    console.log("El valor de i es: "+ i);
    i++;
}  */

let i= 10;
while (i>=2){
    console.log("El valor de i es: "+ i);
    i--;
}

let respuesta= 0;

do{
    repuesta = prompt("¿Cual es el resultado de 2 + 2?");
    repuesta*=1;
}while(!(repuesta === 4))