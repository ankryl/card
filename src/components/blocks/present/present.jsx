import React from "react";
import { CreatePresent, CreatePresentWrapper, Image, Title, Text } from "./styles.js";
import { Img } from "../../ui/elements";
import selfphoto from "../../../assets/selfphoto.jpg";

export default function Present() {
  return (
    <CreatePresentWrapper id="present">
      <CreatePresent>
        <Title>
          Крылов
          <br /> Андрей
        </Title>
        <Text>
          Frontend разработчик
          <br /> 30 лет, Москва
        </Text>
      </CreatePresent>
        <Img src={selfphoto} width={316} height={438} />
    </CreatePresentWrapper>
  );
}
