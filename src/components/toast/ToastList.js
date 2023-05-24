import React from 'react';
import { toastState } from '@state/toast/atom/toast';
import ToastItem from './ToastItem';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const ToastList = () => {
    const toasts = useRecoilValue(toastState);

    return (
        <ToastWrap>
            {toasts.map((toast) => (
                <ToastItem key={toast.id} {...toast} />
            ))}
        </ToastWrap>
    );
};

export default ToastList;

const ToastWrap = styled.div`
    position: relative;
    z-index: 1000;
`;
