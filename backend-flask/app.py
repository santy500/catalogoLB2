import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

#Obtener productos por marca
@app.route('/api/productos/<marca>', methods=['GET'])
def read_file(marca):
    # Leer el archivo JSON que contiene los datos de los productos
    with open('productos.json', 'r') as file:
        data = json.load(file)

    productos_filtrados = [producto for producto in data if producto['marca'] == marca]

    # Devolver los datos filtrados como una respuesta JSON
    return jsonify(productos_filtrados), 200

# Ruta para obtener todos los productos
@app.route("/api/productos", methods=["GET"])
def get_productos():
    # Leer el archivo JSON que contiene los datos de los productos
    productos = leer_productos();
    #with open('productos.json', 'r') as file:
    #    data = json.load(file)
    return jsonify(productos)

# Ruta para editar un producto
@app.route("/api/productos/<marca>/<codigo>", methods=["PUT"])
def editar_producto(marca, codigo):
    nuevo_producto = request.json
    productos = leer_productos()
    for producto in productos:
        if (producto["codigo"] == codigo) and (producto["marca"] == marca):
            producto.update(nuevo_producto)
            guardar_productos(productos)
            return jsonify(producto), 200
        
    print(f"Producto no encontrado. Marca: {marca}, Código: {codigo}")    
    return jsonify({"error": "Producto no encontrado"}), 404

@app.route("/api/productos/<marca>/<codigo>", methods=["DELETE"])
def eliminar_producto(marca, codigo):
    productos = leer_productos()
    for i, producto in enumerate(productos):
        if (producto["codigo"] == codigo) and (producto["marca"] == marca):
            del productos[i]
            guardar_productos(productos)
            return jsonify({"message": "Producto eliminado exitosamente"}), 200

    return jsonify({"error": "Producto no encontrado"}), 404


# Ruta para agregar un nuevo producto
@app.route("/api/productos", methods=["POST"])
def agregar_producto():
    nuevo_producto = request.json
    productos = leer_productos()
    productos.append(nuevo_producto)
    guardar_productos(productos)
    return jsonify(nuevo_producto), 201

def leer_productos():
    try:
        with open("productos.json", "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def guardar_productos(productos):
    with open("productos.json", "w") as file:
        json.dump(productos, file, indent=2)


if __name__ == '__main__':
    app.run()
