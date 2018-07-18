package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode
public class Marca
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
	@JsonIgnore
	@OneToMany(mappedBy = "marca", fetch = FetchType.LAZY)
	private List<Modelo> modelos = new ArrayList<Modelo>();
}
