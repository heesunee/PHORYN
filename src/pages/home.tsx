import Button from '@components/button';
import IcArrowIcon from '@/shared/assets/ic_arrow_right.svg?react';

const Home = () => {
  return (
    <div>
      <Button text='시작하기' icon={<IcArrowIcon/>}/>
    </div>
  );
};

export default Home;
