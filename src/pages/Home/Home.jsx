// import Banner from "../../layout/Banner/Banner";

import ApproachList from "../../components/ApproachList/ApproachList";
import { BrowseByMakeContainer } from "../../components/BrowseByMakeContainer/BrowseByMakeContainer";
import { BrowseByTypeContainer } from "../../components/BrowseByTypeContainer/BrowseByTypeContainer";
import { DriveNowContainer } from "../../components/DriveNowContainer/DriveNowContainer";
import { FeaturedVehiclesContainer } from "../../components/FeaturedVehiclesContainer/FeaturedVehiclesContainer";
import FeaturesList from "../../components/FeaturesList/FeaturesList";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { SliderBrandsContainer } from "../../components/SliderBrandsContainer/SliderBrandsContainer";
import { TestimonialContainer } from "../../components/TestimonialContainer/TestimonialContainer";
import Banner from "../../layout/Banner/Banner";

export default function Home() {
	return (
		<>
			<Banner />
			<div className="main-max-width">
				<SectionTitle title="The SuperCar Club" content={FeaturesList} />

				<SectionDivider />

				<DriveNowContainer />

				<SectionDivider />

				<FeaturedVehiclesContainer />

				<SectionDivider />

				<BrowseByMakeContainer />

				<SectionDivider />

				<BrowseByTypeContainer />

				<SectionDivider />

				<TestimonialContainer />

				<SectionDivider />

				<SliderBrandsContainer />

				<SectionDivider />

				<ApproachList />
			</div>
		</>
	);
}
