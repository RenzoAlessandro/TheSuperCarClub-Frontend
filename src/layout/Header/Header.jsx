import "./Header.css";
import { LINKS, USERLINKS } from "../../links";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faCircleInfo,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import logoTheSupercarClub from "../../assets/TheSupercarClub.webp";
import SwitchMode from "../../components/SwitchMode/SwitchMode";

export const numLinks = 2;

export default function Header() {
	const isAdmin = true;
	const avaibleLinks = LINKS.filter((link) => isAdmin || !link.admin);
	const avaibleUserLinks = USERLINKS.filter((link) => isAdmin || !link.admin);

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
					<li className="display-search user-item">
						<a
							className="user-link"
							href="/pages/login/login.html"
							title="Buscar modelo"
						>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</a>
					</li>
					<li className="display-info user-item">
						<a
							className="user-link"
							href="/pages/login/login.html"
							title="información"
						>
							<FontAwesomeIcon icon={faCircleInfo} />
						</a>
					</li>
					{avaibleUserLinks.map((userlink) => (
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
					))}
				</ul>
			</div>
		</header>
	);
}
