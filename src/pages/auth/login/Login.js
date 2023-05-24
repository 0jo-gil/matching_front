import React, { useEffect } from 'react';
import FormInput from '@components/formInput/FormInput';

import { useRecoilState } from 'recoil';
import { loginFormState, loginState } from '@state/user/atoms/userState';
import { PostSignin } from '@services/user/userApi';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [loginFormValue, setLoginFormValue] = useRecoilState(loginFormState);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn?.accessToken === '') return;
        navigate('/');
    }, [isLoggedIn?.accessToken]);

    const onSubmitHandler = async () => {
        const result = await PostSignin(loginFormValue)
            .then((res) => {
                setIsLoggedIn((prev) => ({
                    ...prev,
                    ...res,
                    loginState: true,
                }));
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <FormInput name="email" label={'아이디'} onChange={setLoginFormValue} />
            <FormInput name="password" label={'패스워드'} onChange={setLoginFormValue} />

            <Link to="/auth/signup">회원가입</Link>
            <button onClick={onSubmitHandler}>제출</button>
        </div>
    );
}

export default Login;