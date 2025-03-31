// Al abrir el modal
function abrirModal() {
    const modal = document.getElementById('exampleModal');
    modal.style.display = 'block';
    modal.focus(); // Foco programático aquí
  }



const modal = document.getElementById('exampleModal');

modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarModal(); // Función que oculta el modal
    }
});


function cerrarModal() {
    modal.style.display = 'none';
    // Devuelve el foco al botón que abrió el modal
    document.querySelector('[data-target="#exampleModal"]').focus();
  }


