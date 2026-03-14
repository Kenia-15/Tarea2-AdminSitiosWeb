function limpiarCampos() {
    evento.value = "";
    telefono.value = "";
    ubicacionCotizacion.value = "";
    cantPersonas.value = "";
    detalle.value = "";
}

function validarCampos() {
    var evento, nombre, apellidos, telefono, ubicacionCotizacion, cantPersonas, detalle;

    evento = document.getElementById("evento").value;
    telefono = document.getElementById("telefono").value;
    ubicacionCotizacion = document.getElementById("ubicacionCotizacion").value;
    cantPersonas = document.getElementById("cantPersonas").value;
    detalle = document.getElementById("detalle").value;

    if (evento == "" || telefono == "" || ubicacionCotizacion == "" || cantPersonas == "" || detalle == "" ) {
        alert("Debe completar todos los campos.");
        return false;
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}