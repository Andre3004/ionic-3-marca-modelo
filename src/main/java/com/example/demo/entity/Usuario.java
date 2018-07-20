package com.example.demo.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@Entity
@EqualsAndHashCode
public class Usuario implements UserDetails
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
	private String email;

	/**
	 *
	 */
	private String senha;

	/**
	 *
	 */
	private Role role;


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities()
	{
		List<Role> users = new ArrayList<>();
		users.add(role);
		return users;
	}

	@Override
	public String getPassword()
	{
		return this.senha;
	}

	@Override
	public String getUsername()
	{
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired()
	{
		return true;
	}

	@Override
	public boolean isAccountNonLocked()
	{
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired()
	{
		return true;
	}

	@Override
	public boolean isEnabled()
	{
		return true;
	}
}
