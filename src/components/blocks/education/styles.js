import styled from "styled-components";

export const CreateAbout = styled.section`
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateAboutWrapper = styled.div`
  background-color: #f6f6f6;
  padding: ${(props) => props.theme.paddingDefault};

  @media (min-width: 840px) {
    padding: ${(props) => props.theme.paddingMobile};
  }
`;

export const Text = styled.p`
  margin: 35px auto 0px;
  font-family: ${(props) => props.theme.gilroyFontFamilyMedium};
  width: 50%;
`;
