import StepProgress from '@components/step-progress';
import SurveyQuestion from '@components/survey-question';
import { QUESTION_LIST } from '@constans/QUESTION_DATA';
import { STEPS } from '@constans/STEPS';
import { ROUTES } from '@routes/routes-config';
import { handleGetCategory } from '@utils/survey';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFunnel } from '@/shared/hooks/use-funnel';

const Survey = () => {
  const { Funnel, currentIndex, Step, goNext } = useFunnel(STEPS, ROUTES.RESULT);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selections, setSelections] = useState<number[]>(Array(QUESTION_LIST.length).fill(0));

  const [userName] = useState(() => state.name);

  const handleSelect = (value: number, i: number) => {
    const next = [...selections];
    next[i] = value;
    setSelections(next);

    const isLast = currentIndex === STEPS.length - 1;
    if (!isLast) return goNext();

    const totalScore = next.reduce((sum, v) => sum + v, 0);
    const level = handleGetCategory(totalScore);
    const perfume = selections[selections.length - 1] + 1;

    navigate(ROUTES.RESULT, {
      state: { level, userName, perfume },
    });
  };

  return (
    <main className="flex flex-col items-center gap-[22.2rem] px-[6rem] pt-[6.8rem]">
      <Funnel>
        {QUESTION_LIST.map((q, i) => (
          <Step name={STEPS[i]} key={STEPS[i]}>
            <StepProgress total={STEPS.length} current={i} />
            <SurveyQuestion
              questionNumber={q.questionNumber}
              questionText={q.questionText}
              answers={q.answers}
              onSelect={(value: number) => handleSelect(value, i)}
            />
          </Step>
        ))}
      </Funnel>
    </main>
  );
};

export default Survey;
