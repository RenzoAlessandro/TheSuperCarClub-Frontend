import "./CardStyleFirst.css";

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
						<h3>{props.featureNameFirst}</h3>
						<p>{props.featureValueFirst}</p>
					</div>
					<div className="card-profile-footer-social">
						<h3>{props.featureNameSecond}</h3>
						<p>{props.featureValueSecond}</p>
					</div>
					<div className="card-profile-footer-social">
						<h3>{props.featureNameThird}</h3>
						<p>{props.featureValueThird}</p>
					</div>
				</div>
			</article>
		</div>
	);
}
