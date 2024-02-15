import { CSSProperties } from "react";
import { BASE_HEIGHT } from "../../utils/game";

type BarProps = {
  backgroundColor: string;
};

const Bar = ({ backgroundColor }: BarProps) => (
  <div
    style={{
      height: 4,
      backgroundColor,
      width: "100%",
    }}
  />
);

const Base = () => {
  const containerStyle: CSSProperties = {
    width: "100%",
    height: BASE_HEIGHT,
    backgroundColor: "#DED895",
    zIndex: 999999,
  };

  const flexContainerStyle: CSSProperties = {
    height: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const gradientBarStyle: CSSProperties = {
    width: "100%",
    height: 8,
    backgroundColor: "#73bf2e",
    backgroundImage:
      "repeating-linear-gradient(-25deg, transparent 10px, transparent 20px, #9ce659 10px, #9ce659 30px)",
  };

  return (
    <div style={containerStyle}>
      <Bar backgroundColor="#543847" />
      <div style={flexContainerStyle}>
        <div style={gradientBarStyle} />
      </div>
      <Bar backgroundColor="#E4FD8B" />
      <Bar backgroundColor="#558022" />
      <Bar backgroundColor="#D7A84C" />
    </div>
  );
};

export default Base;
