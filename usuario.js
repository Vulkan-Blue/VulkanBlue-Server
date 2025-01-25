// Variable para almacenar el contenido del archivo
let fileContent = "";

// Función para crear una etiqueta <p> con el texto ingresado
document.getElementById('create-button').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const textContainer = document.getElementById('text-container');

    // Elimina cualquier etiqueta <p> existente
    textContainer.innerHTML = '';

    // Crea una nueva etiqueta <p> con el texto ingresado
    const p = document.createElement('p');
    p.id = 'text-paragraph';
    p.textContent = textInput;
    textContainer.appendChild(p);

    // Actualiza el contenido del archivo
    fileContent += textInput + "\n";
});

// Función para descargar el contenido del archivo
document.getElementById('download-button').addEventListener('click', function() {
    if (fileContent) {
        const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'archivo.txt');
    } else {
        alert('No hay texto para descargar.');
    }
});
