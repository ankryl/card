import styled from "styled-components";
import { H1} from "../../ui/elements";

export const Title = styled(H1)`
font-size:47px;
line-height:47px;
`

export const CreatePresentWrapper = styled.div`
  margin: 48px 28px 40px;
  display: flex;
  justify-content: center;
  column-gap: 25px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 840px) {
    flex-direction: row;
    margin: 48px 250px 40px;
  }
`;

export const CreatePresent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:-125px;
  @media (min-width: 840px) {
    margin-left:0;
  }
`;

export const Text = styled.p`
margin-top:35px;
font-family:${(props)=>props.theme.gilroyFontFamilyMedium};
`