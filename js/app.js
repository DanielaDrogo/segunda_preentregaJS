let tipos = ["verdura", "fruta"]
let maduraciones = ["verde", "maduro", "pasado", "fresco"]

// defino una class para agregar productos
class producto {
    constructor(nombre, tipo, precio, procedencia, oferta, maduracion){
        this.nombre = nombre;
        this.tipo = tipos[tipo]
        this.precio = precio;
        this.procedencia = procedencia;
        this.oferta = oferta;
        this.maduracion = maduraciones[maduracion]
    }
}

// declaro mis praductos
let productos = [
    new producto("papa", 0, 100, "salta", true, 2),
    new producto("banana", 1, 1000, "ecuador", false, 0),
    new producto("lechuga", 0, 200, "buenos aires", false, 3),
    new producto("manzana", 1, 500, "rio negro", false, 0),
    new producto("zapallo", 0, 500, "buenos aires", true, 1),
    new producto("zanahoria", 0, 300, "buenos aires", false, 3),
    new producto("morron rojo", 0, 800, "cordoba", false, 2),
    new producto("remolacha", 0, 100, "buenos aires", true, 2)
]

let carrito = []



while (true) {

    // muestro las opciones
    


    let respuesta = prompt(`¿desea agregar un producto al carrito? responda con "si" o con "no" `).toUpperCase();
    let productoAEliminar = prompt("Ingresa el nombre del producto que deseas eliminar del carrito:");
    eliminarDelCarrito(productoAEliminar);

    if (respuesta === "SI") {
        agregarAlCarrito()

    }else if (respuesta === "NO") {
        alert(`gracias por la compra`)
        break
    } else {
        respuesta = prompt(`Respuesta incorrecta. Ingrese "si" o "no".`).toUpperCase()
    }

    let elegirOpcion = prompt(`eliga una opcion` )


}


// FUNCIONES //
function agregarAlCarrito() {
    let nombreProducto = prompt("Ingresa el nombre del producto que deseas agregar al carrito:");

    // Buscar el producto por su nombre
    let productoEncontrado = producto.find((producto) => producto.nombre == nombreProducto).toLowerCase

    if (productoEncontrado) {
        // Agregar el producto al carrito
        carrito.push(productoEncontrado);
        console.log(`¡${nombreProducto} ha sido agregado al carrito!`);
    } else {
        console.log(`No se encontró ningún producto con el nombre "${nombreProducto}".`);
    }
}

function eliminarDelCarrito(nombreProducto) {
    // Buscar el producto por su nombre en el carrito
    let indice = carrito.find(producto => producto.verdura_fruta.toLowerCase() === nombreProducto.toLowerCase());

    if (indice !== -1) {
        // Si se encuentra el producto, eliminarlo del carrito
        let productoEliminado = carrito.splice(indice, 1)[0];
        console.log(`¡${productoEliminado.verdura_fruta} ha sido eliminado del carrito!`);
        console.log(carrito)
    } else {
        console.log(`No se encontró ningún producto con el nombre "${nombreProducto}" en el carrito.`);
    }
}

function calcularTotal() {

    let total = carrito.reduce((acumulador, valorActual) => acumulador + valorActual.precio, 0);
    alert(`el total del carrito es` + total)
    
}







