import CaseBox from "../components/CaseBox";
import { useCasesList } from "../types/UseCasesSettings";

const Services = () => {
  return (
    <div className="px-5 lg:px-[100px]">
      <div className="mb-[60px] lg:mb-[140px]">
        <CaseBox
          spanText="Use Cases"
          paragraphText="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          listItems={useCasesList}
        />
      </div>
    </div>
  );
};

export default Services;
