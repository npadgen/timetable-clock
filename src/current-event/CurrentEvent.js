import React from "react";
import styled from "styled-components";
import ReactFitText from "react-fittext";
import { getCurrentEvent, getNextEvent } from "./timetable";
import moment from "moment";

const getEventBackgroundColour = (props) => {
  return props.event !== null && props.event.lesson ? "#88ff88" : "#ffff88";
};

const EventContainer = styled.div`
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
  text-align: center;
  background-color: ${(props) => getEventBackgroundColour(props)};
  display: ${(props) => (props.event == null ? "none" : "block")};
`;

const formatTime = (timeStr) => moment(timeStr, "HH:mm").format("h:mm");

const CurrentTimeDisplay = ({ event }) => {
  if (event == null) {
    return null;
  }
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
  if (event == null) {
    return null;
  }
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

export class CurrentEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const now = moment(this.state.date);
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
  }
}
