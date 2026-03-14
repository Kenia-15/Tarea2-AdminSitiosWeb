function limpiarCampos() {
    email.value = "";
    password.value = "";
}

function validarCampos() {
    var email, password;
    var userAdmin = 'admin@gmail.com', userCoordinador = 'coordinador@gmail.com', userCliente = 'cliente@gmail.com';
    var passwordLogin = '123456'; 

    var expresion;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    expresion = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

    if (email == "" || password == "") {
        alert("Debe completar todos los campos.");
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
        if ((email == userAdmin) && (password == passwordLogin)) {
            limpiarCampos()
            window.location.href = '/views/Administrador/administrador.html';
        } else if ((email == userCoordinador) && (password == passwordLogin)) {
            limpiarCampos()
            window.location.href = '/views/Coordinador/coordinador.html';
        } else if ((email == userCliente) && (password == passwordLogin)) {
            limpiarCampos()
            window.location.href = '/views/Cliente/cliente.html';
        } else {
            alert("Usuario y contraseña incorrectos.");
        }
    }
}


