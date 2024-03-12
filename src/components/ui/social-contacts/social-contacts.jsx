import React from "react";
import vk from "../../../assets/vk.svg";
import telegram from "../../../assets/telegram.svg";
import github from "../../../assets/github.svg";
import { LogoList } from "./styles.js";

export default function SocialContacts() {
    return (
        <LogoList>
            <li>
                <a href="https://vk.com/ankryl93" target="_blank">
                    <img src={vk} alt="VK" height={40} width={40} />
                </a>
            </li>
            <li>
                <a href="https://github.com/ankryl" target="_blank">
                    <img src={github} alt="GitHub" height={40} width={40} />
                </a>
            </li>
            <li>
                <a href="https://t.me/ankryl93" target="_blank">
                    <img src={telegram} alt="Telegram" height={40} width={40} />
                </a>
            </li>
        </LogoList>
    );
}
