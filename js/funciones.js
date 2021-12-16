export function mostrarAlerta(mensaje) {
  const alerta = document.querySelector(".bg-red-100");

  // Si no existe alerta es porque hay que generarla
  if (!alerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = ` 
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
    const formulario = document.querySelector("#formulario");
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

// Validar que no hayan campos vacios
export function validar(obj) {
  return !Object.values(obj).every((input) => input !== "");
}
// Si exporto function validar() hacia editarcliente.js desde nuevocliente.js
// que ahi estaba en un principio me da problemas
