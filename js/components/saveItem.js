// Selecciona el ícono y el contenedor del mensaje usando sus IDs
const heroforicon = document.getElementById('iconSave');
const message = document.getElementById('messageSave');

// Agrega un evento de clic al ícono
heroforicon.addEventListener('click', () => {
    // Alterna la clase 'selected' en el ícono
    heroforicon.classList.toggle('selected');

    // Verifica si el ícono tiene la clase 'selected'
    if (heroforicon.classList.contains('selected')) {
        // Muestra el mensaje de selección
        message.textContent = '¡El producto ha sido guardado con exito!';
        message.style.display = 'block';
    } else {
        // Oculta el mensaje si se deselecciona
        message.textContent = '';
        message.style.display = 'none';
    }
});