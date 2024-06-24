// Definir estilos para los divs
const divs = [
    { id: 'blue', color: 'blue' },
    { id: 'red', color: 'red' },
    { id: 'green', color: 'green' },
    { id: 'yellow', color: 'yellow' },
    { id: 'key', color: 'white', border: '1px solid black' }
];

divs.forEach(div => {
    const element = document.getElementById(div.id);
    element.style.width = '200px';
    element.style.height = '200px';
    element.style.backgroundColor = div.color;
    if (div.border) {
        element.style.border = div.border;
    }
});

// Cambiar el color de los divs al hacer click
function pintar(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('blue').addEventListener('click', pintar);
document.getElementById('red').addEventListener('click', pintar);
document.getElementById('green').addEventListener('click', pintar);
document.getElementById('yellow').addEventListener('click', pintar);

// Variable global para guardar el color
let globalColor;

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    if (event.key === 'a') {
        globalColor = 'pink';
        keyDiv.style.backgroundColor = globalColor;
    } else if (event.key === 's') {
        globalColor = 'orange';
        keyDiv.style.backgroundColor = globalColor;
    } else if (event.key === 'd') {
        globalColor = 'lightblue';
        keyDiv.style.backgroundColor = globalColor;
    } else if (event.key === 'q') {
        createColoredDiv('purple');
    } else if (event.key === 'w') {
        createColoredDiv('gray');
    } else if (event.key === 'e') {
        createColoredDiv('brown');
    }
});

// Función para crear un nuevo div con el color especificado
function createColoredDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '10px';
    document.body.appendChild(newDiv);
}
