import backgroundImg01 from "../../assets/forms/forms-03.webp";
import backgroundImg02 from "../../assets/forms/forms-02.webp";
import logoTheSupercarClub from "../../assets/TheSupercarClub.webp";
import TitleActive from "../../components/TitleActive/TitleActive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faImage,
	faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
	faAt,
	faCakeCandles,
	faLocationDot,
	faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export default function Register() {
	const { register, handleSubmit } = useForm();

	async function submiteData(data) {
		try {
			console.log(data);
		} catch (error) {
			console.log(error);
		}
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
					<form className="contact-form" onSubmit={handleSubmit(submiteData)}>
						<div className="form-title-container">
							<TitleActive
								title="CREA UNA CUENTA"
								subtitle="Nunca guardamos la información de la tarjeta de crédito."
								subtitle2="Registrarse hace que el pago sea rápido y fácil y guarda la información de su pedido en su
								cuenta."
							/>
						</div>
						<div className="main-form-container">
							<div className="flex-row">
								<div className="input-group">
									<label htmlFor="inputFirstName">Nombres*</label>
									<div className="inputIconForm">
										<FontAwesomeIcon icon={faUser} />
										<i className="fa-solid fa-user"></i>
										<input
											className="inputIcon"
											type="text"
											name="firstName"
											id="inputFirstName"
											placeholder="John"
											minLength="5"
											maxLength="50"
											pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+( [a-zA-ZñÑáéíóúÁÉÍÓÚ]+)*$"
											autoFocus
											required
											{...register("firstName")}
										/>
									</div>
								</div>

								<div className="input-group">
									<label htmlFor="inputLastName">Apellidos*</label>
									<div className="inputIconForm">
										<FontAwesomeIcon icon={faUser} />
										<input
											className="inputIcon"
											type="text"
											name="lastName"
											id="inputLastName"
											placeholder="Doe"
											minLength="5"
											maxLength="50"
											pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+( [a-zA-ZñÑáéíóúÁÉÍÓÚ]+)*$"
											required
											{...register("lastName")}
										/>
									</div>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputEmail">Email*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faAt} />
									<input
										className="inputIcon"
										type="email"
										name="email"
										id="inputEmail"
										placeholder="user@example.com"
										minLength="7"
										maxLength="140"
										pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
										autoComplete="on"
										required
										{...register("email")}
									/>
								</div>
							</div>

							<div className="flex-row">
								<div className="input-group">
									<label htmlFor="inputPwd">Contraseña*</label>
									<div className="inputIconForm">
										<FontAwesomeIcon icon={faLock} />
										<input
											className="inputIcon"
											type="password"
											name="password"
											id="inputPwd"
											placeholder="Ingresa tu contraseña"
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
											required
											{...register("password")}
										/>
									</div>
								</div>

								<div className="input-group">
									<label htmlFor="inputConfirmPwd">Confirmar Contraseña*</label>
									<div className="inputIconForm">
										<FontAwesomeIcon icon={faLock} />
										<input
											className="inputIcon"
											type="password"
											name="password2"
											id="inputConfirmPwd"
											placeholder="Reingresa tu contraseña"
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
											required
											{...register("password2")}
										/>
									</div>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputLocation">Localidad*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faLocationDot} />
									<select
										className="inputIcon"
										name="location"
										id="inputLocation"
										{...register("location")}
									>
										<option value="New York, NY">New York, NY</option>
										<option value="Los Angeles, CA">Los Angeles, CA</option>
										<option value="Miami, FL">Miami, FL</option>
										<option value="Chicago, IL">Chicago, IL</option>
										<option value="Houston, TX">Houston, TX</option>
										<option value="San Francisco, CA">San Francisco, CA</option>
										<option value="Boston, MA">Boston, MA</option>
										<option value="Dallas, TX">Dallas, TX</option>
										<option value="San Diego, CA">San Diego, CA</option>
										<option value="Denver, CO">Denver, CO</option>
									</select>
								</div>
							</div>

							<div className="flex-row">
								<div className="input-group">
									<label htmlFor="inputBornDate">Cumpleaños*</label>
									<div className="inputIconForm">
										<FontAwesomeIcon icon={faCalendarDays} />
										<input
											className="inputIcon"
											type="date"
											name="bornDate"
											id="inputBornDate"
											required
											{...register("bornDate")}
										/>
									</div>
								</div>

								<div className="input-group">
									<label htmlFor="inputAge">Edad*</label>
									<div className="inputIconForm">
										<FontAwesomeIcon icon={faCakeCandles} />
										<input
											className="inputIcon"
											type="number"
											name="age"
											id="inputAge"
											min="1"
											defaultValue="18"
											required
											{...register("age")}
										/>
									</div>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputProfileImg">Foto de Perfil (URL)*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faImage} />
									<input
										className="inputIcon"
										id="inputProfileImg"
										type="url"
										name="image"
										value="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
										required
										{...register("image")}
									/>
								</div>
							</div>

							<div className="input-group">
								<button className="buttonSimple" type="submit">
									Registrarse
								</button>
							</div>

							<div className="info-form">
								<small className="message">
									Al crear una cuenta, acepta nuestros{" "}
									<a href="#">Términos de uso</a> y{" "}
									<a href="#">Política de privacidad</a>.
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
