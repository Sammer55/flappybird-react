import styled from "styled-components";
import { BIRD_HEIGHT, BIRD_WIDTH } from "../../utils/bird";

export const WrapperBird = styled.img<{ birdPosition: number }>`
  width: ${BIRD_WIDTH}px;
  height: ${BIRD_HEIGHT}px;
  z-index: 1;
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  overflow: scroll;
  top: ${({ birdPosition }) => birdPosition}px;
`;
