import React from "react";
import { CreateUL, CreateLI, Link, ToggleButton } from "./styles.js";
import hidenav from "../../../assets/hidenav.svg";

export default function Nav() {
  return (
    <>
        <CreateUL>          
          <CreateLI >
          <Link href="#present">
           Обо мне
           </Link>
          </CreateLI>
          <CreateLI>
          <Link  href="#education">
          Образование
          </Link>
          </CreateLI>
          <CreateLI>
          <Link href="#skills">
        Навыки
        </Link>
          </CreateLI>
          <CreateLI>
          <Link  href="#portfolio">
            Портфолио
            </Link>
          </CreateLI>
          <CreateLI>
          <Link href="#contacts">
        Контакты
        </Link>
          </CreateLI>
        </CreateUL>
        <ToggleButton>
      <img src={hidenav}/>
    </ToggleButton>
    </>
  );
}
