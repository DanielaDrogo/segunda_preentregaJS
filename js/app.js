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
    // let productoAEliminar = prompt("Ingresa el nombre del producto que deseas eliminar del carrito:");
    // eliminarDelCarrito(productoAEliminar);

    let elegirOpcion = Number(prompt(`ELIJA UNA OPCION: 
        1. agregar productos al carrito 
        2. eliminar productos del carrito 
        3. ver verduras 
        4. ver frutas
        5. ver contenido del carrito 
        6. finalizar compra y ver el total a pagar`));

    if (elegirOpcion === 1) {
        agregarAlCarrito()

    } else if(elegirOpcion === 2) {
        eliminarDelCarrito()

    } else if(elegirOpcion === 3) {
        productos.filter ((producto) => producto.tipo == "verdura")

    } else if(elegirOpcion === 4) {
        productos.filter ((producto) => producto.tipo == "fruta")

    } else if(elegirOpcion === 5) {
        carrito.forEach((producto) => producto);
        
    } else if(elegirOpcion === 6) {
        calcularTotal()

    }else if( isNaN(elegirOpcion) ) {
        alert(`respuesta invalida, elija una opcion numerica`)

    } else {
        alert(`la opcion para elegir es del "1" al "6"`)
    }


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
    let productoAEliminar = prompt("Ingresa el nombre del producto que deseas eliminar del carrito:");
    eliminarDelCarrito(productoAEliminar);

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







