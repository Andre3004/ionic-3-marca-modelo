package com.example.demo.restful;

import java.util.List;

import com.example.demo.entity.Marca;
import com.example.demo.service.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/marca")
public class MarcaControllerRest
{

	/**
	 *
	 */
	@Autowired
	private MarcaService marcaService;

	/**
	 *
	 * @return
	 */
	@RequestMapping(value = "/listMarcasByFilters", method = RequestMethod.GET)
	@CrossOrigin
	public List<Marca> listMarcasByFilters(@RequestParam int size)
	{
		return marcaService.listMarcaByFilters(size).getContent();
	}

	@CrossOrigin
	@RequestMapping(value = "/findMarcaById/{id}", method = RequestMethod.GET)
	public Marca findMarcaById( @PathVariable Long id )
	{
		return marcaService.findMarcaById( id );

	}

	/**
	 * @param marca
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertMarca", method = RequestMethod.POST)
	public Marca insertEquipment( @RequestBody Marca marca )
	{
		return marcaService.insertMarca( marca );
	}

	/**
	 * @param marca
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateMarca", method = RequestMethod.PUT)
	public Marca updateEquipment( @RequestBody Marca marca )
	{
		return marcaService.updateMarca( marca );
	}

	/**
	 *
	 * @param marcaId
	 */
	@CrossOrigin
	@RequestMapping(value = "/removeMarca/{marcaId}", method = RequestMethod.DELETE)
	public void removeMarca( @PathVariable Long marcaId )
	{
		this.marcaService.removeMarca( marcaId );
	}
}
