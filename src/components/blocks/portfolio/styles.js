import styled from "styled-components";
import { Ul, A, Img } from "../../ui/elements";

export const PortfolioWrapper = styled.div`
    background-color: ${(props) => props.theme.colorGrayBackground};
    padding: ${(props) => props.theme.paddingDefault};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 840px) {
        padding: ${(props) => props.theme.paddingMobile};
    }
`;

export const PortfolioSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PortfolioList = styled(Ul)`
    flex-direction: column;
    row-gap: 77px;
    margin-top: 35px;

    @media (min-width: 840px) {
        margin-top: 47px;
        row-gap: 99px;
    }
`;

export const PortfolioItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 35px;

    @media (min-width: 840px) {
        row-gap: 45px;
    }
`;

export const FigcaptionWrapper = styled.div`
    display: flex;
`;

export const PortfolioFigcaption = styled(A)`
    text-decoration: underline;
`;

export const Image = styled(Img)`
    width: 673px;
    height: 373px;

    @media (max-width: 840px) {
        width: 316px;
        height: 175px;
    }
`;

export const LinkGit = styled.a`
    margin-top: 3px;
    margin-left: 5px;
`;
