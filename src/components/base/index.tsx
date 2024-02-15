import { BASE_HEIGHT } from "../../utils/game";
import "./bar.css";

const Base = () => {
  const Bar = ({ backgroundColor }: { backgroundColor: string }) => (
    <div
      style={{
        height: 4,
        backgroundColor,
        width: "100%",
      }}
    />
  );

  return (
    <div
      style={{
        width: "100%",
        height: BASE_HEIGHT,
        backgroundColor: "#DED895",
        zIndex: 999999,
      }}
    >
      <Bar backgroundColor="#543847" />
      <div className="container">
        <div className="bar"></div>
      </div>
      <Bar backgroundColor="#E4FD8B" />
      <Bar backgroundColor="#558022" />
      <Bar backgroundColor="#D7A84C" />
    </div>
  );
};

export default Base;
