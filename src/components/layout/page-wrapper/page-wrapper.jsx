import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import { StyledPageWrapper } from "./styles";

export function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <MainPage {...prop}  />
      <Footer />
    </>
  );
}
