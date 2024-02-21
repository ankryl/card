import React from "react";
import figma from "../../../assets/figma.svg";
import css from "../../../assets/css.svg";
import html from "../../../assets/html.svg";
import js from "../../../assets/js.svg";
import react from "../../../assets/react.svg";
import gulp from "../../../assets/gulp.svg";
import sass from "../../../assets/sass.svg";
import { CreateSkillsList, CreateSkills, CreateSkillsItem, Figcaption } from "./styles.js";
import { H1 } from "../../ui/elements";

export default function Skills() {
  return (
      <CreateSkills id="skills">
        <H1>Навыки</H1>
        <CreateSkillsList>
          <CreateSkillsItem>
            <img src={html} width={80} height={80} alt="HTML"></img>
            <Figcaption>HTML</Figcaption>
          </CreateSkillsItem>
          <CreateSkillsItem>
            <img src={css} width={80} height={80} alt="CSS"></img>
            <Figcaption>CSS</Figcaption>
          </CreateSkillsItem>
          <CreateSkillsItem>
            <img src={sass} width={80} height={80} alt="SASS"></img>
            <Figcaption>SASS</Figcaption>
          </CreateSkillsItem>
          <CreateSkillsItem>
            <img src={figma} width={80} height={80} alt="Figma"></img>
            <Figcaption>Figma</Figcaption>
          </CreateSkillsItem>
          <CreateSkillsItem>
            <img src={js} width={80} height={80} alt="JS"></img>
            <Figcaption>JavaScript</Figcaption>
          </CreateSkillsItem>
          <CreateSkillsItem>
            <img src={gulp} width={80} height={80} alt="GULP"></img>
            <Figcaption>GULP</Figcaption>
          </CreateSkillsItem>
          <CreateSkillsItem>
            <img src={react} width={80} height={80} alt="React"></img>
            <Figcaption>React</Figcaption>
          </CreateSkillsItem>
        </CreateSkillsList>
      </CreateSkills>
  );
}
