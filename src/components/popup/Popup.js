import { useState } from 'react';
import { popupState } from '@state/popup/atom/popupState';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import PopupItem from './PopupItem';
import usePopup from '@hooks/usePopup';

const Popup = () => {
    const popups = useRecoilValue(popupState);
    const { removePopup } = usePopup();

    const closeHandler = (id) => {
        removePopup(id);
    };

    return (
        <>
            {popups?.list?.map((popup) => (
                <Dimmed visible={popups?.visible} onClick={() => closeHandler(popup.id)}>
                    <PopupItem key={popup.id} {...popup} />
                </Dimmed>
            ))}
        </>
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
    display: ${(props) => (props.visible ? 'block' : 'none')};
    z-index: 1000;
`;
