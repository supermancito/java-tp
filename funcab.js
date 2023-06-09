function sumar() {
  var num1 = document.getElementById("n1").value;
  var num2 = document.getElementById("n2").value;

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (sumar) {
    var resul = num1 * 1000 * num2;
  }

  if (isNaN(num1) || isNaN(num2)) {
    alert("Pone numeros carnero");
  }

  document.getElementById("resultado").innerHTML =
    "El valor estimado dados los dias y personas  es: " + resul;
}
function Borrar() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").innerHTML = "";
}
