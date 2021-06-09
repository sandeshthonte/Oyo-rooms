import React from "react";
import styled from "styled-components";
import img1 from "../images/twitter.png";
import img2 from "../images/instagram.jpg";
import img3 from "../images/facebook.jpg";
import img4 from "../images/google.png";
import img5 from "../images/github.png";
import img6 from "../images/linkedin.png";

function Icon() {
  return (
    <Container>
      <Imagi>
        <Imjs>
          <img src={img1} alt="twitter" />
        </Imjs>
        <Imjs>
          <img src={img2} alt="instagram" />
        </Imjs>
        <Imjs>
          <img src={img3} alt="facebook" />
        </Imjs>
        <Imjs>
          <img src={img4} alt="google" />
        </Imjs>
        <Imjs>
          <img src={img5} alt="github" />
        </Imjs>
        <Imjs>
          <img src={img6} alt="linkedin" />
        </Imjs>
      </Imagi>
    </Container>
  );
}

export default Icon;

const Container = styled.div`
  width: 100%;
  height: 100px;
`;

const Imagi = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  padding: 10px;
`;

const Imjs = styled.div`
  width: 70px;
  img {
    width: 50px;
    display: flex;
    height: auto;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
