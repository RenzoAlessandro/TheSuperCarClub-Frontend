import "./CardTestimonial.css";

export const CardTestimonial = ({ testimonial }) => {
	return (
		<article className="card-testimonial">
			<header className="card-testimonial-header">
				<p className="card-testimonial-review">“{testimonial.testimonial}”</p>
			</header>
			<footer className="card-testimonial-footer">
				<p className="card-testimonial-date">{testimonial.date}</p>
				<h4 className="card-testimonial-autor">-{testimonial.user}</h4>
			</footer>
		</article>
	);
};

export default CardTestimonial;
