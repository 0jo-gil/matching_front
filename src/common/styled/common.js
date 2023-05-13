import styled, { keyframes } from "styled-components";

export const PageTitle = styled.div`
  font-size: 20px;
  color: #000;
`;

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
