import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import defaultPictureProfile from "../../assets/defaults/default-picture-profile.png";
import formatDateOutput from "../../utils/formatDate";
const URL = import.meta.env.VITE_SERVER_URL;

export const UserTableRow = ({ usr, deleteUser, setFormValue }) => {
	return (
		<tr className="table-body">
			<td className="user-image">
				<img
					src={
						usr.userImage
							? `${URL}/images/users/${usr.userImage}`
							: defaultPictureProfile
					}
					alt={`${usr.firstName} profile picture`}
				/>
			</td>
			<td className="user-name">
				{usr.firstName ? (
					usr.firstName
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="user-email">
				{usr.email ? usr.email : <span className="no-data">No data</span>}
			</td>
			<td className="user-location">
				{usr.location.location ? (
					usr.location.location
				) : (
					<span className="no-data">No data</span>
				)}
			</td>
			<td className="user-age">
				{usr.age ? usr.age : <span className="no-data">No data</span>}
			</td>
			<td className="user-date">{formatDateOutput(usr.bornDate)}</td>
			<td className="user-role">
				{usr.role === `ADMIN_ROLE` ? "ADMIN" : "Cliente"}
			</td>
			<td className="user-action">
				<button
					className="action-btn btn-danger"
					title="Borrar usuario"
					onClick={() => deleteUser(usr._id)}
				>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
				<button
					className="action-btn btn-warning"
					title="Editar usuario"
					onClick={() => setFormValue(usr)}
				>
					<FontAwesomeIcon icon={faPencil} />
				</button>
			</td>
		</tr>
	);
};
