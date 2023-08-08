// Home.js
import './Home.css'
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const Homea = () => {
    let botones = []
    let articulos =[] 
    articulos.forEach((item)=>{       
        botones.push(
            <Link to={{ pathname: '/articulos/'+item.marca  }}>
                <button className='boton'>{item.marca}</button>
            </Link>
        ); 
    })
    return botones;
};



const Home = () => {
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
      <h2>Seleccione una marca</h2>
      {data.length === 0 ? 'Cargando...' :
        uniquemarcas.map((marca, index) => (
          <div key={index}>
            <Link to={{ pathname: '/articulos/'+marca }}>
              <button className='boton'>{marca}</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;