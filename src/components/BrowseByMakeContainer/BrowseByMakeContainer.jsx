import { useEffect, useState } from "react";
import CardSimple from "../CardSimple/CardSimple";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

export const BrowseByMakeContainer = () => {
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

	const navigate = useNavigate();

	function navigateClick() {
		navigate("/models");
	}

	return (
		<>
			<SectionTitle title="Buscar por marca" subtitle="Más de 15 marcas" />

			<section className="card-simple-container" onClick={navigateClick}>
				{loading ? (
					<SpinnerLoader />
				) : (
					brands.map((brand) => {
						return (
							<CardSimple
								key={brand._id}
								imagen={brand.isoTipo}
								title={brand.brand}
							/>
						);
					})
				)}
			</section>
		</>
	);
};
