import styled from "styled-components";
import backgroundDay from "./assets/background-day.png";

export const Wrapper = styled.main`
  position: relative;
  background: ${`url(${backgroundDay})`};
  height: 100dvh;
  overflow: hidden;
`;

export const WrapperPipes = styled.div`
  overflow: hidden;
  position: relative;
`;
