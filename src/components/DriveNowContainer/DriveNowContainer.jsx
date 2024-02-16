import { useEffect, useState } from "react";
import CardStyleSecond from "../CardStyleSecond/CardStyleSecond";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";

export const DriveNowContainer = () => {
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
				title="Conduce ahora"
				subtitle="Disponible para recogida y entrega ahora"
			/>

			<section className="card-cars-first-container">
				{modelCars.map((modelCar) => {
					return <CardStyleSecond key={modelCar._id} modelCar={modelCar} />;
				})}
			</section>
		</>
	);
};
