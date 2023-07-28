/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.catalogo.lb.service;

import com.catalogo.lb.modelo.Marca;
import java.util.List;

/**
 *
 * @author Santi
 */
public interface IMarcasService {
    
    public void crearMarca(Marca marca);
    public void editarMarca(Marca marca, int id);
    public List<Marca> verMarcas();
    public Marca buscarMarca(int id);
    public void eliminarMarca(int id);
}
