import { useEffect, useState } from "react";
import Player from "lottie-react";
import loading from "@assets/loading.json";

import Button from "@components/button";
import { SCORE_INFO } from "@constans/STEPS";
import { ROUTES } from "@routes/routes-config";
import { Fragment } from "react/jsx-runtime";
import { generatePath, useLocation, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"; // ✅ 추가

type Level = 1 | 2 | 3 | 4 | 5;

interface ResultLocationState {
  level: Level;
  userName: string;
}

const Result = () => {
  const { state } = useLocation() as { state: ResultLocationState | undefined };
  const navigate = useNavigate();

  // ✅ 전환 애니메이션 컨트롤러
  const controls = useAnimation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!state?.level || state.level < 1 || state.level > 5) {
      navigate(ROUTES.HOME, { replace: true });
      return;
    }
    const t = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(t);
  }, [state, navigate]);

  if (!state?.level || state.level < 1 || state.level > 5) return null;

  const { level, userName } = state;
  const title = SCORE_INFO[level].title;
  const img = SCORE_INFO[level].img;
  const sub = SCORE_INFO[level].sub;

  const handleClick = async () => {
    // ✅ 트리거: On tap → 슬라이드 아웃 후 네비게이트
    await controls.start({
      x: -40, // 살짝 왼쪽으로 밀리며
      opacity: 0, // 사라짐
      transition: { duration: 0.5, ease: "easeIn" }, // Duration: 500ms
    });

    const perfumeId = String(level); // "1"~"5"
    const path = generatePath(ROUTES.PERFUME, { id: perfumeId });
    navigate(path, { state: { name: userName } });
  };

  const subMarginClass =
    level === 3 || level === 4 || level === 5 ? "mb-[4.7rem]" : "mb-[3.2rem]";

  // 로딩 화면
  if (isLoading) {
    return (
      <main className="flex h-full flex-col items-center justify-center">
        <div className="flex items-center justify-center w-[11.4rem]">
          <Player animationData={loading} autoplay loop />
        </div>
        <p className="subtitle_01 text-brown text-center">
          잠시만 기다려 주세요 <br /> 곧 결과가 나와요!
        </p>
      </main>
    );
  }

  // ✅ 전환 대상(main)을 motion으로 감싸 animate=controls
  return (
    <motion.main
      className="flex h-full flex-col items-center justify-center"
      initial={{ opacity: 1, x: 0 }}
      animate={controls}
    >
      <div className="flex flex-col items-center">
        <p className="subtitle_01">현재 {userName}님은</p>
        <div className="mb-[2.8rem] flex">
          <p className="subtitle_02_sb">{title}</p>
          <p className="subtitle_02">에 가까워 보여요</p>
        </div>

        <img
          src={img}
          alt={title}
          className={`${subMarginClass} h-[18.2rem] w-[55.4rem]`}
        />

        <p className="body_02 mb-[19.8rem] text-center">
          {sub.map((line, i) => (
            <Fragment key={`${i}-${line.slice(0, 12)}`}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </div>

      <Button
        text="추천 향 보기"
        variant="white"
        size="m"
        onClick={handleClick}
      />
    </motion.main>
  );
};

export default Result;
