import "./AboutUs.css";
import TextCard from "../../components/TextCard/TextCard";
import TitleCenter from "../../components/TitleCenter/TitleCenter";

import aboutUsImg from "../../assets/aboutUs/AboutUs-05.jpg";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import CardStyleFirst from "../../components/CardStyleFirst/CardStyleFirst";

import imgHeader from "../../assets/developerProfile/bg-pattern-card.jpg";
import imgProfile from "../../assets/developerProfile/image-renzo.jpg";
import imgflag from "../../assets/developerProfile/flag-peru.png";

export default function AboutUs() {
	return (
		<>
			<div className="section-container">
				<div className="info-business-container">
					<img className="img-container" src={aboutUsImg} alt="" />
					<div className="info-container">
						<TitleCenter
							title="Somos The SuperCar Club"
							subtitle="Rent a Car"
						/>
						<p>
							The SuperCar Club Rent nace de la visión de nuestro fundador,
							quien estaba planeando las vacaciones de verano para su familia.
							Se dispuso a consultar las alternativas de transporte pero notaba
							que faltaba una alternativa más personal, con mayor libertad para
							escoger, con unidades que se ajusten a las necesidades y poder
							compartir la experiencia de estar a bordo de un vehículo moderno,
							apto en todos los aspectos. Buscaba también, que las opciones se
							ajusten a su economía, sin que ello represente disminuir en alguna
							forma la calidad del servicio.
						</p>
						<div className="text-card-main-container">
							<TextCard
								title="Visión"
								text="Revolucionar el servicio de renta de automóviles en Perú, con la colaboración de profesionales
                altamente calificados en el rubro."
							/>
							<TextCard
								title="Misión"
								text="Ofrecer la mejor experiencia de renta de automóviles para nuestros clientes, poniendo a su disposición
							la más amplia y moderna flota de unidades."
							/>
						</div>
					</div>
				</div>
			</div>

			<SectionDivider />

			<div className="section-container">
				<div className="info-business-container">
					<div className="info-container">
						<TitleCenter
							title="Computer Science"
							subtitle="Full-stack Developer"
						/>
						<p>
							Soy un desarrollador full-stack graduado en Computer Science que
							vive en Arequipa, Perú. Desde 2013, disfruto convirtiendo
							problemas complejos en diseños simples, hermosos e intuitivos. Me
							gusta crear productos frontend sólidos y escalables con excelentes
							experiencias de usuario. Estoy comprometido a crear experiencias
							de usuario fluidas sin dejar de estar a la moda (~_^). Cuando no
							estoy trabajando en píxeles, me encontrarás practicando MTB o
							haciendo ejercicio en el gym.
						</p>
					</div>
					<CardStyleFirst
						imgHeader={imgHeader}
						imgProfile={imgProfile}
						imgflag={imgflag}
						name="Renzo Alessandro"
						age="27"
						country="Perú"
						featureNameFirst="Linkedin"
						featureNameSecond="Email"
						featureNameThird="Github"
					/>
				</div>
			</div>
		</>
	);
}
