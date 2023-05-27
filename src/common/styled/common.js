import styled, { keyframes } from 'styled-components';

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

// nav tab
export const STabWrap = styled.div`
    width: 100%;
    display: flex;
`;

export const STabList = styled.div`
    flex: 1;
    text-align: center;
    border-bottom: ${(props) => props.isActive && '3px solid #000'};
    padding: 10px 0;
`;
