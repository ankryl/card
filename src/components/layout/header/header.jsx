import React, { useState } from "react";
import Nav from "../nav/nav";
import { HeaderWrapper, ToggleButton } from "./styles.js";
import hidenav from "./../../../assets/hidenav.svg";
import opennav from "./../../../assets/opennav.svg";

export default function Header() {
    const [isShow, setIsShow] = useState(true);

    return (
        <HeaderWrapper>
            <Nav isShow={isShow} />
            <ToggleButton type="button" onClick={() => setIsShow(!isShow)}>
                {isShow ? (
                    <img src={hidenav} alt="закрыть" />
                ) : (
                    <img src={opennav} alt="открыть" />
                )}
            </ToggleButton>
        </HeaderWrapper>
    );
}
