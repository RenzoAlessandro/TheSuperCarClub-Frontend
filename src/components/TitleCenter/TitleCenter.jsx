import "./TitleCenter.css";

export default function TitleCenter(props) {
	return (
		<div className="title-center">
			<div className="title-simple-center">{props.title}</div>
			<div className="sub-title-center">{props.subtitle}</div>
		</div>
	);
}
