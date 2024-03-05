import "./UserTable.css";
import { UserTableRow } from "../UserTableRow/UserTableRow";

export const UserTable = ({ users, deleteUser, setFormValue }) => {
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
						<UserTableRow
							key={usr._id}
							usr={usr}
							deleteUser={deleteUser}
							setFormValue={setFormValue}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
