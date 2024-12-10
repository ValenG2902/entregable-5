document.getElementById('contactForm').addEventListener('submit'), function(event) {
    const name  = document.getElementById('name').value.trim.trim();
    const reason  = document.getElementById('reason').value.trim.trim();
    const email  = document.getElementById('email').value.trim.trim();

    if (!name || !reason || !email) {
        alert ('Por favor, complete todos los campos.')
        event.preventDefault();
    } else {
        alert ('Formulario enviado correctamente.');
    }
}