import React, { useState } from "react";
import styled from "styled-components";

const PopupItem = ({ content }) => {
  return (
    <PopupDiv>
      <p>팝업</p>
      {content}
    </PopupDiv>
  );
};

export default PopupItem;

const PopupDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: #fff;
  border-radius: 6vw 6vw 0 0;
`;
