import "./Header.css";
import { LINKS } from "../../links";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import logoTheSupercarClub from "../../assets/TheSupercarClub.png";
import SwitchMode from "../../components/SwitchMode/SwitchMode";
import { useUser } from "../../context/UserContext";
import defaultPictureProfile from "../../assets/defaults/default-picture-profile.png";
import { useOrder } from "../../context/OrderContext";
const URL = import.meta.env.VITE_SERVER_URL;

export const numLinks = 2;

export default function Header() {
	const { user, admin, logout } = useUser();

	const avaibleLinks = LINKS.filter((link) => admin || !link.admin);

	const { totalItems, toggleMenu } = useOrder();
	// const avaibleUserLinks = USERLINKS.filter((link) => isAdmin || !link.admin);

	return (
		<header className="main-header">
			<input className="input-check" type="checkbox" id="check-menu" />

			<label className="burger-menu" htmlFor="check-menu">
				<div className="burger-line"></div>
			</label>

			<a className="logo-link" href="/">
				<picture>
					<img
						className="nav-logo"
						src={logoTheSupercarClub}
						alt="TheSupercarClub"
					/>
				</picture>
			</a>

			<nav className="main-nav" value={numLinks}>
				<ul id="header-nav" className="nav-list">
					{avaibleLinks.map((link) => (
						<li className="nav-item" key={link.path}>
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								to={link.path}
							>
								{link.text}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<input className="input-check-user" type="checkbox" id="check-usermenu" />

			<label className="burger-usermenu" htmlFor="check-usermenu">
				<FontAwesomeIcon className="burger-icon" icon={faUser} />
			</label>

			<div className="user-nav">
				<ul id="header-nav" className="nav-list">
					<li className="display-switch switch-user-item">
						<SwitchMode />
					</li>
					<li className="display-MyRents user-item icon-container">
						<a
							className="user-link cart-icon"
							title="Mis Rentas"
							data-count={totalItems}
							onClick={() => toggleMenu()}
						>
							<FontAwesomeIcon icon={faCartShopping} />
						</a>
					</li>
					{user ? (
						<>
							<li className="nav-item">
								<NavLink
									className={({ isActive }) =>
										isActive ? "nav-link active" : "nav-link"
									}
									to="/orders"
								>
									Ordenes
								</NavLink>
							</li>
							<li className="nav-item">
								<button onClick={() => logout()} className="nav-link">
									Cerrar Sesión
								</button>
							</li>
							<li className="nav-item profile-link">
								<NavLink
									className={({ isActive }) =>
										isActive ? "nav-link active" : "nav-link"
									}
									to="/profile"
								>
									{user.firstName}
								</NavLink>
								<img
									className="user-profile-picture"
									src={
										user.userImage
											? `${URL}/images/users/${user.userImage}`
											: defaultPictureProfile
									}
									alt={`${user.firstName} profile picture`}
								/>
							</li>
						</>
					) : (
						<>
							<li className="nav-item">
								<NavLink
									className={({ isActive }) =>
										isActive ? "nav-link active" : "nav-link"
									}
									to="/register"
								>
									Registro
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className={({ isActive }) =>
										isActive ? "nav-link active" : "nav-link"
									}
									to="/login"
								>
									Iniciar Sesión
								</NavLink>
							</li>
						</>
					)}

					{/* {avaibleUserLinks.map((userlink) => (
						<li className="nav-item" key={userlink.path}>
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link"
								}
								to={userlink.path}
							>
								{userlink.text}
							</NavLink>
						</li>
					))} */}
				</ul>
			</div>
		</header>
	);
}
