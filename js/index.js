/**
 * Función para manejar los botones de la landing page.
 * Actualmente lanza una alerta para simular la acción, 
 * pero acá se puede integrar la lógica para abrir un modal, 
 * redirigir a un formulario o enviar un evento a un chatbot.
 */
function sendPrompt(actionText) {
    console.log("Acción solicitada: " + actionText);
    alert("Pronto serás redirigido para: " + actionText);
}

// --- LÓGICA DEL MENÚ HAMBURGUESA ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
        
        // Alterna el icono de menú a "X" (cerrar)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ti-menu-2');
            icon.classList.add('ti-x');
        } else {
            icon.classList.remove('ti-x');
            icon.classList.add('ti-menu-2');
        }
    });
}