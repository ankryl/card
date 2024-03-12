import styled from "styled-components";
import { Button } from "../../ui/elements";

export const HeaderWrapper = styled.header`
    margin: 0 28px;
    display: flex;
    align-items: baseline;
    position: relative;

    @media (min-width: 400px) {
        margin: 0 150px;
    }
`;

export const ToggleButton = styled(Button)`
    display: block;
    position: absolute;
    right: 0;
    margin-top: 33px;

    &:hover {
        color: ${(props) => props.theme.colorBlack};
    }

    @media (min-width: 840px) {
        display: none;
    }
`;
