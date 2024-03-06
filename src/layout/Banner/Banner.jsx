import "./Banner.css";

import FerrariF12 from "../../assets/banner/Banner01-Ferrari-F12.webp";
import NissanGTR from "../../assets/banner/Banner02-Nissan-GTR.webp";
import DodgeChallenger from "../../assets/banner/Banner03-Dodge-Challenger.webp";
import AstonMartinVantage from "../../assets/banner/Banner05-Aston-Martin-Vantage.webp";
import Porsche911CarreraS from "../../assets/banner/Banner07-Porsche-911-Carrera-S.webp";
import LamborghiniHuracanLP6104 from "../../assets/banner/Banner08-Lamborghini-Huracan-LP6104.webp";
import { useState } from "react";

export default function Banner() {
	const [step, setStep] = useState(1);

	function sliderBannerActive(num = 1) {
		setStep(num);
	}

	return (
		<div className="main-banner-container">
			<div className="slider-warpper">
				<div
					className={
						step === 1
							? "flex-container flex-yellow flex-active"
							: "flex-container flex-yellow animate-start"
					}
					data-slide="1"
				>
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

				<div
					className={
						step === 2
							? "flex-container flex-blue flex-active"
							: "flex-container flex-blue animate-start"
					}
					data-slide="2"
				>
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

				<div
					className={
						step === 3
							? "flex-container flex--red flex-active"
							: "flex-container flex--red animate-start"
					}
					data-slide="3"
				>
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
					className={
						step === 4
							? "flex-container flex--darkblue flex-active"
							: "flex-container flex--darkblue animate-start"
					}
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

				<div
					className={
						step === 5
							? "flex-container flex--gray flex-active"
							: "flex-container flex--gray animate-start"
					}
					data-slide="5"
				>
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

				<div
					className={
						step === 6
							? "flex-container flex--orange flex-active"
							: "flex-container flex--orange animate-start"
					}
					data-slide="6"
				>
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
						sliderBannerActive(1);
					}}
					className={step === 1 ? "slide-nav active" : "slide-nav"}
					data-slide="1"
				>
					1
				</a>
				<a
					onClick={() => {
						sliderBannerActive(2);
					}}
					className={step === 2 ? "slide-nav active" : "slide-nav"}
					data-slide="2"
				>
					2
				</a>
				<a
					onClick={() => {
						sliderBannerActive(3);
					}}
					className={step === 3 ? "slide-nav active" : "slide-nav"}
					data-slide="3"
				>
					3
				</a>
				<a
					onClick={() => {
						sliderBannerActive(4);
					}}
					className={step === 4 ? "slide-nav active" : "slide-nav"}
					data-slide="4"
				>
					4
				</a>
				<a
					onClick={() => {
						sliderBannerActive(5);
					}}
					className={step === 5 ? "slide-nav active" : "slide-nav"}
					data-slide="5"
				>
					5
				</a>
				<a
					onClick={() => {
						sliderBannerActive(6);
					}}
					className={step === 6 ? "slide-nav active" : "slide-nav"}
					data-slide="6"
				>
					6
				</a>
			</div>
		</div>
	);
}
