import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Button } from "../elements/index.jsx";
import { Img } from "../elements/index.jsx";

export const StyledSlider = styled(Swiper)`
  width: 370px;
  height: 266px;
  margin: 2px;

  @media (min-width: 840px) {
    width: 750px;
    height: 564px;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const StyledButton = styled(Button)`
  z-index: 10;
  margin: auto;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  padding: 1px;
  line-height: 1;
  padding: 0;
`;

export const SlyderWrapper = styled.div`
  position: relative;
  display:flex;
`;

export const StyledImg = styled(Img)`
  width: 333px;
  height: 239px;

  @media (min-width: 840px) {
    width: 750px;
    height: 564px;
  }
`;
