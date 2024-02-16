import { useEffect, useState } from "react";
import CardStyleThird from "../CardStyleThird/CardStyleThird";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";

export const FeaturedVehiclesContainer = () => {
	const [modelCars, setModelCars] = useState([]);

	useEffect(function () {
		getModelCars();
	}, []);

	async function getModelCars() {
		try {
			const response = await axios.get(
				import.meta.env.VITE_SERVER_URL + "/modelcars",
			);
			setModelCars(response.data.modelCars);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<SectionTitle
				title="Vehículos destacados"
				subtitle="Más de 100 unidades disponibles"
			/>
			<section className="card-cars-second-container">
				{modelCars.map((modelCar) => {
					return <CardStyleThird key={modelCar._id} modelCar={modelCar} />;
				})}
			</section>
		</>
	);
};