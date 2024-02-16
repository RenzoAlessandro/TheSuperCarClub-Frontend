import "./TextCard.css";

export default function TextCard(props) {
	return (
		<div className="text-card-container">
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	);
}
