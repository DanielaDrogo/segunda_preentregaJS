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
    let elegirOpcion = parseInt(prompt(`ELIJA UNA OPCION: 
        1. agregar productos al carrito 
        2. eliminar productos del carrito 
        3. ver verduras 
        4. ver frutas
        5. ver contenido del carrito 
        6. finalizar compra y ver el total a pagar
        7. salir`));

    if (elegirOpcion === 1) { 
        agregarAlCarrito()

    } else if(elegirOpcion === 2) {
        eliminarDelCarrito()
        let nombreProductoAEliminar = prompt("Ingresa el nombre del producto que deseas eliminar del carrito:");
        eliminarDelCarrito(nombreProductoAEliminar);

    } else if(elegirOpcion === 3) {
        let verduras = productos.filter ((producto) => producto.tipo == "verdura")
        verduras.forEach(producto => console.log(producto.nombre));
        console.log(verduras)

    } else if(elegirOpcion === 4) {
        let frutas = productos.filter ((producto) => producto.tipo == "fruta")
        frutas.forEach(producto => console.log(producto.nombre));
        console.log(frutas)

    } else if(elegirOpcion === 5) {

        if (carrito.length === 0) {
            // si el carrito esta vacio
            console.log("El carrito está vacío.");
        } else {
            // si el carrito tiene productos los muestra
            console.log("Contenido del carrito:");
            carrito.forEach(producto => console.log(producto.nombre));
        }

    } else if(elegirOpcion === 6) {
        calcularTotal()
        break 

    } else if (elegirOpcion === 7){
        break

    } else if( isNaN(elegirOpcion) ) {
        alert(`respuesta invalida, elija una opcion numerica`)

    } else {
        alert(`la opcion para elegir es del "1" al "6"`)
    }
}

// FUNCIONES //
function agregarAlCarrito() {
    let nombreProducto = prompt(`Ingresa el nombre del producto que deseas agregar al carrito:
       "papa", "banana", "lechuga", "manzana", "zapallo", "zanahoria", "morron rojo", "remolacha"`);

    // Buscar el producto por su nombre
    let productoEncontrado = productos.find((producto) => producto.nombre === nombreProducto)

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
    let productoAEliminar = carrito.find(producto => producto.nombre === nombreProducto);

    if (productoAEliminar) {
        // Si se encuentra el producto, eliminarlo del carrito
        carrito.splice(carrito.indexOf(productoAEliminar), 1);
        console.log(`¡${productoAEliminar.nombre} ha sido eliminado del carrito!`);
        console.log(carrito);

    } else {
        console.log(`No se encontró ningún producto con el nombre "${nombreProducto}" en el carrito.`);
    } 
}

function calcularTotal() {
    // suma el total de la compra
    let total = carrito.reduce((acumulador, valorActual) => acumulador + valorActual.precio, 0);
    alert(`el total del carrito es ` + total)
}





