/*Components*/
import CarouselBanner from "@/components/CarouselBanner";
import TitleDescriptionOurServices from "@/components/TitlesDescriptions/NuestrosServicios";
import WhyChooseUs from "@/components/WhyChooseUs";
import Tecnologies from "@/components/Tecnologies";
import OurServices from "@/components/OurServices";
const HomeContainer = ({ nuestrosServicios, data, tituloNuestrosServicios, porqueEscogernos, tecnologias }) => {
  return (
    <>
    <div>
      <CarouselBanner items={data} />
      <TitleDescriptionOurServices items={tituloNuestrosServicios} />
      <OurServices items={nuestrosServicios} />
      <WhyChooseUs items={porqueEscogernos} />
      <Tecnologies items={tecnologias} />
    </div>
    </>
  );
};

export default HomeContainer;
