const fashionList = [
    "Camisetas",
    "Pantalón",
    "Vestido",
    "Zapatos",
    "Vestidos",
    "Vaqueros",
    "Guantes",
];

const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");
function selectInput(item) {
    inputBox.value = item.innerText; // Actualizar el valor del campo de búsqueda
    resultBox.innerHTML = ""; // Limpiar los resultados
}

const displayResults = function (result) {
    const resultHTML = result.map(function (item) {
        return `<li onclick="selectInput(this)">
            ${item}
        </li>`;
    });

    // Mostrar los resultados en el contenedor
    resultBox.innerHTML = '<ul>' + resultHTML.join("") + '</ul>';
};

// Evento de teclado para filtrar resultados
inputBox.onkeyup = function (e) {
    let result = [];
    const input = inputBox.value.toLowerCase(); // Obtener el texto ingresado en minúsculas

    if (input.length === 0) {
        resultBox.innerHTML = ""; // Limpiar resultados si el campo está vacío
    }

    if (input.length) {
        // Filtrar la lista de moda para encontrar coincidencias
        result = fashionList.filter((item) => {
            return item.toLowerCase().includes(input);
        });

        // Mostrar los resultados filtrados
        displayResults(result);
    }
};