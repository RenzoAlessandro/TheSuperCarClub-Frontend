import { useEffect, useState } from "react";
import "./ModelsCar.css";
import axios from "axios";
import CardStyleSecond from "../../components/CardStyleSecond/CardStyleSecond";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faCar,
	faGasPump,
	faGripHorizontal,
	faLocationDot,
	faShield,
	faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
const URL = import.meta.env.VITE_SERVER_URL;

export default function ModelsCar() {
	const [modelCars, setModelCars] = useState([]);

	useEffect(function () {
		getModelCars();
	}, []);

	async function getModelCars() {
		try {
			const response = await axios.get(`${URL}/modelcars`);
			setModelCars(response.data.modelCars);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="modelcar-main-container">
			<div className="modelcar-container search-container">
				<form>
					<div className="flex-row">
						<div className="input-group">
							<label className="label-form" htmlFor="inputBrand">
								Marca de Auto
							</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faShield} />
								<select className="inputIcon" name="brand" id="inputBrand">
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
							<label className="label-form" htmlFor="inputModel">
								Modelo de Auto
							</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faCar} />
								<input
									className="inputIcon"
									type="text"
									name="model"
									id="inputModel"
									placeholder="Modelo"
									minLength="4"
									maxLength="30"
									required
								/>
							</div>
						</div>

						<div className="input-group">
							<label className="label-form" htmlFor="inputLocation">
								Lugar de Recogida
							</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faLocationDot} />
								<select
									className="inputIcon"
									name="location"
									id="inputLocation"
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

						<div className="input-group">
							<label className="label-form" htmlFor="inputReservationDate">
								Fecha de Reserva
							</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faCalendarDays} />
								<input
									className="inputIcon"
									type="date"
									name="ReservationDate"
									id="inputReservationDate"
									required
								/>
							</div>
						</div>

						<div className="input-group">
							<button className="buttonSimple" type="submit">
								Buscar
							</button>
						</div>
					</div>
				</form>
			</div>

			<div className="body-container">
				<div className="modelcar-container filter-container">
					<h2>Filtros</h2>

					<div className="input-group">
						<label className="label-form" htmlFor="selectType">
							Rango de Precios
						</label>
						<input type="range" />
					</div>

					<div className="input-group">
						<label className="label-form" htmlFor="selectType">
							Año
						</label>
						<input type="range" />
					</div>

					<div className="input-group">
						<label className="label-form" htmlFor="selectType">
							Tipo de Auto
						</label>
						<div className="inputIconForm">
							<FontAwesomeIcon icon={faSwatchbook} />
							<select className="inputIcon" name="type" id="selectType">
								<option value="Deportivo">Deportivo</option>
								<option value="Convertible">Convertible</option>
								<option value="Sedan">Sedan</option>
								<option value="Eléctrico">Eléctrico</option>
								<option value="Supercar">Supercar</option>
								<option value="SUV">SUV</option>
								<option value="Ultra Luxury">Ultra Luxury</option>
							</select>
						</div>
					</div>

					<div className="input-group">
						<label className="label-form" htmlFor="selectTransmission">
							Transmisión
						</label>
						<div className="inputIconForm">
							<FontAwesomeIcon icon={faGripHorizontal} />
							<select
								className="inputIcon"
								name="transmission"
								id="selectTransmission"
							>
								<option value="Mecánico">Mecánico</option>
								<option value="Automático">Automático</option>
							</select>
						</div>
					</div>

					<div className="input-group">
						<label className="label-form" htmlFor="selectFuel">
							Combustible
						</label>
						<div className="inputIconForm">
							<FontAwesomeIcon icon={faGasPump} />
							<select className="inputIcon" name="fuel" id="selectFuel">
								<option value="Gasolina">Gasolina</option>
								<option value="Diesel">Diesel</option>
								<option value="Eléctrico">Eléctrico</option>
							</select>
						</div>
					</div>
				</div>

				<div className="modelcar-container results-container">
					<h2>Mostrando resultados</h2>
					<section className="card-cars-first-container">
						{modelCars.map((modelCar) => {
							return <CardStyleSecond key={modelCar._id} modelCar={modelCar} />;
						})}
					</section>
				</div>
			</div>
		</div>
	);
}
