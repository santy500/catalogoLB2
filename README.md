# catalogoLB2
catalogoLB2 es una aplicacion de escritorio creada para satisfacer una necesidad de una emplesa en particular.
El objetivo es permitir crear un catalogo de productos con stock generado manualmente en el momento que se desee. 

Requerimientos: 
El usuario debe poder seleccionar una marca especifica, visualizar los productos e imagenes.
El usuario debe poder marcar los productos existentes
El usuario debe poder descargar el catalogo junto con sus respectivas marcas de existencia en formato pdf
El usuario debe poder registrar nuevos productos
El usuario debe poder actualizar y eliminar productos
El sistema debe correr en una computadora windows con bajos recursos


Como la aplicacion debe correr en una computadora con bajos recursos se decidio no modificarle los estilos de manera exagerada.
Actualmente la aplicacion se encuentra en la primer version util, en proximas versiones se actualizara la usabilidad y los estilos a peticion del cliente.
Dicha aplicacion podra recibir un stock generado por otra aplicacion en versiones futuras cuando el cliente lo solicite.


----Instalacion----
1- Instale Node.js
2- Instale Python 3
3- Dentro de la carpeta "catalogo-electron" ejecute: npm install
4- Dentro de la carpeta "backend-flask" ejecute: pip install -r requirements.txt
5- Inicie InicioStockApp.bat


Aclaraciones:
Para utilizar la aplicacion en forma web se debe modificar el archivo .env de la siguiente manera.

Ejecucion sin web:
BROWSER=none

Ejecucion con web:
#BROWSER=none

Si se desea ejecutar la aplicacion sin Electron se debe modificar el archivo package.json, en la seccion scripts:

Ejecucion con Electron:
"scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "aplicacion": "concurrently \"npm start && python app.py\" \"python ../backend-flask/app.py\" \"wait-on http://127.0.0.1:3000 && electron .\""
  }

Ejecucion sin Electron:
"scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "aplicacion": "concurrently \"npm start && python app.py\" \"python ../backend-flask/app.py\""
  }


  
