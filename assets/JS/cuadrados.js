// Función que se ejecuta cuando se presiona una tecla
document.addEventListener("keydown", function (event) {
  // Verificar qué tecla se ha presionado y realizar acciones correspondientes
  if (event.key === "a" || event.key === "A") {
    cambiarColor("pink"); // Cambiar el color del primer div a rosa
  } else if (event.key === "s" || event.key === "S") {
    cambiarColor("orange"); // Cambiar el color del primer div a naranja
  } else if (event.key === "d" || event.key === "D") {
    cambiarColor("lightblue"); // Cambiar el color del primer div a celeste
  } else if (event.key === "q" || event.key === "Q") {
    agregarElemento("purple"); // Agregar un nuevo div de color morado
  } else if (event.key === "w" || event.key === "W") {
    agregarElemento("gray"); // Agregar un nuevo div de color gris
  } else if (event.key === "e" || event.key === "E") {
    agregarElemento("brown"); // Agregar un nuevo div de color café
  } else if (event.key === "x" || event.key === "X") {
    eliminarElemento(); // Eliminar el último div agregado
  }
});

// Función para cambiar el color del primer div
function cambiarColor(color) {
  let elemento = document.getElementById("key"); // Obtener el elemento div por su id
  elemento.style.backgroundColor = color; // Cambiar el color de fondo del div
}

// Función para agregar un nuevo div al contenedor con el color especificado
function agregarElemento(color) {
  let contenedor = document.getElementById("contenedor"); // Obtener el contenedor por su id
  let nuevoElemento = document.createElement("div"); // Crear un nuevo elemento div
  nuevoElemento.style.width = "200px"; // Establecer el ancho del nuevo div
  nuevoElemento.style.height = "200px"; // Establecer la altura del nuevo div
  nuevoElemento.style.backgroundColor = color; // Establecer el color de fondo del nuevo div
  nuevoElemento.style.border = "2px solid black"; // Establecer el borde del nuevo div

  contenedor.appendChild(nuevoElemento); // Agregar el nuevo div al contenedor
}

// Función para eliminar el último div agregado al contenedor
function eliminarElemento() {
  let contenedor = document.getElementById("contenedor"); // Obtener el contenedor por su id
  let elementos = contenedor.querySelectorAll("div"); // Obtener todos los elementos div dentro del contenedor
  if (elementos.length > 2) {
    // Verificar si hay más de un div dentro del contenedor
    contenedor.removeChild(elementos[elementos.length - 1]); // Eliminar el último div agregado al contenedor
  }
}

anterior.addEventListener("click", function () {
  window.location.href = "4_colores.html";
});

siguiente.addEventListener("click", function () {
  window.location.href = "index.html";
});