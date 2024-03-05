import { useEffect, useState } from "react";
import CardStyleSecond from "../CardStyleSecond/CardStyleSecond";
import axios from "axios";
import SectionTitle from "../SectionTitle/SectionTitle";
const URL = import.meta.env.VITE_SERVER_URL;

export const DriveNowContainer = () => {
	const [modelCars, setModelCars] = useState([]);

	useEffect(function () {
		getModelCars();
	}, []);

	async function getModelCars(page = 0) {
		try {
			const response = await axios.get(`${URL}/modelcars`);
			const allModelCars = response.data.modelCars;

			// Solo mostramos los que tienen la propiedad de Active en TRUE
			const arrayModelCarsFiltrados = allModelCars.filter((modelCarFilter) => {
				if (modelCarFilter.active === true) {
					return true;
				} else {
					return false;
				}
			});

			setModelCars(arrayModelCarsFiltrados);
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
