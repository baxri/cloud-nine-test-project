import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ListArrow from "../assets/list-arrow.svg";
import Rating from "../components/Rating";

export default function ListItem({
  id,
  title,
  price,
  rating,
  time,
  description,
}) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/details/${id}`}>
      <Container>
        <Left>
          <Number>12.00</Number>
          <Info>
            <Title>{title}</Title>
            <Rating rating={rating} />
            <Description>{description}</Description>
          </Info>
        </Left>
        <Right>
          <RightInfo>
            <Price>{price} kr</Price>
            <Time>{time} min</Time>
          </RightInfo>
          <img src={ListArrow} alt="list-arrow" />
        </Right>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom: solid 0.5px #eeeeee;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 15px;
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
`;

const Number = styled.p`
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #202020;
  margin: 0px;
  font-family: HelveticaNeue;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 15px;
`;

const Title = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #202020;
  font-family: Bureau;
`;

const Description = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #666666;
  font-family: HelveticaNeue;
`;

const Price = styled.p`
  margin: 0px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #202020;
  font-family: HelveticaNeue;
`;

const RightInfo = styled.div`
  margin-right: 30px;
`;

const Time = styled.p`
  margin: 0px;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #656565;
  margin-top: 11px;
  font-family: HelveticaNeue;
`;
