import "./CardStyleSecond.css";
// import autoImg from "../../assets/modelsCars/Lamborghini/Lamborguini-Huracan-Evo-Spider.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faCarSide,
	faDroplet,
	faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import imageNotAvailable from "../../assets/defaults/no-image.png";
import { Link } from "react-router-dom";
const URL = import.meta.env.VITE_SERVER_URL;

export const CardStyleSecond = ({ modelCar }) => {
	function hexToRGB(hex) {
		let r, g, b;
		//  convertimos hex a rgb
		// 3 digits
		if (hex.length === 4) {
			r = "0x" + hex[1] + hex[1];
			g = "0x" + hex[2] + hex[2];
			b = "0x" + hex[3] + hex[3];

			// 6 digits
		} else if (hex.length === 7) {
			r = "0x" + hex[1] + hex[2];
			g = "0x" + hex[3] + hex[4];
			b = "0x" + hex[5] + hex[6];
		}

		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		const cmin = Math.min(r, g, b);
		const cmax = Math.max(r, g, b);
		const delta = cmax - cmin;
		let h = 0;

		// Calculate hue
		// No difference
		if (delta === 0) h = 0;
		// Red is max
		else if (cmax === r) h = ((g - b) / delta) % 6;
		// Green is max
		else if (cmax === g) h = (b - r) / delta + 2;
		// Blue is max
		else h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) {
			h += 360;
		}
		return h;
	}
	function getPastelHigthColor(hex) {
		hex = hex.toString();
		const hue = hexToRGB(hex);
		// Calculate lightness
		const l = 96;
		// Calculate saturation
		const s = 100;
		return "hsl(" + hue + "," + s + "%," + l + "%)";
	}

	function getPastelStrongColor(hex) {
		hex = hex.toString();
		const hue = hexToRGB(hex);
		// Calculate lightness
		const l = 90;
		// Calculate saturation
		const s = 100;
		return "hsl(" + hue + "," + s + "%," + l + "%)";
	}

	return (
		<Link
			to={`/product-detail/${modelCar._id}`}
			style={{ textDecoration: "none" }}
		>
			<article className="card-cars-first">
				<header
					style={{ backgroundColor: getPastelHigthColor(modelCar.color) }}
					className="card-first-header"
				>
					<div className="card-first-info">
						<img
							className="card-first-logo"
							src={modelCar.brand.isoTipo}
							alt={modelCar.model}
						/>
						<div className="card-first-name">
							<h2 className="card-first-make">{modelCar.brand.brand}</h2>
							<p className="card-first-model">{modelCar.model}</p>
						</div>
					</div>
					<img
						className="card-first-img"
						src={
							modelCar.carImage
								? `${URL}/images/modelsCars/${modelCar.carImage}`
								: imageNotAvailable
						}
						alt={`Modelo ${modelCar.model}`}
					/>
				</header>
				<div
					style={{ backgroundColor: getPastelStrongColor(modelCar.color) }}
					className="card-first-body"
				>
					<div className="card-first-features">
						<div className="card-first-seats">
							<FontAwesomeIcon icon={faUser} />
							<p>{modelCar.seats}</p>
						</div>
						<div className="card-first-transmission">
							<FontAwesomeIcon icon={faRetweet} />
							<p>{modelCar.transmission.abbreviation}</p>
						</div>
						<div className="card-first-fuel">
							<FontAwesomeIcon icon={faDroplet} />
							<p>{modelCar.fuel.fuel}</p>
						</div>
						<div className="card-first-type">
							<FontAwesomeIcon icon={faCarSide} />
							<i className="fa-solid fa-car-side"></i>
							<p>{modelCar.type.type}</p>
						</div>
					</div>
					<div className="card-first-price">
						<i className="text-price fa-solid fa-dollar-sign">
							${modelCar.price24h}
						</i>
						<p>/día</p>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default CardStyleSecond;
