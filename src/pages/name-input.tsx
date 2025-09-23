import Button from '@components/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const NameInput = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [name, setName] = useState('');

  const handleNextClick = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    });
    navigate(`/survey?name=${encodeURIComponent(name)}`);
  };

  const isDisabled = name.trim() === '';

  return (
    <motion.main
      className='flex flex-col items-center pt-[40.4rem] gap-[34.4rem]'
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
    >
      <div className='flex flex-col items-center gap-[13.2rem]'>
        <p className='subtitle_03'>성함이 어떻게 되세요?</p>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='입력해 주세요.'
          className='name_text text-center w-[36rem] pb-[2.9rem] placeholder:text-beige border-b-[4px] border-beige'
        />
      </div>
      <Button text='다음' variant='white' size='l' onClick={handleNextClick} disabled={isDisabled}/>
    </motion.main>
  );
};

export default NameInput;
