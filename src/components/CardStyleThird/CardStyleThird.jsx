import "./CardStyleThird.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faCarSide,
	faDroplet,
	faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { useOrder } from "../../context/OrderContext";
import imageNotAvailable from "../../assets/defaults/no-image.png";
import { Link } from "react-router-dom";
const URL = import.meta.env.VITE_SERVER_URL;

export const CardStyleThird = ({ modelCar }) => {
	const { addItem } = useOrder();

	return (
		<article className="card-cars-second">
			<header className="card-cars-second-header">
				<div className="card-second-info">
					<img
						className="card-second-logo"
						src={modelCar.brand.isoTipo}
						alt="Logo Alfa Romeo"
					/>
					<div className="card-second-name">
						<h2 className="card-second-make">{modelCar.brand.brand}</h2>
						<p className="card-second-model">{modelCar.model}</p>
					</div>
				</div>
				<img
					className="card-second-img"
					src={
						modelCar.carImage
							? `${URL}/images/modelsCars/${modelCar.carImage}`
							: imageNotAvailable
					}
					alt={`Modelo ${modelCar.model}`}
				/>
			</header>
			<div className="card-second-body">
				<div className="card-second-features">
					<div className="card-tag card-second-seats">
						<FontAwesomeIcon icon={faUser} />
						<p>{modelCar.seats}</p>
					</div>
					<div className="card-tag card-second-transmission">
						<FontAwesomeIcon icon={faRetweet} />
						<p>{modelCar.transmission.transmission}</p>
					</div>
					<div className="card-tag card-second-fuel">
						<FontAwesomeIcon icon={faDroplet} />
						<p>{modelCar.fuel.fuel}</p>
					</div>
					<div className="card-tag card-second-type">
						<FontAwesomeIcon icon={faCarSide} />
						<p>{modelCar.type.type}</p>
					</div>
				</div>
				<p className="card-second-description">{modelCar.description}</p>
				<div className="card-second-values">
					<div className="card-second-date">13/09/2023</div>
					<div className="card-second-price">
						<p className="text-second-price">${modelCar.price24h}</p>
						<p>/día</p>
					</div>
				</div>
			</div>
			<footer className="card-second-footer">
				<Link
					className="card-second-btn"
					to={`/product-detail/${modelCar._id}`}
				>
					Ver más
				</Link>
				<button className="card-second-btn" onClick={() => addItem(modelCar)}>
					Rentar
				</button>
			</footer>
		</article>
	);
};

export default CardStyleThird;
