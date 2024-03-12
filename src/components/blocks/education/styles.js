import styled from "styled-components";

export const EducationWrapper = styled.div`
    background-color: ${(props) => props.theme.colorGrayBackground};
    padding: ${(props) => props.theme.paddingDefault};

    @media (min-width: 840px) {
        padding: ${(props) => props.theme.paddingMobile};
    }
`;

export const EducationSection = styled.section`
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    margin: 35px auto 0px;
    font-family: ${(props) => props.theme.gilroyFontFamilyMedium};
    width: 50%;
`;

export const PopupDiplom = styled.i`
    cursor: pointer;
    font-weight: bold;
`;
