import ServicesList from "../ServicesList";
import SectionTab from "@components/SectionTab";
import { services } from "@constants/titleSectionSettings";
import { servicesList } from "@/app/constants/ServicesSettings";

const Services = () => {
  return (
    <div>
      <SectionTab
        title={services.title}
        description={services.description}
        wrapperClassName="mb-10 lg:mb-[100px]"
        descriptionClassName="lg:max-w-[580px]"
      />
      <ServicesList servicesList={servicesList} />
    </div>
  );
};

export default Services;
