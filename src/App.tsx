import React, { useRef, useEffect } from "react";

import { GAME_DURATION } from "./utils/game";
import GameOver from "./components/gameover";
import Header from "./components/header";
import Pipes from "./components/pipes";
import Score from "./components/score";
import Bird from "./components/bird";
import Base from "./components/base";
import { useGame } from "./context";

import { Wrapper, WrapperPipes } from "./styles";
import useControls from "./hooks/useControls";

interface ScrollRefType {
  scrollLeft?: number;
}

function App() {
  const { isPlaying, gameOver } = useGame();
  const { handleStartScroll } = useControls();
  const scrollRef = useRef<ScrollRefType | null>(null);

  useEffect(() => {
    handleStartScroll(scrollRef);
  }, [isPlaying, gameOver]);

  return (
    <Wrapper>
      <Header />

      <WrapperPipes ref={scrollRef as React.MutableRefObject<HTMLDivElement>}>
        <Bird />
        <Pipes />
      </WrapperPipes>

      <GameOver />
      <Score />
      <Base />
    </Wrapper>
  );
}

export default App;
