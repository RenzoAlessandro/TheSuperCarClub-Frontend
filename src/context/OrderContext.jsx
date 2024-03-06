import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
import Swal from "sweetalert2";
import axios from "axios";
const URL = import.meta.env.VITE_SERVER_URL;
const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
	const { user } = useUser();
	const [order, setOrder] = useState(
		() => JSON.parse(localStorage.getItem("order")) || [],
	);
	const [cartMenu, setCartMenu] = useState(false);
	const [total, setTotal] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		// -SHOW
		calculateTotalItems();
		calculateTotal();
	}, [order]);

	function addItem(item) {
		if (!user) {
			return Swal.fire({
				icon: "error",
				title: "Opops...",
				text: "Debe iniciar sesión para rentar un vehículo",
			});
		}

		const itemIndex = order.findIndex((prod) => prod.productId === item._id);
		let newOrder;
		// añadir un elemento a mi order
		if (itemIndex >= 0) {
			newOrder = order.map((producto) => {
				// Devuelvo un nuevo array, solo que checkeo si el item que me enviaron como se que ya existia en mi carrito, si es asi, le sumo 1 a la cantidad
				if (producto.productId === item._id) {
					return { ...producto, quantity: producto.quantity + 1 };
				}

				return producto;
			});
		} else {
			const product = {
				productId: item._id,
				quantity: 1,
				price: item.price24h,
				productName: item.model,
				image: item.carImage,
			};
			newOrder = [...order, product];
		}

		localStorage.setItem("order", JSON.stringify(newOrder));
		setOrder(newOrder);
	}

	async function finishOrder() {
		try {
			if (!user)
				return Swal.fire(
					"Debe loguearse",
					"Para finalizar la orden debe estar logueado",
					"error",
				);

			const TOKEN = localStorage.getItem("token");
			const newOrder = {
				userId: user._id,
				totalPrice: total,
				products: order,
			};

			const response = await axios.post(`${URL}/orders`, newOrder, {
				headers: { authorization: TOKEN },
			});

			console.log(response.data);

			Swal.fire({
				icon: "success",
				title: "Compra realizada!",
				text: "Gracias por su compra!",
			});

			clearCart();
			setCartMenu(false);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Algo salió mal!",
			});
		}
	}

	function toggleMenu() {
		setCartMenu(!cartMenu);
	}

	function calculateTotalItems() {
		let totalItems = 0;
		order.forEach((prod) => {
			totalItems += prod.quantity;
		});

		setTotalItems(totalItems);
	}

	function calculateTotal() {
		let total = 0;

		order.forEach((prod) => {
			total += prod.price * prod.quantity;
		});

		setTotal(total);
	}

	function removeItemCart(id) {
		const updatedOrder = order.filter((producto) => producto.productId !== id);
		setOrder(updatedOrder);
		localStorage.setItem("order", JSON.stringify(updatedOrder));
	}

	function clearCart() {
		// Limpio mi carrito de compras
		setOrder([]);
		localStorage.removeItem("order");
	}

	return (
		<OrderContext.Provider
			value={{
				order,
				cartMenu,
				total,
				totalItems,
				addItem,
				finishOrder,
				removeItemCart,
				clearCart,
				toggleMenu,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
