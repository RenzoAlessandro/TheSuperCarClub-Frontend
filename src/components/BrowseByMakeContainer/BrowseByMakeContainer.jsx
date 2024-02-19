import { useEffect, useState } from "react";
import CardSimple from "../CardSimple/CardSimple";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";


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

	const navigate = useNavigate();

	function navigateClick(){
		navigate("/models")
	}

	return (
		<>
			<SectionTitle title="Buscar por marca" subtitle="Más de 15 marcas" />

			<section className="card-simple-container" onClick={navigateClick} >
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
