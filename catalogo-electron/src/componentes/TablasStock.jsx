import React from "react";
import Tabla from "./Tabla";
import './TablaStock.css'
import { useState, useEffect } from "react";



  const TablasStock =(props)=> {
    //const url = 'http://localhost:5000/productos/'+props.marca
    const url = 'http://localhost:5000/api/productos/'+props.marca
    const [data, setData] = useState()
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setData(responseJSON)
    }

    useEffect(()=>{
      fetchApi();
    },[])
    console.log(data)
    return (
      <div>
        {!data ? 'Cargando...' : 
        
        data.map((item, index)=>{ 
            return(
            <li className="liArticulos">
            <Tabla articulo={item.codigo} talles={item.talles} colores = {item.colores} imagen={item.imagen} marca={props.marca}/>
          </li>
          )
        })}
      </div>
    );
  }

export default TablasStock;  