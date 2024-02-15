import { PIPE_MAX_HEIGHT, PIPE_MIN_HEIGHT } from "./game";

export const generateRandomHeight = () => {
  const randomPercentage = Math.floor(
    Math.random() * (PIPE_MAX_HEIGHT - PIPE_MIN_HEIGHT + 1) + PIPE_MIN_HEIGHT
  );

  return {
    pipeUp: `${randomPercentage}%`,
    pipeDown: `${100 - randomPercentage}%`,
  };
};
