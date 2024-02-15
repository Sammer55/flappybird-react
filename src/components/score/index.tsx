import { useEffect, useMemo, useState } from "react";
import { useGame } from "../../context";

import pointSound from "../../assets/sounds/audio_point.wav";
import zero from "../../assets/score/0.png";
import one from "../../assets/score/1.png";
import two from "../../assets/score/2.png";
import three from "../../assets/score/3.png";
import four from "../../assets/score/4.png";
import five from "../../assets/score/5.png";
import six from "../../assets/score/6.png";
import seven from "../../assets/score/7.png";
import eight from "../../assets/score/8.png";
import nine from "../../assets/score/9.png";
import { SCORE_DELAY } from "../../utils/game";

type ScoreNumbersType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const scores = {
  0: zero,
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven,
  8: eight,
  9: nine,
};

const Score = () => {
  const [audio] = useState(new Audio(pointSound));

  const { score, setScore, gameOver, isPlaying } = useGame();

  useEffect(() => {
    let timeoutId: number;

    if (isPlaying && !gameOver) {
      timeoutId = setTimeout(() => {
        setScore((prevScore: number) => prevScore + 1);
        audio.play();
      }, SCORE_DELAY);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [score, isPlaying, gameOver]);

  const generateImages = useMemo(() => {
    const scoreToString = score.toString();
    const splittedScore = scoreToString.split("");
    return splittedScore.map((item: string, index: number) => {
      const src = scores[item as unknown as ScoreNumbersType];
      return (
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Score point"
          key={index}
          src={src}
        />
      );
    });
  }, [score]);

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        top: 80,
        gap: 4,
      }}
    >
      {generateImages}
    </div>
  );
};

export default Score;
