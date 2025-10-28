import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/name-input");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.main
      className="flex items-center justify-center h-full text-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, ease: "easeIn" },
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.8, ease: "easeOut" },
      }}
    >
      <p className="body_03">
        지금부터 체험자님의
        <br />
        스트레스 및 감정 상태를 유추하여 향을 추천해드릴게요!
        <br />
        단, 개인차가 있을 수 있으니 참고용으로만 활용해주세요.
      </p>
    </motion.main>
  );
};

export default Intro;
