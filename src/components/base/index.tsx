import { BASE_HEIGHT } from "../../utils/game";
import base from "../../assets/base.png";

const Base = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: BASE_HEIGHT,
        background: `url(${base})`,
        zIndex: 999999,
      }}
    />
  );
};

export default Base;
