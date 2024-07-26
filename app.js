const username = prompt("Ingresa tu nombre de usuario:");

alert(`Bienvenido a la página ${username}!`);

/** 
 * Muestra un menú para interactuar con la app de tareas.
 * @returns {void}
 * 
 */
function menuApp() {
  let option = null;

  do {
    option = parseInt(
      prompt(
        "Elija una opción:\n1. Crear una tarea\n2. Listar tarea por ID\n3. Eliminar tarea por ID\n4. Listar todas las tareas\n5. Salir"
      )
    );

    console.log("Opción seleccionada:", option);

    switch (option) {
      case 1:
        createTask();
        break;
      case 2:
        listTaskById();
        break;
      case 3:
        deleteTaskById();
        break;
      case 4:
        listAllTasks();
        break;
      case 5:
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción no válida.");
    }

  } while (option !== 5);   
}

menuApp();