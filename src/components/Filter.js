import React, { useState } from "react";
import styled from "styled-components";

import DownArrow from "../assets/down-arrow.svg";

export default function Filter({ data, value, handleValueChange }) {
  const [colapsed, setColapsed] = useState(true);

  return (
    <>
      <Container onClick={() => setColapsed(!colapsed)}>
        <Text>{value.title}</Text>
        <img src={DownArrow} className="arrow" alt="arrow" />
      </Container>
      {!colapsed && (
        <div>
          {data.map((item) => (
            <ListItem
              key={item.title}
              onClick={() => {
                handleValueChange(item);
                setColapsed(true);
              }}
            >
              <TextIn>{item.title}</TextIn>
            </ListItem>
          ))}
        </div>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: solid 0.5px #b69f58;
  padding-left: 15px;
  padding-right: 15px;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #202020;
  font-family: HelveticaNeue;
`;

const TextIn = styled.p`
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #202020;
  font-family: HelveticaNeue;
`;

const ListItem = styled.div`
  margin: 0px;
  display: flex;
  height: 50px;
  border-bottom: solid 0.5px #b69f58;
  align-items: center;
  padding-left: 15px;
`;
