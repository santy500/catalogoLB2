
package com.catalogo.lb.repository;

import com.catalogo.lb.modelo.Producto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
    public List<Producto> findByMarca(String marca);
}
