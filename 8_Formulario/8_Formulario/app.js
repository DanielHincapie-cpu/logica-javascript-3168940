const form = document.getElementById('miFormulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('nombre');
    const colorSelect = document.getElementById('opcion');
    const animalRadio = document.querySelector('input[name="radioOpcion"]:checked');
    const confirmationMessage = document.getElementById('mensajeConfirmacion');
    const userPage = document.getElementById('userPage');
    const imgEquipo = document.getElementById('img-equipo');
    const textsaludo = document.getElementById('text-saludo');
    const Regresar = document.getElementById('Regresar');

    userPage.style.display = 'none';
    Regresar.style.display = 'block';

    if (!animalRadio) {
        alert('Por favor, selecciona un animal.');
        return;
    }

    const userData = {
        name: nameInput.value,
        color: colorSelect.value,
        equipo: animalRadio.value
    };

    console.log(userData);

    // Muestra el mensaje de confirmación
    confirmationMessage.textContent = '¡Formulario enviado con éxito!';
    confirmationMessage.style.display = 'block';
    userPage.style.display = 'block';
    form.style.display = 'none';
    textsaludo.textContent = `Hola ${userData.name}`;
    equipoUsuario.textContent = userData.equipo;
    colorUsuario.textContent = userData.color;
    // Opcional: Limpia los campos del formulario
    form.reset();
});

Regresar.addEventListener('click', () => {
    userPage.style.display = 'none';
    form.style.display = 'block';
    confirmationMessage.style.display = 'none';
    document.body.style.backgroundColor = 'white';
    Regresar.style.display = 'none'; 
 }); 

