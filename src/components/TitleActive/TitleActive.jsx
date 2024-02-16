import "./TitleActive.css";

export default function TitleActive(props) {
	return (
		<div className="title-active">
			<h1 className="title-form">{props.title}</h1>
			<p className="message">{props.subtitle}</p>
		</div>
	);
}
