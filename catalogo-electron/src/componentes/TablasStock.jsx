import React from "react";
import Tabla from "./Tabla";
import './TablaStock.css'
import { useState, useEffect } from "react";



  const TablasStock =(props)=> {
    //let tablas = []
    const url = 'http://localhost:8080/productos/'+props.marca
    const [data, setData] = useState()
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setData(responseJSON)
    }

    useEffect(()=>{
      fetchApi();
    },[])

    return (
      <div>
        {!data ? 'Cargando...' : 
        
        data.map((item, index)=>{  
          //tablas.push(
            return(
            <li className="liArticulos">
            <Tabla articulo={item.codigo} talles={item.talles} colores = {item.colores} imagen={item.imagen}/>
          </li>
          )
          //return tablas;
        })}
      </div>
    );
    //const BASE_URL = 'http://localhost:8080';
    //    const response = axios.get(`${BASE_URL}/productos/${marcaDeseada}`);
    //    console.log(response)
    //    response.data.map((item)=>{
    //      tablas.push(
    //        <li className="liArticulos">
    //          <Tabla articulo={item.codigo} tallas={item.talles} colores = {item.colores} imagen={item.imagen}/>
    //        </li>
    //      )});
    //      
    //    return tablas;
      
    
    //const productosMarcaDeseada = articulos.find((articulo) => articulo.marca === marcaDeseada).productos;
//
    //productosMarcaDeseada.map((item)=>{
    //  tablas.push(
    //    <li className="liArticulos">
    //      <Tabla articulo={item.nombre} tallas={item.talles} colores = {item.colores} imagen={item.imagen}/>
    //    </li>
    //  )});
    //  
    //return tablas;
    
  }

export default TablasStock;  