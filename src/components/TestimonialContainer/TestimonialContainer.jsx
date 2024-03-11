import { useEffect, useState } from "react";
import CardTestimonial from "../CardTestimonial/CardTestimonial";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

export const TestimonialContainer = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(function () {
		getTestimonials();
	}, []);

	async function getTestimonials() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_SERVER_URL + "/testimonials",
			);
			setTestimonials(response.data.testimonials);
			setLoading(false);
		} catch (error) {
			setLoading(true);
			console.log(error);
		}
	}

	return (
		<>
			<SectionTitle
				title="Reseñas recientes"
				subtitle="Lo que nuestros clientes están diciendo"
			/>
			<section className="card-testimonial-container">
				{loading ? (
					<SpinnerLoader />
				) : (
					testimonials.map((testimonial) => {
						return (
							<CardTestimonial
								key={testimonial._id}
								testimonial={testimonial}
							/>
						);
					})
				)}
			</section>
		</>
	);
};
