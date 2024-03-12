import styled from "styled-components";

export const NavList = styled.ul`
    position: relative;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;

    @media (min-width: 840px) {
        flex-direction: row;

        &:before {
            display: inline-block;
            content: "";
            position: absolute;
            height: 1px;
            width: 100%;
            background-color: #e6e6e6;
            left: 0;
            pointer-events: none;
            bottom: -9px;
        }
    }
`;

export const NavItem = styled.li`
    margin: 33px 0;
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 34px;
    color: ${(props) => props.theme.colorGray};

    &:hover {
        color: ${(props) => props.theme.colorBlack};
    }

    @media (min-width: 840px) {
        font-size: ${(props) => props.theme.fontSizeDefault};
    }
`;
