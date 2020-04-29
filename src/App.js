import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import Clock from "react-live-clock";
import { CurrentEvent } from "./current-event/CurrentEvent";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
`;

const ClockContainer = styled.div`
  text-align: right;
`;

const App = () => (
  <AppContainer>
    <ClockContainer>
      <Clock format={"h:mm:ss a"} ticking={true} />
    </ClockContainer>
    <CurrentEvent
      start="10:00"
      end="11:00"
      description="Lesson: React training"
    />
  </AppContainer>
);

export default hot(module)(App);
