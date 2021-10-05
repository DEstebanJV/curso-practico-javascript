/* media ariemteica 
venta1 + venta 2 + venta3+ / cantidad de numeros
no da unos resultados muy exactos cuando la minoria rompe la regla por demasiado valor
*/

/* Ahi es donde entra la mediana
sueldo 1, sueldo2, sueldo 3
ordenar los valores de menor a mayor
El elemento que esta exactamente en la mitad de la lista
Cuando la lista es par los dos elementos de la mitad, le calculamos la media aritmetica

*/

/* MODA
El elemento que mas se repite en una lista
*/

    /* media aritmetica */



function calcularMediaAritmetica(lista){
    /* let  sumaLista = 0; */

/* for (let i = 0; i<lista.length; i++){
    sumaLista = sumaLista + lista[i];
} */

/* Llamar un array por otro metodo */

const sumaLista  = lista.reduce(
    function (valorAcumulado = 0, elementoActual) {
      return valorAcumulado + elementoActual;  
    }
); // al metodo reduce podemos enviar una funcion y el va a ir sumando

 const promedioLista1 = sumaLista / lista.length;
return promedioLista1; 
}


/*  FUnciones puras de javascript map filter reduce 
las funciones puras retornan siempre el mismo resultado ante los mismos parametros
las funciones puras no producen efectos secundarios
*/

// la funcion map transforma los valroes de un array 

const numeros =  [3,10,15];
const dobles = numeros.map(function(numero){
    return numero*2;
}); // estas funciones siempre reciben como parametro otra funcion


/*  Filter es como una maquina que va eligiendo elementos para pasar a un nuevo array */

/* predicado una funcion que afirma o niega si un elemento cumple o no */

const productos = [
    {id:'aaaa', nombre: 'camisa', precio: 500},
    {id:'bbbb', nombre: 'pantalon', precio: 1000},
    {id:'ccc', nombre: 'gorra', precio: 100}
];

const esBarato = producto => producto.precio < 1000;
const esCaro = producto => !esBarato(producto);
const productosBaratos = productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);

/* Reduce es como una prensa 
    esta prensa necesita un array y un valor inicial que le debemos indicar nosotros
    con cada vuelta de la palanca opera con el valor que va acumulando con cada elemento del array
    a la final obtenemos un unico valor como resultado
*/

const numeros = [1,10,20];
const acumular = (acumulador,numero)=>acumulador + numero;
let total = numeros.reduce(acumular,0);
// el primer parametro es la funcion reductora y el segundo parametro es el valor inicial del acumulador