import { useState } from "react";
import { useGame } from "../context";
import { BIRD_HEIGHT, JUMP_DURATION, JUMP_HEIGHT } from "../utils/bird";
import { WINDOW_HEIGHT } from "../utils/game";

const useControls = () => {
  const [birdPosition, setBirdPosition] = useState(
    WINDOW_HEIGHT / 2 - BIRD_HEIGHT / 2
  );
  const [isJumping, setIsJumping] = useState(false);

  const { isPlaying, setIsPlaying, gameOver } = useGame();

  const handleJump = () => {
    if (!isPlaying) setIsPlaying(true);

    if (!isJumping && !gameOver) {
      setIsJumping(true);
      const jumpStart = Date.now();

      const jumpAnimation = () => {
        const elapsedTime = Date.now() - jumpStart;
        const progress = Math.min(1, elapsedTime / JUMP_DURATION);
        const jumpHeight = JUMP_HEIGHT * (1 - Math.pow(progress - 1, 2));

        setBirdPosition((prevPosition) =>
          Math.max(prevPosition - jumpHeight, 0)
        );

        if (progress < 1) {
          requestAnimationFrame(jumpAnimation);
        } else {
          setIsJumping(false);
        }
      };

      requestAnimationFrame(jumpAnimation);
    }
  };

  const handleGravity = () => {
    if (!isJumping)
      setBirdPosition((prevPosition) =>
        Math.min(prevPosition + 1, WINDOW_HEIGHT - BIRD_HEIGHT - 20)
      );
  };

  return {
    handleJump,
    birdPosition,
    setBirdPosition,
    handleGravity,
    isJumping,
  };
};

export default useControls;
