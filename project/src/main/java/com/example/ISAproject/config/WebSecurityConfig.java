package com.example.ISAproject.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.example.ISAproject.security.auth.RestAuthenticationEntryPoint;
import com.example.ISAproject.security.auth.TokenAuthenticationFilter;
import com.example.ISAproject.service.CustomUserDetailsService;
import com.example.ISAproject.util.TokenUtils;



@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	// Implementacija PasswordEncoder-a koriscenjem BCrypt hashing funkcije.
	// BCrypt po defalt-u radi 10 rundi hesiranja prosledjene vrednosti.
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	// Servis koji se koristi za citanje podataka o korisnicima aplikacije
	@Autowired
	private CustomUserDetailsService customUserDetailsService;

	// Handler za vracanje 401 kada klijent sa neodogovarajucim korisnickim imenom i lozinkom pokusa da pristupi resursu
	@Autowired
	private RestAuthenticationEntryPoint restAuthenticationEntryPoint;

	// Registrujemo authentication manager koji ce da uradi autentifikaciju korisnika za nas
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	// Definisemo nacin utvrdjivanja korisnika pri autentifikaciji
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth
				// Definisemo uputstva AuthenticationManager-u:

				// 1. koji servis da koristi da izvuce podatke o korisniku koji zeli da se autentifikuje
				// prilikom autentifikacije, AuthenticationManager ce sam pozivati loadUserByUsername() metodu ovog servisa
				.userDetailsService(customUserDetailsService)

				// 2. kroz koji enkoder da provuce lozinku koju je dobio od klijenta u zahtevu
				// da bi adekvatan hash koji dobije kao rezultat hash algoritma uporedio sa onim koji se nalazi u bazi (posto se u bazi ne cuva plain lozinka)
				.passwordEncoder(passwordEncoder());
	}

	// Injektujemo implementaciju iz TokenUtils klase kako bismo mogli da koristimo njene metode za rad sa JWT u TokenAuthenticationFilteru
	@Autowired
	private TokenUtils tokenUtils;

	// Definisemo prava pristupa za zahteve ka odredjenim URL-ovima/rutama
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				// komunikacija izmedju klijenta i servera je stateless posto je u pitanju REST aplikacija
				// ovo znaci da server ne pamti nikakvo stanje, tokeni se ne cuvaju na serveru
				// ovo nije slucaj kao sa sesijama koje se cuvaju na serverskoj strani - STATEFULL aplikacija
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

				// sve neautentifikovane zahteve obradi uniformno i posalji 401 gresku
				.exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint).and()

				// svim korisnicima dopusti da pristupe sledecim putanjama:
				.authorizeRequests().antMatchers("/auth/**").permitAll()		// /auth/**
				// /api/foo
				.antMatchers("/api/registration").permitAll()
				.antMatchers("/auth/login").permitAll()
                .antMatchers("/api/user/{id}").permitAll()

				//Funkcionalnosti za aerodrome
				.antMatchers("/api/airport/{id}").permitAll()


				//Funkcionalnosti za avione
				.antMatchers("/api/airplanes").permitAll()
				.antMatchers("/api/airplane/{id}").permitAll()
				.antMatchers("/api/type").permitAll()
				.antMatchers("/api/sort/planes").permitAll()
				.antMatchers("/api/sort/planes/system").permitAll()
				.antMatchers("/api/sort/planes/mark").permitAll()
				.antMatchers("/api/registration/plane").permitAll()

				//Funkcionalnosti za Pilote
				.antMatchers("/api/pilot/{id}").permitAll()
				.antMatchers("/api/pilot/edit").permitAll()
                .antMatchers("/api/controller/{id}").permitAll()


				.antMatchers("/api/registration/pilot").permitAll()
                .antMatchers("/api/pilots").permitAll()
                .antMatchers("/api/pilot/edit").permitAll()
                .antMatchers("/api/airport_pilots/{id}").permitAll()

		        //Funkcionalnosti za Mehanicare
				.antMatchers("/api/mechanic/{id}").permitAll()

                //Funkcionalnosti za Termine
                .antMatchers("/api/terms").permitAll()
                .antMatchers("/api/term/{id}").permitAll()
				.antMatchers("/api/pilot_terms/{id}").permitAll()
                .antMatchers("/api/future_terms/{id}").permitAll()

				.antMatchers("/api/terms/sort-by-date").permitAll()
				.antMatchers("/api/terms/sort-by-duration").permitAll()
				.antMatchers("/api/terms/sort-by-coming").permitAll()
				.antMatchers("/api/terms/addFastTerm").permitAll()

                .antMatchers("/api/terms/schedule_term").permitAll()
				.antMatchers("/api/terms/cancel_term").permitAll()

				.antMatchers("/api/terms/completed").permitAll()
				.antMatchers("/api/terms/reservation").permitAll()

				//F-ja za izvestaje
				.antMatchers("/api/pilot_surveys").permitAll()
				.antMatchers("/api/pilot_survey/{id}").permitAll()
				.antMatchers("/api/pilot_survey/save").permitAll()
                .antMatchers("/api/pilot_survey_pilot/{id}").permitAll()



				.antMatchers("/api/mechanic_surveys").permitAll()
				.antMatchers("/api/mechanic_survey/{id}").permitAll()
				.antMatchers("/api/mechanic_survey/save").permitAll()
                .antMatchers("/api/terms/mechanic_term").permitAll()



                .antMatchers("/api/control_survey/save").permitAll()
                .antMatchers("/api/control_surveys").permitAll()
                .antMatchers("/api/control_survey/{id}").permitAll()
				.antMatchers("/api/control_survey/update").permitAll()








				.antMatchers("/api/addPenal").permitAll()
				.antMatchers("/api/term/edit").permitAll()

























				//
				.antMatchers("/api/terms").permitAll()









				.antMatchers("/api/registeredUsersFirstName").permitAll()
				.antMatchers("/api/regUser/{id}").permitAll()
				.antMatchers("/api/updateRegUser").permitAll()
				.antMatchers("/auth/signup").permitAll()

				//.antMatchers("/api/regUsers/{id}").permitAll()


				// ukoliko ne zelimo da koristimo @PreAuthorize anotacije nad metodama kontrolera, moze se iskoristiti hasRole() metoda da se ogranici
				// koji tip korisnika moze da pristupi odgovarajucoj ruti. Npr. ukoliko zelimo da definisemo da ruti 'admin' moze da pristupi
				// samo korisnik koji ima rolu 'ADMIN', navodimo na sledeci nacin:
				// .antMatchers("/admin").hasRole("ADMIN") ili .antMatchers("/admin").hasAuthority("ROLE_ADMIN")

				// za svaki drugi zahtev korisnik mora biti autentifikovan
				.anyRequest().authenticated().and()

				// za development svrhe ukljuci konfiguraciju za CORS iz WebConfig klase
				.cors().and()

				// umetni custom filter TokenAuthenticationFilter kako bi se vrsila provera JWT tokena umesto cistih korisnickog imena i lozinke (koje radi BasicAuthenticationFilter)
				.addFilterBefore(new TokenAuthenticationFilter(tokenUtils, customUserDetailsService), BasicAuthenticationFilter.class);

		// zbog jednostavnosti primera ne koristimo Anti-CSRF token (https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
		http.csrf().disable();
	}

	// Definisanje konfiguracije koja utice na generalnu bezbednost aplikacije
	@Override
	public void configure(WebSecurity web) throws Exception {
		// Autentifikacija ce biti ignorisana ispod navedenih putanja (kako bismo ubrzali pristup resursima)
		// Zahtevi koji se mecuju za web.ignoring().antMatchers() nemaju pristup SecurityContext-u

		// Dozvoljena POST metoda na ruti /auth/login, za svaki drugi tip HTTP metode greska je 401 Unauthorized
		web.ignoring().antMatchers(HttpMethod.POST, "/auth/login");

		// Ovim smo dozvolili pristup statickim resursima aplikacije
		web.ignoring().antMatchers(HttpMethod.GET, "/", "/webjars/**", "/*.html", "favicon.ico", "/**/*.html",
				"/**/*.css", "/**/*.js");
	}


}