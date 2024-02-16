import "./SectionTitle.css";

export default function SectionTitle(props) {
	const isSubtitle = props.subtitle;
	const isContent = props.content;

	return (
		<div className="section-container">
			<div className="section-heading">
				<h2 className="section-heading-title">{props.title}</h2>
				{isSubtitle ? (
					<h5 className="section-heading-subtitle">{isSubtitle}</h5>
				) : null}

				{isContent ? <props.content /> : null}
			</div>
		</div>
	);
}
