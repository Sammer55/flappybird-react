import React, { useEffect, useState } from "react";
import midflapBird from "../../assets/yellowbird/yellowbird-midflap.png";
import animatedBird from "../../assets/yellowbird/bird.gif";
import { BIRD_HEIGHT, BIRD_WIDTH } from "../../utils/bird";
import { BASE_HEIGHT, WINDOW_HEIGHT } from "../../utils/game";
import { useGame } from "../../context";

const GRAVITY_INTERVAL = 10; // Intervalo em milissegundos para a gravidade
const JUMP_HEIGHT = 2; // Altura do pulo
const JUMP_DURATION = 200; // Duração do pulo em milissegundos

const Bird = () => {
  const { gameOver, setGameOver, birdRef, isPlaying, setIsPlaying } = useGame();
  const [birdPosition, setBirdPosition] = useState(
    WINDOW_HEIGHT / 2 - BIRD_HEIGHT / 2
  );

  const [isJumping, setIsJumping] = useState(false);
  const [rotation, setRotation] = useState(0);

  const image = gameOver ? midflapBird : animatedBird;

  const handleCheckVisibility = () => {
    const element = birdRef?.current;
    console.log("Visible = " + isVisible(element));
  };

  const handleGravity = () => {
    if (!isJumping) {
      setBirdPosition((prevPosition) =>
        Math.min(prevPosition + 1, WINDOW_HEIGHT - BIRD_HEIGHT - 20)
      );
    }
  };

  const handleJump = () => {
    if (!isPlaying) setIsPlaying(true);

    if (!isJumping) {
      setIsJumping(true);
      const jumpStart = Date.now();

      const jumpAnimation = () => {
        const elapsedTime = Date.now() - jumpStart;
        const progress = Math.min(1, elapsedTime / JUMP_DURATION);
        const jumpHeight = JUMP_HEIGHT * (1 - Math.pow(progress - 1, 2));

        setBirdPosition((prevPosition) =>
          Math.max(prevPosition - jumpHeight, 0)
        );

        setRotation(() => -40 * (1 - progress));

        if (progress < 1) {
          requestAnimationFrame(jumpAnimation);
        } else {
          setIsJumping(false);
          setRotation(0);
        }
      };

      requestAnimationFrame(jumpAnimation);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === " " && !gameOver && !isJumping) {
      handleJump();
    }
  };

  const isVisible = (element) => {
    if (!isVisibleByStyles(element)) return false;
    if (isBehindOtherElement(element)) return false;
    return true;
  };

  const isVisibleByStyles = (element) => {
    const styles = window.getComputedStyle(element);
    return styles.visibility !== "hidden" && styles.display !== "none";
  };

  const isBehindOtherElement = (element) => {
    const boundingRect = element.getBoundingClientRect();
    const left = boundingRect.left + 1;
    const right = boundingRect.right - 1;
    const top = boundingRect.top + 1;
    const bottom = boundingRect.bottom - 1;

    if (bottom > WINDOW_HEIGHT - BASE_HEIGHT && !gameOver)
      return setGameOver(true);

    if (!element.contains(document.elementFromPoint(left, top))) return true;
    if (!element.contains(document.elementFromPoint(right, top))) return true;
    if (!element.contains(document.elementFromPoint(left, bottom))) return true;
    if (!element.contains(document.elementFromPoint(right, bottom)))
      return true;

    return false;
  };

  useEffect(() => {
    if (!gameOver && isPlaying) {
      handleCheckVisibility();

      const gravityInterval = setInterval(() => {
        handleGravity();
      }, GRAVITY_INTERVAL);

      return () => {
        clearInterval(gravityInterval);
      };
    }
  }, [birdPosition, gameOver, isJumping, gameOver, isPlaying]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <img
      ref={birdRef}
      src={image}
      style={{
        width: BIRD_WIDTH,
        height: BIRD_HEIGHT,
        zIndex: 1,
        position: "absolute",
        left: "50%",
        top: birdPosition,
        transform: `translateX(-50%)`,
      }}
    />
  );
};

export default Bird;
