import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import arrowLeft from "../../../assets/arrow-left-solid.svg";
import arrowRight from "../../../assets/arrow-right-solid.svg";
import {
    StyledSlider,
    StyledButton,
    SlyderWrapper,
    StyledImg,
    StyledIconImg,
} from "./styles.js";
import DIPLOM from "../../../mock.js";

export default function Slider() {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <SlyderWrapper>
            <StyledButton left ref={navigationPrevRef} title="Назад">
                <StyledIconImg src={arrowLeft} />
            </StyledButton>
            <StyledButton
                right
                ref={navigationNextRef}
                title="Вперёд"
                style={{
                    order: 1,
                }}
            >
                <StyledIconImg src={arrowRight} />
            </StyledButton>
            <StyledSlider
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
            >
                {DIPLOM &&
                    DIPLOM.length &&
                    DIPLOM.map((item) => (
                        <SwiperSlide key={item}>
                            <StyledImg
                                src={item.image}
                                alt="изображение продукта"
                                width="800"
                                height="564"
                                maxWidth="800"
                            />
                        </SwiperSlide>
                    ))}
            </StyledSlider>
        </SlyderWrapper>
    );
}
