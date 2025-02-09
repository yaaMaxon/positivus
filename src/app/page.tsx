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
    <main className="px-5 lg:px-[100px]">
      <div className="mt-[40px] lg:mt-[70px]">
        <HomeMain />
      </div>
      <div
        id="home-services"
        className="mt-[60px] lg:mt-[140px] mb-[60px] lg:mb-[160px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
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
      <div
        id="team"
        className="mb-[60px] lg:mb-[90px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <HomeTeam />
      </div>
      <div
        id="testimonials"
        className="mb-[60px] lg:mb-[140px] scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <Testimonials />
      </div>
      <div
        id="contact-us"
        className="mb-[60px] lg:mb-[140px scroll-mt-[78px] lg:scroll-mt-[100px] xl:scroll-mt-[125px]"
      >
        <ContactUsForm />
      </div>
    </main>
  );
};

export default Home;
