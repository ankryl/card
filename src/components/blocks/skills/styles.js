import styled from "styled-components";
import { Ul } from "../../ui/elements";

export const SkillsSection = styled.section`
    margin: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.theme.paddingDefault};

    @media (min-width: 840px) {
        padding: ${(props) => props.theme.paddingMobile};
    }
`;

export const SkillsList = styled(Ul)`
    width: 100%;
    padding-top: 83px;
    flex-direction: column;

    @media (min-width: 840px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const SkillsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 23px;
`;

export const Figcaption = styled.p`
    font-size: 14px;
    color: #828282;
`;
