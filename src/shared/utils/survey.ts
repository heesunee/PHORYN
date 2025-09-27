export const handleGetCategory = (score: number) => {
  if (score >= 10 && score <= 18) return 1;
  else if (score <= 27) return 2;
  else if (score <= 36) return 3;
  else if (score <= 45) return 4;
  return 5;
};
