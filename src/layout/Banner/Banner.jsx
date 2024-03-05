import "./Banner.css";

import FerrariF12 from "../../assets/banner/Banner01-Ferrari-F12.png";
import NissanGTR from "../../assets/banner/Banner02-Nissan-GTR.png";
import DodgeChallenger from "../../assets/banner/Banner03-Dodge-Challenger.png";
import AstonMartinVantage from "../../assets/banner/Banner05-Aston-Martin-Vantage.png";
import Porsche911CarreraS from "../../assets/banner/Banner07-Porsche-911-Carrera-S.png";
import LamborghiniHuracanLP6104 from "../../assets/banner/Banner08-Lamborghini-Huracan-LP6104.png";

export default function Banner() {
	const sayHello = (num) => {
		// const current = document.getElementByClassName("flex-active");
		const current = 1;
		const next = 2;
		console.log(current);

		if (current === next) {
			return false;
		} else {
			const hola =
				document.getElementsByClassName("slider-warpper")[0].children;
			console.log(hola);
		}
	};

	return (
		<div className="main-banner-container">
			<div className="slider-warpper">
				<div className="flex-container flex-yellow flex-active" data-slide="1">
					<div className="flex-item flex-item-left">
						<div className="flex-content">
							<p className="text-sub">Ferrari</p>
							<h1 className="text-big">F12 tdf</h1>
							<p className="text-normal">
								Experimenta la emoción del lujo sobre ruedas con nuestra
								exclusiva flota de autos deportivos de élite. Cada vehículo
								ofrece un rendimiento excepcional y un diseño impresionante.
							</p>
						</div>
						<p className="text-background">Ferrari</p>
					</div>
					<div className="flex-item flex-item-right"></div>
					<img className="banner-img-modelcar" src={FerrariF12} />
				</div>

				<div className="flex-container flex-blue animate-start" data-slide="2">
					<div className="flex-item flex-item-left">
						<div className="flex-content">
							<p className="text-sub">Nissan</p>
							<h1 className="text-big">GTR</h1>
							<p className="text-normal">
								Conduce el símbolo definitivo del prestigio. Renta un auto de
								lujo y deja una impresión inolvidable. Nuestros vehículos son
								sinónimo de exclusividad y refinamiento en cada detalle.
							</p>
						</div>
						<p className="text-background">Nissan</p>
					</div>
					<div className="flex-item flex-item-right"></div>
					<img className="banner-img-modelcar" src={NissanGTR} />
				</div>

				<div className="flex-container flex--red animate-start" data-slide="3">
					<div className="flex-item flex-item-left">
						<div className="flex-content">
							<p className="text-sub">Dodge</p>
							<h1 className="text-big">Challenger</h1>
							<p className="text-normal">
								Tienes gusto, nosotros tenemos opciones. Elige tu vehículo, haz
								tu reserva y disfruta. Ofrecemos una variedad de servicios
								diseñados para hacer su vida más fácil.
							</p>
						</div>
						<p className="text-background">Dodge</p>
					</div>
					<div className="flex-item flex-item-right"></div>
					<img className="banner-img-modelcar" src={DodgeChallenger} />
				</div>

				<div
					className="flex-container flex--darkblue animate-start"
					data-slide="4"
				>
					<div className="flex-item flex-item-left">
						<div className="flex-content">
							<p className="text-sub">Porsche</p>
							<h1 className="text-big">911 Carrera S</h1>
							<p className="text-normal">
								Velocidad, elegancia y estilo se combinan en nuestra colección
								de autos deportivos y de lujo. ¡Eleva tu experiencia de
								conducción a un nivel completamente nuevo con nosotros!
							</p>
						</div>
						<p className="text-background">Porsche</p>
					</div>
					<div className="flex-item flex-item-right"></div>
					<img className="banner-img-modelcar" src={Porsche911CarreraS} />
				</div>

				<div className="flex-container flex--gray animate-start" data-slide="5">
					<div className="flex-item flex-item-left">
						<div className="flex-content">
							<p className="text-sub">Aston Martin</p>
							<h1 className="text-big">Vantage</h1>
							<p className="text-normal">
								Descubre el lujo en movimiento. Experimenta la excelencia con
								nuestros autos deportivos y de lujo de última generación. Cada
								vehículo es una obra maestra de ingeniería y diseño.
							</p>
						</div>
						<p className="text-background">Aston Martin</p>
					</div>
					<div className="flex-item flex-item-right"></div>
					<img className="banner-img-modelcar" src={AstonMartinVantage} />
				</div>

				<div className="flex-container flex--gray animate-start" data-slide="6">
					<div className="flex-item flex-item-left">
						<div className="flex-content">
							<p className="text-sub">Lamborghini</p>
							<h1 className="text-big">Huracan LP6104</h1>
							<p className="text-normal">
								Descubre el lujo en movimiento. Experimenta la excelencia con
								nuestros autos deportivos y de lujo de última generación. Cada
								vehículo es una obra maestra de ingeniería y diseño.
							</p>
						</div>
						<p className="text-background">Lamborghini</p>
					</div>
					<div className="flex-item flex-item-right"></div>
					<img className="banner-img-modelcar" src={LamborghiniHuracanLP6104} />
				</div>
			</div>

			<div className="slider-navi">
				<a
					onClick={() => {
						sayHello(1);
					}}
					className="slide-nav active"
					data-slide="1"
				>
					1
				</a>
				<a
					onClick={() => {
						sayHello(2);
					}}
					className="slide-nav"
					data-slide="2"
				>
					2
				</a>
				<a
					onClick={() => {
						sayHello(3);
					}}
					className="slide-nav"
					data-slide="3"
				>
					3
				</a>
				<a
					onClick={() => {
						sayHello(4);
					}}
					className="slide-nav"
					data-slide="4"
				>
					4
				</a>
				<a
					onClick={() => {
						sayHello(5);
					}}
					className="slide-nav"
					data-slide="5"
				>
					5
				</a>
				<a
					onClick={() => {
						sayHello(6);
					}}
					className="slide-nav"
					data-slide="6"
				>
					6
				</a>
			</div>
		</div>
	);
}
