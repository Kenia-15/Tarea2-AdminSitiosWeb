function limpiarCampos() {
    nombre.value = "";
    apellidos.value = "";
    email.value = "";
    password.value = "";
}

function validarCampos() {
    var nombre, apellidos, email, password, rol;

    var expresion;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    expresion = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    if (nombre == "" || apellidos == "" || email == "" || password == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre supera los 30 caracteres.");
        document.getElementById("nombre").focus();
        return false;
    } else if (apellidos.length > 50) {
        alert("Los apellidos superan los 50 carácteres de límite.");
        document.getElementById("apellidos").focus();
        return false;
    } else if (!expresion.test(email)) {
        alert("El formato del email es incorrecto.");
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
        return false;
    } else if (password.length != 6) {
        alert("La contraseña debe contar con 6 dígitos.");
        document.getElementById("password").focus();
        return false;
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
    }
}

