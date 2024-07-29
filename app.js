const username = prompt("Ingresa tu nombre de usuario:");
let arrOfTasks = [];

/**
 * Validamos que el ID de la tarea cumpla con un criterio específico para poder trabajar con las tareas.
 * @param {number} taskId 
 * @returns {boolean} si no se cumple la validación nos retorna un true, en caso contrario false.
 */
const validateTaskId = (taskId) => {
  const restultValidation = taskId < 1 || taskId > arrOfTasks.length ? true : false;

  return restultValidation;
}

alert(`Bienvenido a la página ${username}!`);

/** 
 * Muestra un menú para interactuar con la app de tareas.
 * @returns {void}
 * 
 */
function menuApp() {
  let option = null;
  let taskIdForTask = null;

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
        taskIdForTask = parseInt(prompt("Ingresa el ID de la tarea a listar:"));
        listTaskById(taskIdForTask);
        break;
      case 3:
        taskIdForTask = parseInt(prompt("Ingresa el ID de la tarea a eliminar:"));
        deleteTaskById(taskIdForTask);
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


/**
 * Creamos una tarea que se almacena como objeto dentro de nuestro array (definido el la parte superior de este archivo) llamado arrOfTasks
 * @returns null
 */
function createTask() {
  const taskName = prompt("Ingresa el nombre de tu tarea");
  const taskObject = {
    id: arrOfTasks.length + 1,
    name: taskName,
  }

  arrOfTasks.push(taskObject);
  console.log(arrOfTasks[arrOfTasks.length - 1]);

  return;
} 

/**
 * Mostramos por pantalla la tarea que contenga el ID pasado por el usuario.
 * @param {number} taskId 
 */
function listTaskById(taskId) {
  const stateValidationId = validateTaskId(taskId);

  if (stateValidationId === false) {
    for (let value of arrOfTasks) {
      if (value.id === taskId) {
        alert(`=== Tarea ${taskId} ===\n${value.name}`);
  
        return;
      }
    }
  } else {
    return;
  }

  alert("Haz ingresado un ID inexistente.");
}

function listAllTasks() {
  if (arrOfTasks.length > 0) {
    for (index of arrOfTasks) {
      alert(`=== Tarea ${index.id} ===\nTarea: ${index.name}`);
    }
    return;
  } else {
    console.log("No tienes tareas almacenadas");
    alert("¡No tienes tareas almacenadas!");
  }
  
}

function deleteTaskById(taskId) {
  const stateValidationId = validateTaskId(taskId);

  if (stateValidationId === false) {
    for (element of arrOfTasks) {
      if (element.id === taskId) {
        console.log(`Elemento eliminado: ${arrOfTasks[taskId-1]}`)
        arrOfTasks.splice(taskId-1, 1);
      }
    }

    return;
  }

  alert("ID ingresado no se encuentra almacenado en nuestra lista");
}

menuApp();