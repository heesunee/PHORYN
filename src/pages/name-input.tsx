import Button from "@components/button";
import { ROUTES } from "@routes/routes-config";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const NameInput = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [name, setName] = useState("");

  const isDisabled = name.trim() === "";

  const goNext = useCallback(async () => {
    if (isDisabled) return;
    // 1) 화면 페이드아웃 (Smart animate 유사: 300ms, easeIn)
    await controls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    });
    // 2) 다음 질문지로 이동
    navigate(ROUTES.SURVEY, { state: { name: name.trim() } });
  }, [controls, navigate, name, isDisabled]);

  const handleNextClick = () => {
    void goNext();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      void goNext();
    }
  };

  return (
    <motion.main
      className="flex flex-col items-center gap-[34.4rem] pt-[40.4rem]"
      initial={{ opacity: 1 }}
      animate={controls}
    >
      <div className="flex flex-col items-center gap-[13.2rem]">
        <p className="subtitle_03">성함이 어떻게 되세요?</p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="입력해 주세요."
          className="name_text w-[36rem] border-beige border-b-[4px] pb-[2.9rem] text-center placeholder:text-beige"
          autoFocus
        />
      </div>

      {/* 버튼 hover/tap 인터랙션 (200ms, easeIn) */}
      <motion.div
        whileHover={{ scale: isDisabled ? 1 : 1.02 }}
        whileTap={{ scale: isDisabled ? 1 : 0.98 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        <Button
          text="다음"
          variant="white"
          size="m"
          onClick={handleNextClick}
          disabled={isDisabled}
        />
      </motion.div>
    </motion.main>
  );
};

export default NameInput;
