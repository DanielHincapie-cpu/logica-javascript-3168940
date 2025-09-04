const form = document.getElementById('miFormulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('nombre');
    const colorSelect = document.getElementById('opcion');
    const animalRadio = document.querySelector('input[name="radioOpcion"]:checked');
    const confirmationMessage = document.getElementById('mensajeConfirmacion');

    if (!animalRadio) {
        alert('Por favor, selecciona un animal.');
        return;
    }

    const userData = {
        name: nameInput.value,
        color: colorSelect.value,
        animal: animalRadio.value
    };

    console.log(userData);

    // Muestra el mensaje de confirmación
    confirmationMessage.textContent = '¡Formulario enviado con éxito!';
    confirmationMessage.style.display = 'block';

    // Opcional: Limpia los campos del formulario
    form.reset();
});