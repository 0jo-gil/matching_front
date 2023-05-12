import React, { useEffect } from 'react';
import useToast from './../../common/hooks/useToast';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/user/atoms/userState';

const Main = () => {
    const { firedToast } = useToast();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

    useEffect(() => {
        if (isLoggedIn?.loginState) return;

        firedToast({ content: <Link to="/login">가입 / 로그인하기</Link>, type: 'login' });
    }, [isLoggedIn?.loginState]);

    return (
        <div>
            <h1>MAIN</h1>
        </div>
    );
};

export default Main;
