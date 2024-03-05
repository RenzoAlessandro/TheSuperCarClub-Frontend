import { useEffect, useState } from "react";
import "./ModelsCar.css";
import axios from "axios";
import CardStyleSecond from "../../components/CardStyleSecond/CardStyleSecond";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowRight,
	faCalendarDays,
	faCar,
	faGasPump,
	faGripHorizontal,
	faLocationDot,
	faShield,
	faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
const URL = import.meta.env.VITE_SERVER_URL;

export default function ModelsCar() {
	const [modelCars, setModelCars] = useState([]);
	const [dbBrands, setBrands] = useState([]);
	const [dbLocations, setDbLocations] = useState([]);
	const [dbtransmissions, setTransmissions] = useState([]);
	const [dbFuels, setFuels] = useState([]);
	const [dbTypes, setTypes] = useState([]);

	const [totalButtons, setTotalButtons] = useState(0);
	const [limit, setLimit] = useState(12);

	async function getModelCars(page = 0) {
		try {
			const response = await axios.get(
				`${URL}/modelcars?page=${page}&limit=${limit}`,
			);
			setModelCars(response.data.modelCars);
			const total = response.data.total;
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

	useEffect(function () {
		getModelCars();
		getBrands();
		getLocations();
		getFuels();
		getTransmissions();
		getTypeCars();
	}, []);

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
			setModelCars(modelCars);
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
									{dbBrands.map((brand) => (
										<option key={brand._id} value={brand._id}>
											{brand.brand}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="input-group">
							<label className="label-form" htmlFor="searchModelCar">
								Modelo de Auto
							</label>
							<div className="inputIconForm">
								<FontAwesomeIcon icon={faCar} />
								<input
									className="inputIcon"
									type="text"
									id="searchModelCar"
									placeholder="Buscar por modelo..."
									onKeyUp={handleSearch}
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
									{dbLocations.map((location) => (
										<option key={location._id} value={location._id}>
											{location.location}
										</option>
									))}
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
						<input className="custon-range" type="range" />
					</div>

					<div className="input-group">
						<label className="label-form" htmlFor="selectType">
							Año
						</label>
						<input className="custon-range" type="range" />
					</div>

					<div className="input-group">
						<label className="label-form" htmlFor="selectType">
							Tipo de Auto
						</label>
						<div className="inputIconForm">
							<FontAwesomeIcon icon={faSwatchbook} />
							<select className="inputIcon" name="type" id="selectType">
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
							Transmisión
						</label>
						<div className="inputIconForm">
							<FontAwesomeIcon icon={faGripHorizontal} />
							<select
								className="inputIcon"
								name="transmission"
								id="selectTransmission"
							>
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
							Combustible
						</label>
						<div className="inputIconForm">
							<FontAwesomeIcon icon={faGasPump} />
							<select className="inputIcon" name="fuel" id="selectFuel">
								{dbFuels.map((fuel) => (
									<option key={fuel._id} value={fuel._id}>
										{fuel.fuel}
									</option>
								))}
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
											<button onClick={() => getModelCars(idx)}>
												{idx + 1}
											</button>
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
								<option value={12}>12</option>
								<option value={20}>20</option>
								<option value={30}>30</option>
							</select>
							por página
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
