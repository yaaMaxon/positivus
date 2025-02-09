import ServicesList from "../ServicesList";
import SectionTab from "@components/SectionTab";
import { homeServices } from "@constants/titleSectionSettings";
import { servicesList } from "@constants/HomeServicesSettings";
import FreePropose from "@assets/icons/freePropose.svg";
import BlurbBox from "../BlurbBox";

const HomeServices = () => {
  return (
    <div>
      <SectionTab
        title={homeServices.title}
        description={homeServices.description}
        wrapperClassName="mb-10 lg:mb-[85px]"
        descriptionClassName="lg:max-w-[580px]"
      />
      <ServicesList servicesList={servicesList} />
      <BlurbBox
        subTitle="Let’s make things happen"
        description="Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online."
        textBtn="Get your proposal"
        icon={<FreePropose />}
        path="/pricing"
      />
    </div>
  );
};

export default HomeServices;
