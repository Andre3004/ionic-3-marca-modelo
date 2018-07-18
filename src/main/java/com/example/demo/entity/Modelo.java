package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode
public class Modelo
{
	/**
	 *
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	/**
	 *
	 */
	private String nome;

	/**
	 *
	 */
	private String descricao;

	/**
	 *
	 */
	@ManyToOne(fetch = FetchType.LAZY)
	private Marca marca;
}
