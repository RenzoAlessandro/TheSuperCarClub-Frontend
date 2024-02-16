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
} from "@fortawesome/free-solid-svg-icons";
import { ProductTable } from "../../components/ProductTable/ProductTable";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
const URL = import.meta.env.VITE_SERVER_URL;

export default function AdminProduct() {
	const { register, handleSubmit } = useForm();

	async function submiteData(data) {
		try {
			const modelCar = await axios.post(`${URL}/modelcars`, data);
			console.log(modelCar);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se creo el modelo",
				text: "Alguno de los datos ingresados no es correcto!",
			});
		}
	}

	return (
		<div className="admin-container">
			<div className="left-container">
				<form
					className="adminProduct-form"
					onSubmit={handleSubmit(submiteData)}
				>
					<div className="form-title-container">
						<TitleActive
							title="REGISTRA UN VEHÍCULO"
							subtitle="Registra un vehículo en la flota."
						/>
					</div>
					<div className="main-form-container">
						<input name="id" style={{ display: "none" }} type="text" />
						<div className="flex-row">
							<div className="input-group">
								<label htmlFor="inputBrand">Marca*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faShield} />
									<select
										className="inputIcon"
										name="brand"
										id="inputBrand"
										{...register("brand")}
									>
										<option value="Alfa Romeo">Alfa Romeo</option>
										<option value="Aston Martin">Aston Martin</option>
										<option value="Audi">Audi</option>
										<option value="Bentley">Bentley</option>
										<option value="BMW">BMW</option>
										<option value="Bugatti">Bugatti</option>
										<option value="Chevrolet">Chevrolet</option>
										<option value="Corvette">Corvette</option>
										<option value="Dodge">Dodge</option>
										<option value="Ferrari">Ferrari</option>
										<option value="Ford">Ford</option>
										<option value="Jaguar">Jaguar</option>
										<option value="Koenigsegg">Koenigsegg</option>
										<option value="Lamborghini">Lamborghini</option>
										<option value="Maserati">Maserati</option>
										<option value="Mazda">Mazda</option>
										<option value="McLaren">McLaren</option>
										<option value="Mercedes Benz">Mercedes Benz</option>
										<option value="Mini Cooper">Mini Cooper</option>
										<option value="Nissan">Nissan</option>
										<option value="Pagani">Pagani</option>
										<option value="Porsche">Porsche</option>
										<option value="Rolls Royce">Rolls Royce</option>
										<option value="Tesla">Tesla</option>
									</select>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputModel">Modelo*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faCar} />
									<input
										className="inputIcon"
										type="text"
										name="model"
										id="inputModel"
										placeholder="Modelo"
										minLength="4"
										maxLength="50"
										required
										{...register("model")}
									/>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputEngine">Motor*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGear} />
									<input
										className="inputIcon"
										type="text"
										name="engine"
										id="inputEngine"
										placeholder="2.5 220CV"
										minLength="4"
										maxLength="50"
										required
										{...register("engine")}
									/>
								</div>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label htmlFor="selectType">Tipo*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faSwatchbook} />
									<select
										className="inputIcon"
										name="type"
										id="selectType"
										{...register("type")}
									>
										<option value="0">Deportivo</option>
										<option value="1">Convertible</option>
										<option value="2">Sedan</option>
										<option value="3">Eléctrico</option>
										<option value="4">Supercar</option>
										<option value="5">SUV</option>
										<option value="6">Ultra Luxury</option>
									</select>
								</div>
							</div>
							<div className="input-group">
								<label htmlFor="selectTransmission">Transmisión*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGripHorizontal} />
									<select
										className="inputIcon"
										name="transmission"
										id="selectTransmission"
										{...register("transmission")}
									>
										<option value="Mecánico">Mecánico</option>
										<option value="Automático">Automático</option>
									</select>
								</div>
							</div>
							<div className="input-group">
								<label htmlFor="selectFuel">Combustible*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGasPump} />
									<select
										className="inputIcon"
										name="fuel"
										id="selectFuel"
										{...register("fuel")}
									>
										<option value="Gasolina">Gasolina</option>
										<option value="Diesel">Diesel</option>
										<option value="Eléctrico">Eléctrico</option>
									</select>
								</div>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label htmlFor="inputVelocidad">Velocidad Max.*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faGaugeHigh} />
									<input
										className="inputIcon"
										type="number"
										name="maxSpeed"
										id="inputVelocidad"
										min="100"
										max="500"
										placeholder="100"
										required
										{...register("maxSpeed")}
									/>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="inputHP">HP*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faHorse} />
									<input
										className="inputIcon"
										type="number"
										name="horsePowerHP"
										id="inputHP"
										min="100"
										max="1500"
										placeholder="200"
										required
										{...register("horsePowerHP")}
									/>
								</div>
							</div>

							<div className="input-group">
								<label htmlFor="input060MPH">0 - 60 MPH*</label>
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
								<label htmlFor="inputSeats">Asientos*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faUsers} />
									<input
										className="inputIcon"
										type="number"
										name="seats"
										id="inputSeats"
										min="1"
										max="10"
										placeholder="2"
										required
										{...register("seats")}
									/>
								</div>
							</div>
							<div className="input-group">
								<label htmlFor="inputReleaseYear">Año*</label>
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
								<label htmlFor="inputColor">Color*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faPalette} />
									<input
										className="inputIcon inputColor"
										type="color"
										defaultValue="#A8A8A8"
										name="color"
										id="inputColor"
										required
										{...register("color")}
									/>
								</div>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label htmlFor="inputRatingCount">Calificación*</label>
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
										placeholder="2"
										required
										{...register("ratingCount")}
									/>
								</div>
							</div>
							<div className="input-group">
								<label htmlFor="inputPrice24h">Precio/24h ($)*</label>
								<div className="inputIconForm">
									<FontAwesomeIcon icon={faDollarSign} />
									<input
										className="inputIcon"
										type="number"
										name="price24h"
										id="inputPrice24h"
										min="1"
										placeholder="850"
										required
										{...register("price24h")}
									/>
								</div>
							</div>
						</div>
						<div className="input-group">
							<label htmlFor="inputCarImg">Imagen del Vehículo (URL)*</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faImage} />
								<input
									className="inputIcon"
									id="inputCarImg"
									type="url"
									name="carImage"
									defaultValue="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/ES-PLA-local/2022/Vehiculos/El-nuevo-Porsche-911-Turbo-S-llega-Ecuador/PLA22_1125_fine.jpg/jcr:content/PLA22_1125_fine.jpg"
									required
									{...register("carImage")}
								/>
							</div>
						</div>
						<div className="input-group">
							<label htmlFor="inputDescription">Descripción*</label>
							<textarea
								id="inputDescription"
								className="textareaSimple"
								name="description"
								rows="6"
								cols="50"
								placeholder="Escribe algo aquí..."
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

						<div className="input-group">
							<button className="buttonSimple" type="submit">
								Registrar Vehículo
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
						id="searchModelCar"
						placeholder="Buscar por modelo..."
					></input>
				</div>

				<ProductTable />
			</div>
		</div>
	);
}