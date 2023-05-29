import styled, { keyframes } from "styled-components";

export const SWrap = styled.div`
  padding: 0 3%;
`;

export const SPageTitle = styled.h2`
  font-size: 16px;
  color: #000;
  font-weight: 700;
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
