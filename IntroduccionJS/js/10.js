// Objetos 

const producto = {      //Se establece el objeto
    nombreProducto: "Monitor 20 pulgadas", //Atributos del objeto/caracteristicas
    precio: 300,
    disponible: true
}

console.log(producto);
// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto["precio"]); //Forma de mostrar dato del objeto pero ya no se usa casi

//Agregar propiedades a mismo Objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;
console.log(producto);
