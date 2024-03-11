import axios from "axios";
import { useEffect, useState } from "react";
import CardSimple from "../CardSimple/CardSimple";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

export const BrowseByTypeContainer = () => {
	const [types, setTypes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(function () {
		getTypes();
	}, []);

	async function getTypes() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_SERVER_URL + "/types",
			);
			setTypes(response.data.typesCar);
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
			<SectionTitle title="Buscar por tipo" subtitle="Más de 5 tipos" />

			<section className="card-simple-container" onClick={navigateClick}>
				{loading ? (
					<SpinnerLoader />
				) : (
					types.map((type) => {
						return (
							<CardSimple
								key={type._id}
								imagen={type.typeImage}
								title={type.type}
							/>
						);
					})
				)}
			</section>
		</>
	);
};
