/*Components*/
import CarouselBanner from "@/components/CarouselBanner";
import TitleDescriptionOurServices from "@/components/TitlesDescriptions/NuestrosServicios";
import WhyChooseUs from "@/components/WhyChooseUs";

import OurServices from "@/components/OurServices";
const HomeContainer = ({ nuestrosServicios, data, tituloNuestrosServicios, porqueEscogernos }) => {
  return (
    <>
    <div>
      <CarouselBanner items={data} />
      <TitleDescriptionOurServices items={tituloNuestrosServicios} />
      <OurServices items={nuestrosServicios} />
      <WhyChooseUs items={porqueEscogernos} />
      
    </div>
    </>
  );
};

export default HomeContainer;
