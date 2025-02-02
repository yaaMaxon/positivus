import QuestionBox from "../components/QuestionBox";
import { frequantlyQuestions } from "../types/FrequantlyQuestionsSettings";

const Pricing = () => {
  return (
    <div className="px-5 lg:px-[100px]">
      <div className="mb-[60px] lg:mb-[140px]">
        <QuestionBox
          spanText="Frequantly Asked Questions"
          spanStartTextMb="Frequantly Asked"
          spanEndTextMb="Questions"
          questionsList={frequantlyQuestions}
        />
      </div>
    </div>
  );
};

export default Pricing;
