/* MODAL AGREGAR */
const bntAbrirModal = document.querySelector('#btn-abrir-modal');

const bntCerrarModal = document.querySelector('#btn-cerrar-modal');

const modal = document.querySelector('#modal');

bntAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

bntCerrarModal.addEventListener("click",()=>{
    modal.close();
})

/* MODAL EDITAR */
const bntAbrirModalEditar = document.querySelectorAll('.btn-editar');

const modalEditar = document.querySelector('#modal');

bntAbrirModalEditar.forEach(x => {
    x.addEventListener('click', ()=>{
        modalEditar.showModal();
    })
})