import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';

const CRUD = () => {
  const url = 'http://localhost:5000/api/productos';
  const [data, setData] = useState([]);
  const [uniquemarcas, setUniquemarcas] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setData(responseJSON);

    // Extract unique marcas from the data
    const marcas = Array.from(new Set(responseJSON.map(item => item.marca)));
    setUniquemarcas(marcas);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
        <NavLink to="/">
          <button>Atras</button>
        </NavLink>
      <NavLink to="/agregarproductos">
        <button className='botonAgregar'>Agregar Productos</button></NavLink>
      <h2>Editar Productos </h2>
      {data.length === 0 ? 'Cargando...' :
        uniquemarcas.map((marca, index) => (
          <div key={index}>
            <Link to={{ pathname: '/editarproducto/'+marca }}>
              <button className='boton'>{marca}</button>
            </Link>
          </div>
        ))}
    </div>
  );
};




const CRUDo = () => {
    let botones = []
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/productos/")
          .then((response) => response.json())
          .then((data) => {
            setProductos(data);
          })
          .catch((error) => console.error("Error al obtener la lista de productos:", error));
      }, []);
     
    productos.forEach((item)=>{       
        botones.push(
            <Link to={{ pathname: '/editarproducto/'+item.marca  }}>
                <button className='boton'>{item.marca}</button>
            </Link>
        ); 
    })
    return (
    <NavLink to="/agregarproductos">Agregar Productos</NavLink>
    
    )+botones;
};

export default CRUD;
