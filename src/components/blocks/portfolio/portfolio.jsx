import React from "react";
import keksoBooking from "../../../assets/keksoBooking.png";
import catEnergy from "../../../assets/catEnergy.png";
import fermStore from "../../../assets/fermStore.png";
import { H1 } from "../../ui/elements";
import {
  CreatePortfolio,
  CreatePortfolioList,
  CreatePortfolioWrapper,
  CreatePortfolioItem,
  CreatePortfolioFigcaption,
  CreateImage,
} from "./styles.js";

export default function Portfolio() {
  return (
    <CreatePortfolioWrapper id="portfolio">
      <CreatePortfolio>
        <H1 id="portfolio">Портфолио</H1>
        <CreatePortfolioList>
          <CreatePortfolioItem>
            <CreateImage src={catEnergy} width={673} height={373}/>
            <CreatePortfolioFigcaption  href="https://ankryl.github.io/petCatEnergy/" target="_blank">Cat Energy</CreatePortfolioFigcaption>
          </CreatePortfolioItem>
          <CreatePortfolioItem>
              <CreateImage src={keksoBooking}/>
            <CreatePortfolioFigcaption>Keksobooking</CreatePortfolioFigcaption>
          </CreatePortfolioItem>
          <CreatePortfolioItem>
            <CreateImage src={fermStore}/>
            <CreatePortfolioFigcaption href="https://73n1c.csb.app/">Ferm store</CreatePortfolioFigcaption>
          </CreatePortfolioItem>
        </CreatePortfolioList>
      </CreatePortfolio>
    </CreatePortfolioWrapper>
  );
}
