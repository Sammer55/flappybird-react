import { useGame } from "../context";
import { BASE_HEIGHT, WINDOW_HEIGHT } from "../utils/game";

const useGameOver = () => {
  const { birdRef, gameOver, setGameOver, score } = useGame();

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

    if (bottom > WINDOW_HEIGHT - BASE_HEIGHT && !gameOver) return true;

    if (!element.contains(document.elementFromPoint(left, top))) return true;
    if (!element.contains(document.elementFromPoint(right, top))) return true;
    if (!element.contains(document.elementFromPoint(left, bottom))) return true;
    if (!element.contains(document.elementFromPoint(right, bottom)))
      return setGameOver(true);

    return false;
  };

  const handleVerifyGameOver = () => {
    const element = birdRef?.current;
    const visible = isVisible(element);

    if (!visible) {
      setGameOver(true);

      const lastScore = localStorage.getItem("score") || 0;
      const isBetter = Number(lastScore) < score;
      if (isBetter) localStorage.setItem("score", score);

      window.location.reload();
    }
  };

  return {
    handleVerifyGameOver,
  };
};

export default useGameOver;
