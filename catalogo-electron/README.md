### Implementacion de electron con react

# se creo un archivo .dev que contiene lo siguiente:

BROWSER=none

Esto evita que al iniciar react se abra el navegador automaticamente

# Se agrego el script "catalogo-electron" en packaje.json

"catalogo-electron": "concurrently \"npm start\" \"wait-on http://127.0.0.1:3000 && electron .\""

Al ejecutar npm run catalogo-electron se ejecuta la app react y cuando se completa se ejecuta electron