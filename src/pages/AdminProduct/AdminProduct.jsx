import "./AdminProduct.css";
import TitleActive from "../../components/TitleActive/TitleActive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCar,
	faChartLine,
	faDollarSign,
	faGasPump,
	faGaugeHigh,
	faGear,
	faHorse,
	faMagnifyingGlass,
	faPalette,
	faShield,
	faSwatchbook,
	faUsers,
	faCalendarDays,
	faImage,
	faStar,
	faGripHorizontal,
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { ProductTable } from "../../components/ProductTable/ProductTable";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import formatDateInput from "../../utils/formatDateInput";
const URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = localStorage.getItem("token");

export default function AdminProduct() {
	// GET DATOS LOS MODELOS DE AUTOS DE LA BASE DE DATOS
	const [dbModelCars, setDbModelCars] = useState([]);
	const [dbBrands, setBrands] = useState([]);
	const [dbTypes, setTypes] = useState([]);
	const [dbtransmissions, setTransmissions] = useState([]);
	const [dbFuels, setFuels] = useState([]);
	const [modelCarID, setModelCarID] = useState();

	const [totalButtons, setTotalButtons] = useState(0);
	const [limit, setLimit] = useState(10);

	const { logout } = useUser();

	async function getModelCars(page = 0) {
		try {
			const response = await axios.get(
				`${URL}/modelcars?page=${page}&limit=${limit}`,
			);
			const modelCars = response.data.modelCars;
			const total = response.data.total;
			setDbModelCars(modelCars);
			setTotalButtons(total);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los modelos de vehículos",
			});
		}
	}

	async function getBrands() {
		try {
			const response = await axios.get(`${URL}/brands`);
			const brands = response.data.brands;
			setBrands(brands);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener las marcas de vehículos",
			});
		}
	}

	async function getTypeCars() {
		try {
			const response = await axios.get(`${URL}/types`);
			const typeCars = response.data.typesCar;
			setTypes(typeCars);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los tipos de vehículos",
			});
		}
	}

	async function getTransmissions() {
		try {
			const response = await axios.get(`${URL}/transmissions`);
			const transmissions = response.data.transmissions;
			setTransmissions(transmissions);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los tipos de transmisiones de vehículos",
			});
		}
	}

	async function getFuels() {
		try {
			const response = await axios.get(`${URL}/fuels`);
			const fuels = response.data.fuels;
			setFuels(fuels);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los tipos de transmisiones de vehículos",
			});
		}
	}

	useEffect(function () {
		getModelCars();
		getBrands();
		getTypeCars();
		getTransmissions();
		getFuels();
	}, []);

	// BORRAR UN MODELO DE AUTO EN LA BASE DE DATOS
	async function deleteModelCar(id) {
		Swal.fire({
			title: "Desea borrar el auto?",
			text: "Esta acción no es revertible",
			showCancelButton: true,
			confirmButtonText: "Borrar",
			cancelButtonText: `Cancelar`,
		}).then(async function (result) {
			if (result.isConfirmed) {
				try {
					if (!TOKEN) return;
					await axios.delete(`${URL}/modelcars/${id}`, {
						headers: { authorization: TOKEN },
					});
					Swal.fire(`Se borro el auto ${id}!`, "", "success");
					getModelCars();
				} catch (error) {
					console.log(error);
					Swal.fire({
						title: "Error al borrar",
						text: "No se pudo borrar el auto",
						icon: "error",
					});
					if (error.response.status === 401) {
						logout();
					}
				}
			}
		});
	}

	// FORMULARIO DE REGISTRA UN VEHICULO
	const { register, handleSubmit, setValue } = useForm();

	async function submiteData(data) {
		try {
			const formData = new FormData();

			for (const key of Object.keys(data)) {
				if (key === "carImage") {
					formData.append(key, data.carImage[0]);
				}
				formData.append(key, data[key]);
			}
			// PARA EDITAR UN USUARIO
			if (modelCarID) {
				if (!TOKEN) {
					return;
				}
				const response = await axios.put(
					`${URL}/modelcars/${modelCarID}`,
					formData,
					{
						headers: { authorization: TOKEN },
					},
				);
				console.log(response.data);
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `El vehículo ${response.data} fue editado correctamente`,
					showConfirmButton: false,
					timer: 1500,
				});
				getModelCars();
				setModelCarID(null);
				return;
			}

			console.log(data);
			const response = await axios.post(`${URL}/modelcars`, formData, {
				headers: { authorization: TOKEN },
			});
			console.log(response);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Se registro el modelo de auto",
				showConfirmButton: false,
				timer: 1500,
			});
			getModelCars();
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se registro el modelo de auto",
				text: "Alguno de los datos ingresados no es correcto!",
			});
			if (error.response.status === 401) {
				logout();
			}
		}
	}

	function setFormValue(modelCar) {
		setModelCarID(modelCar?._id || null);
		setValue("brand", modelCar?.brand._id || "");
		setValue("model", modelCar?.model || "");
		setValue("engine", modelCar?.engine || "");
		setValue("type", modelCar?.type._id || "");
		setValue("transmission", modelCar?.transmission._id || "");
		setValue("fuel", modelCar?.fuel._id || "");
		setValue("maxSpeed", modelCar?.maxSpeed || "");
		setValue("horsePowerHP", modelCar?.horsePowerHP || "");
		setValue("de0a60MPH", modelCar?.de0a60MPH || "");
		setValue("seats", modelCar?.seats || "");
		setValue("year", formatDateInput(modelCar?.year || ""));
		setValue("color", modelCar?.color || "#ffffff");
		setValue("ratingCount", modelCar?.ratingCount || "");
		setValue("price24h", modelCar?.price24h || "");
		setValue("carImage", modelCar?.carImage || "");
		setValue("description", modelCar?.description || "");
		setValue("active", modelCar?.active || false);
		setValue("featured", modelCar?.featured || false);
	}

	async function handleSearch(e) {
		try {
			const search = e.target.value;

			if (!search) {
				getModelCars();
			}

			if (search.length <= 3) {
				return;
			}

			const response = await axios.get(`${URL}/modelcars/search/${search}`);
			const modelCars = response.data.modelCars;
			setDbModelCars(modelCars);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="admin-container">
			<div className="left-container">
				<form
					className="adminProduct-form"
					onSubmit={handleSubmit(submiteData)}
					encType="multipart/form-data"
				>
					<div className="form-title-container">
						<TitleActive
							title={modelCarID ? "EDITAR UN VEHÍCULO" : "REGISTRA UN VEHÍCULO"}
							subtitle={
								modelCarID
									? "Edita los datos de un vehículo"
									: "Registra un vehículo en la flota."
							}
						/>
					</div>
					<div className="main-form-container">
						<input name="id" style={{ display: "none" }} type="text" />
						<div className="flex-row">
							<div className="input-group">
								<label className="label-form" htmlFor="inputBrand">
									Marca*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faShield} />
									<select
										className="inputIcon"
										name="brand"
										id="inputBrand"
										defaultValue={"DEFAULT"}
										{...register("brand")}
									>
										<option disabled value="DEFAULT">
											Selecciona...
										</option>
										{dbBrands.map((brand) => (
											<option key={brand._id} value={brand._id}>
												{brand.brand}
											</option>
										))}
									</select>
								</div>
							</div>

							<div className="input-group">
								<label className="label-form" htmlFor="inputModel">
									Modelo*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faCar} />
									<input
										className="inputIcon"
										type="text"
										name="model"
										id="inputModel"
										placeholder="Modelo"
										minLength="2"
										maxLength="30"
										required
										{...register("model")}
									/>
								</div>
							</div>

							<div className="input-group">
								<label className="label-form" htmlFor="inputEngine">
									Motor*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGear} />
									<input
										className="inputIcon"
										type="text"
										name="engine"
										id="inputEngine"
										placeholder="2.5 220CV"
										minLength="4"
										maxLength="20"
										required
										{...register("engine")}
									/>
								</div>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label className="label-form" htmlFor="selectType">
									Tipo*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faSwatchbook} />
									<select
										className="inputIcon"
										name="type"
										id="selectType"
										required
										defaultValue={"DEFAULT"}
										{...register("type")}
									>
										<option disabled value="DEFAULT">
											Selecciona...
										</option>
										{dbTypes.map((type) => (
											<option key={type._id} value={type._id}>
												{type.type}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="input-group">
								<label className="label-form" htmlFor="selectTransmission">
									Transmisión*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGripHorizontal} />
									<select
										className="inputIcon"
										name="transmission"
										id="selectTransmission"
										required
										defaultValue={"DEFAULT"}
										{...register("transmission")}
									>
										<option disabled value="DEFAULT">
											Selecciona...
										</option>
										{dbtransmissions.map((transmission) => (
											<option key={transmission._id} value={transmission._id}>
												{transmission.transmission}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="input-group">
								<label className="label-form" htmlFor="selectFuel">
									Combustible*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGasPump} />
									<select
										className="inputIcon"
										name="fuel"
										id="selectFuel"
										required
										defaultValue={"DEFAULT"}
										{...register("fuel")}
									>
										<option disabled value="DEFAULT">
											Selecciona...
										</option>
										{dbFuels.map((fuel) => (
											<option key={fuel._id} value={fuel._id}>
												{fuel.fuel}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label className="label-form" htmlFor="inputVelocidad">
									Velocidad Max.*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGaugeHigh} />
									<input
										className="inputIcon"
										type="number"
										name="maxSpeed"
										id="inputVelocidad"
										min="100"
										max="600"
										placeholder="100"
										required
										{...register("maxSpeed")}
									/>
								</div>
							</div>

							<div className="input-group">
								<label className="label-form" htmlFor="inputHP">
									HP*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faHorse} />
									<input
										className="inputIcon"
										type="number"
										name="horsePowerHP"
										id="inputHP"
										min="100"
										max="2000"
										placeholder="200"
										required
										{...register("horsePowerHP")}
									/>
								</div>
							</div>

							<div className="input-group">
								<label className="label-form" htmlFor="input060MPH">
									0 - 60 MPH*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faChartLine} />
									<input
										className="inputIcon"
										type="number"
										name="de0a60MPH"
										id="input060MPH"
										step="0.1"
										min="0.0"
										max="10.0"
										placeholder="0.0"
										required
										{...register("de0a60MPH")}
									/>
								</div>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label className="label-form" htmlFor="inputSeats">
									Asientos*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faUsers} />
									<input
										className="inputIcon"
										type="number"
										name="seats"
										id="inputSeats"
										min="1"
										max="10"
										placeholder="4"
										required
										{...register("seats")}
									/>
								</div>
							</div>
							<div className="input-group">
								<label className="label-form" htmlFor="inputReleaseYear">
									Año*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faCalendarDays} />
									<input
										className="inputIcon"
										type="date"
										name="year"
										id="inputReleaseYear"
										required
										{...register("year")}
									/>
								</div>
							</div>
							<div className="input-group">
								<label className="label-form" htmlFor="inputColor">
									Color
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faPalette} />
									<input
										className="inputIcon inputColor"
										type="color"
										defaultValue="#FFFFFF"
										name="color"
										id="inputColor"
										{...register("color")}
									/>
								</div>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label className="label-form" htmlFor="inputRatingCount">
									Calificación*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faStar} />
									<input
										className="inputIcon"
										type="number"
										name="ratingCount"
										id="inputRatingCount"
										step="1"
										min="0"
										max="5"
										placeholder="0"
										required
										{...register("ratingCount")}
									/>
								</div>
							</div>
							<div className="input-group">
								<label className="label-form" htmlFor="inputPrice24h">
									Precio/24h ($)*
								</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faDollarSign} />
									<input
										className="inputIcon"
										type="number"
										name="price24h"
										id="inputPrice24h"
										min="100"
										max="1500"
										placeholder="850"
										required
										{...register("price24h")}
									/>
								</div>
							</div>
						</div>
						<div className="input-group">
							<label className="label-form" htmlFor="inputCarImg">
								Imagen del Vehículo* (Archivo)
							</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faImage} />
								<input
									className="inputIcon"
									id="inputCarImg"
									type="file"
									accept="image/*"
									name="carImage"
									required
									{...register("carImage")}
								/>
							</div>
						</div>
						<div className="input-group">
							<label className="label-form" htmlFor="inputDescription">
								Descripción*
							</label>
							<textarea
								id="inputDescription"
								className="textareaSimple"
								name="description"
								rows="6"
								cols="50"
								placeholder="Escribe la descripción aquí..."
								required
								{...register("description")}
							></textarea>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label
									htmlFor="inputCarActive"
									className="cyberpunk-checkbox-label"
								>
									<input
										className="cyberpunk-checkbox"
										type="checkbox"
										name="active"
										id="inputCarActive"
										{...register("active")}
									/>
									Vehículo Activo
								</label>
							</div>
							<div className="input-group">
								<label
									htmlFor="inputCarFeatured"
									className="cyberpunk-checkbox-label"
								>
									<input
										className="cyberpunk-checkbox"
										type="checkbox"
										name="featured"
										id="inputCarFeatured"
										{...register("featured")}
									/>
									Vehículo Destacado
								</label>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<button
									className={
										modelCarID ? "buttonSimple btn-edit" : "buttonSimple"
									}
									type="submit"
								>
									{modelCarID ? "Editar Vehículo" : "Registrar Vehículo"}
								</button>
							</div>
							{modelCarID && (
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
						id="searchModelCar"
						placeholder="Buscar por modelo..."
						onKeyUp={handleSearch}
					></input>
				</div>

				<ProductTable
					modelCars={dbModelCars}
					deleteModelCar={deleteModelCar}
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
										<button onClick={() => getModelCars(idx)}>{idx + 1}</button>
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
