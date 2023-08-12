@echo off
setlocal

:: Obtener la ruta absoluta del directorio del script
for %%i in ("%~dp0.") do set "script_dir=%%~fi"

:: Define rutas relativas desde el directorio del script
set "ruta_catalogo=%script_dir%\catalogo-electron"

echo Iniciando aplicacion...
cd "%ruta_catalogo%"
npm run aplicacion


endlocal