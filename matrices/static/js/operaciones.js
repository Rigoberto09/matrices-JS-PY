function op() {
    // Obtener los valores seleccionados en los input
    var filasA = parseInt(document.getElementById("filasA").value);
    var columnasA = parseInt(document.getElementById("columnasA").value);
    
    // Crear una matriz para almacenar los valores de los inputs
    const matrizValores = new Array(filasA);
    for (var i = 0; i < filasA; i++) {
        alert("mensake");
      matrizValores[i] = new Array(columnasA);
    }
    
    // Agregar filasA y columnasA a la tabla
    for (var i = 0; i < filasA; i++) {
      var fila = tabla.insertRow(i);
    
      for (var j = 0; j < columnasA; j++) {
        var celda = fila.insertCell(j);
        var input = document.createElement("input");
        input.type = "number";
        input.name = "Ma";
        input.id = "Ma" + i + "_" + j;
        celda.appendChild(input);
        input.classList.add("inpuT");
        // Agregar el evento oninput para actualizar la matriz
        input.oninput = function() {
          matrizValores[i][j] = this.value;
          console.log(matrizValores);
        };
        alert("mensake");
      }
    }
    alert("mensaje");
    

}