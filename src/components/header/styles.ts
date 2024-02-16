import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: #343434;
  position: absolute;
  width: 100%;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 13px;
  color: white;
`;

export const Github = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(1);
`;

export const LastScore = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-right: 16px;
  color: white;
`;

export const WrapperGithub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
`;

export const MadeWithLove = styled.p`
  margin-right: 16px;
`;
