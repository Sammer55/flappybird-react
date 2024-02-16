import styled from "styled-components";
import { PIPES_GAP } from "../../utils/game";
import { PIPES_SPACE_BETWEEN } from "../../utils/game";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${PIPES_SPACE_BETWEEN}px;
`;

export const WrapperPipe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${PIPES_GAP}px;
`;
