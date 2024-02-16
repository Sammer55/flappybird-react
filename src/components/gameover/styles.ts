import styled from "styled-components";
import { WINDOW_HEIGHT } from "../../utils/game";

export const GameOverImage = styled.img`
  position: absolute;
  top: ${WINDOW_HEIGHT / 2}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;
