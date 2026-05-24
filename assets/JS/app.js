// Asegurarnos de que el HTML haya cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Capturamos el botón desde el HTML usando su ID
    const btnUp = document.getElementById('btn-up');

    // 2. Evento para mostrar u ocultar el botón dependiendo del scroll
    window.addEventListener('scroll', () => {
        // Si el usuario baja más de 300 píxeles, mostramos el botón
        if (window.scrollY > 300) {
            btnUp.style.display = 'block';
        } else {
            // Si está arriba, lo ocultamos
            btnUp.style.display = 'none';
        }
    });

    // 3. Evento de clic para ejecutar el Smooth Scroll
    btnUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Aquí está la magia del desplazamiento suave
        });
    });

});