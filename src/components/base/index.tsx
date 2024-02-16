import { Wrapper, Bar, WrapperGradientBar, GradientBar } from "./styles";

const Base = () => {
  return (
    <Wrapper>
      <Bar backgroundColor="#543847" />
      <WrapperGradientBar>
        <GradientBar />
      </WrapperGradientBar>
      <Bar backgroundColor="#E4FD8B" />
      <Bar backgroundColor="#558022" />
      <Bar backgroundColor="#D7A84C" />
    </Wrapper>
  );
};

export default Base;
