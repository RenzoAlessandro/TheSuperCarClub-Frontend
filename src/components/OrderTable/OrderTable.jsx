import { OrderTableRow } from "../OrderTableRow/OrderTableRow";

export const OrderTable = ({ orders }) => {
	return (
		<div className="responsive-table">
			<table className="user-table">
				<thead>
					<tr className="table-head">
						<th>Imagen</th>
						<th>Modelo</th>
						<th>Cantidad</th>
						<th>Precio 24h</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody id="table-body">
					{orders.map((ord) =>
						ord.products.map((ordItem) => (
							<OrderTableRow key={ordItem._id} ordenItem={ordItem} />
						)),
					)}
				</tbody>
			</table>
		</div>
	);
};
