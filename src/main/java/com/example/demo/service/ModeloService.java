package com.example.demo.service;

import java.awt.print.Pageable;
import java.util.List;

import com.example.demo.entity.Modelo;
import com.example.demo.repository.IModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;

@Service
public class ModeloService
{
	/**
	 *
	 */
	@Autowired
	private IModeloRepository modeloRepository;

	/**
	 *
	 */
	public Modelo findModeloById(long modeloId)
	{
		return this.modeloRepository.findById( modeloId ).orElse( null );
	}

	/**
	 *
	 */
	public Modelo insertModelo(Modelo modelo)
	{
		return this.modeloRepository.save( modelo );
	}

	/**
	 *
	 * @return
	 */
	public Page<Modelo> listModeloByFilters( int size)
	{
		return this.modeloRepository.findAll(PageRequest.of(0, size, Sort.Direction.ASC, "nome"));
	}

	/**
	 *
	 *
	 */
	public void removeModelo(Long modeloId)
	{
		this.modeloRepository.deleteById( modeloId );
	}

	public Modelo updateModelo( Modelo modelo )
	{
		return this.modeloRepository.save( modelo );
	}
}
