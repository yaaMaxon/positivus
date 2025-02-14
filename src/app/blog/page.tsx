import Preview from "../components/Preview";
import MainBlog from "../components/MainBlog";
import SectionTab from "@components/SectionTab";
import TableBox from "@components/TableBox";
import blogIllustration from "@assets/img/homeIllustration.webp";
import { moreInsights } from "@/app/constants/titleSectionSettings";
import { moreInsightsList } from "../constants/MoreInsightsSettings";

const UseCases = () => {
  return (
    <main className="px-5 lg:px-[100px]">
      <div className="mt-10 lg:mt-[80px] mb-[26px] lg:mb-[56px]">
        <Preview
          title="PPC vs. Organic Marketing: Which One Is Right for Your Business?"
          subTitle="Marketing Strategies"
          description="PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance."
          img={blogIllustration}
        />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <MainBlog />
      </div>
      <div
        id="more-insights"
        className="mb-[60px] lg:mb-[140px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <SectionTab
          title={moreInsights.title}
          description={moreInsights.description}
          subTitles={moreInsights.subTitles}
          wrapperClassName="mb-[50px] lg:mb-[100px]"
          descriptionClassName="lg:max-w-[580px]"
        />
        <TableBox tableList={moreInsightsList} />
      </div>
    </main>
  );
};

export default UseCases;
