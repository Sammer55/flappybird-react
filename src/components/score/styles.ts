import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  top: 80px;
  gap: 4px;
`;

export const ScorePoint = styled.img`
  width: 100%;
  height: 100%;
`;
