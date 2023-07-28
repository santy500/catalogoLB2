/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.catalogo.lb.service;

import com.catalogo.lb.modelo.Marca;
import com.catalogo.lb.repository.MarcaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MarcasService implements IMarcasService{

    @Autowired
    private MarcaRepository repo;
    
    
    @Override
    public void crearMarca(Marca marca) {
        repo.save(marca);
    }

    @Override
    public void editarMarca(Marca marca, int id) {
        marca.setId(id);
        if(marca.getNombre()==""){
            marca.setNombre(buscarMarca(id).getNombre());
        }
        repo.save(marca);
    }

    @Override
    public List<Marca> verMarcas() {
        return repo.findAll();
    }

    @Override
    public Marca buscarMarca(int id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public void eliminarMarca(int id) {
        repo.deleteById(id);
    }
    
}
