import { useEffect } from "react";
import { GRAVITY_INTERVAL } from "../../utils/bird";
import useControls from "../../hooks/useControls";
import useGameOver from "../../hooks/useGameOver";
import { useGame } from "../../context";
import Jump from "../jump";

import midflapBird from "../../assets/yellowbird/yellowbird-midflap.png";
import animatedBird from "../../assets/yellowbird/bird.gif";
import { WrapperBird } from "./styles";

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

      return () => clearInterval(gravityInterval);
    }
  }, [
    birdPosition,
    gameOver,
    handleGravity,
    handleVerifyGameOver,
    isJumping,
    isPlaying,
  ]);

  useEffect(() => {
    window.addEventListener("keydown", handleJump);
    return () => window.removeEventListener("keydown", handleJump);
  }, [handleJump]);

  return (
    <>
      <Jump onClick={handleJump} />
      <WrapperBird
        alt="Bird"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={birdRef}
        src={image}
        birdPosition={birdPosition}
      />
    </>
  );
};

export default Bird;
