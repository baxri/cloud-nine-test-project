import React from "react";
import styled from "styled-components";

export default function Info({ value, icon }) {
  return (
    <Container>
      <InnerContainer>
        <img src={icon} alt="icon" />
        <Text>{value}</Text>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 50px;
  background-color: #fff;
  align-items: center;
  padding-bottom: 1px;
`;

const InnerContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #fff;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  border-bottom: solid 0.5px #eeeeee;
`;

const Text = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #202020;
  margin-left: 15px;
  font-family: HelveticaNeue;
`;
