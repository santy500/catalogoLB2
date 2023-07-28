// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import articulos from "../componentes/articulos.json"
import './Home.css'

const Home = () => {
    let botones = [] 
    articulos.forEach((item)=>{       
        botones.push(
            <Link to={{ pathname: '/articulos/'+item.marca  }}>
                <button className='boton'>{item.marca}</button>
            </Link>
        ); 
    })
    return botones;
};

export default Home;
