import "./CardSimple.css";

export const CardSimple = (props) => {
	return (
		<article className="card-simple">
			<header className="card-simple-header">
				<img className="card-simple-img" src={props.imagen} alt="Type" />
			</header>
			<div className="card-simple-body">
				<h3 className="card-simple-title">{props.title}</h3>
			</div>
		</article>
	);
};

export default CardSimple;
