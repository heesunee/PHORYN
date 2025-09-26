import StepProgress from '@components/step-progress';
import SurveyQuestion from '@components/survey-question';
import { QUESTION_LIST } from '@constans/QUESTION_DATA';
import { STEPS } from '@constans/STEPS';
import { ROUTES } from '@routes/routes-config';
import { useFunnel } from '@/shared/hooks/use-funnel';

const Survey = () => {
  const { Funnel, Step, currentStep, currentIndex, steps, goNext } = useFunnel(
    STEPS,
    ROUTES.RESULT,
  );

  return (
    <main className="flex flex-col items-center gap-[22.2rem] px-[6rem] pt-[6.8rem]">
      <Funnel>
        {QUESTION_LIST.map((q, i) => (
          <Step name={STEPS[i]} key={STEPS[i]}>
            <StepProgress total={STEPS.length} current={i} key={STEPS[i]} />
            <SurveyQuestion
              questionNumber={q.questionNumber}
              questionText={q.questionText}
              answers={q.answers}
              onSelect={goNext}
            />
          </Step>
        ))}
      </Funnel>
    </main>
  );
};

export default Survey;
