function limpiarCampos() {
    nombre.value = "";
    apellidos.value = "";
    telefono.value = "";
    eventos.value = "";
    fecha.value = "";
    hora.value = "";
    ubicacion.value = "";
    cantPersonas.value = "";
    detalles.value = "";
    monto.value = "";
}

function validarCampos() {
    var nombre, apellidos, telefono, eventos, fecha, hora, ubicacion, cantPersonas, detalles, monto;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    telefono = document.getElementById("telefono").value;
    eventos = document.getElementById("eventos").value;
    fecha = document.getElementById("fecha").value;
    hora = document.getElementById("hora").value;
    ubicacion = document.getElementById("ubicacion").value;
    cantPersonas = document.getElementById("cantPersonas").value;
    detalles = document.getElementById("detalles").value;
    monto = document.getElementById("monto").value;

    if (nombre == "" || apellidos == "" || telefono == "" || eventos == "" || fecha == "" || hora == "" || ubicacion == "" || cantPersonas == "" || detalles == "" || monto == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre supera los 30 caracteres.");
        document.getElementById("nombre").focus();
        return false;
    } else if (apellidos.length > 50) {
        alert("Los apellidos superan los 50 caracteres.");
        document.getElementById("apellidos").focus();
        return false;
    } else if (detalles.length > 500) {
        alert("El detalle superan los 500 caracteres.");
        document.getElementById("detalles").focus();
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}

function validarCamposInvitados() {
    var nombreInvitado, telInvitado, emailInvitado, cantAcomp,cantAdultos, cantNin;

    nombreInvitado = document.getElementById("nombreInvitado").value;
    telInvitado = document.getElementById("telInvitado").value;
    emailInvitado = document.getElementById("emailInvitado").value;
    cantAcomp = document.getElementById("cantAcomp").value;
    cantAdultos = document.getElementById("cantAdultos").value;
    cantNin = document.getElementById("cantNin").value;

    if (nombreInvitado == "" || telInvitado == "" || emailInvitado == "" || cantAcomp == "" || cantAdultos == "" || cantNin == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}