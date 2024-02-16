import axios from "axios";
import { useEffect, useState } from "react";
import CardSimple from "../CardSimple/CardSimple";
import SectionTitle from "../SectionTitle/SectionTitle";

export const BrowseByTypeContainer = () => {
	const [types, setTypes] = useState([]);

	useEffect(function () {
		getTypes();
	}, []);

	async function getTypes() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_SERVER_URL + "/types",
			);
			setTypes(response.data.typesCar);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<SectionTitle title="Buscar por tipo" subtitle="Más de 5 tipos" />
			<section className="card-simple-container">
				{types.map((type) => {
					return (
						<CardSimple
							key={type._id}
							imagen={type.typeImage}
							title={type.type}
						/>
					);
				})}
			</section>
		</>
	);
};
