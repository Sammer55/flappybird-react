import { useEffect, useState } from "react";
import gameoverImage from "../../assets/gameover.png";
import { WINDOW_HEIGHT } from "../../utils/game";
import { useGame } from "../../context";
import audioDie from "../../assets/sounds/audio_die.wav";

const GameOver = () => {
  const [audio] = useState(new Audio(audioDie));

  const { gameOver } = useGame();

  useEffect(() => {
    if (gameOver) audio.play();
  }, [gameOver]);

  return (
    gameOver && (
      <img
        src={gameoverImage}
        style={{
          position: "absolute",
          top: WINDOW_HEIGHT / 2,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />
    )
  );
};

export default GameOver;
