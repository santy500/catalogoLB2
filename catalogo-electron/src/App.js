// App.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MiPDF from './componentes/CreadorPDF';
import './App.css'
import Tabla from './componentes/Tabla';
import TablasStock from './componentes/TablasStock';
import Marcas from './componentes/Marcas';

import { PDFViewer } from '@react-pdf/renderer';

/* DESCARGAR PDF
const App = () => (
  <div>
    <h1>Generador de PDF desde React</h1>
    <PDFDownloadLink document={<MiPDF />} fileName="mi-pdf-generado.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Generando el PDF...' : 'Descargar PDF'
      }
    </PDFDownloadLink>
  </div>
);
*/



/* RENDERIZAR PDF EN EL DOM 
const App = () => (
  <>
  <PDFViewer className='contenedorPDF'>
    <MiPDF className="pdf"/>
  </PDFViewer>
  <div>
  <h1>Generador de PDF desde React</h1>
  <PDFDownloadLink document={<MiPDF />} fileName="mi-pdf-generado.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Generando el PDF...' : 'Descargar PDF'
    }
  </PDFDownloadLink>
  </div>
</>
);
/*
const App =()=> {

  return(
    <Marcas/>
  )
}*/


//import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Layout from './paginas/Layout';
import Home from './paginas/Home';
import Articulos from './paginas/Articulos';
import AgregarProducto from './paginas/AgregarProductos';
import EditarProducto from './paginas/EditarProducto';
import CRUD from './paginas/CRUD';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='articulos/:marca' element={<Articulos />}></Route>
          <Route path='agregarproductos/' element={<AgregarProducto />}></Route>
          <Route path='editarproducto/:marca' element={<EditarProducto />}></Route>
          <Route path='crud/' element={<CRUD />}></Route>
        </Route>
      </Routes>
    </div>
  
);
};

export default App;
