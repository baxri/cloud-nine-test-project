import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import data from "../data";

import WhiteArrow from "../assets/white-arrow.svg";
import Heart from "../assets/heart.svg";
import Pin from "../assets/pin.svg";
import Clock from "../assets/clock.svg";
import Phone from "../assets/phone.svg";
import Globe from "../assets/globe.svg";

import Rating from "../components/Rating";
import TabButton from "../components/TabButton";
import Info from "../components/Info";

export default function Details() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const d = data.find((x) => x.id === parseInt(id));
    setItem(d);
  }, [id]);

  if (!item) {
    return null;
  }

  const {
    image,
    title,
    rating,
    location,
    working,
    phone,
    site,
    details,
  } = item;

  return (
    <Container>
      <Header url={image}>
        <HeaderTop>
          <Link to="/">
            <Image src={WhiteArrow} alt="white-arrow" />
          </Link>
          <Image src={Heart} alt="heart" />
        </HeaderTop>
        <HeaderBottom>
          <Title>{title}</Title>
          <Rating detailed={true} rating={rating} />
        </HeaderBottom>
        <HeaderGradient />
      </Header>
      <TabContainer>
        <TabButton title="Info" active />
        <TabButton title="Schema" />
      </TabContainer>

      <Info value={location} icon={Pin} />
      <Info value={working} icon={Clock} />
      <Info value={phone} icon={Phone} />
      <Info value={site} icon={Globe} />

      <Description>
        <DescriptionText>{details}</DescriptionText>
      </Description>
    </Container>
  );
}

const Description = styled.div`
  background-color: #fff;
  padding: 15px;
  padding-top: 20px;
`;

const DescriptionText = styled.p`
  margin: 0px;
  font-family: HelveticaNeue;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: left;
  color: #2b2b2b;
`;

const Container = styled.div`
  background-color: #f9f9f9;
  margin: 0px;
  padding: 0px;
`;

const TabContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  margin: 0px;
`;

const Title = styled.p`
  margin: 0px;
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: left;
  color: #ffffff;
  font-family: Bureau;
`;

const Header = styled.div`
  display: flex;
  height: 250px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: 100% auto;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

const HeaderGradient = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  bottom: 0px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9248074229691877) 0%,
    rgba(0, 0, 0, 0.00043767507002800965) 42%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const HeaderTop = styled.div`
  display: flex;
  height: 100;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 1000;
`;

const HeaderBottom = styled.div`
  display: flex;
  height: 100;
  height: 100;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15px;
  z-index: 1000;
`;
