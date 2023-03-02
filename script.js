
let usuario = prompt("ingresa tu nombre y apellido");

if (usuario == "") {
    alert("No ingresaste tus datos, tu información no será guardada");
}

else {
    alert("Hola " + usuario + "!")
}


class catalogo{
    constructor( nombre , precio , categoria , descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }


    get_datos(){
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Categoría: ", this.categoria);
        console.log("Precio: ", this.descripcion);
    }


}


let productos = [];

productos.push( new catalogo("Jabón" , 10000, "jabones", "lorem") );
productos.push( new catalogo("Aceite" , 10000, "Aceites", "lorem") );
productos.push( new catalogo("Velas" , 8000, "Velas", "lorem") );
productos.push( new catalogo("Kits" , 16000, "Kits", "lorem") );



console.log("Lista de productos");

for( let producto of productos ){

    producto.get_datos();
}

let carrito = []

    let producto = prompt("agrega un prod a tu carrito")
    let precio = 0


if(producto == "Jabón" || producto == "Aceite" || producto == "Velas" || producto == "Kits"){
    switch(producto){
        case "Jabón":
        precio = 10000;
        break;
        case "Aceite":
        precio = 10000;
        break;    
        case "Velas":
        precio = 8000;
        break;   
        case "Kits":
        precio = 16000;
        break;   
} 

let unidades = parseInt(prompt("cuantas unidades"))

carrito.push({producto, unidades, precio})
console.log (carrito)
}else {
    alert("notenemoseseproduct")
}

seleccion = prompt ("Confirmas tu compra?")

while (seleccion === "si"){
    alert("gracias por la compra")
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagarporproducto ${carritoFinal.unidades * carritoFinal.precio}`)  
    })
    break;
}

