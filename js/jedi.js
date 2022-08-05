alert("Que la fuerza siempre te acompañe")

// Un carrito de productos que suma y hace subtotales para pagar es JS

const productos = [
    {nombre:"Quigon", precio: 20,stock: 10},

    {nombre:"Luke", precio: 50,stock: 8},
    
    {nombre:"Ahsoka", precio: 30,stock: 6},
]

let carrito = [];

let seleccion = prompt("Hola desea comprar algun producto, si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresar si o no")
    seleccion = prompt("Hola desea comprar algun producto, si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$")
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir hasta pronto!")
}

while(seleccion == "si"){
    let productoseleccionado = prompt ("Agrega un producto a tu carrito")
    let precio = 0

    if(productoseleccionado == "Quigon" || productoseleccionado == "Luke" || productoseleccionado == "Ahsoka"){
        switch(productoseleccionado){
            case "Quigon":
                nombre = "Quigon"
                precio = 20
                break;
            case "Luke":
                nombre = "Luke"
                precio = 50
                break;
            case "Ahsoka":
                nombre = "Ahsoka"
                precio = 30
                break;
            default:
                break;
        }

    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))

    carrito.push({nombre, unidades, precio})
    } else{
        alert("No tenemos ese producto")
    }

    let seleccion = prompt("Desea seguir comprando?")

    while(seleccion == "no"){
        alert ("Gracias por la compra! Hasta pronto")
        carrito.forEach((carrito) => {
            console.log(`Producto: ${carrito.nombre}, unidades: ${carrito.unidades},
            total a pagar por producto ${carrito.unidades * carrito.precio}`)   
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)
