/*Components*/
import CarouselBanner from "@/components/CarouselBanner";
import TitleDescriptionOurServices from "@/components/TitlesDescriptions/NuestrosServicios";
import WhyChooseUs from "@/components/WhyChooseUs";
import Tecnologies from "@/components/Tecnologies";
import OurServices from "@/components/OurServices";
import DiscutamosTuIdea from "@/components/DiscutamosTuIdea";

const HomeContainer = ({ discutamos, nuestrosServicios, data, tituloNuestrosServicios, porqueEscogernos, tecnologias }) => {
  return (
    <>
    <div>
      <CarouselBanner items={data} />
      <TitleDescriptionOurServices items={tituloNuestrosServicios} />
      <OurServices items={nuestrosServicios} />
      <WhyChooseUs items={porqueEscogernos} />
      <Tecnologies items={tecnologias} />
      <DiscutamosTuIdea items={discutamos}/>
    </div>
    </>
  );
};

export default HomeContainer;
