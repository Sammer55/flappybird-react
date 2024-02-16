import styled from "styled-components";
import { BASE_HEIGHT } from "../../utils/game";

export const Wrapper = styled.div`
  width: 100%;
  height: ${BASE_HEIGHT}px;
  background: #ded895;
  z-index: 999999;
`;

export const Bar = styled.div<{ backgroundColor: string }>`
  height: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
`;

export const WrapperGradientBar = styled.div`
  height: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GradientBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #73bf2e;
  background-image: repeating-linear-gradient(
    -25deg,
    transparent 10px,
    transparent 20px,
    #9ce659 10px,
    #9ce659 30px
  );
`;
