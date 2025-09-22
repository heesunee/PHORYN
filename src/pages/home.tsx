import Button from '@components/button';
import LogoImg from '/logo_img.png';

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-between py-[14.9rem] h-full'>
      <img src={LogoImg} alt='로고' className='w-[40rem]' />
      <Button text='시작하기' variant='white'/>
    </main>
  );
};

export default Home;
