import { mostrarAlerta, validar } from "./funciones.js";
import { nuevoCliente } from "./API.js";

// Para hacer las funciones mas locales
(function () {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    console.log(nombre, email, telefono, empresa);

    // Es lo mismo que tener esto - nombre:nombre
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    console.log(cliente);

    if (validar(cliente)) {
      // Mostrar mensaje
      console.log(!cliente);
      mostrarAlerta("Todos los campos son obligartorios");
      return;
    }

    nuevoCliente(cliente);
  }
})();
