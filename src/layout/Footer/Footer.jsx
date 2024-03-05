import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faSquareFacebook,
	faSquareInstagram,
	faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logoTheSupercarClub from "../../assets/TheSupercarClub.webp";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="main-footer">
			<div className="footer-company">
				<section className="footer-section">
					<a className="footer-logo-link" href="">
						<img
							className="footer-logo"
							src={logoTheSupercarClub}
							alt="logo-img"
						/>
					</a>
					<p>
						Somos la empresa de alquiler de autos de ensueño número #1 en el
						Perú. Nuestro creciente inventario presenta algunos de los mejores
						automóviles que el dinero puede comprar. Somos una de las empresas
						más conocidas de coches de lujo atractivos porque somos propietarios
						de todo nuestro inventario, por lo que podemos asegurarnos de que su
						reserva sea perfecta en todo momento. Haremos de sus vacaciones en
						el Perú unas que nunca olvidará.
					</p>
					<div className="footer-icons">
						<a href="https://linkedin.com/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faSquareFacebook} />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faSquareInstagram} />
						</a>
						<a href="https://twitter.com/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faSquareXTwitter} />
						</a>
					</div>
				</section>

				<section className="footer-section">
					<h4>Compañía</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<a className="footer-link" href="/">
								Inicio
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="/about-us">
								Acerca de
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="/models">
								Servicio
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="/contact">
								Contacto
							</a>
						</li>
					</ul>
				</section>

				<section className="footer-section">
					<h4>Recursos</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<a className="footer-link" href="#">
								Blog
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="#">
								Galería
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="#">
								Eventos
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="#">
								Boletín
							</a>
						</li>
					</ul>
				</section>

				<section className="footer-section">
					<h4>Social</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<a
								className="footer-link"
								href="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</a>
						</li>
						<li className="footer-item">
							<a
								className="footer-link"
								href="https://twitter.com/"
								target="_blank"
								rel="noreferrer"
							>
								Twitter
							</a>
						</li>
						<li className="footer-item">
							<a
								className="footer-link"
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
							>
								instagram
							</a>
						</li>
						<li className="footer-item">
							<a
								className="footer-link"
								href="https://linkedin.com/"
								target="_blank"
								rel="noreferrer"
							>
								Linkedin
							</a>
						</li>
					</ul>
				</section>

				<section className="footer-section">
					<h4>Legal</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<a className="footer-link" href="#">
								Términos
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="#">
								Privacidad
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="#">
								Cookies
							</a>
						</li>
						<li className="footer-item">
							<a className="footer-link" href="#">
								Licencias
							</a>
						</li>
					</ul>
				</section>
			</div>

			<small className="footer-copyright">
				<FontAwesomeIcon icon={faCopyright} /> Renzo Alessandro Sucari
				Velásquez. <span id="year">{year}</span>, Todos los derechos reservados.
			</small>
		</footer>
	);
}
