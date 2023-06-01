import styled, { keyframes } from "styled-components";

export const SWrap = styled.div`
  padding: 0 3%;
`;

export const SPageTitle = styled.h2`
  font-size: 16px;
  color: #000;
  font-weight: 700;
`;

export const SPagSubTitle = styled.h3`
  font-size: 16px;
  color: #000;
  font-weight: 700;
  margin-bottom: 10px;
`;

// nav tab
export const STabWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const STabList = styled.div`
  flex: 1;
  text-align: center;
  border-bottom: ${(props) => props.isActive && "3px solid #000"};
  padding: 10px 0;
`;

export const SFlexBox = styled.div`
  display: flex;
`;
export const SColFlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const SInlineBoxWrap = styled.div`
  > div {
    display: inline-block;
  }
`;

// animation
export const fadeIn = keyframes`
from {
    opacity: 0;
}

to {
    opacity: 1;
}
`;

export const fadeOut = keyframes`
from {
    opacity: 1;
}

to {
    opacity: 0;
}
`;
