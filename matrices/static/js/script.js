//creacion de la matris A
function generarMatrisA() {
  // Obtener los valores seleccionados en los select
  var filas = parseInt(document.getElementById("filasA").value);
  var columnas = parseInt(document.getElementById("columnasA").value);

  // Seleccionar el elemento div donde se agregarán los inputs
  var div = document.getElementById("Ma");

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
      input.type = "number";
      input.name = "Ma";
      input.id = "Ma" + i + "_" + j;
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
  var tabla = document.getElementById("tablaA");
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


//creacion de la matris A
function generarMatrisB() {
  // Obtener los valores seleccionados en los select
  var filas = parseInt(document.getElementById("filasB").value);
  var columnas = parseInt(document.getElementById("columnasB").value);

  // Seleccionar el elemento div donde se agregarán los inputs
  var div = document.getElementById("Mb");

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
      input.name = "Ma";
      input.id = "Ma" + i + "_" + j;
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
  var tabla = document.getElementById("tablaA");
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