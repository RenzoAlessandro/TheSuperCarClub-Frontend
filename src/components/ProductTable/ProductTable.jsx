import "./ProductTable.css";
import { ProductTableRow } from "../ProductTableRow/ProductTableRow";

export const ProductTable = ({ modelCars, deleteModelCar, setFormValue }) => {
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
					{modelCars.map((modCar) => (
						<ProductTableRow
							key={modCar._id}
							modCar={modCar}
							deleteModelCar={deleteModelCar}
							setFormValue={setFormValue}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
