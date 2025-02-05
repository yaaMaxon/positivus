import Preview from "../components/Preview";
import SuccessStory from "../components/SuccessStory";
import BlurbBox from "../components/BlurbBox";
import Testimonials from "../components/Testimonials";
import useCasePreview from "@assets/img/useCasePreview.webp";
import FreeProposeUseCase from "@assets/icons/freeProposeUseCase.svg";
import SectionTab from "@components/SectionTab";
import TableBox from "@components/TableBox";
import { allStories } from "@/app/constants/titleSectionSettings";
import { allStoriesList } from "@/app/constants/AllStoriesSettings";

const UseCases = () => {
  return (
    <div className="px-5 lg:px-[100px]">
      <div className="mt-10 lg:mt-[80px] mb-[60px] lg:mb-[140px]">
        <Preview
          title="Proven Success Stories"
          description="See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together."
          img={useCasePreview}
        />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <SuccessStory />
      </div>
      <div className="mb-[50px] lg:mb-[140px]">
        <SectionTab
          title={allStories.title}
          description={allStories.description}
          wrapperClassName="mb-[50px] lg:mb-[105px]"
          descriptionClassName="lg:max-w-[580px]"
        />
        <TableBox tableList={allStoriesList} />
      </div>
      <div className="hidden lg:block mb-[120px]">
        <Testimonials />
      </div>
      <div className="mb-[60px] lg:mb-[150px]">
        <BlurbBox
          subTitle="Let’s Create Your Next Success Story"
          description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
          textBtn="Get your proposal"
          icon={<FreeProposeUseCase />}
          className="bg-green shadow-[0px_5px_0px_0px_#191A23] lg:shadow-none"
        />
      </div>
    </div>
  );
};

export default UseCases;
