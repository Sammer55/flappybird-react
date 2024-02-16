import { useEffect, useState } from "react";
import { useGame } from "../../context";

import audioDie from "../../assets/sounds/audio_die.wav";
import gameoverImage from "../../assets/gameover.png";
import { GameOverImage } from "./styles";

const GameOver = () => {
  const [audio] = useState(new Audio(audioDie));

  const { gameOver } = useGame();

  useEffect(() => {
    if (gameOver) {
      audio.play();
      setTimeout(() => window.location.reload(), 1000);
    }
  }, [audio, gameOver]);

  return gameOver && <GameOverImage alt="Game over" src={gameoverImage} />;
};

export default GameOver;
