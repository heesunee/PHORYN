import Button from './button';

interface Answer {
  text: string;
}

interface SurveyQuestionProps {
  questionNumber: string;
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
    <section className="flex flex-col items-center gap-[9.6rem] text-center text-brown">
      <div className="flex flex-col items-center gap-[4.1rem] text-center">
        <h1 className="title_01">{questionNumber}</h1>
        <p className="title_02 whitespace-pre-line">{questionText}</p>
      </div>
      <div className="flex flex-col gap-[3rem]">
        {answers.map((answer, id) => (
          <Button
            key={questionNumber}
            text={`${id + 1}. ${answer.text}`}
            size="xl"
            onClick={() => onSelect(id)}
          />
        ))}
      </div>
    </section>
  );
};

export default SurveyQuestion;
