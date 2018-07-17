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
	@OneToMany(mappedBy = "marca", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Modelo> modelos = new ArrayList<Modelo>();


	/**
	 *
	 * @param modelos
	 */
	public void setModelos(List<Modelo> modelos)
	{
		if(modelos != null)
		{
			this.modelos.clear();
			this.modelos.addAll( modelos );
		}
	}

}
