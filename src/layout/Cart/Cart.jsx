import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOrder } from "../../context/OrderContext";
import "./Cart.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const URL = import.meta.env.VITE_SERVER_URL;

export const Cart = () => {
	const {
		order,
		cartMenu,
		total,
		totalItems,
		removeItemCart,
		clearCart,
		finishOrder,
	} = useOrder();
	return (
		<div className={`cart-wrapper ${cartMenu ? "active" : ""}`}>
			<div className="list-container">
				<h2>Orden Actual:</h2>
				<ul className="order-list">
					{order.map((prod, idx) => {
						return (
							<li className="order-item" key={idx}>
								<img
									className="order-image"
									src={`${URL}/images/modelsCars/${prod.image}`}
									alt={prod.productName}
								/>
								{prod.productName}
								<div className="order-quantity">
									{prod.quantity}

									<div className="order-delete-item">
										<FontAwesomeIcon
											icon={faTrash}
											onClick={() => removeItemCart(prod.productId)}
										/>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="order-finish">
				<div className="total">
					<div className="total-count">Items: {totalItems}</div>
					<div className="total-price">
						Total $ <span>{total}</span>
					</div>
				</div>
				<div className="flex-row">
					<div className="input-group">
						<div className="input-group">
							<button
								className="buttonSimple btn-cancel"
								onClick={() => clearCart()}
							>
								Limpiar Carrito
							</button>
						</div>
					</div>

					<div className="input-group">
						<button className="buttonSimple" onClick={() => finishOrder()}>
							Rentar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
