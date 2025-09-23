import Button from '@components/button';
import StepProgress from '@components/step-progress';

const Survey = () => {
  return (
    <main className='flex flex-col items-center pt-[6.8rem] px-[6rem] gap-[22.2rem]'>
      <StepProgress total={10} current={0} />
      <section className='text-brown text-center flex flex-col items-center gap-[9.6rem]'>
        <div className='text-center flex flex-col items-center gap-[4.1rem]'>
          <h1 className='title_01'>Q1.</h1>
          <p className='title_02'>오늘 하루의 에너지는 어땠나요?</p>
        </div>
        <div className='flex flex-col gap-[3rem]'>
          <Button text='1. 에너지가 넘쳐요!' size='xl' />
          <Button text='2. 에너지가 넘쳐요!' size='xl' />
          <Button text='3. 에너지가 넘쳐요!' size='xl' />
          <Button text='4. 에너지가 넘쳐요!' size='xl' />
          <Button text='5. 에너지가 넘쳐요!' size='xl' />
        </div>
      </section>
    </main>
  );
};

export default Survey;
