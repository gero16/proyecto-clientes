// json-server --watch db.json --port 4000

const url = "http://localhost:4000/clientes";

// Cuando se crea un nuevo cliente
export const nuevoCliente = async (cliente) => {
  console.log("hola");
  // Fetch por defecto es como un get, como queremos mandar info usamos POST
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente), // Contenido de la peticion post hacia la url
      headers: { "Content-Type": "application/json" }, // info de que tipo de datos enviamos
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

// Obtiene todos los clientes
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    console.log(clientes);
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

// Eliminar cliente
export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// Obtiene un cliente por su ID
export const obtenerCliente = async (id) => {
  try {
    const resultado = await fetch(`${url}/${id}`);
    const cliente = await resultado.json();
    // tenia console.log(cliente) - y por eso me decia undefined, faltaba el return
    return cliente;
  } catch (error) {
    console.log(error);
  }
};

// Actuaslizar registro
export const editarCliente = async (cliente) => {
  console.log(cliente);
  try {
    fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
