import Pipe from "./pipe";
import {
  BASE_HEIGHT,
  FAIR_PLAY_PIPES,
  FAIR_PLAY_PIPE_SIZE,
  PIPES_GAP,
  PIPES_SPACE_BETWEEN,
  WINDOW_HEIGHT,
} from "../../utils/game";
import pipeHead from "../../assets/pipe-head.png";
import pipeBody from "../../assets/pipe-body.png";
import { generateRandomHeight } from "../../utils/generateRandomHeight";

const fairPlayPipes = Array.from(
  { length: FAIR_PLAY_PIPES },
  () => FAIR_PLAY_PIPE_SIZE
);
const randomPipes = Array.from({ length: 100 }, () => generateRandomHeight());

const pipes = [...fairPlayPipes, ...randomPipes];

const Pipes = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: PIPES_SPACE_BETWEEN,
      }}
    >
      {pipes.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: PIPES_GAP,
            }}
          >
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
          </div>
        );
      })}
    </div>
  );
};

export default Pipes;
