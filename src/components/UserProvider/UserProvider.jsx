import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const URL = import.meta.env.VITE_SERVER_URL;

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const savedUser = JSON.parse(localStorage.getItem("currenUser"));
		return savedUser || null;
	});
	const [admin, setAdmin] = useState(() => {
		const savedUser = JSON.parse(localStorage.getItem("currenUser"));
		return savedUser?.role === "ADMIN_ROLE";
	});
	const navigate = useNavigate();

	async function login(data) {
		try {
			const response = await axios.post(`${URL}/login`, data);
			const { token, user } = response.data;
			localStorage.setItem("token", token);
			localStorage.setItem("currenUser", JSON.stringify(user));
			const isAdmin = user.role === "ADMIN_ROLE";
			setAdmin(isAdmin);
			setUser(user);
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Iniciando Sesión",
				text: "Será redireccionado en breve!",
				showConfirmButton: false,
				timer: 1500,
			}).then(() => {
				navigate("/");
			});
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Alguno de los datos ingresados no es correcto!",
			});
		}
	}

	function logout() {
		localStorage.removeItem("currenUser");
		localStorage.removeItem("token");
		setUser(null);
		navigate("/");
	}

	return (
		<UserContext.Provider value={{ user, admin, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
