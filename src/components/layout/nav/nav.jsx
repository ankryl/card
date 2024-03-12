import React from "react";
import { NavList, NavItem, Link } from "./styles.js";

export default function Nav({isShow}) {
        return isShow ? (
        <NavList>
            <NavItem>
                <Link href="#present">Обо мне</Link>
            </NavItem>
            <NavItem>
                <Link href="#education">Образование</Link>
            </NavItem>
            <NavItem>
                <Link href="#skills">Навыки</Link>
            </NavItem>
            <NavItem>
                <Link href="#portfolio">Портфолио</Link>
            </NavItem>
            <NavItem>
                <Link href="#contacts">Контакты</Link>
            </NavItem>
        </NavList>
    ) : null;
}
