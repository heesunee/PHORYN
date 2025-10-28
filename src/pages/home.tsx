import Button from "@components/button";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LogoImg from "/logo_img.png";
import MainImg from "/main.png";

const Home = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  const handleStart = async () => {
    // 1) → Home 화면 페이드아웃
    await controls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    });

    // 2) → intro로 이동
    navigate("/intro");
  };

  return (
    <motion.main
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      className="flex h-full flex-col items-center justify-between py-[14.9rem]"
    >
      <img src={MainImg} alt="로고" className="w-[90.4rem] h-[94rem]" />
      <img
        src={LogoImg}
        alt="로고"
        className="w-[23.4rem] h-[7.3rem] mt-[1.7rem] mb-[6.2rem]"
      />
      <Button text="시작하기" variant="white" onClick={handleStart} />
    </motion.main>
  );
};

export default Home;
