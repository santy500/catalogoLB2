
package com.catalogo.lb.controladores;

import com.catalogo.lb.modelo.Marca;
import com.catalogo.lb.modelo.Producto;
import com.catalogo.lb.repository.MarcaRepository;
import com.catalogo.lb.repository.ProductoRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;
    private MarcaRepository marcaRepository;

    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/productos/{marca}")
    public List<Producto> getProductosPorMarca(@PathVariable String marca) {
        return productoRepository.findByMarca(marca);
    }
    
    
}