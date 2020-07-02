import React from "react";
import styled from "styled-components";

export default function TabButton({ active, title }) {
  return (
    <Container border={active ? 2 : 0}>
      <Text>{title}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #fff;
  width: 50%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: ${(props) => props.border}px solid #b69f58;
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #202020;
  font-family: HelveticaNeue;
`;
