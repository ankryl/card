import React from "react";
import { PresentWrapper, PresentSection, Title, Text } from "./styles.js";
import { Img } from "../../ui/elements";
import selfphoto from "../../../assets/selfphoto.jpg";

export default function Present() {
    return (
        <PresentWrapper id="present">
            <PresentSection>
                <Title>
                    Крылов
                    <br /> Андрей
                </Title>
                <Text>
                    Frontend разработчик
                    <br /> 30 лет, Москва
                </Text>
            </PresentSection>
            <Img src={selfphoto} width={316} height={438} />
        </PresentWrapper>
    );
}
