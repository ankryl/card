import styled from "styled-components";
import { Button } from "../../ui/elements";
import opennav from "../../../assets/opennav.svg"; 

export const CreateUL = styled.ul`
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

export const CreateLI = styled.li`
  margin: 33px 0;
`;

export const Link = styled.a`
text-decoration:none;
font-size: 34px;
color:#828282;
  
  @media (min-width: 840px) {
    font-size:${(props) => props.theme.fontSizeDefault};
    }
`;

export const ToggleButton = styled(Button)`
display:block;

@media (min-width: 840px) {
  display:none;
  }
`
