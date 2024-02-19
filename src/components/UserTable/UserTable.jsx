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
									src="https://collaborate.pega.com/sites/default/files/pega-user-image/457/REG-456516.png"
									alt="Avatar"
								/>
							</td>
							<td className="user-name">{usr.firstName}</td>
							<td className="user-email">{usr.email}</td>
							<td className="user-location">{usr.location}</td>
							<td className="user-age">{usr.age}</td>
							<td className="user-date">13/02/1996</td>
							<td className="user-role">{usr.role}</td>
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
