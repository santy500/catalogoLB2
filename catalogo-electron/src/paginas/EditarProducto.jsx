import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const EditarProducto = () => {
  const params = useParams();
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [codigo, setCodigo] = useState("");
  const [marca, setMarca] = useState("");
  const [talles, setTalles] = useState("");
  const [colores, setColores] = useState("");
  const [imagen, setImagen] = useState("");
  const [error , setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errorEliminar , setErrorEliminar] = useState("");
  const [mensajeEliminar, setMensajeEliminar] = useState("");
  // Obtener la lista de productos por marca
  useEffect(() => {
    fetch("http://localhost:5000/api/productos/"+params.marca)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => console.error("Error al obtener la lista de productos:", error));
  }, []);

  // Manejar la selección de un producto
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCodigo(product.codigo);
    setMarca(product.marca);
    setTalles(product.talles);
    setColores(product.colores);
    setImagen(product.imagen);
  };

  // Manejar el envío del formulario de edición
  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la validación para evitar agregar productos vacíos
    if (!codigo || !marca || !talles || !colores || !imagen) {
      setMensaje("")
      setError("Por favor, complete todos los campos :)");
      return;
    }

    const productoActualizado = {
      ...selectedProduct,
      codigo,
      marca,
      talles,
      colores,
      imagen,
    };

    // Enviar la solicitud PUT a la API REST de Flask para editar el producto
    fetch('http://localhost:5000/api/productos/'+selectedProduct.marca+'/'+selectedProduct.codigo, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoActualizado),
    })
    .then((response) => { 
      if (response.status === 200) {
        setError("")
        setMensaje("Producto guardado con éxito")
      }
    })   
  };

   // Manejar la eliminación de un producto
   const handleDeleteProduct = (product) => {
    // Enviar la solicitud DELETE a la API REST de Flask para eliminar el producto
    fetch(`http://localhost:5000/api/productos/${product.marca}/${product.codigo}`, {
      method: "DELETE",
    })
    .then((response) => { 
      if (response.status === 200) {
        setErrorEliminar("")
        setMensajeEliminar("Producto eliminado con éxito")
      }
    })
      .then((data) => {
        console.log("Producto eliminado:", data);
        // Actualizar la lista de productos después de eliminar uno
        fetch("http://localhost:5000/api/productos/"+params.marca)
          .then((response) => response.json())
          .then((data) => {
            setProductos(data);
          })
          .catch((error) => console.error("Error al obtener la lista de productos:", error));
      })
      .catch((error) => 
      setMensajeEliminar(""),
      setErrorEliminar("Error al eliminar el producto"));
  };


  return (
    <div>
      <h2>Editar Producto {params.marca}</h2>
      
      {errorEliminar && <div style={{ color: "red" }}>{errorEliminar}</div>}
      {mensajeEliminar && <div style={{ color: "green" }}>{mensajeEliminar}</div>}
      <ul>
        {productos.map((product) => (
          <li key={product.codigo}>
            {product.marca} - {product.codigo}
            <button onClick={() => handleSelectProduct(product)}>Editar</button>
            <button onClick={() => handleDeleteProduct(product)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {mensaje && <div style={{ color: "green" }}>{mensaje}</div>}
      {selectedProduct && (
        <form onSubmit={handleSubmit}>
          {/* Formulario de edición */}
          <label>
            Código:
            <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
          </label>
          <label>
            Marca:
            <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
          </label>
          <label>
            Talles:
            <input type="text" value={talles} onChange={(e) => setTalles(e.target.value)} />
          </label>
          <label>
            Colores:
            <input type="text" value={colores} onChange={(e) => setColores(e.target.value)} />
          </label>
          <label>
            Imagen:
            <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
          </label>
          <button type="submit">Guardar</button>
        </form>
      )}
      <NavLink to="/crud">
          <button>Atras</button>
        </NavLink>
    </div>
  );
};

export default EditarProducto;
