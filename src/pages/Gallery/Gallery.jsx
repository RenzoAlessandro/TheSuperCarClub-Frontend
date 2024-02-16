import "./Gallery.css";
import TitleCenter from "../../components/TitleCenter/TitleCenter";

import img1 from "../../assets/gallery/Gallery-1.webp";
import img2 from "../../assets/gallery/Gallery-2.webp";
import img3 from "../../assets/gallery/Gallery-3.webp";
import img4 from "../../assets/gallery/Gallery-4.webp";
import img5 from "../../assets/gallery/Gallery-5.webp";
import img6 from "../../assets/gallery/Gallery-6.webp";
import img7 from "../../assets/gallery/Gallery-7.webp";
import img8 from "../../assets/gallery/Gallery-8.webp";
import img9 from "../../assets/gallery/Gallery-9.webp";
import img10 from "../../assets/gallery/Gallery-10.webp";
import img11 from "../../assets/gallery/Gallery-11.webp";
import img12 from "../../assets/gallery/Gallery-12.webp";
import img13 from "../../assets/gallery/Gallery-13.webp";
import img14 from "../../assets/gallery/Gallery-14.webp";
import img15 from "../../assets/gallery/Gallery-15.webp";
import img16 from "../../assets/gallery/Gallery-16.webp";
import img17 from "../../assets/gallery/Gallery-17.webp";
import img18 from "../../assets/gallery/Gallery-18.webp";
import img19 from "../../assets/gallery/Gallery-19.webp";
import img20 from "../../assets/gallery/Gallery-20.webp";
import img21 from "../../assets/gallery/Gallery-21.webp";
import img22 from "../../assets/gallery/Gallery-22.webp";
import img23 from "../../assets/gallery/Gallery-23.webp";
import img24 from "../../assets/gallery/Gallery-24.webp";

export default function Gallery() {
	return (
		<>
			<TitleCenter
				title="Nuestra Galería de Fotos"
				subtitle="Sumérgete en el mundo del lujo y la elegancia"
			/>
			<div className="section-gallery">
				<div className="row">
					<div className=" column">
						<img src={img1} />
						<img src={img2} />
						<img src={img3} />
						<img src={img4} />
						<img src={img5} />
						<img src={img13} />
					</div>
					<div className="column">
						<img src={img7} />
						<img src={img8} />
						<img src={img9} />
						<img src={img10} />
						<img src={img11} />
						<img src={img12} />
					</div>
					<div className="column">
						<img src={img6} />
						<img src={img14} />
						<img src={img15} />
						<img src={img16} />
						<img src={img17} />
						<img src={img18} />
					</div>
					<div className="column">
						<img src={img19} />
						<img src={img20} />
						<img src={img21} />
						<img src={img22} />
						<img src={img23} />
						<img src={img24} />
					</div>
				</div>
			</div>
		</>
	);
}
