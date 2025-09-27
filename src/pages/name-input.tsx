import Button from '@components/button';
import { ROUTES } from '@routes/routes-config';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NameInput = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [name, setName] = useState('');

  const handleNextClick = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    });
    navigate(ROUTES.SURVEY, {
      state: { name },
    });
  };

  const isDisabled = name.trim() === '';

  return (
    <motion.main
      className="flex flex-col items-center gap-[34.4rem] pt-[40.4rem]"
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
    >
      <div className="flex flex-col items-center gap-[13.2rem]">
        <p className="subtitle_03">성함이 어떻게 되세요?</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="입력해 주세요."
          className="name_text w-[36rem] border-beige border-b-[4px] pb-[2.9rem] text-center placeholder:text-beige"
        />
      </div>
      <Button
        text="다음"
        variant="white"
        size="l"
        onClick={handleNextClick}
        disabled={isDisabled}
      />
    </motion.main>
  );
};

export default NameInput;

