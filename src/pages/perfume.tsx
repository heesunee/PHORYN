import Button from "@components/button";
import {
  PERFUME_LIBRARY,
  RESULT_MAP,
  type PerfumeKey,
} from "@constans/PERFUME";
import { ROUTES } from "@routes/routes-config";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFunnel } from "@/shared/hooks/use-funnel";
import IcArrowRight from "@assets/ic_right.svg?react";
import IcArrowLeft from "@assets/ic_left.svg?react";

import { motion, useAnimation } from "framer-motion"; // ✅ 추가

interface PerfumeLocationState {
  name?: string;
}

const Perfume = () => {
  const { id } = useParams();
  const { state } = useLocation() as {
    state: PerfumeLocationState | undefined;
  };
  const navigate = useNavigate();

  const controls = useAnimation(); // ✅ 애니메이션 컨트롤러

  const resultId = Number(id);
  const hasValidId = Number.isFinite(resultId) && !!RESULT_MAP[resultId];

  const keys: PerfumeKey[] = useMemo(
    () => (hasValidId ? RESULT_MAP[resultId]! : ["somniaBloom"]),
    [hasValidId, resultId]
  );

  const steps = useMemo(() => keys.map((_, i) => `${i}` as const), [keys]);

  const { currentIndex, goNext, goPrev, Funnel, Step } = useFunnel(
    steps,
    ROUTES.HOME
  );

  useEffect(() => {
    if (!hasValidId) navigate(ROUTES.HOME, { replace: true });
  }, [hasValidId, navigate]);

  const handleRestart = () => navigate(ROUTES.HOME);

  const isMulti = keys.length > 1;
  const showLeft = isMulti && currentIndex > 0;
  const showRight = isMulti && currentIndex < keys.length - 1;

  if (!hasValidId) return null;

  /** ✅ 공통 전환 함수 */
  const animateThen = async (fn: () => void) => {
    // ✅ slide-out
    await controls.start({
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    });

    fn(); // goNext / goPrev 실행

    // ✅ slide-in
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    });
  };

  const handleNext = () => animateThen(goNext);
  const handlePrev = () => animateThen(goPrev);

  return (
    <motion.div
      className="flex items-center h-full"
      initial={{ opacity: 1, x: 0 }}
      animate={controls}
    >
      {/* LEFT */}
      <button
        type="button"
        aria-label="이전 향 보기"
        onClick={handlePrev}
        disabled={!showLeft}
        className={`mx-auto ${showLeft ? "" : "invisible"}`}
        tabIndex={showLeft ? 0 : -1}
        aria-hidden={!showLeft}
      >
        <IcArrowLeft />
      </button>

      <main className="relative flex flex-col items-center">
        <p className="subtitle_01 mb-[3.2rem]">
          {state?.name ?? "사용자"}님에게 추천하는 향은
        </p>

        <Funnel>
          {keys.map((k, i) => {
            const data = PERFUME_LIBRARY[k];
            return (
              <Step key={k} name={`${i}`}>
                <section className="flex flex-col items-center">
                  <h1 className="title_01 mb-[6.6rem]">{data.title}</h1>

                  <img
                    src={data.img}
                    alt={data.title}
                    className="mb-[2rem] w-[45.2rem] h-[45.2rem] object-cover"
                  />

                  <div className="mb-[5.9rem] flex flex-wrap gap-[1.5rem] justify-center">
                    {data.tag.map((t) => (
                      <Button
                        text={t}
                        key={t}
                        size="m"
                        variant="white"
                        className="caption h-[5.2rem]"
                      />
                    ))}
                  </div>

                  <div className="body_02 mb-[15.2rem] text-center whitespace-pre-line">
                    {data.perfume.map((line, idx) => (
                      <Fragment key={`${idx}-${line.slice(0, 12)}`}>
                        {idx > 0 && <br />}
                        {line}
                      </Fragment>
                    ))}
                  </div>

                  <Button
                    text="처음으로"
                    variant="white"
                    size="m"
                    onClick={handleRestart}
                  />
                </section>
              </Step>
            );
          })}
        </Funnel>
      </main>

      {/* RIGHT */}
      <button
        type="button"
        aria-label="다음 향 보기"
        onClick={handleNext}
        disabled={!showRight}
        className={`mx-auto ${showRight ? "" : "invisible"}`}
        tabIndex={showRight ? 0 : -1}
        aria-hidden={!showRight}
      >
        <IcArrowRight />
      </button>
    </motion.div>
  );
};

export default Perfume;
