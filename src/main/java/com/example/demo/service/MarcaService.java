package com.example.demo.service;

import java.awt.print.Pageable;
import java.util.List;

import com.example.demo.entity.Marca;
import com.example.demo.repository.IMarcaRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;

@Service
public class MarcaService
{
	/**
	 *
	 */
	@Autowired
	private IMarcaRepositoy marcaRepositoy;

	/**
	 *
	 */
	public Marca findMarcaById(long marcaId)
	{
		return this.marcaRepositoy.findById( marcaId ).orElse( null );
	}

	/**
	 *
	 */
	public Marca insertMarca(Marca marca)
	{
		return this.marcaRepositoy.save( marca );
	}

	/**
	 *
	 * @return
	 */
	public Page<Marca> listMarcaByFilters( int size)
	{
		return this.marcaRepositoy.findAll(PageRequest.of(0, size, Sort.Direction.ASC, "nome"));
	}

	/**
	 *
	 *
	 */
	public void removeMarca(Long marcaId)
	{
		this.marcaRepositoy.deleteById( marcaId );
	}

	public Marca updateMarca( Marca marca )
	{
		return this.marcaRepositoy.save( marca );
	}
}
