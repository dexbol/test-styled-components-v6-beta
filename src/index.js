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
  animation: ${round} 1s infinite;
`;

const Demo = function () {
  return <StyledCircle />;
};

createRoot(document.querySelector("div")).render(<Demo />);
