interface StepProgressProps {
  total: number;
  current: number;
}

const StepProgress = ({ total, current }: StepProgressProps) => {
  return (
    <div className="flex items-center justify-center gap-[1rem]">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-[0.4rem] w-[8.2rem] transition-colors duration-300 ease-in ${i === current ? 'bg-brown' : 'bg-beige'}`}
        />
      ))}
    </div>
  );
};

export default StepProgress;
