import { useState } from "react";
import { popupState } from "@store/popup/atom/popupState";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import PopupItem from "./PopupItem";

const Popup = () => {
  const popups = useRecoilValue(popupState);
  const [isClosing, setIsClosing] = useState(true);

  return (
    <Dimmed isClosing={isClosing}>
      {popups?.map((popup) => (
        <PopupItem key={popup.id} {...popup} />
      ))}
    </Dimmed>
  );
};

export default Popup;

const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.isClosing ? "none" : "block")};
  z-index: 1000;
`;
