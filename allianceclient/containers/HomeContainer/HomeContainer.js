/*Components*/
import CarouselBanner from "@/components/CarouselBanner";

const HomeContainer = ({ data }) => {
	return (
		<div>
			<CarouselBanner items={data} />
		</div>
	)
}

export default HomeContainer