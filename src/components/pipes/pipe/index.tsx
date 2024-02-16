import React from "react";
import { PIPE_WIDTH } from "../../../utils/game";
import { Wrapper, PipeImage } from "./styles";

type Props = {
  isReverse?: boolean;
  height: string;
  pipeHead: string;
  pipeBody: string;
};

const Pipe = React.memo(({ isReverse, height, pipeHead, pipeBody }: Props) => {
  return (
    <Wrapper isReverse={isReverse} height={height} id="covering-element">
      <PipeImage
        alt="Pipe head"
        src={pipeHead}
        width={PIPE_WIDTH}
        height="26px"
      />
      <PipeImage
        alt="Pipe body"
        src={pipeBody}
        width={PIPE_WIDTH - 4}
        height="100%"
        style={{
          objectFit: "fill",
        }}
      />
    </Wrapper>
  );
});

export default Pipe;
