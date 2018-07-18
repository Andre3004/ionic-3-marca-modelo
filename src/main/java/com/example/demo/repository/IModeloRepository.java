package com.example.demo.repository;

import java.util.Optional;

import com.example.demo.entity.Modelo;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IModeloRepository extends JpaRepository<Modelo, Long>
{
	@EntityGraph(attributePaths = {"marca"})
	@Override
	Optional<Modelo> findById( Long aLong );
}
