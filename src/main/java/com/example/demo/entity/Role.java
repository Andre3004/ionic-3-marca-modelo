package com.example.demo.entity;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority
{
	/*-------------------------------------------------------------------
	 *				 		     ENUMS
	 *-------------------------------------------------------------------*/

	ROLE_USER,
	ROLE_ADMIN;

	/**
	 *
	 */
	@Override
	public String getAuthority()
	{
		return this.name();
	}
}
