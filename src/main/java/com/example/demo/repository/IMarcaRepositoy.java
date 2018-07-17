package com.example.demo.repository;

import com.example.demo.entity.Marca;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMarcaRepositoy extends JpaRepository<Marca, Long>
{

}
