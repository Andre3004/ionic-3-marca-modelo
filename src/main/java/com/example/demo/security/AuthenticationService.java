package com.example.demo.security;

import com.example.demo.entity.Usuario;
import com.example.demo.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService implements UserDetailsService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Repository
	/**
	 *
	 */
	@Autowired
	private IUsuarioRepository userRepository;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	/**
	 *
	 */
	public Usuario loadUserByUsername( String email)
	{
		try
		{
			return  userRepository.findByEmail(email);
		}
		catch (Exception e)
		{
			throw new UsernameNotFoundException("Usuário " + email + " não encontrado.");
		}
	}
}