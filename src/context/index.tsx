import { createContext, useContext, useRef, useState } from "react";

const GameContext = createContext({
  isPlaying: false,
  setIsPlaying: () => {},
  gameOver: false,
});

export const GameProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const birdRef = useRef();

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        score,
        setScore,
        gameOver,
        setGameOver,
        birdRef,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
