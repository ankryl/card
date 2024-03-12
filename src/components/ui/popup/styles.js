import styled from "styled-components";
import { Button } from "../elements";

export const WrapperPopup = styled.div`
    box-sizing: border-box;
    border: 1px solid ${(props)=>props.theme.colorBlack};
    top: 165px;
    margin: 0 auto;
    background: lightgrey;
    position: fixed;
    max-width: 375px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 2px;
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.3);

    @media (min-width: 840px) {
        top: 200px;
        max-width: 750px;
        padding: 24px 6px;
    }
`;

export const Close = styled(Button)`
    z-index: 2;
    position: absolute;
    width: 10px;
    height: 10px;
    right: 0;

    @media (min-width: 840px) {
        right: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
    }
`;

export const StyledImg = styled.img`
    width: 10px;
    height: 10px;

    @media (min-width: 840px) {
        width: 20px;
        height: 20px;
    }
`;
