import "./TitleSimple.css";

export default function TitleSimple(props) {
	return (
		<div className="section-titleSimple">
			<h2 className="titleSimple-title">{props.title}</h2>
			<h5 className="titleSimple-subtitle">{props.subtitle}</h5>
		</div>
	);
}
