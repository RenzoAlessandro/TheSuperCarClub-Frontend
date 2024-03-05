import "./Gallery.css";
import TitleCenter from "../../components/TitleCenter/TitleCenter";

import img1 from "../../assets/gallery/Gallery-1.jpg";
import img2 from "../../assets/gallery/Gallery-2.jpg";
import img3 from "../../assets/gallery/Gallery-3.jpg";
import img4 from "../../assets/gallery/Gallery-4.jpg";
import img5 from "../../assets/gallery/Gallery-5.jpg";
import img6 from "../../assets/gallery/Gallery-6.jpg";
import img7 from "../../assets/gallery/Gallery-7.jpg";
import img8 from "../../assets/gallery/Gallery-8.jpg";
import img9 from "../../assets/gallery/Gallery-9.jpg";
import img10 from "../../assets/gallery/Gallery-10.jpg";
import img11 from "../../assets/gallery/Gallery-11.jpg";
import img12 from "../../assets/gallery/Gallery-12.jpg";
import img13 from "../../assets/gallery/Gallery-13.jpg";
import img14 from "../../assets/gallery/Gallery-14.jpg";
import img15 from "../../assets/gallery/Gallery-15.jpg";
import img16 from "../../assets/gallery/Gallery-16.jpg";
import img17 from "../../assets/gallery/Gallery-17.jpg";
import img18 from "../../assets/gallery/Gallery-18.jpg";
import img19 from "../../assets/gallery/Gallery-19.jpg";
import img20 from "../../assets/gallery/Gallery-20.jpg";
import img21 from "../../assets/gallery/Gallery-21.jpg";
import img22 from "../../assets/gallery/Gallery-22.jpg";
import img23 from "../../assets/gallery/Gallery-23.jpg";
import img24 from "../../assets/gallery/Gallery-24.jpg";

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
