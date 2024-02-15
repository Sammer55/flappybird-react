import jump from "../../assets/jump.png";
import "./button.css";

type Props = {
  onClick: () => void;
};

const Jump = ({ onClick }: Props) => {
  return (
    <button
      aria-label="jump button"
      type="button"
      onClick={onClick}
      style={{
        position: "fixed",
        background: "red",
        bottom: 40,
        right: 40,
        width: "40px",
        height: "40px",
        zIndex: 999999,
      }}
    >
      <img alt="Jump button" src={jump} style={{ width: 40, height: 40 }} />
    </button>
  );
};

export default Jump;
