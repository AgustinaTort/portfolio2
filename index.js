// Mostrar mensaje de bienvenida con nombre
const nombre = prompt("¿Cómo te llamas?");
if (nombre) {
    alert(`Hola ${nombre}! Bienvenido a mi portfolio!`);
} else {
    alert("Hola! Bienvenido a mi portfolio!");
}

// Seleccionar el botón hamburguesa y el menú
const checkbtn = document.querySelector('.checkbtn');
const menu = document.querySelector('.menu');

// Verificar si los elementos existen antes de añadir el evento
if (checkbtn && menu) {
    checkbtn.addEventListener('click', () => {
        // Alternar la visibilidad del menú
        menu.classList.toggle('active');
    });
}



