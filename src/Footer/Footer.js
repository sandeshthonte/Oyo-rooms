import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon.js";

function Footer() {
  return (
    <div>
      <Container>
        <ContactContainer>Contact on:</ContactContainer>
        <IconContainer>
          <Icon />
        </IconContainer>
        <CopyRightContainer>Made by Sandesh Thonte</CopyRightContainer>
      </Container>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  opacity: 1;
  background-color: #282c34;
  // background: url();
  width: auto;
  margin-top: 200px;
  height: 220px;
  color: white;
  bottom: 0;
`;

const ContactContainer = styled.div`
  padding-top: 70px;
  font-size: 23px;
  align-items: center;
  display: flex;
  padding: 15px;
  justify-content: center;
`;

const IconContainer = styled.div`
  align-items: center;
  padding-top: 10px;
  display: flex;
  justify-content: right;
`;

const CopyRightContainer = styled.div`
  font-size: 23px;
  align-items: center;
  display: flex;
  padding: 10px;
  justify-content: center;
`;
