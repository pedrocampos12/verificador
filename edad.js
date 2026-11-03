function verificarEdad() {
    // Obtener elemento HTML y recuperar el valor[span_0](start_span)[span_0](end_span)
    let elementoInput = document.getElementById("edadInput");[span_1](start_span)[span_1](end_span)
    let valorIngresado = elementoInput.value;[span_2](start_span)[span_2](end_span)

    // Verificar que el campo no esté vacío[span_3](start_span)[span_3](end_span)
    if (valorIngresado === "") {
        alert("Por favor, ingresa tu edad.");[span_4](start_span)[span_4](end_span)
        return;
    }

    let edad = Number(valorIngresado);

    // Comprobar que sea un número válido y mayor o igual a cero[span_5](start_span)[span_5](end_span)
    if (isNaN(edad) || edad < 0) {
        alert("Ingresa un número válido mayor o igual a cero.");[span_6](start_span)[span_6](end_span)
    } else if (edad >= 18) {
        alert("Eres mayor de edad");[span_7](start_span)[span_7](end_span)
    } else {
        alert("Eres menor de edad");[span_8](start_span)[span_8](end_span)
    }
}
