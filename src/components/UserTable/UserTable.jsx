import "./UserTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";

export const UserTable = ({ users }) => {
	return (
		<div className="responsive-table">
			<table className="user-table">
				<thead>
					<tr className="table-head">
						<th>Avatar</th>
						<th>Nombres</th>
						<th>Email</th>
						<th>Localidad</th>
						<th>Edad</th>
						<th>Fecha de Nacimiento</th>
						<th>Rol</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody id="table-body">
					{users.map((usr) => (
						<tr className="table-body" key={usr._id}>
							<td className="user-image">
								<img
									src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
									alt="Avatar"
								/>
							</td>
							<td className="user-name">Renzo Alessandro</td>
							<td className="user-email">renzo@gmail.com</td>
							<td className="user-location">San Francisco, CA</td>
							<td className="user-age">27</td>
							<td className="user-date">13/02/1996</td>
							<td className="user-role">Administrador</td>
							<td className="user-action">
								<button
									className="action-btn btn-danger"
									title="Borrar usuario"
									onClick={null}
								>
									<FontAwesomeIcon icon={faTrashCan} />
								</button>
								<button
									className="action-btn btn-warning"
									title="Editar usuario"
									onClick={null}
								>
									<FontAwesomeIcon icon={faPencil} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
