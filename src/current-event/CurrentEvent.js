import React from "react";
import styled from "styled-components";
import ReactFitText from "react-fittext";
import { getCurrentEvent, getNextEvent } from "./timetable";
import moment from "moment";

const getEventBackgroundColour = (props) => {
  console.log(props);
  return props !== null && props.event.lesson ? "#88ff88" : "#ffff88";
  //   return props.description.startsWith("Lesson: ") ? "yellow" : "#88ff88";
  //   return "yellow";
};

const EventContainer = styled.div`
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
  text-align: center;
  background-color: ${(props) => getEventBackgroundColour(props)};
`;

const formatTime = (timeStr) => moment(timeStr, "HH:mm").format("h:mm");

const CurrentTimeDisplay = ({ event }) => {
  return (
    <div>
      <ReactFitText compressor={0.8}>
        <h1>
          {formatTime(event.start)}&nbsp;&ndash;&nbsp;{formatTime(event.end)}
        </h1>
      </ReactFitText>
      <ReactFitText compressor={0.5}>
        <h3>{event.text}</h3>
      </ReactFitText>
    </div>
  );
};

const NextTimeDisplay = ({ event }) => {
  return (
    <div>
      <ReactFitText compressor={1.5}>
        <div>
          {formatTime(event.start)}&nbsp;&ndash;&nbsp;{formatTime(event.end)}:{" "}
          {event.text}
        </div>
      </ReactFitText>
    </div>
  );
};

export const CurrentEvent = () => {
  const now = moment();
  const currentEvent = getCurrentEvent(now);
  const nextEvent = getNextEvent(now);
  return (
    <div>
      <EventContainer event={currentEvent}>
        <CurrentTimeDisplay event={currentEvent} />
      </EventContainer>
      <EventContainer event={nextEvent}>
        <NextTimeDisplay event={nextEvent} />
      </EventContainer>
    </div>
  );
};
