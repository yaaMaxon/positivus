import Preview from "../components/Preview";
import SearchEngine from "../components/SearchEngine";
import SeoProcess from "../components/SeoProcess";
import CaseBox from "../components/CaseBox";
import OtherServices from "@components/OtherServices";
import ElevateYourRanking from "../components/ElevateYourRanking";
import servicePreview from "@assets/img/servicePreview.webp";
import { useCasesList } from "../constants/UseCasesSettings";

const Services = () => {
  return (
    <main className="px-5 lg:px-[100px]">
      <div className="mt-10 lg:mt-[80px] mb-[35px] lg:mb-10">
        <Preview
          title="Expert Digital Marketing Services"
          description="Unlock your business’s full potential with tailored strategies designed to drive growth and deliver results."
          img={servicePreview}
        />
      </div>
      <div
        id="search-engine"
        className="mb-[60px] lg:mb-[140px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <SearchEngine />
      </div>
      <div
        id="seo-process"
        className="mb-[60px] lg:mb-[140px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <SeoProcess />
      </div>
      <div
        id="use-cases"
        className="mb-[60px] lg:mb-[140px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <CaseBox
          spanText="Use Cases"
          paragraphText="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          listItems={useCasesList}
        />
      </div>
      <div className="mb-[60px] lg:mb-[160px]">
        <OtherServices />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <ElevateYourRanking />
      </div>
    </main>
  );
};

export default Services;
