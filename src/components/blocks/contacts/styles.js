import styled from "styled-components";
import { A } from "../../ui/elements";

export const WrapperContacts = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  list-style: none;
  padding: ${(props)=>props.theme.paddingDefault};
`;

export const ContactsItem = styled(A)`
  text-decoration: none;
  margin-top:20px;
`;
