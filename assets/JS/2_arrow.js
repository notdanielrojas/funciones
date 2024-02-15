/* Transforma la siguiente función a una arrow function de una línea.
let suma = function(a, b){
  return a + b
  } */
  
let suma = (a, b) => a + b;

alert(suma(4, 5, 6));


anterior.addEventListener("click", function () {
  window.location.href = "cuadrados.html";
});

siguiente.addEventListener("click", function () {
  window.location.href = "pintar.html";
});