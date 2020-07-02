import React from "react";
import styled from "styled-components";

import Star from "../assets/star.svg";
import StarOutline from "../assets/star-outline.svg";

import StarBig from "../assets/big-star.svg";
import StarOutlineBig from "../assets/big-star-outline.svg";

export default function Rating({ rating, detailed }) {
  if (detailed) {
    return (
      <ContainerDetailed>
        <StarImage src={StarBig} alt="list-arrow" />
        <StarImage src={StarBig} alt="list-arrow" />
        <StarImage src={StarBig} alt="list-arrow" />
        <StarImage src={StarBig} alt="list-arrow" />
        <StarImage src={StarOutlineBig} alt="list-arrow" />
        <RatingNumberDetailed>({rating})</RatingNumberDetailed>
      </ContainerDetailed>
    );
  }

  return (
    <Container>
      <StarImage src={Star} alt="list-arrow" />
      <StarImage src={Star} alt="list-arrow" />
      <StarImage src={Star} alt="list-arrow" />
      <StarImage src={Star} alt="list-arrow" />
      <StarImage src={StarOutline} alt="list-arrow" />
      <RatingNumber>({rating})</RatingNumber>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0px;
  padding-top: 13px;
  padding-bottom: 12px;
`;

const ContainerDetailed = styled.div`
  display: flex;
  margin: 0px;
  padding-top: 6px;
  padding-bottom: 12px;
`;

const StarImage = styled.img`
  margin-right: 4px;
`;

const RatingNumber = styled.p`
  margin: 0px;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.07px;
  text-align: right;
  color: #656565;
  font-family: HelveticaNeue;
`;

const RatingNumberDetailed = styled.p`
  margin: 0px;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  font-family: HelveticaNeue;
  margin-left: 6px;
`;
