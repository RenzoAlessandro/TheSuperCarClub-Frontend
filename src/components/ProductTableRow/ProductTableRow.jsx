import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import imageNotAvailable from "../../assets/defaults/no-image.png";
import formatDateOutput from "../../utils/formatDate";
const URL = import.meta.env.VITE_SERVER_URL;

export const ProductTableRow = ({ modCar, deleteModelCar, setFormValue }) => {
	return (
		<tr className="table-body">
			<td className="modelCar-image">
				<img
					src={
						modCar.carImage
							? `${URL}/images/modelsCars/${modCar.carImage}`
							: imageNotAvailable
					}
					alt={`Modelo ${modCar.model}`}
				/>
			</td>
			<td className="brand-image">
				<img
					src={
						modCar.brand.imagoTipo ? modCar.brand.imagoTipo : imageNotAvailable
					}
					alt={`Marca ${modCar.brand.brand}`}
				/>
			</td>
			<td className="modelCar-model">
				{modCar.model ? modCar.model : <span className="no-data">No data</span>}
			</td>
			<td className="modelCar-type">
				{modCar.type.type ? (
					modCar.type.type
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="modelCar-year">{formatDateOutput(modCar.year)}</td>
			<td className="modelCar-engine">
				{modCar.engine ? (
					modCar.engine
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="modelCar-transmission">
				{modCar.transmission.transmission ? (
					modCar.transmission.transmission
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="modelCar-fuel">
				{modCar.fuel.fuel ? (
					modCar.fuel.fuel
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="modelCar-seating">
				{modCar.seats ? modCar.seats : <span className="no-data">No data</span>}
			</td>
			<td className="modelCar-precio24h">
				$
				{modCar.price24h ? (
					modCar.price24h
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="modelCar-description">
				{modCar.description ? (
					modCar.description
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="modelCar-action">
				<button
					className="action-btn btn-danger"
					title="Borrar vehículo"
					onClick={() => deleteModelCar(modCar._id)}
				>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
				<button
					className="action-btn btn-warning"
					title="Editar vehículo"
					onClick={() => setFormValue(modCar)}
				>
					<FontAwesomeIcon icon={faPencil} />
				</button>
			</td>
		</tr>
	);
};
