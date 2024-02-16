import SectionTitle from "../SectionTitle/SectionTitle";
import "./ApproachList.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function ApproachList() {
	return (
		<>
			<SectionTitle
				title="El enfoque de The SuperCarClub"
				subtitle="3 enfoques"
			/>
			<section className="features-section">
				<div className="feature">
					<i className="fa-solid fa-car"></i>
					{/* <FontAwesomeIcon icon={faUser} /> */}
					<h2>Experiencia de Lujo</h2>
					<p>
						Enfoque en ofrecer una experiencia de alquiler de autos de lujo que
						va más allá de simplemente proporcionar un vehículo. Esto puede
						incluir servicios adicionales como entrega y recogida
						personalizadas, paquetes de experiencia VIP que incluyan reservas en
						restaurantes exclusivos o actividades de ocio de alta gama, así como
						atención al cliente excepcional durante todo el proceso de alquiler.
					</p>
				</div>
				<div className="feature">
					<i className="fa-solid fa-laptop"></i>
					{/* <FontAwesomeIcon icon={faUser} /> */}
					<h2>Personalización y Flexibilidad</h2>
					<p>
						Destacar por ofrecer un enfoque altamente personalizado y flexible
						para adaptarse a las necesidades y deseos específicos de los
						clientes. Esto puede incluir opciones de personalización del
						vehículo, como selección de colores y características especiales,
						así como la posibilidad de crear paquetes de alquiler a medida que
						se ajusten a los requisitos de tiempo y presupuesto de cada cliente.
					</p>
				</div>
				<div className="feature">
					<i className="fa-solid fa-clock"></i>
					{/* <FontAwesomeIcon icon={faUser} /> */}
					<h2>Conciencia Ambiental</h2>
					<p>
						Diferenciarse mediante la oferta de una flota de vehículos
						deportivos y de lujo que sean eléctricos, híbridos o de bajas
						emisiones, lo que permite a los clientes disfrutar de la emoción de
						conducir autos exclusivos mientras minimizan su impacto ambiental.
						Además, puedes implementar prácticas empresariales sostenibles en
						todos los aspectos de tu operación.
					</p>
				</div>
			</section>
		</>
	);
}
