export const generateRandomHeight = () => {
  const randomPercentage = Math.floor(Math.random() * (60 - 20 + 1) + 20);
  return {
    pipeUp: `${randomPercentage}%`,
    pipeDown: `${100 - randomPercentage}%`,
  };
};
