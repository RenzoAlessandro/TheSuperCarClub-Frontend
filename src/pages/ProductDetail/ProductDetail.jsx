import "./ProductDetail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageNotAvailable from "../../assets/defaults/no-image.png";
import Swal from "sweetalert2";
import { useOrder } from "../../context/OrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChartLine,
	faDollar,
	faGaugeHigh,
	faGear,
	faHorse,
} from "@fortawesome/free-solid-svg-icons";
const URL = import.meta.env.VITE_SERVER_URL;

export const ProductDetail = () => {
	const { addItem } = useOrder();
	const { id } = useParams();
	const [dbModelCars, setDbModelCars] = useState({});

	async function getModelCarDetail(id) {
		try {
			const response = await axios.get(`${URL}/modelcars/${id}`);
			const modelCar = response.data.modelCar;
			setDbModelCars(modelCar);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener los modelos de vehículos",
			});
		}
	}

	useEffect(() => {
		getModelCarDetail(id);
	}, [id]);

	return (
		<div className="container-wallpaper">
			<header className="model-img-container">
				<p className="modelCar-text-background">{dbModelCars.model}</p>
				<img
					className="modelCar-img-body"
					src={
						dbModelCars.carImage
							? `${URL}/images/modelsCars/${dbModelCars.carImage}`
							: imageNotAvailable
					}
					alt={`Modelo ${dbModelCars.model}`}
				/>
			</header>

			<section className="info-modelCar-footer">
				<div className="info-modelCar">
					<img
						className="detail-modelCars-logo"
						src={
							dbModelCars.brand?.imagoTipo
								? dbModelCars.brand?.imagoTipo
								: imageNotAvailable
						}
						alt={`Marca ${dbModelCars.brand?.brand}`}
					/>
				</div>

				<div className="info-modelCar">
					<FontAwesomeIcon icon={faGear} />
					<h4>Motor</h4>
					<p>{dbModelCars.engine}</p>
				</div>
				<div className="info-modelCar">
					<FontAwesomeIcon icon={faGaugeHigh} />
					<h4>Vel. Max.</h4>
					<p>{dbModelCars.maxSpeed} km/h</p>
				</div>
				<div className="info-modelCar">
					<FontAwesomeIcon icon={faChartLine} />
					<h4>0 - 100 km/h</h4>
					<p>{dbModelCars.de0a60MPH} seg.</p>
				</div>
				<div className="info-modelCar">
					<FontAwesomeIcon icon={faHorse} />
					<h4>HP</h4>
					<p>{dbModelCars.horsePowerHP}</p>
				</div>
				<div className="info-modelCar">
					<FontAwesomeIcon icon={faDollar} />
					<h4>Precio/24h</h4>
					<p>{dbModelCars.price24h}</p>
				</div>
				<div className="info-modelCar">
					<a className="reservar-btn" onClick={() => addItem(dbModelCars)}>
						Reservar
					</a>
				</div>
			</section>
		</div>
	);
};
