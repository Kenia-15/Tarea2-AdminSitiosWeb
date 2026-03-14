function limpiarCampos() {
    evento.value = "";
    descuento.value = "";
    estadoPromo.value = "";
}

function validarCampos() {
    var evento, descuento, estadoPromo;

    evento = document.getElementById("evento").value;
    descuento = document.getElementById("descuento").value;
    estadoPromo = document.getElementById("estadoPromo").value;

    if (evento == "" || descuento == "" || estadoPromo == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}