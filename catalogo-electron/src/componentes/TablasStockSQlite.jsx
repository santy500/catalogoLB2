import React, { useState, useEffect } from "react";
import Tabla from "./Tabla";
import './TablaStock.css';
import db from "../db";

const TablasStockSQlite = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      try {
        // Obtener los datos de la tabla según la marca desde la base de datos
        const query = `SELECT * FROM products WHERE marca = ?`;
        const results = await db.all(query, [props.marca]);
        setData(results);
      } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error.message);
      }
    };

    fetchDataFromDatabase();
  }, [props.marca]);

  return (
    <div>
      {!data.length ? 'Cargando...' : 
        data.map((item, index) => (  
          <li className="liArticulos" key={index}>
            <Tabla articulo={item.codigo} talles={item.talles} colores={item.colores} imagen={item.imagen} />
          </li>
        ))
      }
    </div>
  );
};

export default TablasStockSQlite;
