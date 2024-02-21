import styled from "styled-components";
import { Button } from "../elements";

export const WrapperPopup = styled.div`
  border: 1px solid grey;
  padding: 1px;
  top: 0px;
  margin: 0 auto;
  background: lightgrey;
  position: relative;

  @media (min-width: 840px) {
    top: 100px;
  }
`;

export const Close = styled(Button)`
  position: absolute;
  right: 5px;
  top: 5px;
`;
