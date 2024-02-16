import "./AdminUser.css";
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
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { UserTable } from "../../components/UserTable/UserTable";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
const URL = import.meta.env.VITE_SERVER_URL;

export default function AdminUser() {
	const [dbUsers, setDbUsers] = useState([]);

	async function getUsers() {
		try {
			const response = await axios.get(`${URL}/users`);
			const users = response.data.users;
			setDbUsers(users);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los usuario",
			});
		}
	}

	useEffect(function () {
		getUsers();
	}, []);

	const { register, handleSubmit } = useForm();

	async function submiteData(data) {
		try {
			console.log(data);
			const user = await axios.post(`${URL}/users`, data);
			console.log(user);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se creo el usuario",
				text: "Alguno de los datos ingresados no es correcto!",
			});
		}
	}

	return (
		<div className="admin-container">
			<div className="left-container">
				<form className="adminUser-form" onSubmit={handleSubmit(submiteData)}>
					<div className="form-title-container">
						<TitleActive
							title="CREA UN USUARIO"
							subtitle="Crea una cuenta con su correo eléctronico."
						/>
					</div>
					<div className="main-form-container">
						<input name="id" style={{ display: "none" }} type="text" />

						<div className="flex-row">
							<div className="input-group">
								<label htmlFor="inputFirstName">Nombres*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faUser} />
									<input
										className="inputIcon"
										type="text"
										name="firstName"
										id="inputFirstName"
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
										max="150"
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
									name="userImage"
									defaultValue="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
									required
									{...register("userImage")}
								/>
							</div>
						</div>

						<div className="input-group">
							<label
								htmlFor="inputUserActive"
								className="cyberpunk-checkbox-label"
							>
								<input
									className="cyberpunk-checkbox"
									type="checkbox"
									name="active"
									id="inputUserActive"
									{...register("active")}
								/>
								Usuario Activo
							</label>
						</div>

						<div className="input-group">
							<button className="buttonSimple" type="submit">
								Enviar
							</button>
						</div>

						<div className="info-form">
							<small className="message">
								<b>* CAMPOS REQUERIDOS</b>
							</small>
						</div>
					</div>
				</form>
			</div>
			<div className="right-container">
				<div className="inputIconForm">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input
						className="inputIcon"
						type="text"
						id="searchUser"
						placeholder="Buscar por nombre..."
					/>
				</div>

				<UserTable users={dbUsers} />
			</div>
		</div>
	);
}
