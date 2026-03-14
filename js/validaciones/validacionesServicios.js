function limpiarCampos() {
    servicio.value = "";
    estado.value = "";
    descripcion.value = "";
}

function validarCampos() {
    var servicio, estado, descripcion;
    
    servicio = document.getElementById("servicio").value;
    estado = document.getElementById("estado").value;
    descripcion = document.getElementById("descripcion").value;
    if (servicio == "" || estado == "" || descripcion == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (servicio.length > 50) {
        alert("El servicio supera los 50 caracteres.");
        document.getElementById("servicio").focus();
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

