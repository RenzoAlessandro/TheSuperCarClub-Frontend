import "./Order.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { OrderTable } from "../../components/OrderTable/OrderTable";
import Swal from "sweetalert2";
import TitleActive from "../../components/TitleActive/TitleActive";
import { useUser } from "../../context/UserContext";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader";
const URL = import.meta.env.VITE_SERVER_URL;

export const Order = () => {
	const [dbOrders, setDbOrder] = useState([]);
	const { admin } = useUser();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getOrders();
	}, []);

	async function getOrders() {
		try {
			const TOKEN = localStorage.getItem("token");
			const response = await axios.get(`${URL}/orders`, {
				headers: { authorization: TOKEN },
			});
			const orders = response.data.orders;
			setDbOrder(orders);
			setLoading(false);
		} catch (error) {
			setLoading(true);
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "No se pudieron obtener las ordenes",
			});
		}
	}

	return (
		<div className="order-container">
			<div className="form-title-container">
				<TitleActive
					title={admin ? "ORDERS ADMIN" : "MIS ORDENES"}
					subtitle={
						admin
							? "Historial de las ordenes de tus clientes"
							: "Mi historial de ordenes"
					}
				/>
			</div>
			{loading ? <SpinnerLoader /> : <OrderTable orders={dbOrders} />}
		</div>
	);
};
