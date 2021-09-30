/* perimetro = suma de todos los lados
   Area = depende de la figura

   cuadrado: l*l
   triangulo:  base x altura / 2
   
   perimetro de una circunferencia
   diametro*pi
   Area: radio^2*pi

*/

/* Calcular perimetro y area de un cuadrado */

console.group("cuadrados") //agrupar en la consola

/* const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

// encapsular el codigo en una funcion
function perimetroCuadrado(lado){
    return lado * 4;
} 

/* console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm"); */

function areaCuadrado(lado){
    return  lado * lado;
} 
/* console.log("El perimetro del cuadrado miden: " + areaCuadrado + "cm^2"); */

console.groupEnd(); // cerramos la agrupacion

/* Calcular triangulo */
console.group("triangulos");
/* 
const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; */

/* console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 +"cm, "
    + ladoTriangulo2 +"cm, "
    + baseTriangulo +"cm"
    ); */

/* console.log(
    "la altura del triangulo es de:"
    + alturaTriangulo
); */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
/* console.log("El perimetro de mi triangulo es: "+ perimetroTriangulo); */

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}  
/* console.log ("El area de mi traingulo es: " + areaTriangulo ); */

console.groupEnd();

/* codigo circulo */
console.group("circulos");
// radio
/* const radioCirculo = 4; */
/* console.log("El radio del circulo es: "+ radioCirculo + "cm"); */
// diametro
function diametroCirculo(radio){
    return  radio * 2;
} 
/* console.log("El diametro del circulo es: "+ diametroCirculo + "cm"); */
//pi
// const pi = 3.1416;
const pi = Math.PI;
console.log("pi es: "+ pi + "cm");

//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    // una funcion dentro de otra funcion ingresando el argumento que nos dan en el parametro
    return diametro * pi;
}  
/* console.log("El perimetro del circulo es: "+ perimetroCirculo + "cm"); */
//area
function areaCirculo(radio){
   return (radio * radio)*pi; 
}  
/* console.log("El area del circulo es: "+ areaCirculo + "cm"); */

console.groupEnd();


/* Conectandonos a html */
/* Cuadrado */

function calcularPerimetroCuadrado(){
 const input = document.getElementById("inputCuadrado"); // traer un elemento de html a js
 const value = input.value; //obtener el valor y guardarlo en una variable
 const perimetro = perimetroCuadrado(value);
 alert("El perimetro de tu cuadrado es: "+perimetro);
}


function calcularAreaCuadrado(){
 const input = document.getElementById("inputCuadrado"); // traer un elemento de html a js
 const value = input.value; //obtener el valor y guardarlo en una variable
 const area = areaCuadrado(value);
 alert(area);
}

/* triangulo */

function calcularPerimetroTriangulo(){
    const lado1 = Number(document.getElementById("inputLadoTriangulo1").value); // manera practica corta de hacer lo de abajo
    //const valorLado1 = lado1.value;
    //const numberlado1 = parseInt(Lado1, 10);  OTRA Manera de convertir a numero
    const lado2 = Number(document.getElementById("inputLadoTriangulo2").value);
    //const valorLado2 = lado2.value;
    //const numberLado2 = parseInt(valorLado2, 10)
    const base = Number(document.getElementById("inputBaseTriangulo").value);
    //const valorBase = base.value;
    // const numberBase = parseInt(valorBase, 10);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const altura = Number(document.getElementById("inputAlturaTriangulo").value); // manera practica corta de hacer lo de abajo
    //const valorLado1 = lado1.value;
    //const numberlado1 = parseInt(Lado1, 10);  OTRA Manera de convertir a numero
    const base = Number(document.getElementById("inputBaseTriangulo").value);
    //const valorBase = base.value;
    // const numberBase = parseInt(valorBase, 10);

    const perimetro =areaTriangulo(base, altura);

    alert(perimetro);
}

/* CIRCULO */

function calcularPerimetroCirculo(){
    const radio = Number(document.getElementById("inputRadio").value);    
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = Number(document.getElementById("inputRadio").value);    
    const perimetro = areaCirculo(radio);
    alert(perimetro);
}