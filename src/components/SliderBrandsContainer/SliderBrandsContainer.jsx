import "./SliderBrandsContainer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

export const SliderBrandsContainer = () => {
	const [brands, setBrands] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(function () {
		getBrands();
	}, []);

	async function getBrands() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_SERVER_URL + "/brands",
			);
			setBrands(response.data.brands);
			setLoading(false);
		} catch (error) {
			setLoading(true);
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
					{loading ? (
						<SpinnerLoader />
					) : (
						brands.map((brand) => {
							return (
								<div key={brand._id} className="slide-brand">
									<img src={brand.imagoTipo} alt={brand.brand} />
								</div>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};
