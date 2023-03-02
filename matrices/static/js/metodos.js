// Seleccionar el elemento select
var selectFilasM = document.getElementById("filasM");
// Generar los números y agregarlos como opciones al select
for (var i = 1; i <= 10; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectFilasM.add(option);
}

// Seleccionar el elemento select
var selectColumnasM = document.getElementById("columnasM");
// Generar los números y agregarlos como opciones al select
for (var i = 1; i <= 10; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectColumnasM.add(option);
}

//creacion de la matris A
function generarMatrisM() {
  //alert("Hola, mundo!");

  // Obtener los valores seleccionados en los select
  var filas = parseInt(document.getElementById("filasM").value);
  var columnas = parseInt(document.getElementById("columnasM").value);

  // Seleccionar el elemento div donde se agregarán los inputs
  var div = document.getElementById("Mm");

  // Eliminar cualquier input existente en el div
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Crear una matriz para almacenar los valores de los inputs
  var valores = [];

  // Crear una tabla para mostrar los inputs
  var tabla = document.createElement("table");

  // Agregar filas y columnas a la tabla
  for (var i = 0; i < filas; i++) {
    var fila = tabla.insertRow(i);

    for (var j = 0; j < columnas; j++) {
      var celda = fila.insertCell(j);
      var input = document.createElement("input");
      input.type = "text";
      input.name = "Mm";
      input.id = "Mm" + i + "_" + j;
      celda.appendChild(input);
      input.classList.add("inpuT");
      // Agregar el valor del input a la matriz de valores
      valores.push(input.value);

      // Agregar un evento oninput al input para actualizar la tabla
      input.oninput = actualizarTabla;
    }
  }

  // Agregar la tabla al div
  div.appendChild(tabla);
}

function actualizarTabla() {
  // Obtener la tabla y la matriz de valores
  var tabla = document.getElementById("tablaM");
  var valores = [];

  // Recorrer todos los inputs y actualizar la matriz de valores
  var filas = tabla.rows.length;
  var columnas = tabla.rows[0].cells.length;

  for (var i = 0; i < filas; i++) {
    var filaValores = [];

    for (var j = 0; j < columnas; j++) {
      var input = tabla.rows[i].cells[j].getElementsByTagName("input")[0];
      filaValores.push(input.value);
    }

    valores.push(filaValores);
  }
  // Recorrer todas las celdas de la tabla y actualizar sus valores
  for (var i = 0; i < filas; i++) {
    var fila = tabla.rows[i];

    for (var j = 0; j < fila.cells.length; j++) {
      var celda = fila.cells[j];
      var valor = valores[i][j];
      celda.innerHTML = valor;
    }
  }
}