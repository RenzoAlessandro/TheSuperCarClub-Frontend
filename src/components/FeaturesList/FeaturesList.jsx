import "./FeaturesList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faCircleCheck,
	faStar,
	faCreditCard,
} from "@fortawesome/free-regular-svg-icons";

export default function FeaturesList() {
	return (
		<div className="features-list">
			<ul className="list-view">
				<li>
					<FontAwesomeIcon className="FontIcon" icon={faCircleCheck} />
					<div className="list-content">
						<h4>Comodidad</h4>
						<p>
							Sin largas colas. Le entregamos el automóvil en el aeropuerto,
							domicilio, hotel o lo recogemos en nuestra ubicación de Perú.
						</p>
					</div>
				</li>
				<li>
					<FontAwesomeIcon className="FontIcon" icon={faStar} />
					<div className="list-content">
						<h4>Calidad</h4>
						<p>
							Una amplia variedad de coches exóticos y de lujo de última
							generación, siempre muy limpios y en las mejores condiciones.
						</p>
					</div>
				</li>
				<li>
					<FontAwesomeIcon className="FontIcon" icon={faCreditCard} />
					<div className="list-content">
						<h4>Transparencia</h4>
						<p>
							Si aparece online, no paga por ello. Sin tarifas ocultas,
							transparente y listo para funcionar.
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
}
