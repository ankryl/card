import React, { useEffect } from "react";
import Slider from "../slider/slider";
import { WrapperPopup, Close } from "./styles";
import hidenav from "../../../assets/hidenav.svg";

export default function PopUp({ isShow, onClose, content }) {
  const handlerEsc = (evt) => {
    if (evt.keyCode === 27) {
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
        <img src={hidenav} />
      </Close>
      <Slider />
    </WrapperPopup>
  ) : null;
}
