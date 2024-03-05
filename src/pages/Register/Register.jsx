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
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const URL = import.meta.env.VITE_SERVER_URL;

export default function Register() {
	const { register, handleSubmit } = useForm();
	const [dbLocations, setDbLocations] = useState([]);
	const { logout } = useUser();
	const navigate = useNavigate();

	async function getLocations() {
		try {
			const response = await axios.get(`${URL}/locations`);
			const locations = response.data.locations;
			setDbLocations(locations);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener las ubicaciones",
			});
		}
	}

	useEffect(function () {
		getLocations();
	}, []);

	async function submiteData(data) {
		try {
			console.log(data);
			const formData = new FormData();
			for (const key of Object.keys(data)) {
				if (key === "userImage") {
					formData.append(key, data.userImage[0]);
				}
				formData.append(key, data[key]);
			}

			const response = await axios.post(`${URL}/users`, formData);
			console.log(response);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `El usuario ${response.data.user?.firstName} fue creado correctamente`,
				showConfirmButton: false,
				timer: 1500,
			}).then(() => {
				navigate("/login");
			});
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se creo el usuario",
				text: "Alguno de los datos ingresados no es correcto!",
			});
			if (error.response.status === 401) {
				logout();
			}
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
					<form
						className="contact-form"
						onSubmit={handleSubmit(submiteData)}
						encType="multipart/form-data"
					>
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
											minLength="3"
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
											minLength="3"
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
										minLength="7"
										maxLength="80"
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
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
											required
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
										defaultValue={"DEFAULT"}
										{...register("location")}
									>
										<option disabled value="DEFAULT">
											Selecciona...
										</option>
										{dbLocations.map((location) => (
											<option key={location._id} value={location._id}>
												{location.location}
											</option>
										))}
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
											max="150"
											defaultValue="18"
											required
											{...register("age")}
										/>
									</div>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputProfileImg">
									Foto de Perfil (archivo)*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faImage} />
									<input
										className="inputIcon"
										id="inputProfileImg"
										type="file"
										accept="image/*"
										name="userImage"
										{...register("userImage")}
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
