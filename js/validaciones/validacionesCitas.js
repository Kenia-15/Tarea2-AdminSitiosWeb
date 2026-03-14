function limpiarCampos() {
    asunto.value = "";
    ubicacionCita.value = ""; 
    detalle.value = "";
}

function validarCampos() {
    var asunto, ubicacionCita, detalle;

    asunto = document.getElementById("asunto").value;
    ubicacionCita = document.getElementById("ubicacionCita").value;
    detalle = document.getElementById("detalle").value;

    if (asunto == "" || ubicacionCita == "" || detalle == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (detalle.length > 250) {
        alert("El detalle supera los 250 caracteres.");
        document.getElementById("detalle").focus();
        return false;
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}

