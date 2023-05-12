import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/user/atoms/userState';

const Main = lazy(() => import('../../page/main/Main'));
const Login = lazy(() => import('../../page/login/Login'));
const Chat = lazy(() => import('../../page/chat/Chat'));

const PageRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    );
};

export default PageRouter;
