import styled from "styled-components";
import { Ul, A, Img} from "../../ui/elements";

export const CreatePortfolio = styled(Ul)`
  flex-direction: column;
  align-items: center;
`;

export const CreatePortfolioList = styled(Ul)`
  flex-direction: column;
  row-gap: 77px;
  margin-top:35px;

  @media (min-width: 840px) {
    margin-top:47px;
    row-gap: 99px;
  }
`;

export const CreatePortfolioItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 35px;

  @media (min-width: 840px) {
    row-gap: 45px;
  }
`;

export const CreatePortfolioFigcaption = styled(A)`
  text-decoration: underline;
`;

export const CreateImage = styled(Img)`
  width: 673px;
  height: 373px;

  @media (max-width: 840px) {
    width: 316px;
    height: 175px;
  }
`;


export const CreatePortfolioWrapper = styled.div` 
background-color: ${(props)=>props.theme.colorGrayBackground};
padding: ${(props)=>props.theme.paddingDefault};

  @media (min-width: 840px) {
    padding: ${(props)=>props.theme.paddingMobile};
  }
`;
