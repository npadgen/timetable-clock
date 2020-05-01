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
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
  text-align: center;

  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
`;

const unmute = () => {
  document.getElementById("muteButton").innerHTML =
    '<i class="fas fa-bell"></i>';
  renderSound();
};

const App = () => (
  <AppContainer>
    <div id="sound-container"></div>
    <ClockContainer>
      <Clock format={"h:mm:ss a"} ticking={true} />
    </ClockContainer>
    <CurrentEvent />
    <div style={{ "text-align": "center" }}>
      <MuteButton id="muteButton" onClick={unmute}>
        <i style={{ "font-size": "50px" }} class="fas fa-bell-slash"></i>
        <br />
        Please click here to enable the bell sound
      </MuteButton>
    </div>
  </AppContainer>
);

export default hot(module)(App);
