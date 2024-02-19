import "./ProductTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";

export const ProductTable = ({modelCars}) => {
	return (
		<div className="responsive-table">
			<table className="user-table responsive-table">
				<thead>
					<tr className="table-head">
						<th>Imagen</th>
						<th>Marca</th>
						<th>Modelo</th>
						<th>Tipo</th>
						<th>Año</th>
						<th>Motor</th>
						<th>Transmision</th>
						<th>Combustible</th>
						<th>Asientos</th>
						<th>Precio 24h</th>
						<th>Descripción</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody id="table-body">
					{
						modelCars.map((modCar) => (
							<tr className="table-body" key={modCar._id}>
							<td className="modelCar-image">
								<img
									src={modCar.carImage}
									alt="Modelo de Car"
								/>
							</td>
							<td className="brand-image">
								<img
									src="https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg"
									alt="Marca de Car"
								/>
							</td>
							<td className="modelCar-model">{modCar.model}</td>
							<td className="modelCar-type">{modCar.type}</td>
							<td className="modelCar-year">01/01/2021</td>
							<td className="modelCar-engine">{modCar.engine}</td>
							<td className="modelCar-transmission">{modCar.transmission}</td>
							<td className="modelCar-fuel">{modCar.fuel}</td>
							<td className="modelCar-seating">{modCar.seats}</td>
							<td className="modelCar-precio24h">${modCar.price24h}</td>
							<td className="modelCar-description">{modCar.description}
							</td>
							<td className="modelCar-action">
								<button
									className="action-btn btn-danger"
									title="Borrar vehículo"
									onClick={null}
								>
									<FontAwesomeIcon icon={faTrashCan} />
								</button>
								<button
									className="action-btn btn-warning"
									title="Editar vehículo"
									onClick={null}
								>
									<FontAwesomeIcon icon={faPencil} />
								</button>
							</td>
						</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
};
