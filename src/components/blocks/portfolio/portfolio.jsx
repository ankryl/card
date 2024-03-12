import React from "react";
import keksoBooking from "../../../assets/keksoBooking.png";
import catEnergy from "../../../assets/catEnergy.png";
import fermStore from "../../../assets/fermStore.png";
import { H1 } from "../../ui/elements";
import github from "../../../assets/github.svg";
import {
    PortfolioWrapper,
    PortfolioList,
    PortfolioItem,
    FigcaptionWrapper,
    PortfolioFigcaption,
    Image,
    LinkGit,
} from "./styles.js";

export default function Portfolio() {
    return (
        <PortfolioWrapper id="portfolio">
            <H1 id="portfolio">Портфолио</H1>
            <PortfolioList>
                <PortfolioItem>
                    <Image src={catEnergy} width={673} height={373} />
                    <FigcaptionWrapper>
                        <PortfolioFigcaption
                            href="https://ankryl.github.io/catenergy/"
                            target="_blank"
                        >
                            Cat Energy
                        </PortfolioFigcaption>
                        <LinkGit
                            href="https://github.com/ankryl/catenergy"
                            target="_blank"
                        >
                            <img
                                src={github}
                                alt="GitHub"
                                height={18}
                                width={18}
                            />
                        </LinkGit>
                    </FigcaptionWrapper>
                </PortfolioItem>
                <PortfolioItem>
                    <Image src={keksoBooking} width={673} height={373} />
                    <FigcaptionWrapper>
                        <PortfolioFigcaption href="https://ankryl.github.io/keksobooking/" target="_blank">
                            Keksobooking
                        </PortfolioFigcaption>
                        <LinkGit
                            href="https://github.com/ankryl/keksobooking"
                            target="_blank"
                        >
                            <img
                                src={github}
                                alt="GitHub"
                                height={18}
                                width={18}
                            />
                        </LinkGit>
                    </FigcaptionWrapper>
                </PortfolioItem>
                <PortfolioItem>
                    <Image src={fermStore} width={673} height={373} />
                    <FigcaptionWrapper>
                        <PortfolioFigcaption
                            href="https://ankryl.github.io/fermstore/"
                            target="_blank"
                        >
                            Ferm store
                        </PortfolioFigcaption>
                        <LinkGit
                            href="https://github.com/ankryl/fermstore"
                            target="_blank"
                        >
                            <img
                                src={github}
                                alt="GitHub"
                                height={18}
                                width={18}
                            />
                        </LinkGit>
                    </FigcaptionWrapper>
                </PortfolioItem>
            </PortfolioList>
        </PortfolioWrapper>
    );
}
