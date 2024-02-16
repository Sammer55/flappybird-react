import jump from "../../assets/jump.png";
import { Button, JumpImage } from "./styles";

type Props = {
  onClick: () => void;
};

const Jump = ({ onClick }: Props) => {
  return (
    <Button aria-label="jump button" type="button" onClick={onClick}>
      <JumpImage alt="Jump button" src={jump} />
    </Button>
  );
};

export default Jump;
