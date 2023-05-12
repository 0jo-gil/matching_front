import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeOut } from '../../common/styled/common';
import { fadeIn } from './../../common/styled/common';

const ToastItem = ({ content, bottom, duration, type }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (type === 'login') return;

        const setExistTimeout = setTimeout(() => {
            setIsClosing(true);
            clearTimeout(setExistTimeout);
        }, duration ?? 1000);

        return () => clearTimeout(setExistTimeout);
    }, []);

    return (
        <ToastDiv bottom={bottom} isClosing={isClosing}>
            {content}
        </ToastDiv>
    );
};

export default ToastItem;

const ToastDiv = styled.div`
    position: fixed;
    background-color: rgb(0, 0, 0, 0.5);
    height: 40px;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: white;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    bottom: ${({ bottom }) => bottom ?? 26}px;
    left: 50%;
    transform: translateX(-50%);
    animation: 0.3s forwards ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)};
`;
