import "./CardStyleThird.css";
import isoTipo from "../../assets/brands/isotipo-Lamborghini.webp";
// import autoImg from "../../assets/modelsCars/Lamborghini/Lamborguini-Huracan-Evo-Spider.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faCarSide,
	faDroplet,
	faRetweet,
} from "@fortawesome/free-solid-svg-icons";

export const CardStyleThird = ({ modelCar }) => {
	return (
		<article className="card-cars-second">
			<header className="card-cars-second-header">
				<div className="card-second-info">
					<img
						className="card-second-logo"
						src={isoTipo}
						alt="Logo Alfa Romeo"
					/>
					<div className="card-second-name">
						<h2 className="card-second-make">{modelCar.brand}</h2>
						<p className="card-second-model">{modelCar.model}</p>
					</div>
				</div>
				<img
					className="card-second-img"
					src="https://www.bmw.com.pe/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg"
					alt={modelCar.model}
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
						<p>{modelCar.transmission}</p>
					</div>
					<div className="card-tag card-second-fuel">
						<FontAwesomeIcon icon={faDroplet} />
						<p>{modelCar.fuel}</p>
					</div>
					<div className="card-tag card-second-type">
						<FontAwesomeIcon icon={faCarSide} />
						<p>{modelCar.type}</p>
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
				<a className="card-second-btn" onClick={null}>
					Ver más
				</a>
				<button className="card-second-btn" onClick={null}>
					Alquilar
				</button>
			</footer>
		</article>
	);
};

export default CardStyleThird;
