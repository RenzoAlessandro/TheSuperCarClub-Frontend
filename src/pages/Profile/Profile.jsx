import "./Profile.css";
import { useUser } from "../../context/UserContext";
import defaultPictureProfile from "../../assets/defaults/default-picture-profile.png";
import imgHeader from "../../assets/forms/forms-02.webp";
const URL = import.meta.env.VITE_SERVER_URL;

export default function Profile() {
	const { user } = useUser();

	console.log(user);

	return (
		<div className="profile-container">
			<div className="card-profile-container">
				<article className="card-profile">
					<img
						className="card-profile-header"
						src={imgHeader}
						alt="imagen header card"
					/>
					<div className="card-profile-body">
						<img
							className="card-profile-body-img"
							src={
								user.userImage
									? `${URL}/images/users/${user.userImage}`
									: defaultPictureProfile
							}
							alt={`${user.firstName} profile picture`}
						/>
						<h1 className="card-profile-body-title">{user.firstName}</h1>
						<span>{user.role === `ADMIN_ROLE` ? "ADMIN" : "Cliente"}</span>
						<p className="card-profile-body-text">{user.email}</p>
					</div>
					<div className="card-profile-footer">
						<div className="card-profile-footer-social">
							<a
								href="https://www.linkedin.com/in/renzoalessandrocode/"
								target="_blank"
								rel="noreferrer"
							>
								<h3>Direccion</h3>
								<p>{user.location.location}</p>
							</a>
						</div>
						<div className="card-profile-footer-social">
							<a
								href="https://github.com/RenzoAlessandro"
								target="_blank"
								rel="noreferrer"
							>
								<h3>Edad</h3>
								<p>{user.age}</p>
							</a>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}
