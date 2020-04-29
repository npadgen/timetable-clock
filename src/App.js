import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import Clock from "react-live-clock";
import { CurrentEvent } from "./current-event/CurrentEvent";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: "BioRhyme", serif;
  color: #222222;
`;

const ClockContainer = styled.div`
  text-align: right;
  color: #aaaaaa;
`;

const App = () => (
  <AppContainer>
    <ClockContainer>
      <Clock format={"h:mm:ss a"} ticking={true} />
    </ClockContainer>
    <CurrentEvent />
  </AppContainer>
);

export default hot(module)(App);
