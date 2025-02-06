import PricingPlans from "../components/PricingPlans";
import QuestionBox from "../components/QuestionBox";
import { frequantlyQuestions } from "../constants/FrequantlyQuestionsSettings";

const Pricing = () => {
  return (
    <main className="px-5 lg:px-[100px]">
      <div className="mt-10 lg:mt-[60px] mb-[60px] lg:mb-[140px]">
        <PricingPlans />
      </div>
      <div className="mb-[60px] lg:mb-[140px]">
        <QuestionBox
          spanText="Frequantly Asked Questions"
          spanStartTextMb="Frequantly Asked"
          spanEndTextMb="Questions"
          questionsList={frequantlyQuestions}
        />
      </div>
    </main>
  );
};

export default Pricing;
