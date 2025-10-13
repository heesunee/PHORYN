import Button from '@components/button';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LogoImg from '/logo_img.png';

const Home = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  const handleStart = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    });
    navigate('/intro');
  };

  return (
    <motion.main
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      className="flex h-full flex-col items-center justify-between py-[14.9rem]"
    >
      <img src={LogoImg} alt="로고" className="w-[38.3rem]" />
      <Button text="시작하기" variant="white" onClick={handleStart} />
    </motion.main>
  );
};

export default Home;
