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

const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El perimetro del cuadrado miden: " + areaCuadrado + "cm^2");

console.groupEnd(); // cerramos la agrupacion

/* Calcular triangulo */
console.group("triangulos");

const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 +"cm, "
    + ladoTriangulo2 +"cm, "
    + baseTriangulo +"cm"
    );

console.log(
    "la altura del triangulo es de:"
    + alturaTriangulo
);

const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro de mi triangulo es: "+ perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log ("El area de mi traingulo es: " + areaTriangulo );

console.groupEnd();

/* codigo circulo */
console.group("circulos");
// radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo + "cm");
// diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: "+ diametroCirculo + "cm");
//pi
// const pi = 3.1416;
const pi = Math.PI;
console.log("pi es: "+ pi + "cm");

//circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es: "+ perimetroCirculo + "cm");
//area
const areaCirculo = (radioCirculo * radioCirculo)*pi;
console.log("El area del circulo es: "+ areaCirculo + "cm");

console.groupEnd();