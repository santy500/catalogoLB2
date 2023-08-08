import React from 'react';
import ArticleTableRow from './ArticleTableRow';
import './Tabla.css'


const Tabla =(props)=>{
  const articulo = props.articulo
  const cadenaTalles = props.talles
  const talles = cadenaTalles.split("-")
  const cadenaColores = props.colores
  const colores = cadenaColores.split("-")
  const imagen = '../'+props.imagen

  return(
    <>
    <div className="container">
      <img src={imagen} alt="imagen" />
      <table className='table'>
        <tr>
              <th>{articulo}</th>
              {talles.map((talla)=>
              <th>{talla}</th>
              )}      
            </tr>
            <tbody>
            {colores.map((color) => (
              <ArticleTableRow color={color} tallas={talles} />
        ))}
        </tbody>      
      </table>
    </div>
    </>
  )
}

export default Tabla;
