/* Menu de interaccion con el usuario por consola*/

function gracias(){
    alert("Gracias por su compra, vuelva pronto!")
}

function productos(){
    console.log("")
}

function menu () {
    console.log("\tMenu de Opciones.\n1. Productos Disponibles.\n2. Ver Lista de precios.\n3. Plan Canje.\n4. Realizar Compra.\n0. Finalizar.")
    let numero = parseInt(prompt("Seleccione una opcion"))

    switch (numero){
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 0:
            gracias()
    }

}

menu()