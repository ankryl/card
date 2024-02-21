import React, { useState } from "react";
import { CreateAbout, CreateAboutWrapper, Text } from "./styles.js";
import PopUp from "../../ui/popup/popup.jsx";
import { H1 } from "../../ui/elements";

export default function Education() {
  const [isShow, setIsShow] = useState(false);
  return (
    <CreateAboutWrapper id="education">
      <CreateAbout>
        <PopUp 
          isShow={isShow}
          onClose={() => setIsShow(false)}
        />
        <H1>Образование</H1>
        <Text>
          Прошел профессиональную переподготовку по направлению{" "}
          <a onClick={() => setIsShow(!isShow)}><i>Frontend разработчик.</i></a> В ходе
          обучения закрепил свои навыки верстки, освоил нативный javascript и
          познакомился с библиотекой REACT. Защитил аттестационную работу с
          результатом «отлично».
        </Text>
        <Text>
          Дополнительно проходил курсы и навыки с самостоятельным изучением в
          HTML Academy.
        </Text>
        <Text>
          Приобретенные навыки успел применить в коммерческой разработке в
          качестве самозанятого - адаптировал одностраничный лендинг под
          мобильные устройства и принимал участие в командной разработке
          административного интерфейса для школы c использованием фреймворка
          sapui5.
        </Text>
      </CreateAbout>
    </CreateAboutWrapper>
  );
}
