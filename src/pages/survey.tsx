import StepProgress from '@components/step-progress';
import SurveyQuestion from '@components/survey-question';
import { Q1_DATA } from '@constans/QUESTION_DATA';

const Survey = () => {
  return (
    <main className='flex flex-col items-center pt-[6.8rem] px-[6rem] gap-[22.2rem]'>
      <StepProgress total={10} current={0} />
      <SurveyQuestion
        questionNumber={Q1_DATA.questionNumber}
        questionText={Q1_DATA.questionText}
        answers={Q1_DATA.answers}
        onSelect={() => {}}
      />
    </main>
  );
};

export default Survey;
