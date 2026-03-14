function limpiarCampos() {
    nombre.value = "";
    email.value = "";
    telefono.value = "";
    categoria.value = ""; 
    estado.value = "";
}

function validarCampos() {
    var nombre, email, telefono, categoria, estado;

    var expresion;

    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    categoria = document.getElementById("categoria").value;
    estado = document.getElementById("estado").value;

    expresion = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    if (nombre == "" || email == "" || telefono == "" || categoria == "" || estado == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (nombre.length > 50) {
        alert("El nombre del proveedor supera los 50 caracteres.");
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

