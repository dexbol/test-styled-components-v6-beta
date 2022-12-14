import { useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import styled, { keyframes } from "styled-components";

const round = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const StyledCircle = styled.div`
  width: 222px;
  height: 222px;
  border-radius: 50%;
  background: linear-gradient(red, blue);

  &.play {
    animation: ${round} 1s infinite;
  }
`;

const Demo = function () {
  var [playing, setPlaying] = useState(false);

  var clickHandler = useCallback(() => {
    setPlaying((p) => !p);
  }, []);

  return (
    <StyledCircle onClick={clickHandler} className={playing ? "play" : ""} />
  );
};

createRoot(document.querySelector("div")).render(<Demo />);
