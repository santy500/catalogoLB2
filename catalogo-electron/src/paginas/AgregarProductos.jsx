import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AgregarProducto = () => {
  const [codigo, setCodigo] = useState("");
  const [marca, setMarca] = useState("");
  const [talles, setTalles] = useState("");
  const [colores, setColores] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la validación para evitar agregar productos vacíos
    if (!codigo || !marca || !talles || !colores || !imagen) {
      setError("Por favor, complete todos los campos :)");
      return;
    }

    const nuevoProducto = {
      codigo,
      marca,
      talles,
      colores,
      imagen,
    };

    // Enviar la solicitud POST a la API REST de Flask
    fetch("http://localhost:5000/api/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProducto),
    })
    .then((response) => {
        if (response.status === 201) {
          setCodigo("");
          setMarca("");
          setTalles("");
          setColores("");
          setImagen("");
          setError("");
          setMensaje("Producto guardado con éxito")
          //alert("Producto guardado con éxito");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.error) {
          setError(data.error);
        }
      })
      .catch((error) => console.error("Error al agregar el producto:", error));
  };
  // Resto del componente...

  return (
    <div>
      <h2>Agregar Producto</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {mensaje && <div style={{ color: "green" }}>{mensaje}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Código:</label>
          <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        </div>
        <div>
          <label>Marca:</label>
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </div>
        <div>
          <label>Talles (separados por comas):</label>
          <input type="text" value={talles} onChange={(e) => setTalles(e.target.value)} />
        </div>
        <div>
          <label>Colores (separados por comas):</label>
          <input type="text" value={colores} onChange={(e) => setColores(e.target.value)} />
        </div>
        <div>
          <label>Imagen:</label>
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        </div>
        <NavLink to="/crud">
          <button>Atras</button>
        </NavLink>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
