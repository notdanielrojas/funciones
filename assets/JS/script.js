/* ---------------- Desafío 2.1, 2.2 y 2.3---------------- */
/* Definición de la función pintar que establece el color de fondo de un elemento */
function pintar(ele, color = "green") {
  ele.style.backgroundColor = color; // Establece el color de fondo del elemento
}

/* Selecciona el elemento con el id "ele1" */
let ele = document.getElementById("ele1");

/* Llama a la función pintar para establecer el color verde por defecto */
pintar(ele);

/* Añade un event listener al elemento "ele1" que llama a la función pintar con el color amarillo cuando se hace clic en él */
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});

// Evento para ir a la página siguiente
anterior.addEventListener("click", function () {
  window.location.href = "index.html";
});
// Evento para ir a la página siguiente
siguiente.addEventListener("click", function () {
  window.location.href = "4_colores.html";
});
