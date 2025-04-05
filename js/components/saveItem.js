// Selecciona el ícono y el contenedor del mensaje usando sus IDs
const heroforicon = document.getElementById('iconSave'); // Selecciona el ícono aquí (ID icon)
const message = document.getElementById('messageSave'); // <--- Cambia el ID aquí

// Agrega un evento de clic al ícono 
heroforicon.addEventListener('click', () => { // Agrega un evento de clic al ícono
    // Alterna la clase 'selected' en el ícono y el contenedor del mensaje
    heroforicon.classList.toggle('selected'); // Agrega o elimina la clase 'selected' al ícono

    // Verifica si el ícono tiene la clase 'selected'
    if (heroforicon.classList.contains('selected')) { // Si tiene la clase 'selected' / If this had 'selected' class...
        // Muestra el mensaje de selección / deselección
        message.textContent = '¡El producto ha sido guardado con exito!'; // Cambia el texto del mensaje / Change the message text
        message.style.display = 'block'; // Muestra el mensaje / Show the message
    } else {
        // Oculta el mensaje si se deselecciona / Hide Message If Deselected
        message.textContent = ''; // Elimina el texto del mensaje / Remove the message text
        message.style.display = 'none'; // Oculta el mensaje / Hide the message
    }
});