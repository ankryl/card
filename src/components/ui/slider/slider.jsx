import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import {
  StyledSlider,
  StyledButton,
  SlyderWrapper,
  StyledImg,
} from "./styles.js";
import DIPLOM from "../../../mock.js";

export default function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <SlyderWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
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

      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
    </SlyderWrapper>
  );
}
