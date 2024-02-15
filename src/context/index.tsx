import { createContext, useContext, useRef, useState, ReactNode } from "react";

interface GameContextProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  birdRef: React.RefObject<unknown>;
}

const GameContext = createContext<GameContextProps>({
  isPlaying: false,
  setIsPlaying: () => {},
  score: 0,
  setScore: () => {},
  gameOver: false,
  setGameOver: () => {},
  birdRef: { current: null },
});

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
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

export const useGame = (): GameContextProps => useContext(GameContext);
