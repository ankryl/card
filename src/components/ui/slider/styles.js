import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Button } from "../elements/index.jsx";
import { Img } from "../elements/index.jsx";

export const SlyderWrapper = styled.div`
    position: relative;
    display: flex;
`;

export const StyledSlider = styled(Swiper)`
    width: 333px;
    height: 239px;
    margin: auto;

    @media (min-width: 840px) {
        width: 750px;
        height: 564px;
    }
`;

export const StyledImg = styled(Img)`
    width: 333px;
    height: 239px;

    @media (min-width: 840px) {
        width: 750px;
        height: 564px;
    }
`;

export const StyledButton = styled(Button)`
    z-index: 10;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    padding: 1px;
    line-height: 1;
    padding: 0;
    color: ${(props) => props.theme.colorBlack};

    @media (min-width: 840px) {
        width: 20px;
        height: 20px;
    }
`;

export const StyledIconImg = styled.img`
    width: 10px;
    height: 10px;

    @media (min-width: 840px) {
        width: 20px;
        height: 20px;
    }
`;
