import "./AdminUser.css";
import TitleActive from "../../components/TitleActive/TitleActive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faImage,
	faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
	faArrowLeft,
	faArrowRight,
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
import { useUser } from "../../context/UserContext";
import formatDateInput from "../../utils/formatDateInput";
const URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = localStorage.getItem("token");

export default function AdminUser() {
	// GET DATOS PARA LA TABLA
	const [dbUsers, setDbUsers] = useState([]);
	const [dbLocations, setDbLocations] = useState([]);
	const [userID, setUserid] = useState();

	const [totalButtons, setTotalButtons] = useState(0);
	const [limit, setLimit] = useState(10);

	const { logout } = useUser();

	// OBTENER LOS USURIOS DE BASE DE DATOS
	async function getUsers(page = 0) {
		try {
			const response = await axios.get(
				`${URL}/users?page=${page}&limit=${limit}`,
			);
			const users = response.data.users;
			const total = response.data.total;
			setDbUsers(users);
			setTotalButtons(total);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los usuario",
			});
		}
	}

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

	useEffect(
		function () {
			getUsers();
			getLocations();
		},
		[limit],
	);

	// BORRAR UN USUARIO EN BASE DE DATOS
	async function deleteUser(id) {
		Swal.fire({
			title: "Desea borrar el usuario?",
			text: "Esta acción no es revertible",
			showCancelButton: true,
			confirmButtonText: "Borrar",
			cancelButtonText: `Cancelar`,
		}).then(async function (result) {
			if (result.isConfirmed) {
				try {
					if (!TOKEN) return;
					await axios.delete(`${URL}/users/${id}`, {
						headers: { authorization: TOKEN },
					});
					Swal.fire(`Se borro el usuario ${id}!`, "", "success");
					getUsers();
				} catch (error) {
					console.log(error);
					Swal.fire({
						title: "Error al borrar",
						text: "No se pudo borrar el usuario",
						icon: "error",
					});
					if (error.response.status === 401) {
						logout();
					}
				}
			}
		});
	}

	// FORMULARIO DE REGISTRA UN USUARIO
	// desestructuración
	const { register, handleSubmit, setValue } = useForm();

	async function submiteData(data) {
		try {
			console.log(data);
			const formData = new FormData();
			// formData.append("firstName", data.firstName);
			// formData.append("lastName", data.lastName);
			// formData.append("email", data.email);
			// formData.append("password", data.password);
			// formData.append("location", data.location);
			// formData.append("bornDate", data.bornDate);
			// formData.append("age", data.age);
			// formData.append("userImage", data.userImage[0]);
			// formData.append("active", data.active);

			for (const key of Object.keys(data)) {
				if (key === "userImage") {
					formData.append(key, data.userImage[0]);
				}
				formData.append(key, data[key]);
			}

			console.log(formData.get("userImage"));

			// PARA EDITAR UN USUARIO
			if (userID) {
				if (!TOKEN) {
					return;
				}
				const response = await axios.put(`${URL}/users/${userID}`, formData, {
					headers: { authorization: TOKEN },
				});
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `El usuario  ${response.data.user?.firstName} fue editado correctamente`,
					showConfirmButton: false,
					timer: 1500,
				});
				getUsers();
				setUserid(null);
				return;
			}
			const response = await axios.post(`${URL}/users`, formData, {
				headers: { authorization: TOKEN },
			});
			console.log(response);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: `El usuario ${response.data.user?.firstName} fue creado correctamente`,
				showConfirmButton: false,
				timer: 1500,
			});
			getUsers();
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

	function setFormValue(user) {
		setUserid(user?._id || null);
		setValue("firstName", user?.firstName || "");
		setValue("lastName", user?.lastName || "");
		setValue("email", user?.email || "");
		setValue("location", user?.location._id || "");
		setValue("bornDate", formatDateInput(user?.bornDate) || "");
		setValue("age", user?.age || "");
		setValue("userImage", user?.userImage || "");
		setValue("active", user?.active || false);
	}

	async function handleSearch(e) {
		try {
			const search = e.target.value;

			if (!search) {
				getUsers();
			}

			if (search.length <= 3) {
				return;
			}

			const response = await axios.get(`${URL}/users/search/${search}`);
			const users = response.data.users;
			setDbUsers(users);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="admin-user-container">
			<div className="left-container">
				<form
					className="adminUser-form"
					onSubmit={handleSubmit(submiteData)}
					encType="multipart/form-data"
				>
					<div className="form-title-container">
						<TitleActive
							title={userID ? "EDITAR USUARIO" : "CREA UN USUARIO"}
							subtitle={
								userID
									? "Edita los datos del usuario"
									: "Crea una cuenta con su correo eléctronico"
							}
						/>
					</div>
					<div className="main-form-container">
						<input name="id" style={{ display: "none" }} type="text" />

						<div className="flex-row">
							<div className="input-group">
								<label className="label-form" htmlFor="inputFirstName">
									Nombres*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faUser} />
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
								<label className="label-form" htmlFor="inputLastName">
									Apellidos*
								</label>
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
							<label className="label-form" htmlFor="inputEmail">
								Email*
							</label>
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
								<label className="label-form" htmlFor="inputPwd">
									Contraseña*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faLock} />
									<input
										className="inputIcon"
										type="password"
										name="password"
										id="inputPwd"
										pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
										disabled={userID}
										required
										{...register("password")}
									/>
								</div>
							</div>

							<div className="input-group">
								<label className="label-form" htmlFor="inputConfirmPwd">
									Confirmar Contraseña*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faLock} />
									<input
										className="inputIcon"
										type="password"
										name="password2"
										id="inputConfirmPwd"
										pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
										disabled={userID}
										required
									/>
								</div>
							</div>
						</div>

						<div className="input-group">
							<label className="label-form" htmlFor="inputLocation">
								Localidad*
							</label>
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
								<label className="label-form" htmlFor="inputBornDate">
									Cumpleaños*
								</label>
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
								<label className="label-form" htmlFor="inputAge">
									Edad*
								</label>
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
							<label className="label-form" htmlFor="inputProfileImg">
								Foto de Perfil (archivo)
							</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faImage} />
								<input
									className="inputIcon"
									id="inputProfileImg"
									type="file"
									accept="image/*"
									name="userImage"
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

						<div className="flex-row">
							<div className="input-group">
								<button
									className={userID ? "buttonSimple btn-edit" : "buttonSimple"}
									type="submit"
								>
									{userID ? "Editar Usuario" : "Añadir Usuario"}
								</button>
							</div>

							{userID && (
								<div className="input-group">
									<button
										className="buttonSimple btn-cancel"
										onClick={() => setFormValue()}
									>
										Cancelar
									</button>
								</div>
							)}
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
						placeholder="Buscar por su nombre o correo..."
						onKeyUp={handleSearch}
					/>
				</div>

				<UserTable
					users={dbUsers}
					deleteUser={deleteUser}
					setFormValue={setFormValue}
				/>

				<div className="pagination-container">
					<div className="pagination-page">
						<ul className="pagination modal-1">
							<li>
								<button onClick={null}>
									{" "}
									<FontAwesomeIcon icon={faArrowLeft} />{" "}
								</button>
							</li>
							{Array.from({ length: Math.ceil(totalButtons / limit) }).map(
								(_, idx) => (
									<li key={idx}>
										<button onClick={() => getUsers(idx)}>{idx + 1}</button>
									</li>
								),
							)}
							<li>
								<button onClick={null}>
									{" "}
									<FontAwesomeIcon icon={faArrowRight} />{" "}
								</button>
							</li>
						</ul>
					</div>
					<div className="pagination-show">
						Mostrar
						<select onChange={(e) => setLimit(e.target.value)}>
							<option value={10}>10</option>
							<option value={20}>20</option>
							<option value={30}>30</option>
						</select>
						por página
					</div>
				</div>
			</div>
		</div>
	);
}
