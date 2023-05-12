import React from 'react';
import { toastState } from '../../recoil/toast/atom/toast';
import ToastItem from './ToastItem';
import { useRecoilValue } from 'recoil';

const ToastList = () => {
    const toasts = useRecoilValue(toastState);

    return (
        <div>
            {toasts.map((toast) => (
                <ToastItem key={toast.id} {...toast} />
            ))}
        </div>
    );
};

export default ToastList;
