$(document).ready(()=>{
    /* Sección Administrador*/
    $('#crear-cuenta').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/crearCuenta.html').show();
    });

    $('#perfil').click(function() {
        $('#iframe__menu').attr('src','../perfil.html').show();
    });

    $('#directorio').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/directorio.html').show();
    });

    $('#eventos').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/eventos.html').show();
    });

    $('#metodoPago').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/metodoPago.html').show();
    });

    $('#ofertas').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/ofertas.html').show();
    });

    $('#reservas').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/reservas.html').show();
    });

    $('#servicios').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/servicios.html').show();
    });

    $('#citas').click(function() {
        $('#iframe__menu').attr('src','../../views/Cliente/citas.html').show();
    });

    $('#pg_blog').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/pg_blog.html').show();
    });
    
    $('#pg_galeria').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/pg_galeria.html').show();
    });
    
    $('#pg_inicio').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/pg_inicio.html').show();
    });
    
    $('#pg_opiniones').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/pg_opiniones.html').show();
    });
    
    $('#pg_promociones').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/pg_promociones.html').show();
    });
    
    $('#pg_servicios').click(function() {
        $('#iframe__menu').attr('src','../../views/Administrador/pg_servicios.html').show();
    });

    /* Sección Cliente */
    $('#cotizaciones-cliente').click(function() {
        $('#iframe__menu').attr('src','../../views/Cliente/cotizaciones.html').show();
    });

    $('#historial-cliente').click(function() {
        $('#iframe__menu').attr('src','../../views/Cliente/historial.html').show();
    });

    $('#reservas-cliente').click(function() {
        $('#iframe__menu').attr('src','../../views/Cliente/reservas.html').show();
    });

    /* Sección Coordinador */
    $('#citas-coordinador').click(function() {
        $('#iframe__menu').attr('src','../../views/Coordinador/citas.html').show();
    });

    $('#proveedores').click(function() {
        $('#iframe__menu').attr('src','../../views/Coordinador/proveedores.html').show();
    });

    $('#reportes').click(function() {
        $('#iframe__menu').attr('src','../../views/Coordinador/reportes.html').show();
    });

    $('#consultas').click(function() {
        $('#iframe__menu').attr('src','../../views/Coordinador/consultas.html').show();
    });

    $('#cotizaciones-coordinador').click(function() {
        $('#iframe__menu').attr('src','../../views/Coordinador/cotizaciones.html').show();
    });

    $('#promociones-coordinador').click(function() {
        $('#iframe__menu').attr('src','../../views/Coordinador/promociones.html').show();
    });

    $('#reservas-coordinador').click(function() {
        $('#iframe__menu').attr('src','../../views/Coordinador/reservas.html').show();
    });

});