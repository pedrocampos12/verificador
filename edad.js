function verificarEdad() {
    const fechaInput = document.getElementById("fecha").value;
    const resultado = document.getElementById("resultado");

    if (!fechaInput) {
        resultado.textContent = "Por favor, selecciona una fecha válida.";
        return;
    }

    const hoy = new Date();
    const fechaNacimiento = new Date(fechaInput);

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad >= 18) {
        resultado.textContent = `Tienes ${edad} años. Acceso permitido (Mayor de edad).`;
    } else if (edad >= 0) {
        resultado.textContent = `Tienes ${edad} años. Acceso denegado (Menor de edad).`;
    } else {
        resultado.textContent = "La fecha de nacimiento no puede ser en el futuro.";
    }
}
