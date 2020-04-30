import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import Clock from "react-live-clock";
import {
  CurrentEvent,
  BellSound,
  renderSound,
} from "./current-event/CurrentEvent";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: "BioRhyme", serif;
  color: #222222;
`;

const ClockContainer = styled.div`
  text-align: right;
  color: #aaaaaa;
`;

const MuteButton = styled.button`
  font-size: 16px;
  padding: 8px;
  margin: 2px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  float: left;
`;

const unmute = () => {
  document.getElementById("muteButton").innerHTML =
    '<i class="fas fa-bell"></i>';
  renderSound();
};

const App = () => (
  <AppContainer>
    <div id="sound-container"></div>
    <MuteButton id="muteButton" onClick={unmute}>
      <i class="fas fa-bell-slash"></i>
    </MuteButton>
    <ClockContainer>
      <Clock format={"h:mm:ss a"} ticking={true} />
    </ClockContainer>
    <CurrentEvent />
  </AppContainer>
);

export default hot(module)(App);
