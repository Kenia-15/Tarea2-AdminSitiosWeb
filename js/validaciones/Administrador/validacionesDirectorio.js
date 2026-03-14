function limpiarCampos() {
    nombre.value = "";
    puesto.value = ""; 
    estado.value = "";
    rol.value = "";
}

function validarCampos() {
    var nombre, puesto, estado, rol;

    nombre = document.getElementById("nombre").value;
    puesto = document.getElementById("puesto").value;
    estado = document.getElementById("estado").value;
    rol = document.getElementById("rol").value;

    if (nombre == "" || puesto == "" || estado == "" || rol == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre supera los 30 caracteres.");
        document.getElementById("nombre").focus();
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

