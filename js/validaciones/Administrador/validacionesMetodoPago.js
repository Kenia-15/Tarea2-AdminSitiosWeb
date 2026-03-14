function limpiarCampos() {
    metodo.value = "";
}

function validarCampos() {
    var metodo;

    metodo = document.getElementById("metodo").value;

    if (metodo == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}
