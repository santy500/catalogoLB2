@echo off
setlocal

:: Obtener la ruta absoluta del directorio del script
for %%i in ("%~dp0.") do set "script_dir=%%~fi"

:: Define rutas relativas desde el directorio del script
set "ruta_catalogo=%script_dir%\catalogo-electron"
set "ruta_backend=%script_dir%\backend-flask"

echo Instalando Node.js...
msiexec /i "https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi" /qn
if %errorlevel% neq 0 (
    echo Error: No se pudo instalar Node.js.
    exit /b %errorlevel%
) else (
    echo Node.js se instal� correctamente.
)

echo Instalando Python 3...
msiexec /i "https://www.python.org/ftp/python/3.11.4/python-3.11.4-amd64.exe" /qn
if %errorlevel% neq 0 (
    echo Error: No se pudo instalar Python 3.
    exit /b %errorlevel%
) else (
    echo Python 3 se instal� correctamente.
)

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
