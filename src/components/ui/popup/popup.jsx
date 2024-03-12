import React, { useEffect } from "react";
import Slider from "../slider/slider";
import { WrapperPopup, Close, StyledImg} from "./styles";
import exit from "../../../assets/exit.svg";

export default function PopUp({ isShow, onClose}) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);
  return isShow ? (
    <WrapperPopup>
      <Close onClick={onClose}>
        <StyledImg src={exit} width={20} height={20}/>
      </Close>
      <Slider />
    </WrapperPopup>
  ) : null;
}
