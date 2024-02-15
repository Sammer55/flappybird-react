import "./button.css";
import jump from "../../assets/jump.png";

const Jump = ({ onClick }) => {
  return (
    <button
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
      <img src={jump} style={{ width: 40, height: 40 }} />
    </button>
  );
};

export default Jump;
