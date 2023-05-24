import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('@pages/auth/login/Login'));
const SignUp = lazy(() => import('@pages/auth/signup/SignUp'));
const SignUpComplete = lazy(() => import('@pages/auth/signup/SignUpComplete'));
const MyPage = lazy(() => import('@pages/auth/mypage/MyPage'));

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="complete" element={<SignUpComplete />} />
                <Route path="mypage" element={<MyPage />} />
            </Route>
        </Routes>
    );
};

export default AuthRouter;
