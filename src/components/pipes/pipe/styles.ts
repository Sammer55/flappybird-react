import styled from "styled-components";
import { PIPE_WIDTH } from "../../../utils/game";

export const Wrapper = styled.div<{
  height: string;
  isReverse?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${PIPE_WIDTH}px;
  position: relative;
  height: ${({ height }) => height};
  rotate: ${({ isReverse }) => (isReverse ? "0deg" : "180deg")};
  justify-content: ${({ isReverse }) =>
    isReverse ? "flex-start" : "flex-end"};
  z-index: 3;
`;

export const PipeImage = styled.img`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height};
`;
