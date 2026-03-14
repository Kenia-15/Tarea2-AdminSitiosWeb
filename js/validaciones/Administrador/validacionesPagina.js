function limpiarCampos(seccion) {
    if (seccion == 'inicio') {
        tituloInicio.value = "";
        descripcionInicio.value = "";
    } else if (seccion == 'blog') {
        titulo.value = "";
        categoria.value = "";
        contenido.value = "";
    } else if (seccion == 'servicios') {
        nombre.value = "";
        contenido.value = "";
    } else if (seccion == 'promociones') {
        evento.value = "";
        descuento.value = "";
        estadoPromo.value = "";
    } 
}

function validarCampos(seccion) {
    /*Inicio*/
    if (seccion == 'inicio') {
        var tituloInicio, descripcionInicio;

        tituloInicio = document.getElementById("tituloInicio").value;
        descripcionInicio = document.getElementById("descripcionInicio").value;

        if (tituloInicio == "" || descripcionInicio == "") {
            alert("Debe completar todos los campos.");
            return false;
        } else {
            alert("!Datos guardados con éxito¡");
            limpiarCampos("inicio");
        }
    }

    /*Blog*/
    if (seccion == 'blog') {
        var titulo, categoria, contenido;

        titulo = document.getElementById("titulo").value;
        categoria = document.getElementById("categoria").value;
        contenido = document.getElementById("contenido").value;

        if (titulo == "" || categoria == "" || contenido == "") {
            alert("Debe completar todos los campos.");
            return false;
        } else {
            alert("!Datos guardados con éxito¡");
            limpiarCampos("blog");
            modal.close();
        }
    }

    /*Servicios*/
    if (seccion == 'servicios') {
        var nombre, contenido;

        nombre = document.getElementById("nombre").value;
        contenido = document.getElementById("contenido").value;

        if (nombre == "" || contenido == "") {
            alert("Debe completar todos los campos.");
            return false;
        } else {
            alert("!Datos guardados con éxito¡");
            limpiarCampos("servicios");
            modal.close();
        }
    }

    /*promociones*/
    if (seccion == 'promociones') {
        var evento, descuento, estadoPromo;

        evento = document.getElementById("evento").value;
        descuento = document.getElementById("descuento").value;
        estadoPromo = document.getElementById("estadoPromo").value;

        if (evento == "" || descuento == "" || estadoPromo == "") {
            alert("Debe completar todos los campos.");
            return false;
        } else {
            alert("!Datos guardados con éxito¡");
            limpiarCampos("promociones");
            modal.close();
        }
    }   
}



