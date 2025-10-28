import StepProgress from "@components/step-progress";
import SurveyQuestion from "@components/survey-question";
import { QUESTION_LIST } from "@constans/QUESTION_DATA";
import { STEPS } from "@constans/STEPS";
import { ROUTES } from "@routes/routes-config";
import { handleGetCategory } from "@utils/survey";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFunnel } from "@/shared/hooks/use-funnel";
import { motion, useAnimation } from "framer-motion";

const Survey = () => {
  const { Funnel, currentIndex, Step, goNext } = useFunnel(
    STEPS,
    ROUTES.RESULT
  );
  const { state } = useLocation();
  const navigate = useNavigate();

  const controls = useAnimation();

  const [selections, setSelections] = useState<number[]>(
    Array(QUESTION_LIST.length).fill(0)
  );
  const [userName] = useState(() => state.name);

  const handleSelect = async (value: number, i: number) => {
    const next = [...selections];
    next[i] = value;
    setSelections(next);

    const isLast = currentIndex === STEPS.length - 1;

    /** ✅ 클릭 → 페이드아웃 0.3s 후 페이지 전환 */
    await controls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    });

    if (!isLast) {
      goNext();
      /** 다음 화면 페이드 인 */
      controls.start({ opacity: 1 });
      return;
    }

    /** 마지막 질문이면 → 결과 매핑 */
    const totalScore = next.reduce((sum, v) => sum + v, 0);
    const level = handleGetCategory(totalScore);
    const perfume = next[next.length - 1] + 1;

    navigate(ROUTES.RESULT, {
      state: { level, userName, perfume },
    });
  };

  return (
    <motion.main
      className="flex flex-col items-center gap-[22.2rem] px-[6rem] pt-[6.8rem]"
      initial={{ opacity: 1 }}
      animate={controls}
    >
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
    </motion.main>
  );
};

export default Survey;
