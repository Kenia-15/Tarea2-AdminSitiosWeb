function limpiarCampos() {
    evento.value = "";
    estado.value = "";
    descripcion.value = "";
}

function validarCampos() {
    var evento, estado, descripcion;

    evento = document.getElementById("evento").value;
    estado = document.getElementById("estado").value;
    descripcion = document.getElementById("descripcion").value;

    if (evento == "" || estado == "" || descripcion == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (evento.length > 50) {
        alert("El evento supera los 50 caracteres.");
        document.getElementById("evento").focus();
        return false;
    } else if (estado != 'Activo' || estado != 'Inactivo') {
        alert("El estado " +estado+ " es incorrecto");
        document.getElementById("estado").focus();
        return false;
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}

