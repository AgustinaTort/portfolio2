// Obtener el icono del menú hamburguesa y el contenedor de la barra de navegación
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Agregar un listener para el clic en el icono del menú hamburguesa
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' en el contenedor de la barra de navegación
    navbar.classList.toggle('active');
});
