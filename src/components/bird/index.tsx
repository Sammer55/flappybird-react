import { useCallback, useEffect } from "react";
import midflapBird from "../../assets/yellowbird/yellowbird-midflap.png";
import animatedBird from "../../assets/yellowbird/bird.gif";
import { BIRD_HEIGHT, BIRD_WIDTH, GRAVITY_INTERVAL } from "../../utils/bird";
import { useGame } from "../../context";
import useControls from "../../hooks/useControls";
import useGameOver from "../../hooks/useGameOver";
import Jump from "../jump";

const Bird = () => {
  const { gameOver, birdRef, isPlaying } = useGame();

  const { isJumping, birdPosition, handleJump, handleGravity } = useControls();
  const { handleVerifyGameOver } = useGameOver();

  const image = gameOver ? midflapBird : animatedBird;

  useEffect(() => {
    if (!gameOver && isPlaying) {
      handleVerifyGameOver();

      const gravityInterval = setInterval(() => {
        handleGravity();
      }, GRAVITY_INTERVAL);

      return () => {
        clearInterval(gravityInterval);
      };
    }
  }, [birdPosition, gameOver, isJumping, isPlaying]);

  useEffect(() => {
    window.addEventListener("keydown", handleJump);
    return () => window.removeEventListener("keydown", handleJump);
  }, []);

  return (
    <>
      <Jump onClick={handleJump} />
      <img
        alt="Bird"
        ref={birdRef}
        src={image}
        style={{
          width: BIRD_WIDTH,
          height: BIRD_HEIGHT,
          zIndex: 1,
          position: "sticky",
          left: "50%",
          top: birdPosition,
          transform: `translateX(-50%)`,
          overflow: "scroll",
        }}
      />
    </>
  );
};

export default Bird;
