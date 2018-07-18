package com.example.demo.restful;

import java.util.List;

import com.example.demo.entity.Modelo;
import com.example.demo.service.ModeloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:8100", maxAge = 3600)
@RequestMapping("api/modelo")
public class ModeloControllerRest
{

	/**
	 *
	 */
	@Autowired
	private ModeloService modeloService;

	/**
	 *
	 * @return
	 */
	@RequestMapping(value = "/listModelosByFilters", method = RequestMethod.GET)
	public List<Modelo> listModelosByFilters(@RequestParam int size)
	{
		return modeloService.listModeloByFilters(size).getContent();
	}

	@RequestMapping(value = "/findModeloById/{id}", method = RequestMethod.GET)
	public Modelo findModeloById( @PathVariable Long id )
	{
		return modeloService.findModeloById( id );

	}

	/**
	 * @param modelo
	 * @return
	 */
	@RequestMapping(value = "/insertModelo", method = RequestMethod.POST)
	public Modelo insertEquipment( @RequestBody Modelo modelo )
	{
		return modeloService.insertModelo( modelo );
	}

	/**
	 * @param modelo
	 * @return
	 */
	@RequestMapping(value = "/updateModelo", method = RequestMethod.PUT)
	public Modelo updateEquipment( @RequestBody Modelo modelo )
	{
		return modeloService.updateModelo( modelo );
	}

	/**
	 *
	 * @param modeloId
	 */
	@RequestMapping(value = "/removeModelo/{modeloId}", method = RequestMethod.DELETE)
	public void removeModelo( @PathVariable Long modeloId )
	{
		this.modeloService.removeModelo( modeloId );
	}
}
