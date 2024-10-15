menu();

function gracias() {
    alert("Gracias por su compra, vuelva pronto!");
}

function productos() {
    let salir = false
    do {
        console.clear()
        console.log("\tProductos Disponibles:\n1. Iphones.\n2. Macbooks.\n3. Auriculares.\n0. Volver al menú principal")
        let numero = parseInt(prompt("Seleccione una opción"))
        // iPhones
        if (numero === 1) {
            let volverAlMenu = false
            do {
                console.clear()
                console.log("\tIphones:\n- Iphone 14.\n- Iphone 14 Pro.\n- Iphone 14 ProMax.\n- Iphone 15.\n- Iphone 15 Pro.\n- Iphone 15 ProMax.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (!volverAlMenu)
        // MacBooks
        } else if (numero === 2) {
            let volverAlMenu = false
            do {
                console.clear()
                console.log("\tMacBooks:\n- MacBook Air.\n- Macbook Pro.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (!volverAlMenu)
        // Auriculares
        } else if (numero === 3) {
            let volverAlMenu = false
            do {
                console.clear();
                console.log("\tAuriculares:\n- AirPods.\n- AirPods 2.\n- AirPods 3.\n- AirPods Pro.\n- AirPods Pro 2.\n- AirPods Max.")
                volverAlMenu = confirm("¿Desea volver al menú?")
            } while (!volverAlMenu)
        } else if (numero === 0) {
            return; // Volver al menú anterior
        } else {
            alert("Opción no válida. Intente nuevamente.")
        }
    } while (!salir)
}

function canje() {
    let salir = false
    do {
        console.clear()
        console.log("\tPlan Canje:\n¿Plan Canje? ¿Qué es? \nEl Plan Canje es un plan de ahorro en donde nosotros recibimos tu dispositivo usado como parte de pago y pagando una diferencia te llevas el tuyo nuevo por menos plata de lo que sale.")
        salir = confirm("¿Desea volver al menú?")
    } while (!salir);
}

function compra() {
    const carrito = [];
    let terminar = false;
    console.clear();
    console.log("\tPor favor, llene su carrito ;)");

    do {
        let producto = prompt("Ingrese el nombre del producto a comprar: ");
        if (producto) {
            const productoLower = producto.toLowerCase();
            let esValido = false;
            if (productoLower === "iphone 14" || 
                productoLower === "iphone 14 pro" || 
                productoLower === "iphone 14 promax" || 
                productoLower === "macbook air" || 
                productoLower === "macbook pro" || 
                productoLower === "airpods" || 
                productoLower === "airpods 2" || 
                productoLower === "airpods 3" || 
                productoLower === "airpods pro" || 
                productoLower === "airpods pro 2" || 
                productoLower === "airpods max") {
                esValido = true;
            }

            if (esValido) {
                carrito.push(productoLower);
                console.log("Producto agregado al carrito:", producto);
                console.log("Carrito actual:", carrito);
            } else {
                console.log("Producto no válido. Por favor, ingrese un producto válido.");
            }
        }
        terminar = confirm("¿Desea terminar su carrito?");
    } while (!terminar);

    console.log("Su carrito de compras final contiene:", carrito);
}


function menu() {
    do {
        console.clear();
        console.log("\tMenú de Opciones.\n1. Productos Disponibles.\n2. Plan Canje.\n3. Realizar Compra.\n0. Finalizar.");
        const numero = parseInt(prompt("Seleccione una opción"));
        //Menu principal
        switch (numero) {
            case 1:
                productos();
                break;
            case 2:
                canje();
                break;
            case 3:
                compra();
                break;
            case 0:
                gracias();
                return;
            default:
                alert("Por favor seleccione una opción");
                break;
        }
    } while (true);
}

