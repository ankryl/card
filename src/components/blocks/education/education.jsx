import React, { useState } from "react";
import { EducationWrapper, EducationSection, Text, PopupDiplom } from "./styles.js";
import PopUp from "../../ui/popup/popup.jsx";
import { H1 } from "../../ui/elements";

export default function Education() {
    const [isShow, setIsShow] = useState(false);
    return (
        <EducationWrapper id="education">
            <EducationSection>
                <H1>Образование</H1>
                <Text>
                    Прошел профессиональную{" "}
                    <a onClick={() => setIsShow(!isShow)}>
                        <PopupDiplom>переподготовку</PopupDiplom>
                    </a>{" "}
                    по направлению Frontend разработчик. В ходе обучения закрепил
                    свои навыки верстки, освоил нативный JavaScript и
                    познакомился с библиотекой React. Защитил аттестационную
                    работу с результатом «отлично».
                </Text>
                <Text>
                    Дополнительно проходил курсы и навыки с самостоятельным
                    изучением в HTML Academy.
                </Text>
                <Text>
                    Приобретенные навыки успел применить в коммерческой
                    разработке в качестве самозанятого - адаптировал
                    одностраничный лендинг под мобильные устройства и принимал
                    участие в командной разработке административного интерфейса,
                    для школы c использованием фреймворка SAPUI5.
                </Text>
            </EducationSection>
            <PopUp isShow={isShow} onClose={() => setIsShow(false)} />
        </EducationWrapper>
    );
}
