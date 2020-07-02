import React from "react";
import styled from "styled-components";

import Arrow from "../assets/arrow.svg";
import Filter from "../assets/filter.svg";

export default function ListHeader() {
  return (
    <Container>
      <img src={Arrow} alt="arrow" />
      <Title>Har</Title>
      <img src={Filter} alt="filter" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: solid 0.5px #b69f58;
  padding-left: 15px;
  padding-right: 15px;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.13px;
  color: #202020;
  font-family: Bureau;
`;
