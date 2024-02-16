import "./SwitchMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SwitchMode() {
	const [isActive, setIsActive] = useState(false);

	const handleClick = (event) => {
		// 👇️ toggle isActive state on click
		setIsActive((current) => !current);
	};

	return (
		<button
			className={isActive ? "switch active" : "switch"}
			id="switch"
			onClick={handleClick}
		>
			<span>
				<FontAwesomeIcon icon={faSun} />
			</span>
			<span>
				<FontAwesomeIcon icon={faMoon} />
			</span>
		</button>
	);
}
