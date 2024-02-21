import React from "react";
import vk from "../../../assets/vk.svg";
import telegram from "../../../assets/telegram.svg";
import github from "../../../assets/github.svg";
import {CreateLogoList} from "./styles.js";

export default function LogoContacts() {
  return (
    <CreateLogoList>
      <li>
        <a href="https://vk.com/ankryl93" target="_blank">
          <img src={vk} alt="VK" />
        </a>
      </li>
      <li>
        <a href="https://github.com/ankryl" target="_blank">
          <img src={github} alt="GitHub" />
        </a>
      </li>
      <li>
        <a href="https://t.me/ankryl93" target="_blank">
          <img src={telegram} alt="Telegram" />
        </a>
      </li>
    </CreateLogoList>
  );
}
