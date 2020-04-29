import React from "react";
import styled from "styled-components";
import ReactFitText from "react-fittext";

const getCurrentEventBackgroundColour = (props) => {
  return props.description.startsWith("Lesson: ") ? "yellow" : "#88ff88";
  //   return "yellow";
};

const CurrentEventContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
  text-align: center;
  background-color: ${(props) => getCurrentEventBackgroundColour(props)};
`;

const TimeDisplay = ({ start, end, description }) => {
  return (
    <div>
      <ReactFitText compressor={0.8}>
        <h1>
          {start}&nbsp;&ndash;&nbsp;{end}
        </h1>
      </ReactFitText>
      <ReactFitText compressor={0.4}>
        <h3>{description}</h3>
      </ReactFitText>
    </div>
  );
};

export const CurrentEvent = (props) => {
  const { start, end, description } = props;
  return (
    <CurrentEventContainer description={description}>
      <TimeDisplay start={start} end={end} description={description} />
    </CurrentEventContainer>
  );
};
