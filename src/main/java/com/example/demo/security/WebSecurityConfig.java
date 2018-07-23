package com.example.demo.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{

	//Service
	/**
	 *
	 */
	@Autowired
	private AuthenticationService authentication;

	@Override
	protected void configure( HttpSecurity httpSecurity ) throws Exception
	{
		httpSecurity.csrf().disable().authorizeRequests()
				.antMatchers("/home").permitAll()
				.antMatchers(HttpMethod.POST, "/api/login").permitAll()
				.anyRequest().authenticated()
				.and()
				.formLogin()
				.usernameParameter( "email" )
				.passwordParameter( "senha" )
				.and()


			// filtra requisições de login
				.addFilterBefore( new JWTLoginFilter( "/api/login", authenticationManager() ),
			UsernamePasswordAuthenticationFilter.class )

			// filtra outras requisições para verificar a presença do JWT no header
			.addFilterBefore( new JWTAuthenticationFilter(),
					UsernamePasswordAuthenticationFilter.class );
	}

	@Override
	protected void configure( AuthenticationManagerBuilder auth ) throws Exception
	{
		// cria uma conta default
		auth.userDetailsService(authentication).passwordEncoder(new BCryptPasswordEncoder());
//		auth.inMemoryAuthentication()
//				.withUser( "admin" )
//				.password( "password" )
//				.roles( "ADMIN" );
	}
}