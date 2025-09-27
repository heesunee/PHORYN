import Button from '@components/button';
import { PERFUME_INFO } from '@constans/PERFUME';
import { ROUTES } from '@routes/routes-config';
import { Fragment } from 'react/jsx-runtime';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Perfume = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const perfume = Number(id);
  const data = PERFUME_INFO[perfume];
  const handleClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <main className="flex flex-col items-center pt-[12.4rem]">
      <p className="subtitle_01 mb-[3.2rem]">{state.name}님에게 추천하는 향은</p>
      <h1 className="title_01 mb-[6.6rem]">{data.title}</h1>
      <img src={data.img} alt={data.title} className="mb-[2rem]" />
      <div className="mb-[6rem] flex gap-[1.5rem]">
        {data.tag.map((t) => (
          <Button text={t} key={t} variant="white" className="caption h-[5.2rem]" />
        ))}
      </div>
      <div className="body_02 mb-[5.9rem] text-center">
        {data.perfume.map((line, i) => (
          <Fragment key={`${i}-${line.slice(0, 12)}`}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </div>
      <Button text="처음으로" variant="white" size="l" onClick={handleClick} />
    </main>
  );
};

export default Perfume;
