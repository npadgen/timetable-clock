import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactFitText from "react-fittext";
import { getCurrentEvent, getNextEvent } from "./timetable";
import moment from "moment";
import Sound from "react-sound";

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

const htmlDecode = (input) => {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

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
        <h3>{htmlDecode(event.text)}</h3>
      </ReactFitText>
    </div>
  );
};

export const BellSound = () => (
  <Sound
    url="./class-bell-soundbible.com-1426436341.mp3"
    playStatus={Sound.status.PLAYING}
  />
);

const NextTimeDisplay = ({ event }) => {
  if (event == null) {
    return null;
  }
  return (
    <div>
      <ReactFitText compressor={1.5}>
        <div>
          {formatTime(event.start)}&nbsp;&ndash;&nbsp;{formatTime(event.end)}:{" "}
          {htmlDecode(event.text)}
        </div>
      </ReactFitText>
    </div>
  );
};

export const renderSound = () => {
  console.log("Yay");
  const soundContainer = document.getElementById("sound-container");
  console.log(soundContainer);
  if (soundContainer) {
    ReactDOM.render(<BellSound />, soundContainer);
  }
};

export class CurrentEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      currentEvent: {},
    };
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
    if (this.state.currentEvent !== currentEvent) {
      this.setState({ currentEvent: currentEvent });
      renderSound();
    }
    return (
      <div>
        <BellSound />
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
