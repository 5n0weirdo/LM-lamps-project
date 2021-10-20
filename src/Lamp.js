import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    left: ${props => (props.position === "left" ? "20px" : "380px")};
    top: 20px;
    backgroundd ${props => (props.lampOn ? "orange" : "lightgrey")}:
`;


export default Lamp;