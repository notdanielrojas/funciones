/* ---------------- Desafío 3.3 y 3.4 ---------------- */

/* Obtener los elementos div por su id */
let azul = document.getElementById("azul");
let rojo = document.getElementById("rojo");
let verde = document.getElementById("verde");
let amarillo = document.getElementById("amarillo");

/* Agregar event listener a cada div para cambiar el color al hacer clic */
azul.addEventListener("click", function () {
  cambiarColor(azul);
});

rojo.addEventListener("click", function () {
  cambiarColor(rojo);
});

verde.addEventListener("click", function () {
  cambiarColor(verde);
});

amarillo.addEventListener("click", function () {
  cambiarColor(amarillo);
});

/* Función para cambiar el color de un elemento al negro */
function cambiarColor(elemento) {
  elemento.style.backgroundColor = "black";
}

// Evento para ir a la página siguiente
anterior.addEventListener("click", function () {
  window.location.href = "pintar.html";
});
// Evento para ir a la página siguiente
siguiente.addEventListener("click", function () {
  window.location.href = "cuadrados.html";
});
