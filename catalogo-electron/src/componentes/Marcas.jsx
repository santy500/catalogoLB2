import React from "react";
import articulos from './articulos.json'

const Marcas =()=>{
    let botones = []

    articulos.forEach((item)=>{
        botones.push(
            <button>{item.marca}</button>
        )
    })

    return botones;
}


export default Marcas;