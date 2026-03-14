function limpiarCampos() {
    reportes.value = "";
    fechaIni.value = "";
    fechaFin.value = "";
}

function validarCampos() {
    var reportes, fechaIni, fechaFin;

    reportes = document.getElementById("reportes").value;
    fechaIni = document.getElementById("fechaIni").value;
    fechaFin = document.getElementById("fechaFin").value;

    if (reportes == "" || fechaIni == "" || fechaFin == "") {
        alert("Debe completar todos los campos.");
        return false;
    } else if (fechaIni > fechaFin) {
        alert("La fecha de inicio no puede ser mayor a la de término.");
    } else {
        alert("!Datos guardados con éxito¡");
        limpiarCampos();
        modal.close();
    }
}
