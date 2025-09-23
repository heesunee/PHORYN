import Button from './button';

interface Answer {
  text: string;
}

interface SurveyQuestionProps {
  questionNumber: number;
  questionText: string;
  answers: Answer[];
  onSelect: (answerIndex: number) => void;
}

const SurveyQuestion = ({
  questionNumber,
  questionText,
  answers,
  onSelect,
}: SurveyQuestionProps) => {
  return (
    <section className='text-brown text-center flex flex-col items-center gap-[9.6rem]'>
      <div className='text-center flex flex-col items-center gap-[4.1rem]'>
        <h1 className='title_01'>{questionNumber}</h1>
        <p className='title_02'>{questionText}</p>
      </div>
      <div className='flex flex-col gap-[3rem]'>
        {answers.map((answer, index) => (
          <Button
            key={index}
            text={`Q${index+1}.${answer.text}`}
            size='xl'
            onClick={() => onSelect(index)} 
          />
        ))}
      </div>
    </section>
  );
};

export default SurveyQuestion;
