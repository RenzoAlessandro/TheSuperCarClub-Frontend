import "./ProductTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";

export const ProductTable = () => {
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
					<tr className="table-body">
						<td className="modelCar-image">
							<img
								src="https://img.remediosdigitales.com/6fcf93/porsche-911-r-rennsport-2023-9/1366_2000.jpeg"
								alt="Modelo de Car"
							/>
						</td>
						<td className="brand-image">
							<img
								src="https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg"
								alt="Marca de Car"
							/>
						</td>
						<td className="modelCar-model">718 Cayman GT4 RS</td>
						<td className="modelCar-type">Deportivo</td>
						<td className="modelCar-year">01/01/2021</td>
						<td className="modelCar-engine">4.0L 500CV</td>
						<td className="modelCar-transmission">Automático</td>
						<td className="modelCar-fuel">Gasolina</td>
						<td className="modelCar-seating">2</td>
						<td className="modelCar-precio24h">$2323</td>
						<td className="modelCar-description">
							23,6 segundos es el tiempo que el nuevo GT4 RS
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

					<tr className="table-body">
						<td className="modelCar-image">
							<img
								src="https://images0.autocasion.com/unsafe/1200x800/actualidad/wp-content/uploads/2020/03/Porsche-911_Turbo_S-2021-1280-01.jpg"
								alt="Modelo de Car"
							/>
						</td>
						<td className="brand-image">
							<img
								src="https://i.pinimg.com/736x/6d/5f/73/6d5f73c51f5635703fca1a59bd6cbfa2.jpg"
								alt="Marca de Car"
							/>
						</td>
						<td className="modelCar-model">718 Cayman GT4 RS</td>
						<td className="modelCar-type">Deportivo</td>
						<td className="modelCar-year">01/01/2021</td>
						<td className="modelCar-engine">4.0L 500CV</td>
						<td className="modelCar-transmission">Automático</td>
						<td className="modelCar-fuel">Gasolina</td>
						<td className="modelCar-seating">2</td>
						<td className="modelCar-precio24h">$2323</td>
						<td className="modelCar-description">
							23,6 segundos es el tiempo que el nuevo GT4 RS
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
				</tbody>
			</table>
		</div>
	);
};
