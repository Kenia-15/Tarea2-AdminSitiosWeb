
/*Se selecciona la clase que representa el submenú*/
(function () {
    const listaMenu = document.querySelectorAll('.nav__div--submenu');

    listaMenu.forEach(elementoMenu => {
        elementoMenu.addEventListener('click', () => {            

            elementoMenu.classList.toggle('arrow');

            let height = 0;
            let menu = elementoMenu.nextElementSibling;

            if (menu.clientHeight == "0") {
                height = menu.scrollHeight;
            }

            menu.style.height = `${height}px`;
        });
    });
})();

function CargarImagen(nombreImagen) {
    $('#mostrar__imagen').html(nombreImagen);
}



