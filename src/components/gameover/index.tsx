import { CSSProperties, useEffect, useState } from "react";
import { WINDOW_HEIGHT } from "../../utils/game";
import { useGame } from "../../context";

import audioDie from "../../assets/sounds/audio_die.wav";
import gameoverImage from "../../assets/gameover.png";

const GameOver = () => {
  const [audio] = useState(new Audio(audioDie));

  const { gameOver } = useGame();

  useEffect(() => {
    if (gameOver) {
      audio.play();
      setTimeout(() => window.location.reload(), 1000);
    }
  }, [audio, gameOver]);

  const gameOverStyle: CSSProperties = {
    position: "absolute",
    top: WINDOW_HEIGHT / 2,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 3,
  };

  return (
    gameOver && (
      <img alt="Game over" src={gameoverImage} style={gameOverStyle} />
    )
  );
};

export default GameOver;
