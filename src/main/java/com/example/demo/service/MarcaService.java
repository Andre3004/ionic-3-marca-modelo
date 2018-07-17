package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Marca;
import com.example.demo.repository.IMarcaRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
	public List<Marca> listMarcaByFilters()
	{
		return this.marcaRepositoy.findAll();
	}

	/**
	 *
	 *
	 */
	public void removeMarca(Long marcaId)
	{
		this.marcaRepositoy.deleteById( marcaId );
	}
}
