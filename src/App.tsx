import React, { useRef, useEffect } from "react";
import backgroundDay from "./assets/background-day.png";
import Pipes from "./components/pipes";
import Score from "./components/score";
import GameOver from "./components/gameover";
import Bird from "./components/bird";
import Base from "./components/base";
import { useGame } from "./context";
import Header from "./components/header";

interface ScrollRefType {
  scrollLeft?: number;
}

function App() {
  const { isPlaying, gameOver } = useGame();
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
      const startTime = Date.now();
      scrollToEnd(startTime);
    }

    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, gameOver]);

  return (
    <main
      style={{
        position: "relative",
        background: `url(${backgroundDay})`,
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <Header />

      <div
        ref={scrollRef as React.MutableRefObject<HTMLDivElement>}
        style={{
          overflow: "hidden",
          position: "relative",
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
