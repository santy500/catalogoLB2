/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.catalogo.lb.modelo;

import jakarta.persistence.Embeddable;

/**
 *
 * @author Santi
 */
@Embeddable
public class Talle {

    private String nombre;

    public Talle() {
    }

    public Talle(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
}
