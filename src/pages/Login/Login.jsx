import backgroundImg01 from "../../assets/forms/forms-01.webp";
import backgroundImg02 from "../../assets/forms/forms-05.webp";
import logoTheSupercarClub from "../../assets/TheSuperCarClub.webp";
import TitleActive from "../../components/TitleActive/TitleActive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../context/UserContext";

export default function Login() {
	const { login } = useUser();

	function handleSubmit(event) {
		event.preventDefault();
		const el = event.target.elements;

		const data = {
			email: el.email.value,
			password: el.password.value,
		};

		login(data);
	}

	return (
		<div className="main-container-forms">
			<div className="container-img">
				<picture>
					<source
						className="background-img"
						srcSet={backgroundImg02}
						media="(width > 1200px)"
					/>
					<img
						className="background-img"
						src={backgroundImg01}
						alt="background-img"
					/>
				</picture>
				<img
					className="wall-logo-img img-invert-color"
					src={logoTheSupercarClub}
					alt="TheSupercarClub"
				/>
			</div>
			<div className="container-form">
				<div className="box-form">
					<form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-title-container">
							<TitleActive title="INICIA SESIÓN" />
						</div>
						<div className="main-form-container">
							<div className="input-group">
								<label htmlFor="inputLoginEmail">Email*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faUser} />
									<input
										className="inputIcon"
										type="email"
										name="email"
										id="inputLoginEmail"
										placeholder="user@example.com"
										minLength="7"
										maxLength="140"
										pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
										autoComplete="on"
										required
									/>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputLoginPwd">Contraseña*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faLock} />
									<input
										className="inputIcon"
										type="password"
										name="password"
										id="inputLoginPwd"
										placeholder="Ingresa tu contraseña"
										required
									/>
								</div>
							</div>

							<div className="input-group">
								<button className="buttonSimple" type="submit">
									Iniciar sesión
								</button>
							</div>

							<div className="info-form">
								<small className="message">
									¿No tienes una cuenta?{" "}
									<a href="/register">Regístrate ahora</a>
								</small>
								<small className="message">
									<b>* CAMPOS REQUERIDOS</b>
								</small>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
