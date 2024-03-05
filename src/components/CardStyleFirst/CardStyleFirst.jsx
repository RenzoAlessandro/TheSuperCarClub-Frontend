import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardStyleFirst.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CardStyleFirst(props) {
	return (
		<div className="card-profile-container">
			<article className="card-profile">
				<img
					className="card-profile-header"
					src={props.imgHeader}
					alt="imagen header card"
				/>
				<div className="card-profile-body">
					<img
						className="card-profile-body-img"
						src={props.imgProfile}
						alt="foto de perfil"
					/>
					<h1 className="card-profile-body-title">
						{props.name}
						<span>{props.age}</span>
					</h1>
					<img src={props.imgflag} alt="flag Perú" />
					<p className="card-profile-body-text">{props.country}</p>
				</div>
				<div className="card-profile-footer">
					<div className="card-profile-footer-social">
						<a
							href="https://www.linkedin.com/in/renzoalessandrocode/"
							target="_blank"
							rel="noreferrer"
						>
							<h3>{props.featureNameFirst}</h3>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
					<div className="card-profile-footer-social">
						<a
							href="mailto:renzo.sucari@ucsp.edu.pe"
							target="_blank"
							rel="noreferrer"
						>
							<h3>{props.featureNameSecond}</h3>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</div>
					<div className="card-profile-footer-social">
						<a
							href="https://github.com/RenzoAlessandro"
							target="_blank"
							rel="noreferrer"
						>
							<h3>{props.featureNameThird}</h3>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</div>
				</div>
			</article>
		</div>
	);
}
