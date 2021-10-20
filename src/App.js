import React from "react";
import { useState } from "react";

import styled from "styled-components";

//Components
import Lamp from "./Lamp";
import LightSwitch from "./LightSwitch";

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

const App = () => {
  //Lamp One
  const [isLampOneOn, setIsLampOneOn] = useState(false);

  //Lamp Two
  const [isLampTwoOn, setIsLampTwoOn] = useState(true);

  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position="left" />
      <Lamp lampOn={isLampTwoOn} position="right" />

      <LightSwitch
        name="one"
        response={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position="left"
      />

      <LightSwitch
        name="two"
        response={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position="right"
      />
    </Room>
  );
}

export default App;
