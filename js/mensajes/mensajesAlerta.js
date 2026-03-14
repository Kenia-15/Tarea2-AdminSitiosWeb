function eliminarCuenta() {
    var confirmacion = window.confirm('¿Estas seguro que deseas eliminar tu cuenta?');
    if (confirmacion === true) {
        window.alert('Cuenta eliminada correctamente.');
    } else {
        window.alert('Proceso cancelado');
    }
}


