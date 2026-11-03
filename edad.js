function verificarEdad() {
    // Declaramos la variable para recoger el valor del input
    let edadInput = document.getElementById("edad").value;

    // Validamos si el input está vacío
    if (edadInput === "") {
        alert("Por favor, ingresa tu edad.");
        return;
    }

    // Convertimos el valor a número
    let edad = parseFloat(edadInput);

    // Comprobamos que sea un número válido y mayor o igual a cero
    if (isNaN(edad) || edad < 0) {
        alert("Ingresa una edad válida mayor o igual a cero.");
        return;
    }

    // Evaluamos si es mayor o menor de edad
    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}