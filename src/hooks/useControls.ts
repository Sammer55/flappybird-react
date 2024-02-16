import { Ref, useState } from "react";
import { useGame } from "../context";
import { BIRD_HEIGHT, JUMP_DURATION, JUMP_HEIGHT } from "../utils/bird";
import { GAME_DURATION, WINDOW_HEIGHT } from "../utils/game";

const center = WINDOW_HEIGHT / 2 - BIRD_HEIGHT / 2;

interface ScrollRefType {
  scrollLeft?: number;
}

const useControls = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [birdPosition, setBirdPosition] = useState(center);

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

  const handleStartScroll = (scrollRef) => {
    let animationId: number;

    const buttonElement = scrollRef.current as HTMLDivElement;
    const scrollWidth =
      (buttonElement.scrollWidth || 0) - (buttonElement.clientWidth || 0);

    const scrollToEnd = (startTime: number) => {
      const currentTime = Date.now();
      const progress = (currentTime - startTime) / GAME_DURATION;

      if (buttonElement.scrollLeft !== undefined)
        buttonElement.scrollLeft = progress * scrollWidth;

      if (progress < 1 && isPlaying && !gameOver) {
        animationId = requestAnimationFrame(() => scrollToEnd(startTime));
      }
    };

    if (isPlaying && !gameOver) {
      const startTime = Date.now();
      scrollToEnd(startTime);
    }

    return () => cancelAnimationFrame(animationId);
  };

  return {
    handleJump,
    birdPosition,
    setBirdPosition,
    handleGravity,
    isJumping,
    handleStartScroll,
  };
};

export default useControls;
