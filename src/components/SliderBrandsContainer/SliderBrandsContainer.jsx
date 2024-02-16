import "./SliderBrandsContainer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

export const SliderBrandsContainer = () => {
	const [brands, setBrands] = useState([]);

	useEffect(function () {
		getBrands();
	}, []);

	async function getBrands() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_SERVER_URL + "/brands",
			);
			setBrands(response.data.brands);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<SectionTitle
				title="Marcas destacadas"
				subtitle="Más de 10 marcas disponibles"
			/>
			<div className="slider-brands-container">
				<div className="slide-track">
					{brands.map((brand) => {
						return (
							<div key={brand._id} className="slide-brand">
								<img src={brand.imagoTipo} alt={brand.brand} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
