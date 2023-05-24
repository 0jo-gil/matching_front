import React, { useEffect } from 'react';
import useToast from '@hooks/useToast';
import { Link, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '@state/user/atoms/userState';
import usePopup from '@hooks/usePopup';
import useTab from './../../hooks/useTab';

const mainTabList = [
    {
        title: '홈',
        link: '/main/home',
    },
    {
        title: '신규',
        link: '/main/new',
    },
    {
        title: '인기',
        link: '/main/popular',
    },
];

const Main = () => {
    const { firedToast } = useToast();
    const { showPopup } = usePopup();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
    const { currentItem, changeItem } = useTab(0, mainTabList);

    useEffect(() => {
        if (isLoggedIn?.loginState) return;

        firedToast({
            content: <Link to="/auth/login">가입 / 로그인하기</Link>,
            type: 'login',
        });
    }, [isLoggedIn?.loginState]);

    const popupHandler = () => {
        showPopup({
            content: <Link to="/post/write">글쓰기</Link>,
        });
    };

    const logoutHandler = () => {
        setIsLoggedIn({
            email: '',
            name: '',
            nickname: '',
            profileImageUrl: '',
            accessToken: '',
            loginState: false,
        });
    };

    return (
        <div>
            <h1>MAIN</h1>
            <ul className="tab-wrap">
                {mainTabList?.map((list, index) => (
                    <li className={list.title === currentItem.title && 'active'} key={index} onClick={() => changeItem(index, list.link)}>
                        <Link to={list.link}>{list.title}</Link>
                    </li>
                ))}
            </ul>

            <Outlet />

            <button onClick={popupHandler}>글쓰기</button>
            <button onClick={logoutHandler}>로그아웃</button>
        </div>
    );
};

export default Main;
