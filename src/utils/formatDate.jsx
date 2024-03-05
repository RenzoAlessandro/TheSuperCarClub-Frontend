export default function formatDateOutput(fecha) {
	if (!fecha) {
		return "SIN FECHA";
	}
	const date = new Date(fecha);
	const collator = new Intl.DateTimeFormat("es-PE", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
	return collator.format(date);
}
