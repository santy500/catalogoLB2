@echo off
setlocal

:: Obtener la ruta absoluta del directorio del script
for %%i in ("%~dp0.") do set "script_dir=%%~fi"

:: Define rutas relativas desde el directorio del script
set "ruta_catalogo=%script_dir%\catalogo-electron"
set "ruta_backend=%script_dir%\backend-flask"


echo Instalando dependencias Node.js...
cd "%ruta_catalogo%"
npm install
if %errorlevel% neq 0 (
    echo Error: No se pudieron instalar las dependencias de Node.js.
    exit /b %errorlevel%
) else (
    echo Dependencias de Node.js instaladas correctamente.
)

echo Instalando dependencias Python (Flask)...
cd "%ruta_backend%"
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo Error: No se pudieron instalar las dependencias de Python.
    exit /b %errorlevel%
) else (
    echo Dependencias de Python instaladas correctamente.
)


endlocal
