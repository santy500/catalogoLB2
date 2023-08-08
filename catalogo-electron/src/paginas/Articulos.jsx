// About.js
import React, {useRef} from 'react';
import { useParams } from 'react-router-dom';
import TablasStock from '../componentes/TablasStock';
import {useReactToPrint} from "react-to-print";
import { NavLink } from 'react-router-dom';
import './Articulos.css'

const Articulos = () => {
    const params = useParams();
    const componentPDF = useRef();
    const generatePDF = useReactToPrint({
      content: ()=>componentPDF.current,
      documentTitle:"Stock"
    });

  return( 
    <>
      <div>
      <NavLink to="/">
          <button>Atras</button>
        </NavLink>
        <h1>{params.marca}</h1>
      </div>
    <div ref={componentPDF} style={{width:'100%'}}>
      <ul className='ulArticulos'>  
        <TablasStock marca={params.marca}/>
      </ul>
    </div>
    <div>
      <button onClick={generatePDF}>PDF</button>
    </div>
    </>
    )
};

export default Articulos;
