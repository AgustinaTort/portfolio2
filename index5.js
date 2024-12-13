let isCartOpen = false;

// Función para alternar el estado del carrito
function toggleCart() {
    const cart = document.getElementById('cart');
    isCartOpen = !isCartOpen;
    if (isCartOpen) {
        cart.classList.add('open');
        cart.classList.remove('closed');
    } else {
        cart.classList.add('closed');
        cart.classList.remove('open');
    }
}

// Agregar el botón de cerrar carrito
document.querySelector('.close-cart').addEventListener('click', toggleCart);
