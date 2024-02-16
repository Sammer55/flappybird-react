import { useEffect } from "react";
import { useGame } from "../../context";

import gameoverImage from "../../assets/gameover.png";
import { GameOverImage } from "./styles";

const GameOver = () => {
  const { gameOver } = useGame();

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => window.location.reload(), 1000);
    }
  }, [gameOver]);

  return gameOver && <GameOverImage alt="Game over" src={gameoverImage} />;
};

export default GameOver;
