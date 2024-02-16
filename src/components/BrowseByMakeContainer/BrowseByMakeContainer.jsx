import { useEffect, useState } from "react";
import CardSimple from "../CardSimple/CardSimple";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";

export const BrowseByMakeContainer = () => {
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
			<SectionTitle title="Buscar por marca" subtitle="Más de 15 marcas" />

			<section className="card-simple-container">
				{brands.map((brand) => {
					return (
						<CardSimple
							key={brand._id}
							imagen={brand.isoTipo}
							title={brand.brand}
						/>
					);
				})}
			</section>
		</>
	);
};
