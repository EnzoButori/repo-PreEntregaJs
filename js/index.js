/* Menu de interaccion con el usuario por consola*/

function gracias(){
    
    alert("Gracias por su compra, vuelva pronto!")
}

function productos() {
    const salir = false
    do {
        console.log("\tProductos Disponibles:\n1. Iphones.\n2. Macbooks.\n3. Auriculares.\n0. Volver al menu principal")
        let numero = parseInt(prompt("Seleccione una opción"))
        // iPhones
        if (numero == 1) {
            let volverAlMenu = false
            do {
                console.log("\tIphones:\n- Iphone 14.\n- Iphone 14 Pro.\n- Iphone 14 ProMax.\n- Iphone 15.\n- Iphone 15 Pro.\n- Iphone 15 ProMax.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (volverAlMenu == false)
        // MacBooks
        } else if (numero == 2) {
            let volverAlMenu = false
            do {
                console.log("\tMacBooks:\n- MacBook Air.\n- Macbook Pro.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (volverAlMenu == false)
        // Auriculares
        } else if (numero == 3) {
            let volverAlMenu = false
            do {
                console.log("\tAuriculares:\n- AirPods.\n- AirPods 2.\n- AirPods 3.\n- AirPods Pro.\n- AirPods Pro 2.\n- AirPods Max.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (volverAlMenu == false)
        }else if (numero == 0){
            menu()
        }
    } while (salir == false)

}

function canje(){
    let salir = false
    do {
        console.log("\tPlan Canje:\n¿Plan Canje? ¿Que es? \nEl Plan Canje es un plan de ahorro en donde nosotros recibimos tu dispositivo usado como parte de pago y pagando una diferencia te llevas el tuyo nuevo por menos plata de lo que sale.")
        salir = confirm("¿Desea volver al menu?")
    }while (salir == false)

    menu()

}

function compra(){
    const carrito = []
    let terminar = false
    console.log("\tPor favor, llene su carrito ;)")

    do {
        let producto = prompt("Ingrese el nombre del producto a comprar: ")
        if (producto) {
            carrito.push(producto.toLowerCase())
        }
        terminar = confirm("¿Desea terminar su carrito?")
    } while (!terminar)
    
    console.log("Su carrito de compras contiene:", carrito)
}

function menu () {
    console.log("\tMenu de Opciones.\n1. Productos Disponibles.\n2. Plan Canje.\n3. Realizar Compra.\n0. Finalizar.")
    const numero = parseInt(prompt("Seleccione una opcion"))
    switch (numero){
        case 1:
            productos()
            break;
        case 2:
            canje()
            break;
        case 3:
            compra()
            break;
        case 0:
            gracias()
            break;
        default:
            alert("Porfavor seleccione una opcion")
            break;
    }
}

menu();