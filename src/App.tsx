import React, { useRef, useEffect } from "react";
import backgroundDay from "./assets/background-day.png";
import Pipes from "./components/pipes";
import Score from "./components/score";
import GameOver from "./components/gameover";
import Bird from "./components/bird";
import Base from "./components/base";
import { useGame } from "./context";

interface ScrollRefType {
  scrollLeft?: number;
}

function App() {
  const { isPlaying, gameOver, setIsPlaying } = useGame();
  const scrollRef = useRef<ScrollRefType | null>(null);

  const duration = 150000;

  useEffect(() => {
    let animationId: number;

    const buttonElement = scrollRef.current as HTMLDivElement;
    const scrollWidth =
      (buttonElement.scrollWidth || 0) - (buttonElement.clientWidth || 0);

    const scrollToEnd = (startTime: number) => {
      const currentTime = Date.now();
      const progress = (currentTime - startTime) / duration;

      if (buttonElement.scrollLeft !== undefined) {
        buttonElement.scrollLeft = progress * scrollWidth;
      }

      if (progress < 1 && isPlaying && !gameOver) {
        animationId = requestAnimationFrame(() => scrollToEnd(startTime));
      }
    };

    if (isPlaying && !gameOver) {
      let startTime = Date.now();

      scrollToEnd(startTime);
    }

    // Cleanup function to cancel animation frame when component unmounts or game over
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, gameOver]);

  return (
    <main
      style={{
        position: "relative",
        background: `url(${backgroundDay})`,
      }}
      onClick={() => setIsPlaying(true)}
    >
      <div
        ref={scrollRef as React.MutableRefObject<HTMLDivElement>}
        style={{
          height: "100vh",
          overflowY: "hidden",
          overflowX: "scroll",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Bird />
        <Pipes />
      </div>

      <GameOver />
      <Score />
      <Base />
    </main>
  );
}

export default App;
