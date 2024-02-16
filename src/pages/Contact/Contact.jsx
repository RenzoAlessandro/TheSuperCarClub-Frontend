import "./Contact.css";
import "../../ui-elements.css";
import TitleActive from "../../components/TitleActive/TitleActive";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Contact() {
	const { register, handleSubmit } = useForm();

	async function submitedData(data) {
		try {
			console.log(data);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "No se creo usuario!",
			});
		}
	}

	return (
		<div className="section-contact">
			<div className="contact-form-container">
				<form className="contact-form" onSubmit={handleSubmit(submitedData)}>
					<div className="form-title-container">
						<TitleActive
							title="Contáctenos"
							subtitle="¡A nuestro amigable equipo le encantaría saber de usted!"
						/>
					</div>
					<div className="main-form-container">
						<div className="flex-row">
							<div className="input-group">
								<label className="form-label" htmlFor="firstname">
									Nombres
								</label>
								<input
									className="inputSimple"
									type="text"
									name="firstname"
									id="firstname"
									minLength="5"
									maxLength="80"
									required
									{...register("firstname")}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="lastname">Apellidos</label>
								<input
									className="inputSimple"
									type="text"
									name="lastname"
									id="lastname"
									minLength="5"
									maxLength="80"
									required
									{...register("lastname")}
								/>
							</div>
						</div>

						<div className="flex-row">
							<div className="input-group">
								<label htmlFor="email">Correo Electrónico</label>
								<input
									className="inputSimple"
									type="email"
									name="email"
									id="email"
									pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
									minLength="5"
									maxLength="80"
									required
									{...register("email")}
								/>
							</div>

							<div className="input-group">
								<label htmlFor="phone">Número de Teléfono</label>
								<input
									className="inputSimple"
									type="tel"
									name="phone"
									id="phone"
									pattern="[0-9]{6}$"
									minLength="5"
									maxLength="80"
									required
									{...register("phone")}
								/>
							</div>
						</div>

						<div className="input-group">
							<label htmlFor="message">Mensaje</label>
							<textarea
								className="textareaSimple"
								name="message"
								id="message"
								rows="10"
								minLength="10"
								maxLength="400"
								required
								{...register("message")}
							></textarea>
						</div>

						<div className="input-group">
							<button className="buttonSimple" type="submit">
								Enviar
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="contact-map-container">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30619.274011201785!2d-71.56059390680174!3d-16.404028777964832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a58865afa1b%3A0x54d07baf51532203!2sArequipa!5e0!3m2!1ses-419!2spe!4v1694399507581!5m2!1ses-419!2spe"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen=""
					aria-hidden="false"
					tabIndex="0"
					title="Arequipa, Perú"
				></iframe>
			</div>
		</div>
	);
}
