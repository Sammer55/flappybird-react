import React from "react";
import { PIPE_WIDTH } from "../../../utils/game";

type Props = {
  isReverse?: boolean;
  height: string;
  pipeHead: string;
  pipeBody: string;
};

const Pipe = React.memo(({ isReverse, height, pipeHead, pipeBody }: Props) => {
  return (
    <div
      id="covering-element"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: PIPE_WIDTH,
        position: "relative",
        height,
        rotate: isReverse ? "0deg" : "180deg",
        justifyContent: isReverse ? "flex-start" : "flex-end",
        zIndex: 3,
      }}
    >
      <img
        alt="Pipe head"
        src={pipeHead}
        style={{
          width: PIPE_WIDTH,
          height: 26,
        }}
      />
      <img
        alt="Pipe body"
        src={pipeBody}
        style={{
          width: PIPE_WIDTH - 4,
          height: "100%",
          objectFit: "fill",
        }}
      />
    </div>
  );
});

export default Pipe;
