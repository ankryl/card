import React from "react";
import Education from "../../blocks/education/education";
import Skills from "../../blocks/skills/skills";
import Portfolio from "../../blocks/portfolio/portfolio";
import Present from "../../blocks/present/present";

export default function MainPage() {
    return (
        <>
            <Present />
            <Education />
            <Skills />
            <Portfolio />
        </>
    );
}
