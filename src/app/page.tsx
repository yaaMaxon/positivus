import HomeMain from "./components/HomeMain";
import HomeServices from "./components/HomeServices";
import CaseBox from "./components/CaseBox";
import QuestionBox from "./components/QuestionBox";
import HomeTeam from "./components/HomeTeam";
import Testimonials from "./components/Testimonials";
import ContactUsForm from "./components/ContactUsForm";
import { caseStudiesList } from "./constants/CaseStudiesSettings";
import { workingQuestions } from "./constants/WorkingQuestionsSettings";

const Home = () => {
  return (
    <div className="px-5 lg:px-[100px]">
      <div className="mt-[40px] lg:mt-[70px]">
        <HomeMain />
      </div>
      <div className="mt-[60px] lg:mt-[140px] mb-[60px] lg:mb-[160px]">
        <HomeServices />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <CaseBox
          spanText="Case Studies"
          paragraphText="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          listItems={caseStudiesList}
        />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <QuestionBox
          spanText="Our Working Process"
          spanStartTextMb="Our Working"
          spanEndTextMb="Process"
          paragraphText="Step-by-Step Guide to Achieving Your Business Goals"
          questionsList={workingQuestions}
        />
      </div>
      <div className="mb-[60px] lg:mb-[90px]">
        <HomeTeam />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <Testimonials />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default Home;
