import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageNotAvailable from "../../assets/defaults/no-image.png";
const URL = import.meta.env.VITE_SERVER_URL;

export const OrderTableRow = ({ ordenItem }) => {
	return (
		<tr className="table-body">
			<td className="modelCar-image">
				<img
					src={
						ordenItem.productId.carImage
							? `${URL}/images/modelsCars/${ordenItem.productId.carImage}`
							: imageNotAvailable
					}
					alt={`Modelo ${ordenItem.productId.model}`}
				/>
			</td>
			<td className="user-name">{ordenItem.productId.model}</td>
			<td className="user-quantity">{ordenItem.quantity}</td>
			<td className="user-price">${ordenItem.price}</td>
			<td className="user-action">
				<button
					className="action-btn btn-danger"
					title="Borrar orden"
					onClick={null}
				>
					<FontAwesomeIcon icon={faTrash} />
				</button>
				<button
					className="action-btn btn-warning"
					title="Editar orden"
					onClick={null}
				>
					<FontAwesomeIcon icon={faPencil} />
				</button>
			</td>
		</tr>
	);
};
