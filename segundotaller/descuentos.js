function calcularPrecioConDescuento(precio, descuento, cupon){
    const porcentajePrecioConDescuento = 100 - descuento;
    const porcentajePrecioCupon = 100 - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    const total = (precioConDescuento * porcentajePrecioCupon)/100;
    return total;
    
}

/* console.log(calcularPrecioConDescuento(100,10,10)); */

function onClickButtonPrecioDescuento(){
    const inputPrecio = Number(document.getElementById("inputPrecio").value);
    const inputDescuento = Number(document.getElementById("inputDescuento").value);
    const inputCupon = Number(document.getElementById("inputCupon").value)
    const precioConDescuento = calcularPrecioConDescuento(inputPrecio, inputDescuento, inputCupon);
    const resultPrecio = document.getElementById("ResultPrecio")   
    resultPrecio.innerText = "El precio con descuento son: $" + precioConDescuento; 
    // innertext es para escribir texto en un id de un parrafo
}