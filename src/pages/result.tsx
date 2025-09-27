import IcArrowRight from '@assets/ic_arrow_right.svg?react';
import Button from '@components/button';
import { SCORE_INFO } from '@constans/STEPS';
import { Fragment } from 'react/jsx-runtime';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();
  const title = SCORE_INFO[state.level].title;
  const img = SCORE_INFO[state.level].img;
  const sub = SCORE_INFO[state.level].sub;

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="subtitle_01">현재 {state.userName}님은</p>
        <div className="mb-[2.8rem] flex">
          <p className="subtitle_02_sb">{title}</p>
          <p className="subtitle_02">에 가까워 보여요</p>
        </div>
        <img src={img} alt={title} className="mb-[3.2rem] h-[18.2rem] w-[55.4rem]" />
        <p className="body_02 mb-[19rem] text-center">
          {sub.map((line, i) => (
            <Fragment key={`${i}-${line.slice(0, 12)}`}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </div>

      <Button text="추천 향 보기" icon={<IcArrowRight />} variant="white" size="etc" />
    </main>
  );
};

export default Result;
