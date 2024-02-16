import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import ModelsCar from "./pages/ModelsCar/ModelsCar";
import Gallery from "./pages/Gallery/Gallery";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import AdminUser from "./pages/AdminUser/AdminUser";
import AdminProduct from "./pages/AdminProduct/AdminProduct";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./layout/Footer/Footer";
import AdminRoute from "./guard/AdminRoute/AdminRoute";

function App() {
	return (
		<>
			<Header />

			<main className="main-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/models" element={<ModelsCar />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contact" element={<Contact />} />
					<Route
						path="/user-admin"
						element={
							<AdminRoute>
								{" "}
								<AdminUser />{" "}
							</AdminRoute>
						}
					/>
					<Route
						path="/car-model-admin"
						element={
							<AdminRoute>
								{" "}
								<AdminProduct />{" "}
							</AdminRoute>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>

			<Footer />
		</>
	);
}

export default App;
