import { editarCliente, obtenerCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function () {
  // Campos del formulario
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const telefonoInput = document.querySelector("#telefono");
  const idInput = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    // Parametros url
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get("id"));
    const cliente = await obtenerCliente(idCliente);
    console.log(cliente);

    mostrarCliente(cliente);
    // - sin el await diria - Promise {<pending>}
    // Se usa await para que se termine de ejecutar obtenerCliente() y luego siga

    // Submit al formulario
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);
  });

  function mostrarCliente(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;
    idInput.value = id;
  }

  function validarCliente(e) {
    e.preventDefault();

    // Lo mismo que en nuevo cliente
    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: parseInt(idInput.value),
    };

    console.log(cliente);

    if (validar(cliente)) {
      // Mostrar mensaje
      console.log(!cliente);
      mostrarAlerta("Todos los campos son obligartorios");
      return;
    }

    editarCliente(cliente);
  }
})();
