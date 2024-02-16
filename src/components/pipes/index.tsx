import { Wrapper, WrapperPipe } from "./styles";
import { generateRandomHeight } from "../../utils/generateRandomHeight";
import {
  FAIR_PLAY_PIPE_SIZE,
  FAIR_PLAY_PIPES,
  PIPES_GENERATE,
} from "../../utils/game";

import Pipe from "./pipe";

import pipeHead from "../../assets/pipe-head.png";
import pipeBody from "../../assets/pipe-body.png";

const fairPlayPipes = Array.from(
  { length: FAIR_PLAY_PIPES },
  () => FAIR_PLAY_PIPE_SIZE
);

const randomPipes = Array.from({ length: PIPES_GENERATE }, () =>
  generateRandomHeight()
);

const pipes = [...fairPlayPipes, ...randomPipes];

const Pipes = () => {
  return (
    <Wrapper>
      {pipes.map((item, index) => {
        return (
          <WrapperPipe key={index}>
            <Pipe
              pipeHead={pipeHead}
              pipeBody={pipeBody}
              height={item?.pipeDown}
            />

            <Pipe
              pipeHead={pipeHead}
              pipeBody={pipeBody}
              isReverse
              height={item?.pipeUp}
            />
          </WrapperPipe>
        );
      })}
    </Wrapper>
  );
};

export default Pipes;
