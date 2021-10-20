import React from "react";
import styled from "styled-components";

const Button = styled.div`
  position: absolute;
  left: ${(props) => (props.position === "left" ? "20px" : "380px")};
  bottom: 20px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
const LightSwitch = ({ response, position, switchOn }) => (
  <Button onClick={response} position={position}>
    {switchOn ? "On" : "Off"}
  </Button>
);
export default LightSwitch;
